import { Box, Grid, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import { useStyles } from "../../Styles";
import CallIcon from "@mui/icons-material/Call";
import email from "../../assests/Images/email.png";
import visitbg from "../../assests/Images/visitbg.png";
import C2 from "../../assests/Images/corner1.png";
import C1 from "../../assests/Images/corner2.png";
import "../../font.css/index.css"

import dubai from "../../assests/Images/dubai.png";
import london from "../../assests/Images/london.png";
import EmailIcon from "@mui/icons-material/Email";
import VisitUs from "../../components/VisitUs";
import SearchMap from "../../components/SearchMap";
import ContactUsForm from "../../components/ContactUsForm";
import VisitOffice from "../../components/VisitOffice";
import { useState } from "react";

const ContactUs = () => {
  
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError]: any = useState(false);
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
    <>
      <Layout>
        <Grid container className={classes.contact_us_container_1}>
          <Grid container sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" }, display: "flex", justifyContent: "space-between" }}>

            <Grid item xs={12} md={5.5} >
              <Box marginLeft="10px" className={classes.contact_form_container}>
                <Typography className={classes.contact_us_text}>
                  Contact Us
                </Typography>
                <Typography className={classes.contact_us_text_description}>
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                  volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </Typography>
                <Typography className={classes.address_description}>
                  742 Evergreen Terrace <br />
                  Springfield, OR 12345
                </Typography>
                <Typography className={classes.address_description}>
                  <CallIcon
                    sx={{ verticalAlign: "bottom", marginRight: "15px" }}
                  />{" "}
                  +1 (555) 123-4567
                </Typography>
                <Typography className={classes.address_description}>
                  <EmailIcon
                    sx={{ verticalAlign: "bottom", marginRight: "15px" }}
                  />
                  support@example.com
                </Typography>
                <Typography className={classes.address_description}>
                  Looking for careers?{" "}
                  <a style={{ color: "#000" }}>View all job openings.</a>
                </Typography>
              </Box >
              <Box sx={{ m: "-120px 0px 0px 0px", display: { lg: "flex", xs: "none" } }}>

                <img src={C2} />
              </Box>
            </Grid>

            {/* form grid */}
            <Grid item xs={12} md={6} >


              <ContactUsForm />

            </Grid>
          </Grid>
        </Grid>

        <VisitUs />
        <SearchMap />
        <Grid sx={{ backgroundColor: "#F7FDFF", }}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundImage: `url(${visitbg})`,
              backgroundRepeat: "no-repeat",
              transform: { lg: "scale(0.9)", xs: "scale(none)" },

              backgroundPosition: "center",
              backgroundSize: "90%", backgroundColor: "#F7FDFF",

            }}
          >
            <Grid
              item
              md={5.5}
              xs={11.5}
              sx={{
                marginTop: { lg: "80px", xs: "20px" },
                display: "flex",
                alignItems: "center",
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
              md={12}
              item
              sx={{
                transform: { lg: "scale(0.87)", xs: "scale(0.9)" },
                margin: { lg: "56px 0px", xs: "0px 0px" },
                display: "flex",
                justifyContent: "center",
                flexDirection: { md: "row", xs: "column" },
              }}
            >
              {VisitCard.map((i) => {
                return (
                  <Grid item sx={{ m: { lg: "0px 20px", xs: "10px 0px" } }} md={4} xs={12} className={classes.visit_Card}>
                    <Box className={classes.visit_card_container}>
                      <Box className={classes.contry_N} >
                        <img
                          src={i.Countrylogo}
                          style={{
                            width: "32px",
                            height: "32px",
                            marginRight: "20px",
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
                          marginRight: "14px",
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
              md={12}
              item
              sx={{

                transform: { lg: "scale(0.87)", xs: "scale(0.9)" },
                margin: { lg: "0px 0px 63px 0px", xs: "0px 0px 0px 0px" },
                display: "flex",
                justifyContent: "center",
                flexDirection: { md: "row", xs: "column" },


              }}
            >
              {VisitCard2.map((i) => {
                return (
                  <Grid sx={{ m: { lg: "0px 20px", xs: "10px 0px" } }} item md={4} xs={12} className={classes.visit_Card}>
                    <Box className={classes.visit_card_container}>
                      <Box className={classes.contry_N} >
                        <img
                          src={i.Countrylogo}
                          style={{
                            width: "32px",
                            height: "32px",
                            marginRight: "20px",
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
                          marginRight: "14px",
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
        </Grid>
        {/* <VisitOffice /> */}
      </Layout>
    </>
  );
};

export default ContactUs;
