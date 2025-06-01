import { Grid, Typography } from "@mui/material";
import React from "react";
import MiniHeader from "../../components/MiniHeader";
import right from "../../assests/Images/blueright.png";
import right2 from "../../assests/Images/blueright2.png";

import carve from "../../assests/Images/carve.png";
import sett from "../../assests/Images/sett.png";
import CommonNav from "../../components/CommonNav";
import "../../font.css/index.css"

import wallet from "../../assests/Images/waallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";


import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import Footer from "../../components/AppFooter";
import { useStyles } from "../../Styles";
import success from "../../assests/Images/sucess.png";
import print from "../../assests/Images/print.png";
import one from "../../assests/Images/one.png";
import two from "../../assests/Images/two.png";
import three from "../../assests/Images/three.png";
import tracking from "../../assests/Images/tracking.png";
import trackingmini from "../../assests/Images/trackingmini.png";
import Layout from "../../components/Layout";

import phone from "../../assests/Images/phone.png";
import map from "../../assests/Images/map.png";

import { Box } from "@mui/system";
import TabHeader from "../../components/TabHeader";
import AppButton from "../../components/AppButton";
import Tabh from "../../components/TabhCard";
const Bpayment = () => {
  const classes = useStyles();
  const Payment = [
    {
      name: "  Beneficiary",
      info: "Flash Transfer ",
    },
    {
      name: "  Address",
      info: "schuberting 11,A 1010 vienna,austria ",
    },
    {
      name: "  Name Of The Bank",
      info: "Flash Transfer international bank gmbh",
    },
    {
      name: "  Rising",
      info: "203,90 EUR ",
    },
    {
      name: "  Bic/Swift",
      info: "wuibatwn ",
    },
    {
      name: "  Were Going",
      info: "at651988001000000018",
    },
    {
      name: "  Payment Reference(required)",
      info: "EB9740837,numan ,USA ",
    },
  ];
  return (
    <>
      <Layout>
        {/* <Box> */}
        {/* <CommonNav  login2="Login" Signup2="Signup"  priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" /> */}

        {/* </Box> */}
        <Box sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" }, }}>
          <MiniHeader />
        </Box>
        <Box>
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
                    des="Vitae sed mi luctus laoreet."
                  />
                </Grid>
                <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                  <Tabh
                    img={carve}
                    imgright={right}
                    color="black"
                    text="Payment Method"
                    des="Cursus semper viverra."

                  />
                </Grid>
                <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                  <Tabh
                    img={carve}
                    imgright={right}
                    color="black"
                    text="Review & Confirm"
                    des="Penatibus eu quis ante."
                  />
                </Grid>
                <Grid md={3} sx={{ display: { md: "flex", xs: "flex" } }}>
                  <Tabh
                    img={carve}
                    imgright={right2}
                    text="reCeipt"
                    color="#4F46E5"
                    des="Penatibus eu quis ante."
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <TabHeader /> */}
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#F7FDFF",
          }}
        >
          <Grid
            md={12}
            xs={11}
            sx={{
              transform: { lg: "scale(0.9)", xs: "scale(none)" },
              justifyContent: "center",
              display: "flex",
              flexDirection: { md: "row", sm: "row", xs: "column" },
            }}
          >
            <Grid
              item
              xs={12}
              md={2.7}
              sx={{ marginTop: { lg: "56px", xs: "20px" }, padding: { lg: "20px", xs: "0px" } }}
            >
              <Typography className={classes.Review}>Reveived</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: { lg: "flex", xs: "none" } }}>
                  <img src={success} />
                </Box>
                <Box sx={{ display: { lg: "none", xs: "flex" } }}>
                  <img src={success}
                    width="19.2px" height="19.2px" />
                </Box>
                <Typography ml="10px" className={classes.Receiver}>
                  You Are Almost Done
                </Typography>
              </Box>
              <Typography className={classes.Review_para}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6.8}
              sx={{
                marginTop: "56px ",
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#FFFF",

                    padding: {
                      md: "32px 32px 25px 32px",
                      xs: "32px 10px 25px 10px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      justifyConent: "center",
                      alignItems: "center",
                      padding: "0px 130px",
                      display: { md: "none", xs: "flex", margin: "20px" },
                    }}
                  >
                    <img src={print} />
                  </Box>
                  <Typography className={classes.Receiver}>
                    instructions for making payment{" "}
                  </Typography>{" "}
                  <Box
                    sx={{
                      marginTop: "16px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <img src={one} />
                    </Box>
                    <Typography ml="10px" className={classes.insts_Txt}>
                      Log in to your bank’s website
                    </Typography>
                  </Box>{" "}
                  <Box
                    sx={{
                      marginTop: "16px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <img src={two} />
                    </Box>
                    <Typography ml="10px" className={classes.insts_Txt}>
                      Transfer the total amount to “western union” (baneficiary):
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      margin: "16px 0px 40px 0px",
                    }}
                  >
                    {Payment.map((i) => {
                      return (
                        <>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: {
                                md: "space-between",
                                sm: "space-between",
                                xs: "start",
                              },
                              flexDirection: {
                                md: "row",
                                sm: "row",
                                xs: "column",
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
                </Box>
                <Box
                  sx={{

                    marginTop: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <img src={three} />
                  </Box>
                  <Typography ml="10px" className={classes.insts_Txt}>
                    your money will be availble once we have recived the total amount of 203.90 EUR
                  </Typography>
                </Box>{" "}
                <Grid
                  item
                  md={12}
                  xs={10}
                  sx={{
                    display: { md: "flex", xs: "none" },
                    mt: "16px",
                    alignItems: "center",
                    border: { md: "1px solid #0000001A", xs: "none" },
                    p: "10px 20px",

                  }}
                >

                  <Box
                    sx={{
                      display: { md: "flex", xs: "none" },
                    }}
                  >

                    <img src={tracking} width="45.75px" height="45.75px" />
                  </Box>

                  <Typography ml="27px" className={classes.tknumber} align="center">
                    Tracking Number (FTN): 771 824 9542
                  </Typography>

                </Grid>
                <Typography mt="16px" className={classes.note}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
                <Grid
                  item
                  xs={9}
                  sx={{
                    mt: "50px",
                    ml: "30px",
                    display: { md: "none", xs: "flex" },
                  }}
                >
                  <img src={tracking} width="22.88px" height="22.88px" />

                  <Typography ml="27px" className={classes.tknumber} align="center">
                    Tracking Number (FTN): 771 824 9542
                  </Typography>
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={1}
              sx={{
                marginTop: "56px",
                padding: "0px 40px",
                display: { md: "flex", xs: "none" },
              }}
            >
              <Box>
                <img src={print} />
              </Box>
            </Grid>
          </Grid>

          {/* <Grid
            item
            md={12}
            xs={12}
            mt="171px"
            sx={{
              height: { md: "271px", xs: "99px" },
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              backgroundImage: `url(${map})`,
            }}
          >
            <Grid
              item
              md={11}
              xs={11}
              sx={{

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: { md: "184px", xs: "59px" },
                backgroundColor: "#ffff",
                borderRadius: "24px",
              }}
            >
              <Box
                sx={{
                  display: { md: "none", xs: "flex" },
                }}
              >
                <img src={trackingmini} />
              </Box>
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                }}
              >
                <img src={tracking} />
              </Box>
              <Typography ml="10px" className={classes.map_txt}>
                Tracking Number (FTN): 771 824 9542
              </Typography>
            </Grid>
          </Grid> */}
          <Grid
            md={8.6}
            xs={11}
            sx={{
              mt: { md: "182px", xs: "50px" },
              display: "flex",
              flexDirection: "row",
              marginBottom: { md: "176px", xs: "20px" },
              alignItems: "center",
            }}
          >
            <Box mr="10px">
              {/* <span>Frame 545</span> */}
              <img src={phone} />
            </Box>
            <Typography className={classes.Review_para}>
              Don’t miss out on the benefits of the my wu SM problem ! you can
              earn point on future transactions. register todat!
            </Typography>
          </Grid>
        </Grid>
        {/* <Grid>
        <Footer />
      </Grid> */}

      </Layout>

    </>
  );
};

export default Bpayment;
