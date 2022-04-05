import {
    Button,
    Box,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";

export default function Core() {

    return (
        <>
            <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
                py="10vh"
            >

                <Box sx={{ typography: 'ss' }}></Box>
                <Container maxWidth="md">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                id="2"
                                label="Add Skills"
                                required
                                fullWidth
                            />
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


