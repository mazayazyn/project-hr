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
                                label="Title"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="2"
                                label="Company Name"
                                required
                                fullWidth
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
                        <Grid item xs={12}>
                            <TextField
                                id="2"
                                label="Description"
                                fullWidth
                                rows={3}
                                multiline
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


