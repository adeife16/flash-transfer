import { Typography, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import flashbtn from "../../../../assests/Images/flashbtn.png";

import { useStyles } from "../../../../Styles";
import mobile from "../../../../assests/Images/mobile.png";
import circle from "../../../../assests/Images/circle.png";
import appstore from "../../../../assests/Images/applebtn.png";
import playstore from "../../../../assests/Images/storebtn.png";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const FlashTransfer = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        sx={{
          height: "100vh",
          display: "flex",
          color: "white",
          justifyContent: "center",
          overflow:'hidden'
        }}
      >
        <Grid
          item
          md={10}
          sx={{
            position: "relative",
            mt: "181px",
            display: "flex",
            // alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Grid
            item
            md={5}
            sx={{
              display: "flex",
              alignItems: "end",
              position: "relative",
              justifyContent: "center",
              marginBottom:'-200px',
              transform:'scale(1.5)'
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                position: "absolute",
                width: "550px",
                backgroundColor: "#FBBF04",
                height: "450px",
              }}
            >
              {/* <img src={circle} /> */}
            </Box>
            <Box sx={{ position: "relative" }}>
              <img src={mobile} />
            </Box>
          </Grid>
          <Grid item md={5} mt="60px">
            <Typography
              sx={{
                mt: "8",
                fontFamily: "'Manrope' !important",
                fontSize: "16px !important",
                fontWeight: "500 !important",
                lineHeight: "150% !important",
                letterSpacing: "0.1em",
                color: "#FBBF04",
              }}
            >
              Cash to crypto and vice versa.
            </Typography>
            <Typography
              sx={{
                mt: "8",
                fontFamily: "'Manrope' !important",
                fontSize: "50px !important",
                fontWeight: "800 !important",
                lineHeight: "140% !important",
                color: "#FFF",
              }}
            >
              Flash Transfer
            </Typography>
            <Typography
              sx={{
                mt: "8",
                fontFamily: "'Manrope' !important",
                fontSize: "19.71px !important",
                fontWeight: "400 !important",
                lineHeight: "160% !important",
                color: "#FFFF",
              }}
            >
              Exchange your cryptocurrency vs fiat or buy directly
              cryptocurrency with fiat through our approved partners. You can
              also send your cryptocurrency and the receiver withdraws it in
              fiat all over the world using a Binance account or using your
              no-custodial wallet ( Flash wallet, Metamask, Binance wallet,
              Trust wallet ...).
            </Typography>
            <IconButton
              sx={{
                height: "62px",
                fontSize: "16px",
                margin: "20px 5px 20px 5px",
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
            <Typography
              sx={{
                mt: "8",
                textTransform: "uppercase",
                fontFamily: "'Manrope' !important",
                fontSize: "16px !important",
                fontWeight: "500 !important",
                lineHeight: "24px !important",
                color: "#84898F",
              }}
            >
              DOWNLOAD FROM
            </Typography>
            <Box
              sx={{
                mt:"10px",
                display: "flex",
                // alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box mr={1}>
                <img src={playstore} />
              </Box>
              <Box ml={1}>
                <img src={appstore} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FlashTransfer;
