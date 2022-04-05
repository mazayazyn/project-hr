import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container, Paper, Button, Box} from '@material-ui/core';
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function Core() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[namaKandidat,setNamaKandidat]=useState('')
    const[noTelp,setNoTelp]=useState('')
    const[about,setAbout]=useState('')
    const[appliedStatus,setAppliedStatus]=useState('')
    const[currentSalary,setCurrentSalary]=useState('')
    const[dateOfBirth,setDateOfBirth]=useState('')
    const[jobLevel,setJobLevel]=useState('')
    const[jobPosition,setJobPosition]=useState('')
    const[yearExperience,setYearExperience]=useState('')
    const[readProfile, setReadProfile]=useState([])
    const classes = useStyles();

    const handleClick=(e)=> {
        e.preventDefault()
        const kandidat = {namaKandidat, noTelp, about, appliedStatus, currentSalary, dateOfBirth, jobLevel, jobPosition,yearExperience}
        console.log(kandidat)
        fetch("http://localhost:8080/profile/add-core", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(kandidat)

        }).then(() => {
            console.log("New Profile added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/profile/getAll")
            .then(res=>res.json())
            .then((result)=>{
                    setReadProfile(result);
                }
            )
    },[])

    return (
        <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
            py="10vh"
        >
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Typography component="h1" variant="h7" mb={3} alignItems="center"
                            display="flex"
                            flexDirection={"column"}
                            justifyContent="center"
                >
                    Core Form
                </Typography>

                <form className = {classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth
                               value={namaKandidat}
                               onChange={(e)=>setNamaKandidat(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Telephone Number" variant="outlined" fullWidth
                               value={noTelp}
                               onChange={(e)=>setNoTelp(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="About" variant="outlined" fullWidth
                               value={about}
                               onChange={(e)=>setAbout(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Applied Status" variant="outlined" fullWidth
                               value={appliedStatus}
                               onChange={(e)=>setAppliedStatus(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Job Level" variant="outlined" fullWidth
                               value={jobLevel}
                               onChange={(e)=>setJobLevel(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Job Position" variant="outlined" fullWidth
                               value={jobPosition}
                               onChange={(e)=>setJobPosition(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Years of Experience" variant="outlined" fullWidth
                               value={yearExperience}
                               onChange={(e)=>setYearExperience(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Current Salary" variant="outlined" fullWidth
                               value={currentSalary}
                               onChange={(e)=>setCurrentSalary(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Date of Birth" variant="outlined" fullWidth
                               value={dateOfBirth}
                               onChange={(e)=>setDateOfBirth(e.target.value)}
                    />

                    <Button variant="contained" onClick={handleClick} >
                        <Link to = {
                            {
                                pathname : `/profile`,
                            }
                        }>Save</Link>
                    </Button>

                </form>
            </Paper>
        </Container>
        </Box>
    );
}