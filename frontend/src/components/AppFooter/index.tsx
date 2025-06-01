import { Divider, Grid, IconButton, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "../../Styles";
import AppButton from "../AppButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AppInputFields from "../AppInputFields";
// import { useNavigate } from "react-router-dom";
import Twitter from "../../assests/Images/twite.png";
import Facebook from "../../assests/Images/facebook.png";
import insta from "../../assests/Images/insta.png";
import youtube from "../../assests/Images/youtube.png";
import print from "../../assests/Images/printist.png";
import "../../font.css/index.css"

import btn from "../../assests/Images/arrowbtn.png";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export interface AppProps {
  event?: any;

}
const AppFooter = () => {
  const classes = useStyles();
  // const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const options = [
    {

      text: "Company",
      path: "",
    },
    // {

    //   text: "About",
    //   path: "/about",
    // },
    // {
    //   text: "FAQ",
    //   path: "/faq",
    // },
    // {
    //   text: "Blog",
    //   path: "/blogs",
    // },
    // {
    //   text: "Countries",
    //   path: "privacypolicy",
    // },
  ];
  const options2 = [
    {

      text: "Information",
      path: "",
    },
    // {
    //   text: "Lorem Ipsum",
    //   path: "/termsAndConditions",
    // },
    // {
    //   text: "Request demo",
    //   path: "",
    // },
    // {
    //   text: "Support",
    //   path: "",
    // },
    // {
    //   text: "Status",
    //   path: "",
    // },
  ];

  const footer_nav_item = [
    {
      text: "About",
      path: "/about",
    },
    {
      text: "FAQ",
      path: "/questions/answers",
    },
    {
      text: "Blog",
      path: "/blogs",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];
  const footer_nav_item2 = [
    {
      text: "Privacy Notice & Cookies",
      path: "/privacypolicy",
    },
    {
      text: "Terms and Conditions",
      path: "/termsAndConditions",
    },
    {
      text: "Become a Merchant",
      path: "/registrationformerchant",
    },
    {
      text: "Complaints",
      path: "/complaints",
    },
  ];

  const showNav = () => {
    setShow(!show)
  }
  const showNav2 = () => {
    setShow2(!show2)
  }
  const [age, setAge] = useState("");
  const handleChange = ({ event }: AppProps): void => {
    setAge(event.target.value);
  };
  const IconsObject = [
    {
      icon: Twitter,
      link:"https://twitter.com/Flash_Techno_Of"
    },
    {
      icon: Facebook,
      link:"https://www.facebook.com/flashtechnologiesoff"
    },
    {
      icon: insta,
      link:"https://www.instagram.com/flash_token_off/"
    },
    {
      icon: youtube,
      link:"https://www.youtube.com/channel/UCbNApPsnWrYixnri4hwUUyA"
    },
    // {
    //   icon: print,
    // },
  ];
  return (
    <>
      <Grid container className={classes.Footer_main_container}>
        <Grid
          container
          sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" } }}
        >
          <Grid lg={11.4} md={11.3} sx={{ display: "flex", justifyContent: "space-between", flexDirection: { md: "row", xs: "column" } }} >

            <Grid item xs={12} md={6} className={classes.container_Text}>
              <Typography className={classes.Stay_Up_to_Date}>
                Stay Up to Date
              </Typography>
              <Typography
                className={classes.subscribe_description}

                sx={{ color: "white",  }}
              >
                Subscribe to our weekly newsletter for updates


              </Typography>
            </Grid>
            <Grid
              item
              sx={{ display: { xs: "none", md: "flex", flexDirection: { md: "row", xs: "row",sm:"" } } }}
              xs={12}
              md={6}
              className={classes.container_Text2}
            >
              <Box
              // sx={{ display: { xs: "none" } }}
              >
                <AppInputFields placeholder={"Email"} width="393px" padding="12px 16px" height="48px" />
              </Box>
              <Box
              // sx={{ display: { xs: "none" } }}
              >
                <AppButton
                  title={"Subscribe"}
                  color={"#FFFFFF"}
                  textTransform="none"
                  width="151px"
                  backgroundColor={"#FCBF07"}
                  padding={"10px 22px "}
                  borderRadius={"0px"}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  height="48px"
                  lineHeight={"28px"}
                  endIcon={<ArrowForwardIcon />}
                  margin={"0px 0px 0px 16px"}
                />
              </Box>
            </Grid>
          </Grid>
          {/* mobile screen  */}

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "flex", sm: "none", md: "none" }, flexDirection: { md: "row", xs: "row" }, alignItems: "center" }} >
            <Grid
              item
              xs={7}>
              <AppInputFields padding="12px 16px" height="48px" placeholder={"Email"} />
            </Grid>

            <Grid item xs={5} sx={{ ml: "5px", display: { xs: "flex", sm: "none" } }}>
              <AppButton
                title={"Subscribe"}
                color={"#FFFFFF"}
                textTransform="none"
                backgroundColor={"#FCBF07"}
                padding={"10px 32px 10px 36px"}
                borderRadius={"0px"}
                fontSize={"18px"}
                fontWeight={"500"}
                height="48px"
                lineHeight={"28px"}
                endIcon={<ArrowForwardIcon />}
              />
            </Grid>
          </Grid>
          {/* end mobile screen  */}
          <Grid item md={12} sx={{ display: "flex", alignSelf: "center", justifyContent: "center" }}>
            <Divider sx={{ background: "white", width: { lg: "91%", xs: "0%" } }} />
          </Grid>
          <Grid item md={12} sx={{ display: { lg: "none",sm: "none", xs: "flex" }, margin: "10px 0px -20px 0px" }}>
            <Box sx={{ flexDirection: "column" }}>

              <Box sx={{ display: "flex", flexDirection: "row", width: "350px", padding: "10px 0px", justifyContent: "space-between" }}>

                <Typography className={classes.footer_h5_heading}>
                  Company
                </Typography>
                <IconButton onClick={showNav}>
                  <img src={btn} />
                </IconButton>
              </Box>
              {show ?
                <Box>
                  {
                    footer_nav_item.map((items) => {
                      return (
                        <Link to={items.path} style={{ textDecoration: "none" }}>
                          <Typography
                            className={classes.footer_nav_item}
                            key={Math.random()}
                          // onClick={() => navigate(items.path)}
                          >
                            {items.text}
                          </Typography>
                        </Link>
                      );
                    })
                  }
                </Box>
                : null}

            </Box>
            {/* <Box>
              <Select
                sx={{
                  '.MuiSvgIcon-root ': {
                    fill: "white !important",
                  },
                  width: "340px",
                  margin: "20px 8px",
                  fontFamily: "Inter !important",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "white",

                }}
                variant="standard"
                disableUnderline
                value={age}
                // onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">Company</MenuItem>
                <MenuItem value={10}>About</MenuItem>
                <MenuItem value={20}>FAQ</MenuItem>
                <MenuItem value={30}>Blog</MenuItem>
                <MenuItem value={30}>Countries</MenuItem>

              </Select>
            </Box> */}
          </Grid>
          <Grid item md={12} xs={12} sx={{ display: { md: "none",sm:"none", xs: "flex" } }}>
            <Box sx={{ flexDirection: "column" }}>

              <Box sx={{ display: "flex", flexDirection: "row", width: "350px", padding: "20px 0px", justifyContent: "space-between" }}>

                <Typography className={classes.footer_h5_heading}>
                  Information
                </Typography>
                <IconButton onClick={showNav2}>
                  <img src={btn} />
                </IconButton>
              </Box>
              {show2 ?
                <Box>
                  {
                    footer_nav_item2.map((items) => {
                      return (
                        <Link to={items.path} style={{ textDecoration: "none" }}>


                          <Typography
                            className={classes.footer_nav_item}
                            key={Math.random()}
                          // onClick={() => navigate(items.path)}
                          >
                            {items.text}
                          </Typography>
                        </Link>
                      );
                    })
                  }
                </Box>
                : null}
              {/* <Select
                sx={{
                  '.MuiSvgIcon-root ': {
                    fill: "white !important",
                  },
                  width: "340px",
                  margin: "20px 8px",
                  fontFamily: "Inter !important",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "white",

                }}
                variant="standard"
                disableUnderline
                value={age}
                // onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">Information</MenuItem>
                <MenuItem value={10}>Lorem Ipsum</MenuItem>
                <MenuItem value={20}>Request demo</MenuItem>
                <MenuItem value={30}>Support</MenuItem>
                <MenuItem value={30}>Status</MenuItem>

              </Select> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={3} className={classes.footer_nav_link}>
            {" "}
            <Typography className={classes.footer_h5_heading}>
              Company
            </Typography>

            {
              footer_nav_item.map((items) => {
                return (
                  <Link to={items.path} style={{ textDecoration: "none" }}>


                    <Typography
                      className={classes.footer_nav_item}
                      key={Math.random()}
                    // onClick={() => navigate(items.path)}
                    >
                      {items.text}
                    </Typography>
                  </Link>
                );
              })
            }
          </Grid>
          <Grid item xs={12} md={3} className={classes.footer_nav_link}>
            {" "}
            <Typography className={classes.footer_h5_heading}>
              Information
            </Typography>
            {footer_nav_item2.map((items) => {
              return (
                <NavLink to={items.path} style={{ textDecoration: "none", }}>

                  <Typography
                    className={classes.footer_nav_item}
                    key={Math.random()}
                  // onClick={() => navigate(items.path)}
                  >
                    {items.text}
                  </Typography>
                </NavLink>
              );
            })}
          </Grid>
          <Grid item xs={12} md={6} sx={{ pl: { xs: "0px", lg: "120px" }, marginTop: { lg: "124px", xs: "20px" }, flexDirection: "column", display: "flex" }} >
            <Box sx={{ ml: { xs: "0px", lg: "-20px" }, alignItems: "end", display: "flex" }}>
              {IconsObject.map((items) => {
                return (
                  <a href={items.link} target="_blank" >
                    <img
                      key={Math.random()}
                      src={items.icon}
                      width={"31.97px"}
                      height={"32px"}
                      style={{ marginLeft: "24px" }}
                    />
                  </a>
                );
              })}
            </Box>
            <Typography sx={{ mt: { xs: "-20px", lg: "32px" }, }} className={classes.Copyright}>
              Copyright 2022 @ Flash Technologies, All right reserved.
            </Typography>

          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AppFooter;
