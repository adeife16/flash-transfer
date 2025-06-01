import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import { useStyles } from "../../Styles";
import SmallWallet from "../../assests/Logo/SmallWallet.svg";
import SmallNotification from "../../assests/Logo/SmallNotification.svg";
import Chatting_icon from "../../assests/Logo/Chatting_icon.svg";
import lang from "../../assests/Images/lang.png";
import "../../font.css/index.css"
import sett from "../../assests/Images/sett.png";
import CommonNav from "../../components/CommonNav";
import kyc from "../../assests/Images/kyc.svg";
import AppFooter from "../../components/AppFooter";
import "./index.css"
import React, { Component, useState } from 'react';
import OtpInput from 'react-otp-input';

import { styled } from "@mui/system";
import { sendOtp, verifyOtp } from "../../Services/auth"
import AppButton from "../../components/AppButton";
import { useNavigate } from "react-router-dom";
import { waitForDebugger } from "inspector";
const SettingsBox = styled("div")({
  display: "flex",
  padding: "0px 40px",
  justifyContent: "space-between",
  alignItems: "center",
});

const Index = () => {
  const [otp, setOtp] = useState()
  const handleChange = (otp) => setOtp(otp);
  const classes = useStyles();
  const navigate = useNavigate()
  const UserData: any = localStorage.getItem("userData")
  const uData = JSON.parse(UserData)
  const userId = uData._id
  console.log("dtaa", uData._id)


  const sendOtpCode = () => {
  
    const data = {
      userId: userId,
      contact: uData.phone
    }
    sendOtp(data).then((data) => {
      console.log(data)
    })
  }

  const verifyOtpCode = () => {
    
    const data = {
      userId: userId,
      otp: otp
    }
    debugger
    verifyOtp(data).then((data) => {
      console.log(data)
    })

  }

  return (
    <>
      <Layout>

        <Grid container className={classes.notification_main_container}>
          <Grid container rowSpacing={3} sx={{

            transform: { lg: "scale(0.9)", xs: "none" },
            display: "flex",
            justifyContent: "center",
          }}>
            <Grid item xs={11} md={4}>
              <Typography className={classes.setting_text}>KYC</Typography>
              <Box sx={{ cursor: "pointer" }} onClick={() => navigate("")}>
                <Typography color="#6A6A6A" className={classes.Manage_my_card_2}>
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

              <Grid item xs={12} md={11}>

                <SettingsBox>
                  <Box>
                    <Typography
                      className={classes.sms_text}>
                      <Box>
                        <img
                          src={Chatting_icon}
                          alt={"image"}
                          className={classes.chat_icon}
                        />
                      </Box>
                      Phone Verification
                    </Typography>
                  </Box>

                  <AppButton
                    title={"Send Verification Code"}
                    color="#fff"
                    fontSize="18px"
                    textTransform={"none"}
                    backgroundColor={"#fcbf07"}
                    boxShadow={
                      " 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                    }
                    borderRadius={"6px"}
                    maxWidth={"250px"}
                    padding={"17px 0px"}

                    onClick={sendOtpCode}
                  />
                </SettingsBox>
                <Box sx={{ m: "30px", border: "1px solid #b8bab9", borderRadius: "10px", height: "350px", padding: "20px" }}>
                  <Typography
                    m="20px"
                    sx={{
                      fontSize: "30px",
                      fontWeight: "500"
                    }}
                  // className={classes.sms_text}
                  >
                    Enter your verification code
                  </Typography>
                  <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={5}
                    focusStyle={{ outline: 'none', border: '2px solid #fcbf07', borderRadius: '8px' }}
                    inputStyle="inputStyle"
                    placeholder="*****"
                    separator={<span >-</span>}
                  />
                  <Grid
                    item
                    md={12}
                    sx={{ mt: "30px", display: { xs: 'none', sm: "flex" }, justifyContent: "end", flexDirection: "row" }}
                  >
                      <AppButton
                        title={"Verify otp"}
                        color="#fff"
                        fontSize="18px"
                        textTransform={"none"}
                        backgroundColor={"#fcbf07"}
                        boxShadow={
                          " 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                        }
                        borderRadius={"6px"}
                        maxWidth={"130px"}
                        padding={"17px 0px"}
                        onClick={verifyOtpCode}
                      />
                      
                  </Grid>
                </Box>
              </Grid>

              :""
            </Grid>

          </Grid>
        </Grid>
        {/* <AppFooter /> */}
      </Layout>
    </>
  );
};

export default Index;
