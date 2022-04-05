import {
    Button,
    Box,
    Container,
    Grid,
    TextField,
    Typography,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
} from "@mui/material";
import React from "react";

export default function Core() {

    const [degree, setDegree] = React.useState('');

    const handleChange = (event) => {
        setDegree(event.target.value);
    };

    return (
        <>
            <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
                py="10vh"
            >

                <Container maxWidth="md">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                id="2"
                                label="School"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Degree</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={degree}
                                        label="Degree"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Bachelor's Degree</MenuItem>
                                        <MenuItem value={20}>Master's Degree</MenuItem>
                                        <MenuItem value={30}>Doctor's Degree</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="2"
                                label="Field of study"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="2"
                                label="Description"
                                fullWidth
                                rows={3}
                                multiline
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="date"
                                label="Start Date"
                                type="date"
                                defaultValue="YY-MM-DD"
                                sx={{ width: 423 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                                fullWidth/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="date"
                                label="End Date"
                                type="date"
                                defaultValue="YY-MM-DD"
                                sx={{ width: 423 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={12} justifyContent="flex-end">
                            <Button variant="contained">Save</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>
    );
}