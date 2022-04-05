import React, { useEffect, useState } from 'react';
import {Container, Button, Box} from '@material-ui/core';
import {Card, Grid, CardActions, CardContent, Typography, TextField} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import HeaderJob from "../../header/HeaderJob";
import EditIcon from '@mui/icons-material/Edit';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function Kandidat() {

    const {id}= useParams()
    console.log('idKandidat', id)

    const [readProfile, setReadProfile] = useState([])
    const [openField, setOpenField] = useState(false)
    const [statusMsg, setStatusMsg] = useState('')

    const handleClick=(e)=> {
        e.preventDefault()
        const newField = {
            namaKandidat: '',
            noTelp: '',
            about: '',
            appliedStatus: '',
            currentSalary: '',
            dateOfBirth: '',
            jobLevel: '',
            jobPosition: '',
            yearExperience: ''
        }

        fetch("http://localhost:8080/profile/add-core", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newField)

        }).then(() => {
            console.log("New Profile added")
        })

    }

    useEffect(()=>{
        fetch("http://localhost:8080/profile/" + id)
            .then(res=>res.json())
            .then((result)=>{
                    setReadProfile(result);
                }
            )
    },[])

    const saveKandidat = () => {
        fetch("http://localhost:8080/profile/update/" + id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                ...readProfile,
                id,
            })
        }).then(() => {
            setStatusMsg("Congrats! Kandidat updated for ID: " + id)
        }).catch(() => {
            setStatusMsg("Failed to update Profile")
        })

        // Close field
        setOpenField(false)
    }

    return (
        <>

        <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
            py="10vh"
        >

            <Container mb={12}>

                <div>
                    {statusMsg}
                </div>

                <CardActions>
                    <Button variant="contained" onClick={handleClick} >
                        <Link to = {
                            {
                                pathname : `/profile/create-profile`,
                            }
                        }>Create Profile</Link>
                    </Button>

                    {!openField && (
                        <Button variant="contained" onClick={() => {
                            setOpenField(true)
                            setStatusMsg('')
                        }} >
                            Edit Core Profile
                        </Button>
                    )}

                    {openField && (
                        <Button variant="contained" onClick={saveKandidat} >
                            Save Core
                        </Button>
                    )}
                </CardActions>

                <Card sx={{ minWidth: 900, margin: 1, maxWidth: 1000 }}>

                    <CardContent>

                        <h4> Name </h4>
                        <Typography variant="body2">
                            <TextField
                                id="namaKandidat-textfield"
                                variant="outlined"
                                value={readProfile.namaKandidat}
                                sx={{ width: 750 }}
                                onChange={(e) => {
                                    setReadProfile({
                                        ...readProfile,
                                        namaKandidat: e.target.value,
                                    })
                                }}
                                disabled={!openField}
                            />
                        </Typography>

                        <h4> About Me </h4>
                        <Typography variant="body2">
                            <TextField
                                id="about-textfield"
                                variant="outlined"
                                value={readProfile.about}
                                sx={{ width: 750 }}
                                onChange={(e) => {
                                    setReadProfile({
                                        ...readProfile,
                                        about: e.target.value,
                                    })
                                }}
                                disabled={!openField}
                            />
                        </Typography>

                        <h4> Contact Me </h4>
                        <Typography variant="body2">
                            <TextField
                                id="noTelp-textfield"
                                variant="outlined"
                                value={readProfile.noTelp}
                                sx={{ width: 750 }}
                                onChange={(e) => {
                                    setReadProfile({
                                        ...readProfile,
                                        noTelp: e.target.value,
                                    })
                                }}
                                disabled={!openField}
                            />
                        </Typography>

                        <h4> Date of Birth </h4>
                        <Typography variant="body2">
                            <TextField
                                id="dateOfBirth-textfield"
                                variant="outlined"
                                value={readProfile.dateOfBirth}
                                sx={{ width: 750 }}
                                onChange={(e) => {
                                    setReadProfile({
                                        ...readProfile,
                                        dateOfBirth: e.target.value,
                                    })
                                }}
                                disabled={!openField}
                            />
                        </Typography>

                        <h4> Years of Experience </h4>
                        <Typography variant="body2">
                            <TextField
                                id="yearExperience-textfield"
                                variant="outlined"
                                value={readProfile.yearExperience}
                                sx={{ width: 750 }}
                                onChange={(e) => {
                                    setReadProfile({
                                        ...readProfile,
                                        yearExperience: e.target.value,
                                    })
                                }}
                                disabled={!openField}
                            />
                        </Typography>

                        <h4> Current Salary </h4>
                        <Typography variant="body2">
                            <TextField
                                id="currentSalary-textfield"
                                variant="outlined"
                                value={readProfile.currentSalary}
                                sx={{ width: 750 }}
                                onChange={(e) => {
                                    setReadProfile({
                                        ...readProfile,
                                        currentSalary: e.target.value,
                                    })
                                }}
                                disabled={!openField}
                            />
                        </Typography>

                        <h4> Job Level </h4>
                        <Typography variant="body2">
                            <TextField
                                id="jobLevel-textfield"
                                variant="outlined"
                                value={readProfile.jobLevel}
                                sx={{ width: 750 }}
                                onChange={(e) => {
                                    setReadProfile({
                                        ...readProfile,
                                        jobLevel: e.target.value,
                                    })
                                }}
                                disabled={!openField}
                            />
                        </Typography>

                        <h4> Job Position </h4>
                        <Typography variant="body2">
                            <TextField
                                id="jobPosition-textfield"
                                variant="outlined"
                                value={readProfile.jobPosition}
                                sx={{ width: 750 }}
                                onChange={(e) => {
                                    setReadProfile({
                                        ...readProfile,
                                        jobPosition: e.target.value,
                                    })
                                }}
                                disabled={!openField}
                            />
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 1000, margin: 1, maxWidth: 600 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                            First Section
                        </Typography>
                        <Typography variant="h5" component="div">
                            <b>Work Experience</b>
                        </Typography>
                        <Card sx={{ minWidth: 850, margin: 1 }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    <b>Product Manager <EditIcon /><DeleteIcon /></b>
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Bukalapak Indonesia
                                </Typography>
                                <Typography variant="body2">
                                    Responsible for the product planning and execution throughout the Product Lifecycle, including: gathering and prioritizing product and customer requirements, defining the product vision, and working closely with engineering, sales, marketing and support to ensure revenue and customer satisfaction.
                                </Typography>
                                <Typography variant="body2">
                                    <b>Feb 2022 - May 2022</b>
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardContent>
                    <CardActions>
                        <Button size="small">
                            <Link to = {
                                {
                                    pathname : `/work-experience-form/`,
                                }
                            }>Add Work Experience</Link>
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 1000, margin: 1, maxWidth: 600 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                            Second Section
                        </Typography>
                        <Typography variant="h5" component="div">
                            <b>Education</b>
                        </Typography>
                        <Card sx={{ minWidth: 850, margin: 1 }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    <b>University of Indonesia <EditIcon /><DeleteIcon /></b>
                                </Typography>
                                <Typography  color="text.secondary">
                                    Bachelor's degree, Information System
                                </Typography>
                                <Typography variant="body2">
                                    Description
                                </Typography>
                                <Typography variant="body2">
                                    <b>Jan 2021 - Dec 2021</b>
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardContent>
                    <CardActions>
                        <Button size="small">
                            <Link to = {
                                {
                                    pathname : `/education-form/`,
                                }
                            }>Add Education</Link>
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 1000, margin: 1, maxWidth: 600 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                            Third Section
                        </Typography>
                        <Typography variant="h5" component="div">
                            <b>Skills</b>
                        </Typography>
                        <CardContent>
                            <Typography color="text.secondary">
                                Product Management <DeleteIcon />
                            </Typography>
                            <Typography  color="text.secondary">
                                Problem Solving <DeleteIcon />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">
                                <Link to = {
                                    {
                                        pathname : `/skills-form/`,
                                    }
                                }>Add Skills</Link>
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 1000, margin: 1, maxWidth: 600 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                            Fourth Section
                        </Typography>
                        <Typography variant="h5" component="div">
                            <b>Industry</b>
                        </Typography>
                        <CardContent>
                            <Typography color="text.secondary">
                                Product Manager <DeleteIcon />
                            </Typography>
                            <Typography  color="text.secondary">
                                Software Engineer <DeleteIcon />
                            </Typography>
                            <Typography color="text.secondary">
                                Data Scientist <DeleteIcon />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">
                                <Link to = {
                                    {
                                        pathname : `/industry-form/`,
                                    }
                                }>Add Industry</Link>
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 1000, margin: 1, maxWidth: 600 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                            Fifth Section
                        </Typography>
                        <Typography variant="h5" component="div">
                            <b>Curriculum Vitae</b>
                        </Typography>
                        <Grid justifyContent="flex-end" margin={2}>
                            <Button variant="contained"><AttachFileIcon />  Upload File</Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 1000, margin: 1, maxWidth: 600 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                            Sixth Section
                        </Typography>
                        <Typography variant="h5" component="div">
                            <b>Portfolio</b>
                        </Typography>
                        <Grid justifyContent="flex-end" margin={2}>
                            <Button variant="contained"><AttachFileIcon />  Upload File</Button>
                        </Grid>
                    </CardContent>
                </Card>

            </Container>
        </Box>
        </>
    );
}