import { Box, Divider, Grid, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import { useStyles } from "../../Styles";
import SmallWallet from "../../assests/Logo/SmallWallet.svg";
import SmallNotification from "../../assests/Logo/SmallNotification.svg";
import Chatting_icon from "../../assests/Logo/Chatting_icon.svg";
import AppSwitch from "../../components/AppSwitch";
import lang from "../../assests/Images/lang.png";
import "../../font.css/index.css"
import sett from "../../assests/Images/sett.png";
import CommonNav from "../../components/CommonNav";
import kyc from "../../assests/Images/kyc.svg";
import AppFooter from "../../components/AppFooter";
import "./index.css"
import React, { Component, useState } from 'react';
import OtpInput from 'react-otp-input';
import wallet from "../../assests/Images/headwallet.png";
import wh from "../../assests/Images/wh.png";
import em from "../../assests/Images/em.png";
import mo from "../../assests/Images/mo.png";

import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import { styled } from "@mui/system";
import AppButton from "../../components/AppButton";
import { useNavigate } from "react-router-dom";

const SettingsBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const MainBox = styled("div")({
  marginBottom: "22px",
});
const BtnBox = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "12px",
});

const Index = () => {
  const [otp, setOtp] = useState()
  const handleChange = (otp) => setOtp(otp);
  const classes = useStyles();
  const navigate = useNavigate()

  const settingsObject = [
    {
      icon: Chatting_icon,
      text: "Phone Verification",
      // description: "Stair Lifts Feel The Freedom Of Your Home",
    },
    // {
    //   icon: em,
    //   text: "Email",
    //   description: "A Right Media Mix Can Make The Difference",
    // },
    // {
    //   icon: wh,
    //   text: "Whatsapp",
    //   description: "Advertising Relationships Vs Business Decisions",
    // },
    // {
    //   icon: mo,
    //   text: "Currency price alert",
    //   description: "Advertising Relationships Vs Business Decisions",
    // },
  ];
  return (
    <>
      <Layout>
        {/* <CommonNav  login2="Login" Signup2="Signup"  priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" /> */}

        <Grid container className={classes.notification_main_container}>
          <Grid container rowSpacing={3} sx={{

            transform: { lg: "scale(0.9)", xs: "none" },
            display: "flex",
            justifyContent: "center",
          }}>
            <Grid item xs={11} md={4}>
              <Typography className={classes.setting_text}>KYC</Typography>
              <Box sx={{ cursor: "pointer" }} onClick={() => navigate("")}>
                <Typography  color="#6A6A6A" className={classes.Manage_my_card_2}>
                  <img
                    src={SmallWallet}
                    alt={"images"}
                    className={classes.Manage_my_card_wallet_icon}
                  />{" "}
                  Manage my card
                </Typography>
              </Box>

              <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/notification")}>
                < Typography mt="30px" color="#6A6A6A" className={classes.Manage_my_card_2}>
                  <img
                    src={SmallNotification}
                    alt={"images"}
                    className={classes.Manage_my_card_wallet_icon}
                  />{" "}
                  Notifications
                </Typography>
              </Box>
              {/* <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/kyc")
              }>
                <Typography mt="30px" color="black" className={classes.Manage_my_card_2}>
                  <img
                    src={kyc}
                    alt={"images"}
                    className={classes.Manage_my_card_wallet_icon}
                  />{" "}
                  KYC
                </Typography>
              </Box> */}
              <Box sx={{ m: "30px 0px 10px -3px", display: { lg: "none", xs: "flex" } }}>
                <Typography
                  color="#6A6A6A" className={classes.Notification_icon_text}
                >
                  <img

                    src={lang}
                    alt={"images"}
                    className={classes.Manage_my_card_wallet_icon}
                  />{" "}
                  Language
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8} sx={{ margin: { lg: "0px 0px", xs: "0px 20px" }, padding: { lg: "0px", xs: "0px 20px" }, backgroundColor: { lg: "#F7FDFF", xs: "white" } }} >
              {settingsObject.map((value, i) => (
                <MainBox key={i}>
                  <SettingsBox>
                    <Typography
                      className={classes.sms_text}>
                      <Box>
                        <img
                          src={value.icon}
                          alt={"image"}
                          className={classes.chat_icon}
                        />
                      </Box>
                      {value.text}
                    </Typography>
                    {/* <AppSwitch /> */}
                  </SettingsBox>
                  {/* <Typography className={classes.sms_text_description}>
                    {value.description}
                  </Typography>
                  <Divider /> */}
                  {/* {i === 3 ? (
                    <BtnBox sx={{ display: "flex" }}>
                      <AppButton
                        textTransform="none"
                        title={"Cancel"}
                        backgroundColor={"#6A6A6A"}
                        color={"#fff"}
                        boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}
                        maxWidth={"142px"}
                        padding={"9px 0px"}
                      />
                      <AppButton
                        textTransform="none"
                        title={"Update Settings"}
                        backgroundColor={"#5D5FEF"}
                        boxShadow={
                          "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                        }
                        maxWidth={"145px"}
                        margin={"0px 0px 0px 8px"}
                        padding={"9px 0px"}
                        color={"#fff"}
                      /> */}
                  {/* </BtnBox>
              ) : null} */}
                </MainBox>
              ))}
              <Grid item xs={12} md={8} sx={{}}>
                <div >

                  <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={4}
                    inputStyle="inputStyle"
                    separator={<span >-</span>}
                  />
                </div>
              </Grid>
              <Grid
                item
                md={4}
                sx={{ display: { xs: 'none', sm: "flex" }, justifyContent: "flex-end" }}
              >
                <AppButton
                  title={"Send otp"}
                  color="#fff"
                  fontSize="18px"
                  textTransform={"none"}
                  backgroundColor={"#5D5FEF"}
                  boxShadow={
                    " 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                  }
                  borderRadius={"6px"}
                  maxWidth={"100px"}
                  padding={"17px 0px"}
                />
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        {/* <AppFooter /> */}
      </Layout>
    </>
  );
};

export default Index;
