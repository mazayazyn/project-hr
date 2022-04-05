import React from "react";
import { Box, Grid, ThemeProvider, Container } from "@mui/material";
import HeaderCreateProfile from "../components/header/HeaderCreateProfile";
import Core from "../components/form/ProfileForm/Core";
import theme from "../theme/Theme"

function JobListPage() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <HeaderCreateProfile> </HeaderCreateProfile>
                <br />
                <Container fixed>
                    <Grid align="center">
                        <Grid align="left" item xs={10}>
                            <Core></Core>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default JobListPage;
