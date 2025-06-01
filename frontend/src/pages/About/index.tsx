import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import CommonNav from "../../components/CommonNav";
import Layout from "../../components/Layout";

import Footer from "../../components/AppFooter";
import { useStyles } from "../../Styles";
import sett from "../../assests/Images/sett.png";
import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import "../../font.css/index.css"

import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import bg from "../../assests/Images/aboutbg.png";
import man1 from "../../assests/Images/male1.png";
import man2 from "../../assests/Images/male2.png";
import man3 from "../../assests/Images/male3.png";
import man4 from "../../assests/Images/male4.png";

import Media from "../../assests/Images/media.png";
import logo1 from "../../assests/Images/media1.png";
import logo2 from "../../assests/Images/media2.png";
import logo3 from "../../assests/Images/media3.png";
import logo4 from "../../assests/Images/media4.png";
import logo5 from "../../assests/Images/media5.png";
import visitbg from "../../assests/Images/visitbg.png";
import visitbg1 from "../../assests/Images/visitbg1.png";

import email from "../../assests/Images/email.png";

import dubai from "../../assests/Images/dubai.png";
import london from "../../assests/Images/london.png";

import topimg from "../../assests/Images/topimage.png";
import Support from "../../assests/Logo/support.png";
import Right from "../../assests/Logo/right.png";
import Left from "../../assests/Logo/left.png";

import Secure from "../../assests/Logo/secure.png";
import employees from "../../assests/Logo/employess.png";

import AboutCard from "../../components/AboutCard";
import TeamCard from "../../components/TeamCards";

import { Box } from "@mui/system";
const About = () => {
  const classes = useStyles();
  const Infocard = [
    {
      img: Support,
      Title: "24/7 Customer Support",
      SubTitle:
        "Short text describing a feature of your product/service. Think about how it can benefit your potential customer. The text should convey the objectives of your product/service. Try being expressive yet concise.",
    },
    {
      img: Secure,
      Title: "Secure Transfer",
      SubTitle:
        "Short text describing a feature of your product/service. Think about how it can benefit your potential customer. The text should convey the objectives of your product/service. Try being expressive yet concise.",
    },
    {
      img: employees,
      Title: "200+ employees",
      SubTitle:
        "Short text describing a feature of your product/service. Think about how it can benefit your potential customer. The text should convey the objectives of your product/service. Try being expressive yet concise.",
    },
  ];
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
  const teamCards = [
    {
      img: man1,
      Name: "Aladdin",
      Position: "CEO & Founder",
    },
    {
      img: man2,
      Name: "Safi",
      Position: "Co-founder",
    },
    {
      img: man3,
      Name: "Junior",
      Position: "COO",
    },
    {
      img: man4,
      Name: "Mimirk",
      Position: "CMO",
    },
  ];
  const Medialogos = [
    {
      img: logo1,
    },
    {
      img: logo2,
    },
    {
      img: logo3,
    },
    {
      img: logo4,
    },
    // {
    //   img: logo5,
    // },
  ];
  return (
    <Grid>
      <Layout>
        
      {/* <Grid> */}
        {/* <CommonNav login2="Login" Signup2="Signup" priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" /> */}
      {/* </Grid> */}
      <Grid>
        <Grid container className={classes.About_container}>
          <Grid
            item
            md={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundImage: {
                md: `url(${bg})`,
                sm: `url(${bg})`,

                lg: `url(${bg})`,
                xs: "none",
              },
              backgroundRepeat: "no-repeat",
              // height: { lg: "640px", xl:"700px",},
              backgroundSize: "100%",
              // backgroundColor: "black",
              // backgroundPosition: "cover",
            }}
          >
            <Grid
              md={10}
              container
              sx={{
                transform: {lg:"scale(0.9)",xs:"scale(none)"},
                display: "flex",
                justifyContent: "center",
                flexDirection: { md: "row-reverse" },
              }}
            // className={classes.content_container}
            >
              <Grid
                item
                md={4}
                sm={6}
                xs={11}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={topimg}
                  style={{
                    width: "350px",
                    height: "224px",
                    marginTop: "40px ",
                  }}
                />
              </Grid>
              <Grid item md={8} xs={11} sm={6}>
                <Typography className={classes.Top_title}>
                  World first platform to convert directly crypto to cash
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid
            p={2}
            item
            md={11.1}
            xs={12}
            sx={{                             transform: {lg:"scale(0.9)",xs:"scale(none)"},

            display: "flex", justifyContent: { md: "end" } }}
          >
            <Grid item md={4} xs={12}>
              <Box className={classes.Wonder_Txt}>
                <Typography className={classes.Wonder_Title}>
                  And a sense of wonder at the world
                </Typography>
                <Typography className={classes.Wonder_sub}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequa
                </Typography>
              </Box>
            </Grid>
          </Grid> */}
        </Grid>

        <Grid
          container
          sx={{

            backgroundColor: "#F7FDFF",
          
          }}
        >
          <Grid
            mt={6}
            container

            columnSpacing={3}
            sx={{
              transform: {lg:"scale(0.9)",xs:"scale(none)"},

              marginBottom: { lg: "57px", xs: "30px" },
              display: "flex",
              padding: { lg: "0px 120px", xs: "0px 0px" },
            }}
          >
            {Infocard.map((i) => {
              return (
                <Grid
                  item
                  md={4}
                  xs={12}
                  sx={{ margin: { xs: "20px 10px", md: "0px 0px" } }}
                >
                  <AboutCard
                    title={i.Title}
                    subtitle={i.SubTitle}
                    img={i.img}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            backgroundColor: { lg: "#fff", xs: "#F7FDFF" },
            justifyContent: "center",
          }}
        >
          <Grid
            item
            md={12}
            xs={12}
            sx={{
              transform: {lg:"scale(0.9)",xs:"scale(none)"},

              paddingTop: { lg: "58px", xs: "0px" },
              display: "flex",
              justifyContent: "end",
              flexDirection: { md: "row", sm: "row", xs: "column" },
            }}
          >
            <Grid
              item
              md={5.8}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center ",
                alignItems: "center",
                flexDirection: "column ",
              }}
            >
              <Typography className={classes.man_tms}>
                The amazing team behind our company
              </Typography>
              {/* <Box sx={{backgroundColor:"red",}}> */}

              <Typography className={classes.team_Des}>
                A short paragraph describing your team. You may want to describe what they are responsible for
              </Typography>
              {/* </Box> */}
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sx={{
                display: { md: "flex", xs: "none" },
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <Button>
                <img src={Left} />
              </Button>
              <Button>
                <img src={Right} />
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            // rowSpacing={md:0,xs:2}

            columnSpacing={2}
            sx={{               

              padding: { lg: "64px 40px 57px 40px", xs: "20px 20px" },
              transform: { lg: "scale(0.8)", xs: "scale(none)" },
              display: "flex",
              justifyContent: { md: "center", xs: "center" },
            }}
          >
            {teamCards.map((i) => {
              return (
                <Grid item md={3} xs={12} sx={{ padding: { lg: "0px 0px", xs: "10px 0px" } }}>
                  <TeamCard title={i.Name} subtitle={i.Position} img={i.img} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid
          // container
          sx={{
            padding: { lg: "50px 0px", xs: "10px 0px" },
            backgroundColor: "black",
           
          }}
        >
          <Grid container sx={{
            display: "flex",
            transform: {lg:"scale(0.9)",xs:"scale(none)"},
            justifyContent: "center",
          }}>
            <Grid
              item
              md={4}
              xs={11.5}
              sx={{
                display: "flex",
                justifyContent: "center ",
                flexDirection: "column ",
              }}
            >
              <Box
                sx={{
                  marginBottom: "16px",
                  justifyContent: "center",
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",

                }}
              >
                <Box >

                  <img
                    src={Media}
                    style={{
                      width: "129.14px",
                      height: "100px",
                      textAlign: "center",
                    }}
                  />
                </Box>
              </Box>
              <Typography color="white" className={classes.man_tms}>
                Seen in the Media
              </Typography>
              <Typography sx={{ margin: { lg: "16px 0px 40px 0px", xs: "16px 0px" } }} color="white" className={classes.team_Des}>
                A short paragraph describing your team. You may want to describe
                what they are responsible for
              </Typography>
            </Grid>
          </Grid>
          <Grid sx={{
            margin: { lg: "0px 110px", xs: "0px 0px" },
            transform: {lg:"scale(0.8)",xs:"scale(none)"},
            borderTop: "1px solid #C3C2C1",
          }}>

          </Grid>
          <Grid
            container

            columnSpacing={{md:8, xs:2}}
            sx={{
              transform: { lg: "scale(0.8)", xs: "scale(0.9)" },
        
              padding: { lg: "40px 70px 0px 70px", xs: "10px 0px" },

            }}
          >
            {Medialogos.map((i) => {
              return (
                <Grid item md={3} xs={6} sx={{
                  display: "flex",
                  padding: { lg: " 0px 0px 0px 0px", xs: "10px 10px 10px 10px" },

                  justifyContent: "center",
                }}>
                  <Box sx={{ display: { lg: "flex", xs: "none" } }}>
                    <img
                      src={i.img}
                    />
                  </Box>
                  <Box sx={{ display: { lg: "none", xs: "flex" } }}>
                    <img
                      src={i.img}
                      style={{ width: "184px", height: "90px" }}
                    />
                  </Box>

                </Grid>
              );
            })}
          </Grid>

        </Grid>
        <Grid sx={{ backgroundColor: "#F7FDFF", }}>


          <Grid
            container
            sx={{
                          

              display: "flex",
              justifyContent: "center",

              backgroundImage: `url(${visitbg1})`,
              // backgroundImage: `url(${visitbg})`,
              backgroundRepeat: "no-repeat",
              transform: {lg:"scale(0.9)",xs:"scale(none)"},
              backgroundPosition: "center",
              backgroundSize: "100%", backgroundColor: "#F7FDFF",

            }}
          >
            <Grid
              item
              md={5.8}
              xs={11.5}
              sx={{

                transform: {lg:"scale(0.9)",xs:"scale(none)"},
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
              // container
              // columnSpacing={2}
              md={12}
              item
              sx={{
                transform: { lg: "scale(0.78)", xs: "scale(0.9)" },
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
                transform: { lg: "scale(0.78)", xs: "scale(0.9)" },
                margin: "0px 0px 63px 0px",
                display: { lg: "flex", xs: "none" },
                justifyContent: "center",
                flexDirection: { md: "row", xs: "column" },


              }}
            >
              {VisitCard2.map((i) => {
                return (
                  <Grid m="0px 20px" item md={4} xs={12} className={classes.visit_Card}>
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
      </Grid >
        {/* <Grid>
          <Footer />
        </Grid> */}

      </Layout>
    </Grid >
  );
};

export default About;
