import { Typography, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import linedot from "../../../../assests/Images/Linedot.png";

import { useStyles } from "../../../../Styles";
import fourimg from "../../../../assests/Images/fourimg.png";
import one from "../../../../assests/Images/onetag.png";
import two from "../../../../assests/Images/twotag.png";

import three from "../../../../assests/Images/threetag.png";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const InvestFuture = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        sx={{
          height: "130vh",
          display: "flex",
          color: "white",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          md={8}
          sx={{
            display: "flex",
            // alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Grid
            item
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <img src={fourimg} />
            </Box>
          </Grid>
          <Grid item md={4} mt="70px">
            <Box >
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
                Staking
              </Typography>
              <Typography
                sx={{
                  mt: "8",
                  fontFamily: "'Manrope' !important",
                  fontSize: "50px !important",
                  fontWeight: "800 !important",
                  lineHeight: "65px !important",
                  color: "#FFF",
                }}
              >
                Invest in your Future
              </Typography>
              <Typography
                sx={{
                  mt: "22px",
                  fontFamily: "'Manrope' !important",
                  fontSize: "16px !important",
                  fontWeight: "400 !important",
                  lineHeight: "21.86px !important",
                  color: "#84898F",
                }}
              >
                Clients can stake Flash or our approved partner's tokens for a
                certain period of time in order to earn rewards and bonuses
              </Typography>
            </Box>
            <Box
              sx={{
                
                mt: "20px",
                display: "flex",
                // alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ marginLeft: "15px", position: "relative" }}>
                <img src={linedot} />
              </Box>

              <Box
                sx={{
                  padding:"0px 90px 0px 0px",
                  // mt
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  mb="40px"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                  }}
                >
                  <img src={one} />
                  <Box p="0 20px 0px 20px">
                    <Typography
                      sx={{
                        fontFamily: "'Manrope' !important",
                        fontSize: "20px !important",
                        fontWeight: "700 !important",
                        lineHeight: "27px !important",
                      }}
                    >
                      Stake
                    </Typography>
                    <Typography
                      sx={{
                        mt: "16px",
                        fontFamily: "'Manrope' !important",
                        fontSize: "16px !important",
                        fontWeight: "400 !important",
                        lineHeight: "160% !important",
                        color: "#84898F",
                      }}
                    >
                      Stake FLASH and receive rewards.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  // mb="25px"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                  }}
                >
                  <img src={two} />
                  <Box  p="0 20px 0px 20px">
                    <Typography
                      sx={{
                        fontFamily: "'Manrope' !important",
                        fontSize: "20px !important",
                        fontWeight: "700 !important",
                        lineHeight: "27px !important",
                      }}
                    >
                      Complete Staking Term
                    </Typography>
                    <Typography
                      sx={{
                        mt: "17px",
                        fontFamily: "'Manrope' !important",
                        fontSize: "16px !important",
                        fontWeight: "400 !important",
                        lineHeight: "160% !important",
                        color: "#84898F",
                      }}
                    >
                      Users can choose the staking terms and hold their stake
                      for s period of time to earn higher yield bonus returns.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                  }}
                >
                  <img src={three} />
                  <Box p="0 20px">
                    <Typography
                      sx={{
                        fontFamily: "'Manrope' !important",
                        fontSize: "20px !important",
                        fontWeight: "700 !important",
                        lineHeight: "27px !important",
                      }}
                    >
                      Pay via Flash and partner tokens
                    </Typography>
                    <Typography
                      sx={{
                        mt: "13px",
                        fontFamily: "'Manrope' !important",
                        fontSize: "16px !important",
                        fontWeight: "400 !important",
                        lineHeight: "160% !important",
                        color: "#84898F",
                      }}
                    >
                      After every successful stake, users are rewarded with
                      Flash token as a farming bonus and partners tokens.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default InvestFuture;
