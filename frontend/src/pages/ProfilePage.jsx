import React from "react";
import { Box, Grid, ThemeProvider, Container } from "@mui/material";
import HeaderProfile from "../components/header/HeaderProfile";
import Profile from "../components/form/ProfileForm/Profile";
import theme from "../theme/Theme"

function JobListPage() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <HeaderProfile> </HeaderProfile>
                <br />
                <Container fixed>
                    <Grid align="center">
                        <Grid align="left" item xs={10}>
                            <Profile></Profile>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default JobListPage;
