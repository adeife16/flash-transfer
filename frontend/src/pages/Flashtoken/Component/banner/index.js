import {
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import FlashLogo from "../../../../assests/Logo/Flashlogo.png";
// import Flag from "../../assests/Logo/Flag.svg";
import insta from "../../../../assests/Images/insta.png";
import youtube from "../../../../assests/Images/youtube.png";
import tele from "../../../../assests/Images/tele.png";
import book from "../../../../assests/Images/book.png";
import arrow from "../../../../assests/Images/2arrow.png";
import git from "../../../../assests/Images/git.png";
import fb from "../../../../assests/Images/tweter.png";
import twetter from "../../../../assests/Images/tweter.png";
import In from "../../../../assests/Images/in.png";
import face from "../../../../assests/Images/face.png";
import bannerBackground from '../../../../assests/Images/banner-background.png'
import flashappOveralIcon from '../../../../assests/Images/flasapp-hanging-icon.png'

import twetterbtn from "../../../../assests/Images/tweterbtn.png";
import telebtn from "../../../../assests/Images/tele2.png";
import flashbtn from "../../../../assests/Images/flashbtn.png";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const Banner = () => {
  const classes = useStyles();
  const Navs = [
    {
      img: twetter,
    },
    {
      img: tele,
    },
    {
      img: youtube,
    },
    {
      img: insta,
    },
    {
      img: fb,
    },
    {
      img: git,
    },
    {
      img: book,
    },
    {
      img: In,
    },
    {
      img: arrow,
    },
    {
      img: face,
    },
  ];
  return (
    <>
      <Grid container sx={{position:"relative",  color: "white" ,height: "949px",backgroundImage:`url(${bannerBackground})`,}}>
        <Grid mt="185px"  item  md={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            item
            md={11.5}
            sx={{

              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Grid item md={1.5}>
              <Box
                sx={{
                  backgroundColor: "#202020",
                  width: "40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "30.5px",
                }}
              >
                {Navs.map((i) => {
                  return (
                    <Box sx={{ margin: "10px 0px" }}>
                      <img src={i.img} />
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            <Grid item md={6.8}>
              <Box sx={{ marginTop: "40px" }}>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "'Manrope' !important",
                    fontSize: "16px !important",
                    fontWeight: "600 !important",
                    // lineHeight: "160px !important",
                    color: "#FBBF04",
                  }}
                >
                  Flash Technologies L.L.C-FZ
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",

                    fontFamily: "'Manrope' !important",
                    fontSize: "89.58px !important",
                    fontWeight: "800 !important",
                    // lineHeight: "120px !important",
                    color: "#ffff",
                  }}
                >
                  Flash
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",

                    fontFamily: "'Manrope' !important",
                    fontSize: "89.58px !important",
                    fontWeight: "800 !important",
                    // lineHeight: "120px !important",
                    color: "#84898F",
                  }}
                >
                  Technologies
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <IconButton
                    sx={{
                      height: "62px",
                      fontSize: "20px",
                      margin: "0px 5px",
                      fontWeight: 600,
                      lineHeight: "150%",
                      borderRadius: "69px",
                      color: "#0F0F0E",
                      padding: "15px 55px",
                      // width: "246px",
                      backgroundColor: "#FBBF04",
                    }}
                  >
                    <img src={flashbtn} />
                    Buy Flash
                  </IconButton>
                  <IconButton
                    sx={{
                      height: "62px",
                      fontSize: "20px",

                      fontWeight: 600,

                      margin: "0px 5px",

                      lineHeight: "150%",
                      borderRadius: "69px",
                      color: "#FBBF04",
                      padding: "15px 40px",
                      border: "1px solid #FBBF04",
                      // width: "246px",
                      backgroundColor: "#181818",
                    }}
                  >
                    <img src={telebtn} style={{marginRight:"5px"}}/>
                    Telegram
                  </IconButton>
                  <IconButton
                    sx={{
                      height: "62px",
                      fontSize: "20px",

                      fontWeight: 600,

                      margin: "0px 5px",
                      lineHeight: "150%",
                      borderRadius: "69px",
                      color: "#FBBF04",
                      padding: "15px 40px",
                      border: "1px solid #FBBF04",
                      // width: "246px",
                      backgroundColor: "#181818",
                    }}
                  >
                    <img src={twetterbtn} style={{ margin: "0px 5px",}}/>
                    Twitter
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3.7}>
              <Box
                sx={{
                  marginTop: "40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "'Manrope' !important",
                    fontSize: "26px !important",
                    fontWeight: "500 !important",
                    lineHeight: "150% !important",
                    color: "#ffff",
                  }}
                >
                  Flash Technologies creates a money transfer ecosystem.
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "'Manrope' !important",
                    fontSize: "18px !important",
                    fontWeight: "400 !important",
                    lineHeight: "165% !important",
                    color: "#85898F",
                  }}
                >
                  Flash transfer is the first platform in the world that allows
                  you to buy, send or sell cryptocurrencies, via our merchant
                  network with reasonable fees. Flash Transfer enables you as
                  well to exchange cash for cryptocurrencies and vice versa.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        
        </Grid>
        <Grid  item  md={12} sx={{ display: "flex", justifyContent: "center" }}>
        <div className={classes.overlapIcon}>
            <img src={flashappOveralIcon}/>
        </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
