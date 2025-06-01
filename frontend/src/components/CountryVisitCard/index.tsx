import React from 'react'
import email from "../../assests/Images/email.png";
import visitbg from "../../assests/Images/visitbg.png";
// import wallet from "../../assests/Images/waallet.png";

import { useStyles } from "../../Styles";

import dubai from "../../assests/Images/dubai.png";
import london from "../../assests/Images/london.png";
import { Grid, Box , Typography } from '@mui/material';
import "../../font.css/index.css"

function Index() {
    const classes = useStyles();

    const VisitCard = [
        {
            Countrylogo: dubai,
            name: "Dubai",
            emaillogo: email,
            email: "contact@flash-transfer.com",
        },
        {
            Countrylogo: london,
            name: "Paris Soon ...",
            emaillogo: email,
            email: "contact@flash-transfer.com",
        },
        {
            Countrylogo: london,
            name: "London Soon ...",
            emaillogo: email,
            email: "contact@flash-transfer.com",
        },
    ];
    const VisitCard2 = [
        {
            Countrylogo: london,
            name: "Doha Soon ...",
            emaillogo: email,
            email: "contact@flash-transfer.com",
        },
        {
            Countrylogo: london,
            name: "Singapor Soon ...",
            emaillogo: email,
            email: "contact@flash-transfer.com",
        },
        {
            Countrylogo: london,
            name: "Honk Kong Soon ...",
            emaillogo: email,
            email: "contact@flash-transfer.com",
        },
    ];

    return (
        <Grid
            container
            sx={{
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(${visitbg})`,
                backgroundColor: "#F7FDFF",
            }}
        >
            <Grid
                item
                md={5}
                xs={11}
                sx={{
                    marginBottom: "30px",
                    marginTop: "80px",
                    display: "flex",
                    justifyContent: "center ",
                    flexDirection: "column ",
                }}
            >
                <Typography className={classes.man_tms}>
                    Visit our offices around the world
                </Typography>
                <Typography className={classes.team_Des}>
                    A short paragraph describing your team. You may want to describe
                    what they are responsible for
                </Typography>
            </Grid>
            <Grid
                mt={2}
                item
                xs={11.5}
                md={12}
                sx={{
                    marginBottom: "56px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: { md: "row", xs: "column" },
                }}
            >
                {VisitCard.map((i) => {
                    return (
                        <Grid m={1} item md={3.3} xs={12} className={classes.visit_Card}>
                            <Box className={classes.visit_card_container}>
                                <Box className={classes.contry_N} >
                                    <img
                                        src={i.Countrylogo}
                                        style={{
                                            // marginTop:"10px",
                                        //     width: "32px",
                                        //     height: "32px",
                                            marginRight: "4px",
                                        }}
                                        alt="logo"
                                    />
                                    <Typography className={classes.Cont_name}>
                                        {i.name}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    mt: "24px",
                                    // padding: "10px",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    display: "flex",
                                    alignItems: "center",
                                    background: "#FFFFFF",
                                    boxShadow:
                                        "8px 8px 30px 10px background: rgba(255, 255, 255, 1)",
                                    borderRadius: "24px",
                                }}
                            >
                                <img
                                    src={i.emaillogo}
                                    style={{
                                        width: "20px",
                                        height: "16px",
                                        marginRight: "10px",
                                    }}
                                    alt="logo"
                                />
                                <Typography className={classes.Emaail}>{i.email}</Typography>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
            <Grid
                // mt={2}
                item
                xs={11.5}
                md={12}
                sx={{
                    marginBottom: "80px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: { md: "row", xs: "column" },
                }}
            >
                {VisitCard2.map((i) => {
                    return (
                        <Grid m={1} item md={3.3} xs={12} className={classes.visit_Card}>
                            <Box className={classes.visit_card_container}>
                                <Box className={classes.contry_N} >
                                    <img
                                        src={i.Countrylogo}
                                        style={{
                                            // marginTop:"10px",
                                        //     width: "32px",
                                        //     height: "32px",
                                            marginRight: "4px",
                                        }}
                                        alt="logo"
                                    />
                                    <Typography className={classes.Cont_name}>
                                        {i.name}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    mt: "24px",
                                    // padding: "10px",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    display: "flex",
                                    alignItems: "center",
                                    background: "#FFFFFF",
                                    boxShadow:
                                        "8px 8px 30px 10px background: rgba(255, 255, 255, 1)",
                                    borderRadius: "24px",
                                }}
                            >
                                <img
                                    src={i.emaillogo}
                                    style={{
                                        width: "20px",
                                        height: "16px",
                                        marginRight: "10px",
                                    }}
                                    alt="logo"
                                />
                                <Typography className={classes.Emaail}>{i.email}</Typography>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Grid>
    )
}

export default Index