import React from "react";
import { Box, Grid, ThemeProvider, Container } from "@mui/material";
import HeaderJob from "../components/header/HeaderJob";
import JobList from "../components/list/JobList";
import theme from "../theme/Theme"

function JobListPage() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <HeaderJob> </HeaderJob>
                <br />
                <Container fixed>
                    <Grid align="center">
                        <Grid align="left" item xs={10}>
                            <JobList></JobList>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default JobListPage;
