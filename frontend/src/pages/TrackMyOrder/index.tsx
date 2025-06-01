import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "../../Styles";
import TrackTransferBg from "../../assests/Images/trackTransferbg.jpg";
import { Box } from "@mui/system";
import AppButton from "../../components/AppButton";
import sett from "../../assests/Images/sett.png";
// import CommonNav from "../../components/CommonNav";
import Layout from "../../components/Layout";

// import VisitCard from "../../components/CountryVisitCard";
import AppFooter from "../../components/AppFooter";
import CallIcon from "@mui/icons-material/Call";
import email from "../../assests/Images/email.png";
import visitbg from "../../assests/Images/visitbg.png";
import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import iconx from "../../assests/Images/IconX.png";
import "../../font.css/index.css"

import dubai from "../../assests/Images/dubai.png";
import london from "../../assests/Images/london.png";
import EmailIcon from "@mui/icons-material/Email";
import VisitUs from "../../components/VisitUs";
import SearchMap from "../../components/SearchMap";
import ContactUsForm from "../../components/ContactUsForm";
import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import AppInputFields from "../../components/AppInputFields";
import AnActiveaeroplane from "../../assests/Logo/inActiveaeroplane.svg";
import Activeaeroplane from "../../assests/Logo/Activeaeroplane.svg";
import Activeyellow1 from "../../assests/Logo/Activeyellow1.svg";
import Anactive2 from "../../assests/Logo/Anactive2.svg";
import VisitOffice from "../../components/VisitOffice";
import { Link } from "react-router-dom";

const TrackMyOrder = () => {
  const [Active, isActive] = useState(true);
  const [Active2, isActive2] = useState(false);
  const handleChange = () => {
    console.log("working");
    isActive(true);
    isActive2(false);
  };
  const handleChange2 = () => {
    console.log("working");
    isActive2(true);
    isActive(false);
  };
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
  const trackingFiled = (inputFiledText: any) => {
    return (
      <Box
        className={classes.tracking_number_container}>

        <Typography className={classes.tracking_number}>
          Enter Tracking Number
        </Typography>
        <Box sx={{ alignItems: "center", margin: "0px 0px 8px 0px", display: "flex", flexDirection: "row", border: "1px solid #6A6A6A", borderRadius: "6px" }}>

          <AppInputFields
            placeholder={inputFiledText}
            borderRadius="6px"
            fontSize={"16px"}
            padding="9px 13px"
            height="42px"
            fontWeight={"400"}
            lineHeight={"24"}
            color={"#6A6A6A"}
          // margin={"0px 0px 8px 0px"}

          />
          <Box>

            <img src={iconx} style={{ marginRight: "20px", height: "16px", width: "16px" }} />
          </Box>
        </Box>
        <Typography className={classes.warning_digits}>
          Enter 10-Digit tracking number
        </Typography>
        <img />
        <Link to="/findlocation" style={{ textDecoration: "none", width: "435px" }}>


          <Box sx={{
            display: { md: "flex", xs: "none" }
          }} className={classes.continue_container} >

            <AppButton
              textTransform="none"
              title={"Continue"}
              backgroundColor={"#FCBF07"}
              maxWidth={"435px"}
              padding={"17px 169px"}
              borderRadius={"6px"}
              color={"#fff"}
              fontSize={"20px"}
              fontWeight={"500"}
              lineHeight={"30px"}
              letterSpacing={"0.02em"}
              margin={"0px 0px 24px 0px"}
              className={classes.control_btn}
            />
          </Box>
          <Box sx={{
            display: { md: "none", xs: "flex" }
          }} className={classes.continue_container} >

            <AppButton
              textTransform="none"
              title={"Continue"}
              backgroundColor={"#FCBF07"}
              maxWidth={"435px"}
              padding={"17px 169px"}
              borderRadius={"6px"}
              color={"#fff"}
              fontSize={"14px"}
              fontWeight={"500"}
              lineHeight={"20px"}
              letterSpacing={"0.02em"}
              margin={"0px 0px 24px 0px"}
              className={classes.control_btn}
            />
          </Box>
        </Link >
      </Box >
    );
  };

  return (
    <>
      <Layout>

        {/* <CommonNav login2="Login" Signup2="Signup" priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" /> */}

        {/* <Layout> */}
        {/* section 1 */}
        <Grid
          container
          sx={{
            backgroundImage: `url(${TrackTransferBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: {md:"100%"},
            // marginBottom:"-30px",
            // height: { md: "100vh", xs: "500px" },
            backgroundPosition: { xs: "cover", md: "cover" },
          }}
          className={classes.p2_container_1}

        >
          <Grid >


            <Grid container xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item md={5} xs={12}>
                <Typography align="center" className={classes.track_transfer}>
                  Track a Transfer
                </Typography>
                <Typography align="center" className={classes.track_transfer_description}>
                  Home is behind, the world ahead and there are many paths to
                  tread through shadows to the edge.
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{
                transform: { lg: "scale(0.9)", xs: "scale(none)" },
              }}>
                <Box className={classes.button_conditional_container}>
                  <AppButton
                    textTransform="none"
                    title={"I’m the sender"}
                    //   isActive
                    backgroundColor={Active ? "#5E5E5E" : "#000"}
                    color={Active ? "#fff" : "#6A6A6A"}
                    padding={"21px 0px"}
                    className={classes.btn_tracking}
                    onClick={() => handleChange()}
                    startIcon={
                      Active ? (
                        <img
                          src={Activeyellow1}
                          alt={"image"}
                          className={classes.btn_icon_H}
                        />
                      ) : (
                        <img
                          src={AnActiveaeroplane}
                          alt={"image"}
                          className={classes.btn_icon_H}
                        />
                      )
                    }
                  />
                  <AppButton

                    title={"I’m the Reciever"}
                    backgroundColor={Active2 ? "#5E5E5E" : "#000"}
                    color={Active2 ? "#fff" : "#6A6A6A"}
                    className={classes.btn_tracking}
                    textTransform="none"
                    onClick={() => handleChange2()}
                    startIcon={
                      Active2 ? (
                        <img
                          src={Activeaeroplane}
                          alt={"image"}
                          className={classes.btn_icon_H}
                        />
                      ) : (
                        <img
                          src={Anactive2}
                          alt={"image"}
                          className={classes.btn_icon_H}
                        />
                      )
                    }
                  />
                </Box>

                {Active && trackingFiled("Flash Tracking Number (FTN)")}
                {Active2 && trackingFiled("Flash Tracking Number (FTN)")}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* section 2 */}
        <Grid sx={{ mt:{lg:"-110px",xs:"0px"},backgroundColor: "#F7FDFF", }}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundImage: `url(${visitbg})`,
              backgroundRepeat: "no-repeat",
              // transform: "scale(1)",
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
                transform: { lg: "scale(0.9)", xs: "scale(none)" },

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
              // container
              // columnSpacing={2}
              md={12}
              item
              sx={{
                transform: { lg: "scale(0.8)", xs: "scale(0.9)" },
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
              // mt={2}
              // item
              // xs={11.5}
              // md={12}
              // sx={{
              md={12}
              item
              sx={{
                // marginTop: "-60px",
                transform: { lg: "scale(0.8)", xs: "scale(0.9)" },
                margin: { lg: "0px 0px 63px 0px", xs: "-60px 0px 0px 0px" },
                display: "flex",
                justifyContent: "center",
                flexDirection: { md: "row", xs: "column" },

              }}
            >
              {VisitCard2.map((i) => {
                return (

                  <Grid sx={{ m: { lg: "0px 20px", xs: "10px 0px" } }} item md={4} xs={12} className={classes.visit_Card} >
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
          </Grid>
        </Grid>
        {/* <VisitCard /> */}
        {/* <VisitOffice /> */}
        {/* <AppFooter /> */}

      </Layout>

    </>

  );
};

export default TrackMyOrder;
