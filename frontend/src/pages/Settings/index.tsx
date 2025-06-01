import { Divider, Grid, Box, Typography } from "@mui/material";
import React from "react";
import AppButton from "../../components/AppButton";
import Layout from "../../components/Layout";
import sett from "../../assests/Images/sett.png";
import CommonNav from "../../components/CommonNav";
import chip from "../../assests/Images/chipicon.png";
import master from "../../assests/Images/mastericon.png";
import lang from "../../assests/Images/lang.png";
import "../../font.css/index.css"

import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import close from "../../assests/Images/close.png";

import AppFooter from "../../components/AppFooter";

import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import { useStyles } from "../../Styles";
import SmallWallet from "../../assests/Logo/SmallWallet.svg";
import SmallNotification from "../../assests/Logo/SmallNotification.svg";
import kyc from "../../assests/Images/kyc.svg";

import CardsTypefive from "../../components/AppCards";
import CardsStatus2 from "../../components/CardsStatus2";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const classes = useStyles();
  const visaCardsobject = [
    {
      img: chip,
      img2: master,
      minitext: "Visa",
      text: "Card number",
      number: "3210 **** **** 4008",
      active: "Eddy Cusuma",
      status: "CARD HOLDER",
      active2: "12/22",
      status2: "VALID THRU"

    },
    {
      img: chip,
      img2: master,
      minitext: "Mastercard",
      text: "Card number",
      number: "3210 **** **** 4008",
      active: "Eddy Cusuma",
      status: "CARD HOLDER",
      active2: "11/26",
      status2: "VALID THRU"

    },

  ];
  const navigate = useNavigate()
  return (
    <>
      <Layout>
        {/* <CommonNav login2="Login" Signup2="Signup" priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" /> */}
        <Grid sx={{ backgroundColor: "#F7FDFF" }}>
          <Grid sx={{ transform: { lg: "scale(0.9,0.9)", xs: "none" }, }}>
            <Grid container className={classes.settings_container_1}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <Typography ml="-40px" className={classes.setting_text_h1}>
                    Settings
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: { xs: "none", sm: "block" } }}>
                  <Typography className={classes.My_Cards_h2}>My Cards </Typography>
                </Grid>
                <Grid
                  item
                  md={4}
                  sx={{ display: { xs: 'none', sm: "flex" }, justifyContent: "flex-end" }}
                >
                  <AppButton
                    title={"Add New card"}
                    color="#fff"
                    fontSize="18px"
                    textTransform={"none"}
                    backgroundColor={"#FCBF07"}
                    boxShadow={
                      " 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                    }
                    borderRadius={"6px"}
                    maxWidth={"207px"}
                    padding={"17px 0px"}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid container className={classes.settings_container_2} sx={{
              display: "flex",
              justifyContent: "center",
            }}>

              <Grid item xs={11} md={4}>
                <Box sx={{ cursor: "pointer" }} onClick={() => navigate("")}>
                  <Typography color="black" className={classes.Manage_my_card_2}>
                    <img
                      src={SmallWallet}
                      alt={"images"}
                      className={classes.Manage_my_card_wallet_icon}
                    />{" "}
                    Manage my card
                  </Typography>
                </Box>

                <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/notifications")}>
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
                  <Typography mt="30px" color="#6A6A6A" className={classes.Manage_my_card_2}>
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
                    color="#6A6A6A" className={classes.Manage_my_card_2}
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
              <Grid item xs={12} md={8} >
                {/* nested Grid container */}

                <Grid
                  container
                  columnSpacing={1}
                  sx={{
                    mb: "20px",
                    display: { lg: "flex", xs: "none" },
                    flexDirection: { md: "row", sm: "row", xs: "column" },
                    justifyContent: "center"
                  }}

                >
                  {visaCardsobject.map((i) => (
                    <Grid item md={6} xs={12} >
                      <Box key={Math.random()}>
                        <Box sx={{
                          // marginRight: "10px",
                          borderRadius: "16px",
                          backgroundColor: "#fff",
                          border: "1px solid #DFEAF2",
                        }} >
                          <Box sx={{ padding: "0px 20px", mt: "29px", display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{
                              fontFamily: "Inter !important",
                              fontWeight: "400 !important",
                              fontSize: "11px !important",
                              lineHeight: "13px !important",
                              color: "#98A9BC !important",
                            }}>{i.minitext}</Typography>
                            <img src={i.img} alt={"image"} height="40px" />
                          </Box>


                          <Box sx={{ padding: "0px 20px", mt: "44px", display: "flex", justifyContent: "space-between", pb: "27px", borderBottom: "1px solid #DFEAF2" }}>
                            <Box>
                              <Typography sx={{
                                fontFamily: "Inter !important",
                                fontWeight: "400 !important",
                                fontSize: "10px !important",
                                lineHeight: "12px !important",
                                color: "#98A9BC !important",
                              }}>{i.status}</Typography>
                              <Typography sx={{
                                mt: "3.23px",
                                fontFamily: "Inter !important",
                                fontWeight: "600 !important",
                                fontSize: "13px !important",
                                lineHeight: "15.73px !important",
                                color: "#252631 !important",
                              }}>{i.active}</Typography>
                            </Box>
                            <Box >
                              <Typography sx={{
                                fontFamily: "Inter !important",
                                fontWeight: "400 !important",
                                fontSize: "10px !important",
                                lineHeight: "12px !important",
                                color: "#98A9BC !important",
                              }}>{i.status2}</Typography>
                              <Typography sx={{
                                mt: "3.23px",
                                fontFamily: "Inter !important",
                                fontWeight: "600 !important",
                                fontSize: "13px !important",
                                lineHeight: "15.73px !important",
                                color: "#252631 !important",
                              }}>{i.active2}</Typography>
                            </Box>
                          </Box>
                          <Box sx={{ padding: "0px 20px", m: "27px 0px 28px 0px", display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{
                              fontFamily: "Inter !important",
                              fontWeight: "600 !important",
                              fontSize: "15px !important",
                              lineHeight: "18.15px !important",
                              // color: "#98A9BC !important",
                            }}>{i.number}</Typography>
                            <img src={i.img2} alt={"image"} />
                          </Box>
                        </Box>

                        {/* <Divider sx={{ margin: "16px 0px" }} /> */}
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <CardsTypefive />
                <CardsStatus2 close={close} />
              </Grid>


            </Grid>
          </Grid>
        </Grid>
        {/* <AppFooter /> */}
      </Layout>

    </>
  );
};

export default Settings;
