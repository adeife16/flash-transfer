import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import one from "../../../../assests/Images/3d1.png";
import two from "../../../../assests/Images/3d2.png";
import three from "../../../../assests/Images/3d3.png";
import four from "../../../../assests/Images/3d4.png";
import line3 from "../../../../assests/Images/Line3.png";

import flashappOveralIcon from "../../../../assests/Images/flasapp-hanging-icon.png";
import lock from "../../../../assests/Images/lock.png";

import blockhainsecured from "../../../../assests/Images/blockhainsecured.png";
import singletransaction from "../../../../assests/Images/singletransaction.png";
import ReplaceBankAccount from "../../../../assests/Images/ReplaceBankAccount.png";
import tokenDeflationary from "../../../../assests/Images/tokenDeflationary.png";
import columnBackground from "../../../../assests/Images/columnBackground.png";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";
const data = [
  {
    number: "01.",
    img: lock,
    txt: "Airdrop",
    para1: "Each month receive Flash in your wallet. ",
    para2:
      " All NFTs give access to a private VIP club (whitelist, investment advice with our experts and other benefits that will be revealed later).",
  },
  {
    number: "02.",
    img: lock,
    txt: "Ranking Increase",
    para1: "Will quickly increase the privilege ranking.",
    para2:
      "All NFTs give access to a private VIP club (whitelist, investment advice with our experts and other benefits that will be revealed later).",
  },
  {
    number: "03.",
    img: lock,
    txt: "Discount on transaction fees",
    para1: "Will entitle you to fees on money transfer site transactions.",
    para2:
      "All NFTs give access to a private VIP club (whitelist, investment advice with our experts and other benefits that will be revealed later).",
  },
  {
    number: "04.",
    img: lock,
    txt: "Random effect",
    para1: "Every 3 months or 6 months the function of the NFT changes.",
    para2:
      " All NFTs give access to a private VIP club (whitelist, investment advice with our experts and other benefits that will be revealed later).",
  },
];
const NFTutility = () => {
  const classes = useStyles();
  const list = [
    {
      img: one,
    },
    {
      img: two,
    },
    {
      img: three,
    },
    {
      img: four,
    },
  ];
  return (
    <>
      <Grid
        container
        sx={{
          color: "white",
        }}
      >
        <Grid
          item
          md={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid item md={6}>
            <Typography
              sx={{
                // mt: "8px",
                textTransform: "uppercase",

                fontFamily: "'Manrope' !important",
                fontSize: "50px !important",
                fontWeight: "800 !important",
                lineHeight: "130% !important",
                color: "#FBBF04",
              }}
            >
              Get your nft utility
            </Typography>
          </Grid>
          <Grid
            container
            fixed
            sx={{
              maxWidth: "1400px",
              color: "white",
              margin: "120px auto 0px auto",
              paddingBottom: "100px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: "0",
                right: "0",
                textAlign: "center",
                marginTop: "-50px",
                marginLeft: "-20px",
              }}
            >
              {/* <img src={flashappOveralIcon} /> */}
            </Box>

            {data.map((i) => {
              return (
                <Grid
                  item
                  md={2.95}
                  sx={{
                    display: "flex",
                    margin: "0px 2px !important",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: `url(${columnBackground})`,
                      // width: "100%",
                      width:"300px",
                      height: "350px",
                      // margin: "0px 10px !important",
                      // textAlign: "center",
                      backgroundSize: " contain",
                    }}
                  >
                    <Box margin="20px">
                      <Typography
                        sx={{
                          fontFamily: "'Manrope' !important",
                          fontSize: "35px !important",
                          fontWeight: "600 !important",
                          lineHeight: "47.81px !important",
                          color: "#FFFF",
                        }}
                      >
                        {i.number}
                      </Typography>
                      {/* <img src={i.img}/> */}
                      <Box
                        // className={classes.flashBoxesImage}
                        component="img"
                        src={i.img}
                      />
                      <Typography
                        sx={{
                          fontFamily: "'Manrope' !important",
                          fontSize: "20px !important",
                          fontWeight: "700 !important",
                          lineHeight: "27.32px !important",
                          color: "#FFFF",
                        }}
                      >
                        {i.txt}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Manrope' !important",
                          fontSize: "14px !important",
                          fontWeight: "400 !important",
                          lineHeight: "21px !important",
                          color: "#FBBF04",
                        }}
                      >
                        {i.para1}
                      </Typography>{" "}
                      <Typography
                        sx={{
                          fontFamily: "'Manrope' !important",
                          fontSize: "14px !important",
                          fontWeight: "400 !important",
                          lineHeight: "150% !important",
                          color: "#85898F",
                        }}
                      >
                        {i.para2}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                mt: "88.22px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {list.map((i) => {
                return (
                  <Box
                    sx={{
                      margin: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <img
                        src={i.img}
                        style={{ width: "269px", height: "393px" }}
                      />
                    </Box>
                  </Box>
                );
              })}
              <Box></Box>
            </Box>
          </Grid>
          <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                mt: "88.22px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: "220px",
                  width: "220px",
                  // background: "linear-gradient(180deg, #181818 0%, rgba(24, 24, 24, 0) 100%)"
                  //   border: "1px solid libear #FBBF04
                  //   100%
                  //   #000000
                  //   0%",
                  border:
                    "1px solid  linear-gradient(306.56deg, #FBBF04 -1.32%, rgba(0, 0, 0, 0) 77.14%)",
                }}
              ></Box>
              <Box></Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default NFTutility;
