import React from "react";
import { Box, Grid, Typography, Button, Card, CardContent, Container, CardActions, ThemeProvider } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkIcon from "@mui/icons-material/Work";
import { Link, useLocation, useParams } from "react-router-dom";
import theme from "../../theme/Theme";
import HeaderJob from "../header/HeaderJob";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function JobDetail(props) {
    let location = useLocation();
    console.log(location)
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <HeaderJob> </HeaderJob>
                <br />
                <Container fixed>
                    <Card align="left" variant="outlined">
                        <CardContent>
                            <Button
                                variant="contained"
                                startIcon={<ArrowBackIosNewIcon />}>
                                <Link to={`/listJob`} style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link>
                            </Button>
                            <br />
                            <br />
                            <Box>
                                <Grid container alignItems={"center"}>
                                    <Grid item xs>
                                        <Typography
                                            color="#454ADE"
                                            sx={{ fontWeight: 'bold', fontSize: 24 }}
                                        >
                                            {location.state.title}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: 16 }} >
                                            {location.state.industry}
                                        </Typography>
                                        <br />
                                        <Typography variant="inherit" sx={{ lineHeight: 2 }}>
                                            <LocationOnIcon fontSize="inherit" />
                                            {' '}
                                            {location.state.workingLocation}
                                            <br />
                                            <AttachMoneyIcon fontSize="inherit" />
                                            {' '}
                                            {`IDR ${location.state.startSalary} - ${location.state.endSalary}`}
                                            <br />
                                            <WorkIcon fontSize="inherit" />
                                            {' '}
                                            {`${location.state.yearsOfExperience} years of experience`}
                                            <br />
                                            <AccessAlarmIcon fontSize="inherit" />
                                            {' '}
                                            {`Closed on: ${location.state.closingDate}`}
                                        </Typography>
                                        <br />
                                        <Typography
                                            color="#454ADE"
                                            sx={{ fontWeight: 'bold', fontSize: 24 }}
                                        >
                                            Job Description
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {location.state.keyResponsibility}
                                        </Typography>
                                        <br />
                                        <Typography
                                            color="#454ADE"
                                            sx={{ fontWeight: 'bold', fontSize: 24 }}
                                        >
                                            Requirements
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {location.state.behaviouralCompetencies}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                        <CardActions >
                            <Grid item container direction="column" alignItems="flex-end" xs>
                            </Grid>
                            <Grid item mt={2}>
                                <Box>
                                    <Button variant="contained">Apply for Job</Button>
                                </Box>
                            </Grid>
                        </CardActions>
                    </Card>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default JobDetail;