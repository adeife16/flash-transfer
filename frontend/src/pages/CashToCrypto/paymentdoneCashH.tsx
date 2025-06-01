import { Grid, Typography } from "@mui/material";
import React from "react";
import CommonNav from "../../components/CommonNav";
import Layout from "../../components/Layout";

import MiniHeader from "../../components/MiniHeader";
import right from "../../assests/Images/blueright.png";
import right2 from "../../assests/Images/blueright2.png";
import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import one from "../../assests/Images/one.png";
import two from "../../assests/Images/two.png";
import three from "../../assests/Images/three.png";
import carve from "../../assests/Images/carve.png";
import sett from "../../assests/Images/sett.png";
import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import "../../font.css/index.css";
import track from "../../assests/Images/track.png";

import Footer from "../../components/AppFooter";
import { useStyles } from "../../Styles";
import success from "../../assests/Images/sucess.png";
import print from "../../assests/Images/print.png";

import { Box } from "@mui/system";
import TabHeader from "../../components/TabHeader";
import AppButton from "../../components/AppButton";
import Tabh from "../../components/TabhCard";
import orangeMoneyImg from "../../assests/Images/orange.png";
import sandTimeLog from "../../assests/Images/sandTime.svg";
import bitcoinImg from "../../assests/Images/bitcoin.png";

import { Link } from "react-router-dom";
const PaymentdoneCashH = () => {
  const classes = useStyles();

  const Payment = [
    {
      name: " You Sent",
      info: "100 $",
    },
    {
      name: " Transfer Rate",
      info: "$100 = 100 BUSD",
    },
    {
      name: " Fee",
      info: " +$2.50",
    },
    {
      name: " Transfer Time",
      info: "1 Min ",
    },
    {
      name: " Orange money phone number of Flash Transfer",
      info: "+337487587487 ",
    },
    {
      name: "",
      info: ""
    },
    {
      name: "",
      info: ""
    },
    {
      name: "",
      info: ""
    },
    {
      name: "",
      info: ""
    },
    {
      name: " Recipient Gets",
      info: "$100 BUSD",
    },
    {
      name: "Total paid",
      info: "$102.50",
    },
    {
      name: "",
      info: ""
    },
    {
      name: "",
      info: ""
    },
    {
      name: "",
      info: ""
    },
    {
      name: "",
      info: ""
    },
  ];

  return (
    <>
      <Layout>
        {/* <Box>
        <CommonNav login2="Login" Signup2="Signup"  priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" />
      </Box> */}
        <Box sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" } }}>
          <MiniHeader />
        </Box>
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              backgroundColor: "#F7FDFF",
              display: "flex",
              justifyContent: "center",
              borderTop: "1px solid  #D1D5DB",
              borderBottom: "1px solid  #D1D5DB",
            }}
          >
            <Grid
              item
              md={10.2}
              xs={12}
              sx={{
                marginBottom: { lg: "-4px", xs: "0px" },
                transform: { lg: "scale(0.9)", xs: "scale(none)" },
                borderRight: "1px solid  #D1D5DB",
                borderLeft: "1px solid  #D1D5DB",
                display: "flex",
                flexDirection: { md: "row", sm: "row", xs: "column" },
              }}
            >
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabh
                  img={carve}
                  imgright={right}
                  color="black"
                  text="Reciver’s info"
                  // des="Vitae sed mi luctus laoreet."
                />
              </Grid>
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabh
                  img={carve}
                  imgright={right}
                  color="black"
                  text="Payment Method"
                  // des="Cursus semper viverra."
                />
              </Grid>
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabh
                  img={carve}
                  imgright={right}
                  color="black"
                  text="Review & Confirm"
                  // des="Penatibus eu quis ante."
                />
              </Grid>
              <Grid
                md={3}
                sx={{
                  borderBottom: "3px solid  #4F46E5",
                  display: { md: "flex", xs: "flex" },
                }}
              >
                <Tabh
                  img={carve}
                  imgright={right2}
                  text="reCeipt"
                  color="#4F46E5"
                  // des="Penatibus eu quis ante."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Box>
        <TabHeader />
      </Box> */}
        <Grid
          container
          sx={{
            backgroundColor: "#F7FDFF",
          }}
        >
          <Grid
            container
            // item
            // md={12}
            // xs={12}
            sx={{
              transform: { md: "scale(0.8)", xs: "scale(none)" },
              marginTop: { md: "", xs: "50px" },
              justifyContent: { md: "center", xs: "center" },
              display: "flex",
            }}
          >
            <Grid
              // item
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: { md: "row", xs: "column" },
              }}
            >
              <Grid
                item
                // xl={9}
                md={9}
                xl={9.5}
                xs={12}
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <Grid
                  md={9.5}
                  sx={{
                    height: "auto",

                    // width: { md: "802px", xl: "1000px", xs: "100%" },
                    backgroundColor: "white",
                    margin: {
                      md: "10px 0px 196px 0px",
                      lg: "10px 0px 196px 0px",
                      xl: "10px 0px 196px 0px",
                      xs: "-40px 0px -40px 0px",
                    },
                    padding: {
                      md: "20px 32px 56px 32px",
                      xs: "5px 10px 30px 10px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: { md: "none", xs: "flex" },
                      justifyContent: "center",
                      margin: { xs: "20px" },
                    }}
                  >
                    <img src={print} />
                  </Box>

                  <Box
                    sx={{
                      mb: "25px",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: { lg: "0px 48px", xs: "0px 0px" },
                    }}
                  >
                    <img src={success} />
                    <Typography
                      sx={{
                        fontFamily: "Inter !important",
                        fontWeight: "700 !important",
                        fontSize: "24px !important",
                        lineHeight: "32px !important",
                        marginLeft: "20px",
                      }}
                    >
                      Your money is on its way
                    </Typography>
                  </Box>

                  <Box>
                    <Box
                      component="label"
                      // md={{ width: "25%" }}
                      sx={{
                        display: "flex",
                        // backgroundColor: `${i.backgroundColor} `,
                        borderRadius: "0px 0px 6px 6px ",
                        flexDirection: "row",
                      }}
                      style={{ position: "relative" }}
                      // className={classes.lableinput2}
                    >
                      <Box
                        sx={{
                          padding: { xs: "16px 17px 16px 0" },
                          display: "flex",
                        }}
                      >
                        <img
                          src={bitcoinImg}
                          style={{ marginRight: "17px" }}
                          width={40}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Inter !important",
                              fontSize: "14px !important",
                              fontWeight: "600 !important",
                              lineHeight: "20px !important",
                            }}
                          >
                            $100
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Inter !important",
                              fontSize: "14px !important",
                              fontWeight: "400 !important",
                              lineHeight: "20px !important",
                            }}
                          >
                            Mobile money
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    {Payment.map((i) => {
                      return (
                        <>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: {
                                md: "space-between",
                                sm: "space-between",
                                xs: "space-between",
                              },
                              flexDirection: {
                                md: "row",
                                sm: "row",
                                // xs: "column",
                              },
                              // alignItems: "center",
                            }}
                          >
                            <Box>
                              <Typography className={classes.transaction}>
                                {i.name}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography className={classes.Prices}>
                                {i.info}
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      );
                    })}
                  </Box>

                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",

                        alignItems: "center",
                        flexDirection: { md: "row", xs: "column-reverse" },
                        marginTop: "56px",

                        // marginBottom: "112px"
                      }}
                    >
                      {/* <Box sx={{  marginTop: { lg: "0px", xs: "10px" }}}> */}
                      <Link
                        to="/"
                        style={{ textDecoration: "none", width: "100%" }}
                      >
                        <AppButton
                          textTransform="none"
                          title={"Back to Home"}
                          color={"#6A6A6A"}
                          maxWidth="100%"
                          width="100%"
                          // padding={"10px 32px 10px 36px"}
                          fontSize={"18px"}
                          fontWeight={"500"}
                          lineHeight={"28px"}
                          border="1px solid #6A6A6A"
                          borderRadius="6px"
                          height="65px"
                          // endIcon={<ArrowForwardIcon />}
                          margin={"0px 10px 0px 0px"}
                        />
                        {/* </Box> */}
                      </Link>
                      <Link
                        to="/PaymentdoneCashD"
                        style={{ textDecoration: "none", width: "100%" }}
                      >
                        <Box
                          sx={{
                            marginBottom: { lg: "0px", xs: "10px" },
                            marginLeft: { md: "10px", xs: "0px" },
                          }}
                        >
                          <AppButton
                            textTransform="none"
                            title={"Track Order"}
                            color={"#FFFFFF"}
                            width="100%"
                            maxWidth="100%"
                            backgroundColor={"#FCBF07"}
                            // padding={"10px 32px 10px 36px"}
                            fontSize={"18px"}
                            fontWeight={"500"}
                            lineHeight={"28px"}
                            height="65px"
                            borderRadius="6px"
                            // endIcon={<ArrowForwardIcon />}
                            margin={"0px 10px 0px 0px"}
                          />
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                </Grid>
                {/* </Grid> */}
              </Grid>
              {/* </Grid> */}
              <Grid
                item
                md={2}
                xs={12}
                sx={{
                  display: { md: "flex", xs: "none" },
                  justifyContent: "end",
                  marginTop: "56px",
                }}
              >
                <Box>
                  <img src={print} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid>
        <Footer />
      </Grid> */}
      </Layout>
    </>
  );
};

export default PaymentdoneCashH;
