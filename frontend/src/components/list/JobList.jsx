import React from "react";
import { Box, Button, Select, MenuItem, Input, Card, CardContent, Grid, Typography, CardActions } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";


const JobList = (props) => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get("api/list-vacancy").
            then(res => {
                // console.log(res.data)
                setJobs(res.data.result)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(jobs);

    const [filter, setFilter] = useState('');
    const searchText = (event) => {
        setFilter((event.target.value));
    }
    // console.warn(filter)
    let dataSearch = jobs.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

    const [jobSearch, setJobSearch] = useState({
        // location: "Jakarta",
        vacanciesStatus: 1,
    });

    const handleChange = (e) => {
        // e.persist();
        setJobSearch((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };

    console.log(jobSearch);

    return (
        <Grid align="center">
            <Grid align="left" item xs={10}>
                <section>
                    <Box>
                        <Box display="flex" justifyContent="space-between">
                            <Box>
                                <OutlinedInput
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    }
                                    size="small"
                                    variant="outlined"
                                    type="search"
                                    placeholder={"Search Anything"}
                                    value={filter}
                                    onChange={searchText.bind(this)}
                                />
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                {/*<Select onChange={handleChange} value={jobSearch.location} name="location">*/}
                                {/*    <MenuItem value={"All"}>All</MenuItem>*/}
                                {/*    <MenuItem value={"Jakarta"}>Jakarta</MenuItem>*/}
                                {/*    <MenuItem value={"Bandung"}>Bandung</MenuItem>*/}
                                {/*</Select >*/}
                                {/*<span></span>*/}
                                <Typography style={{ fontWeight: "bold", fontSize: 24 }}>Filter by:</Typography>
                                {' '}
                                <Select onChange={handleChange}
                                    value={jobSearch.vacanciesStatus}
                                    name="vacanciesStatus"
                                    size="small">
                                    <MenuItem value={1}>Job Open</MenuItem>
                                    <MenuItem value={4}>Job Closed</MenuItem>
                                </Select>
                                {/*<Button variant="outlined">Filter</Button>*/}
                            </Box>
                            {/*</Box>*/}
                        </Box>
                    </Box>
                    <br />

                    {dataSearch.map((item, index) => {
                        if (item.status === jobSearch.vacanciesStatus) {
                            return (
                                <Card align="left" variant="outlined" sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Box>
                                            <Grid container alignItems={"center"}>
                                                <Grid item xs>
                                                    <Grid item container direction="column" alignItems="flex-end"
                                                        xs>
                                                        <Typography variant="inherit">
                                                            <AccessAlarmIcon fontSize="inherit" />
                                                            {' '}
                                                            {`${item.closingDate}`}
                                                        </Typography>
                                                    </Grid>
                                                    <Typography
                                                        color="#454ADE"
                                                        sx={{ fontWeight: 'bold', fontSize: 24 }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                    <Typography sx={{ fontWeight: 'bold', fontSize: 16 }} >
                                                        {item.industry}
                                                    </Typography>
                                                    <br />
                                                    <Typography variant="inherit" sx={{ lineHeight: 2 }}>
                                                        <LocationOnIcon fontSize="inherit" />
                                                        {' '}
                                                        {item.workingLocation}
                                                        <br />
                                                        <AttachMoneyIcon fontSize="inherit" />
                                                        {' '}
                                                        {`IDR ${item.startSalary} - ${item.endSalary}`}
                                                        <br />
                                                        <WorkIcon fontSize="inherit" />
                                                        {' '}
                                                        {`${item.yearsOfExperience} years of experience`}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </CardContent>
                                    <CardActions>
                                        <Grid item container direction="column" alignItems="flex-end" xs>
                                        </Grid>
                                        <Grid item mt={2}>
                                            <Box>
                                                <Button
                                                    variant="contained">
                                                    <Link to={`/detail/${item.title}`}
                                                        style={{ color: 'inherit', textDecoration: 'none' }}
                                                        state={{
                                                            closingDate: item.closingDate,
                                                            title: item.title,
                                                            industry: item.industry,
                                                            workingLocation: item.workingLocation,
                                                            startSalary: item.startSalary,
                                                            endSalary: item.endSalary,
                                                            yearsOfExperience: item.yearsOfExperience,
                                                            keyResponsibility: item.keyResponsibility,
                                                            behaviouralCompetencies: item.behaviouralCompetencies,
                                                        }
                                                        }>Detail</Link>
                                                </Button>

                                            </Box>
                                        </Grid>
                                    </CardActions>
                                </Card>
                            )
                        }
                    })}

                </section>
            </Grid>
        </Grid>
    )
}

export default JobList;