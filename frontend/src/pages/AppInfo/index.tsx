import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout";
import { useStyles } from "../../Styles";
import Appinfobg from "../../assests/Images/Appinfobg.png";
import SamsungGalaxyS8Small from "../../assests/Images/SamsungGalaxyS8.jpg";
import SamsungGalaxyS8Big from "../../assests/Images/SamsungGalaxyS8Big.jpg";
import GroupMobile from "../../assests/Images/GroupMobile.jpg";
import "../../font.css/index.css"

import AppleBtnPic from "../../assests/Logo/AppleBtnPic.svg";
import PlayStoreBtn from "../../assests/Logo/PlayStoreBtn.svg";

import { Box } from "@mui/system";
import AppButton from "../../components/AppButton";

const AppInfo = () => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Grid
          container
          sx={{ backgroundImage: `url(${Appinfobg})` }}
          className={classes.appinfo_container12}
        >
          <Grid container>
            <Grid item xs={12}  sx={{ backgroundColor: "black", opacity: "0.7", padding: { lg: "66px 100px 261px 140px !important", xs: "50px 0px 50px 0px" } }}>

              <Box sx={{transform:{lg:"scale(0.9)",xs:"scale(none)"} , display: "flex", alignItems:"center",flexDirection:"column" }}>
                <Typography className={classes.fast_transfer}>
                  Fast Transfer mobile app
                </Typography>
                <Typography className={classes.fast_transfer_description}>
                  Home is behind, the world ahead and there are many paths to
                  tread through shadows to the edge.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.appinfo_container123} >
          <Grid container sx={{ transform:{lg:"scale(0.9)",xs:"scale(none)"} ,display: "flex", justifyContent: { md: "space-between" } }}>
            <Grid item md={6} xs={12} sx={{p: { lg: "50px 33px 0px 0px", xs: "0px 0px 0px 0px" } }}>
              <Typography className={classes.SendMoney}>
                Send money in one tap with the app
              </Typography>
              <Typography className={classes.SendMoney_description}>

                With millions of downloads, the fasttransfer mobile app is an easier way to send money.
              </Typography>
              <Box className={classes.SendMoney_description}>

                <ul>
                  <li> Send money wherever you are</li>
                  <li> View exchange rates and estimate fees*</li>
                  <li> Easily manage your transactions and profile</li>
                  <li>
                    {" "}
                    Log in quickly and securely using facial recognition (only on
                    iOS) or your fingerprint
                  </li>
                </ul>
              </Box>
              <Typography className={classes.SendMoney_description}>

                With millions of downloads, the fasttransfer mobile app is an easier way to send money.
              </Typography>

              <Box mt="78px" sx={{ display: {lg:"flex",xs:"none"}, justifyContent: { lg: "start", xs: "center" }, alignItems: "center" }}>
                <img
                  className={classes.btn_playstore}
                  src={AppleBtnPic} alt={"image"} />
                <img
                  src={PlayStoreBtn}
                  alt={"image"}
                  className={classes.btn_playstore}
                />
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={
                {
                  mt:{lg:"0px",xs:"20px"}
                  // backgroundImage: `url(${GroupMobile})`,
                  // backgroundSize: "cover",
                  // backgroundRepeat: "no-repeat",
                }
              }
            >
              <Box>
                <img
                  src={SamsungGalaxyS8Small}
                  alt={"image"}
                  className={classes.SamsungGalaxyS8Small_s}
                />
                <img
                  src={SamsungGalaxyS8Big}
                  alt={"image"}
                  className={classes.SamsungGalaxyS8Big_b}
                />
              </Box>

              <Box mt="20px" sx={{ marginRight:{lg:"0px",xs:"20px"},display: {lg:"none",xs:"flex"}, justifyContent: { lg: "start", xs: "center" }, alignItems: "center" }}>
                <img
                  className={classes.btn_playstore}
                  src={AppleBtnPic} alt={"image"} />
                <img
                  src={PlayStoreBtn}
                  alt={"image"}
                  className={classes.btn_playstore}
                />
              </Box>
            </Grid>
            
          </Grid>
        </Grid>

        <Grid container className={classes.appinfo_container3}>
          <Grid container columnSpacing={{lg:12,xs:0}} rowSpacing={2} sx={{ transform: {lg:"scale(0.75)",xs:"scale(0.94)"},}}>
         {/* <Grid container  sx={{flexDirection:{lg:"row",xs:"column"}}}> */}

         <Grid item md={4} lg={5} sx={{display:{lg:"none",xs:"flex"},flexDirection:"column", paddingRight: "20px", mt: { lg: "36px", xs: "10px" }, }}>
              <Typography className={classes.Our_Process}>
                Our Process
              </Typography>
              <Typography className={classes.how_to_send_money}>
                How to send money from the fast transfer app
              </Typography>
              <Typography className={classes.how_to_send_money_description}>
                available, but the majority have suffered alteration in some
                look even slightly believable.
              </Typography>
              <AppButton
                textTransform="none"
                title={"Get Started"}
                color={"#fff"}
                fontSize="18px"
                fontWeight="500"
                lineHeight={"28px"}
                backgroundColor={"#FCBF07"}
                maxWidth={"126px"}
                padding={"7px 9.64px"}
              />
            {/* </Grid> */}
            </Grid>
            <Grid item md={8} lg={7} xs={12}>
              {/* start of cards container */}

              <Grid container columnSpacing={2} rowSpacing={2} sx={{ mt: { lg: "75px", xs: "0px" }, }}>
                <Grid xs={12} item lg={6}>
                  <Box className={classes.app_info_cards}>

                    <Box sx={{ backgroundColor: "#081420", width: "78.78px", height: "78.78px", borderRadius: "100px", justifyContent: "center", alignItems: "center", display: "flex", }}>
                      <Typography className={classes.Download_text}>
                        01.
                      </Typography>

                    </Box>
                    <Box sx={{ pl: "10px", display: "flex", flexDirection: "column" }}>

                      <Typography className={classes.Download_text}>
                        Download
                      </Typography>
                      <Typography className={classes.Download_text_descrip}>
                        Cepteur sint occaecat cupidatat proident
                      </Typography>
                    </Box>

                  </Box>
                </Grid>
                <Grid xs={12} item lg={6}>
                  <Box
                    sx={{
                      justifyContent: "space-between",
                      // alignItems: "center", 
                      marginLeft: { md: "0px", xs: "-10px" },
                      flxDirection: "row", display: "flex",
                      padding: "40px 20px !important",
                      backgroundColor: " #5D5FEF",
                      borderRadius: "16px",
                    }}

                  //  className={classes.app_info_cards}
                  >
                    <Box sx={{ backgroundColor: "#081420", width: "78px", height: "78px", borderRadius: "100px", justifyContent: "center", alignItems: "center", display: "flex", }}>
                      <Typography className={classes.Download_text}>
                        02.
                      </Typography>
                    </Box>
                    <Box sx={{ pl: "10px", display: "flex", flexDirection: "column" }}>

                      <Typography className={classes.Download_text}>
                        Download
                      </Typography>
                      <Typography className={classes.Download_text_descrip}>
                        Cepteur sint occaecat cupidatat proident
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={12} item lg={6}>
                  <Box className={classes.app_info_cards}>
                    <Box sx={{ backgroundColor: "#081420", width: "78px", height: "78px", borderRadius: "100px", justifyContent: "center", alignItems: "center", display: "flex", }}>
                      <Typography className={classes.Download_text}>
                        03.
                      </Typography>
                    </Box>
                    <Box sx={{ pl: "10px", display: "flex", flexDirection: "column" }}>

                      <Typography className={classes.Download_text}>
                        Download
                      </Typography>
                      <Typography className={classes.Download_text_descrip}>
                        Cepteur sint occaecat cupidatat proident
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={12} item lg={6}>
                  <Box className={classes.app_info_cards}>
                    <Box sx={{ backgroundColor: "#081420", width: "78px", height: "78px", borderRadius: "100px", justifyContent: "center", alignItems: "center", display: "flex", }}>
                      <Typography className={classes.Download_text}>
                        04.
                      </Typography>
                    </Box>
                    <Box sx={{ pl: "10px", display: "flex", flexDirection: "column" }}>

                      <Typography className={classes.Download_text}>
                        Download
                      </Typography>
                      <Typography className={classes.Download_text_descrip}>
                        Cepteur sint occaecat cupidatat proident
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                {/* <Grid item md={4}>
                  <Box className={classes.app_info_cards}>
                    <Typography className={classes.Download_text}>
                      Download
                    </Typography>
                    <Typography className={classes.Download_text_descrip}>
                    Cepteur sint occaecat cupidatat proident
                    </Typography>
                  </Box>
                </Grid> */}
              </Grid>
            </Grid>
            <Grid item md={4} lg={5} sx={{display:{lg:"flex",xs:"none"},flexDirection:"column", paddingRight: "20px", mt: { lg: "36px", xs: "10px" }, }}>
              <Typography className={classes.Our_Process}>
                Our Process
              </Typography>
              <Typography className={classes.how_to_send_money}>
                How to send money from the fast transfer app
              </Typography>
              <Typography className={classes.how_to_send_money_description}>
                available, but the majority have suffered alteration in some
                look even slightly believable.
              </Typography>
              <AppButton
                textTransform="none"
                title={"Get Started"}
                color={"#fff"}
                fontSize="18px"
                fontWeight="500"
                lineHeight={"28px"}
                backgroundColor={"#FCBF07"}
                maxWidth={"126px"}
                padding={"7px 9.64px"}
              />
            {/* </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Layout>
    </>
  );
};

export default AppInfo;
