import React from "react";
import {Box, Grid, Typography, Button, Card, CardContent, CardActions} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkIcon from '@mui/icons-material/Work';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export default (props) => {
    return (
        <Card align = "left" variant="outlined">
            <CardContent>
                <Box>
                    <Grid container alignItems={"center"}>
                        <Grid item xs>
                            <Grid item container direction="column" alignItems="flex-end" xs>
                                <Typography variant="caption">
                                    <AccessAlarmIcon fontSize="small" /> {`${props.closedOn}`}
                                </Typography>
                            </Grid>
                            <Typography
                                color="#454ADE"
                                style={{ fontWeight: "bold" }} variant = "h5"
                            >
                                {props.title}
                            </Typography>
                            <Typography style={{ fontWeight: "bold" }} variant = "h6">
                                {props.industry}
                            </Typography>
                            <br />
                            <Typography variant="body2" component="p">
                                <LocationOnIcon fontSize="small"  /> {props.location}
                                <br />
                                <AttachMoneyIcon />
                                {props.salary}
                                <br />
                                <WorkIcon />
                                {props.years}
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
                        <Button variant="outlined">Detail</Button>
                    </Box>
                </Grid>
            </CardActions>
        </Card>
    );
};