import { Typography, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import FlashLogo from "../../../../assests/Logo/Flashlogo.png";

import AppButton from "../../../../components/AppButton";
import { Link } from "react-router-dom";
// import MobileDrawer from "../MobileDrawer";

const Footer = () => {
  const classes = useStyles();
  const list1 = [
    {
      url: "Our Services",
    },
    {
      url: "Tokenomics",
    },
    {
      url: "Roadmap",
    },
    {
      url: "Application",
    },
    {
      url: "Team",
    },
  ];
  const list2 = [
    {
      url: "Pitch Deck",
    },
    {
      url: "Whitepaper",
    },
    {
      url: "Audit",
    },
    {
      url: "Flash Company",
    },
    {
      url: "License",
    },
  ];
  const list3 = [
    {
      url: "Terms of Use",
    },
    {
      url: "Privacy Policy",
    },
    {
      url: "Legal Notice",
    },
  ];

  return (
    <>
      <Grid
        container
        sx={{
          height: "498px",
          display: "flex",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Grid
          item
          md={12}
          sx={{
            display: "flex",
            // alignItems: "center",
            flexDirection: "row",
            mt: "100px",
            justifyContent: "center",
          }}
        >
          <Grid item md={4} sx={{ padding: "0px 70px" }}>
            <Box
              sx={{
                mt: "20px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img src={FlashLogo} />

              <Typography
                sx={{
                  ml: "10px",
                  fontFamily: "'Manrope' !important",
                  fontSize: "22px !important",
                  fontWeight: "800 !important",
                  lineHeight: "40px !important",
                }}
              >
                Flash Technologies
              </Typography>
            </Box>
            <Typography
              sx={{
                marginTop: "37px",
                fontFamily: "'Manrope' !important",
                fontSize: "16px !important",
                fontWeight: "400 !important",
                lineHeight: "170% !important",
                color: "#85898F",
              }}
            >
              Flash Technologies : Business Center 1, M Floor, The Meydan Hotel,
              Nad Al Sheba, Dubai, U.A.E.
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              display: "flex",
              // alignItems: "center",
              flexDirection: "row",
              // justifyContent: "center",
            }}
          >
            <Grid
              item
              md={4}
              sx={{
                display: "flex",

                alignItems: "center",
                flexDirection: "column",
                // justifyContent: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: "18px !important",
                    fontWeight: "600 !important",
                    lineHeight: "160% !important",
                  }}
                >
                  Pages
                </Typography>
                {list1.map((i) => {
                  return (
                    <>
                      <Box>
                        <Link
                          to=""
                          style={{
                            textDecoration: "none",
                            color: "#85898F",
                          }}
                        >
                          <Typography
                            sx={{
                              marginTop: "10px",
                              fontFamily: "'Manrope' !important",
                              fontSize: "16px !important",
                              fontWeight: "400 !important",
                              lineHeight: "170% !important",
                              color: "#85898F",
                            }}
                          >
                            {i.url}
                          </Typography>
                        </Link>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Grid>
            <Grid
              item
              md={4}
              sx={{
                display: "flex",

                alignItems: "center",
                flexDirection: "column",
                // justifyContent: "center",
              }}
            >
              <Box>
                {/* <img src={FlashLogo} /> */}

                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: "18px !important",
                    fontWeight: "600 !important",
                    lineHeight: "160% !important",
                  }}
                >
                  Documents
                </Typography>
                {list2.map((i) => {
                  return (
                    <>
                      <Box>
                        <Link
                          to=""
                          style={{
                            textDecoration: "none",
                            color: "#85898F",
                          }}
                        >
                          <Typography
                            sx={{
                              marginTop: "10px",
                              fontFamily: "'Manrope' !important",
                              fontSize: "16px !important",
                              fontWeight: "400 !important",
                              lineHeight: "170% !important",
                              color: "#85898F",
                            }}
                          >
                            {i.url}
                          </Typography>
                        </Link>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Grid>
            <Grid
              item
              md={4}
              sx={{
                display: "flex",

                alignItems: "center",
                flexDirection: "column",
                // justifyContent: "center",
              }}
            >
              <Box>
                {/* <img src={FlashLogo} /> */}

                <Typography
                  sx={{
                    fontFamily: "'Manrope' !important",
                    fontSize: "18px !important",
                    fontWeight: "600 !important",
                    lineHeight: "160% !important",
                  }}
                >
                  Legal
                </Typography>
                {list3.map((i) => {
                  return (
                    <>
                      <Box>
                        <Link
                          to=""
                          style={{
                            textDecoration: "none",
                            color: "#85898F",
                          }}
                        >
                          <Typography
                            sx={{
                              marginTop: "10px",
                              fontFamily: "'Manrope' !important",
                              fontSize: "16px !important",
                              fontWeight: "400 !important",
                              lineHeight: "170% !important",
                              color: "#85898F",
                            }}
                          >
                            {i.url}
                          </Typography>
                        </Link>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Grid>
          </Grid>{" "}
          <Grid item md={4} sx={{ padding: "0px 20px" }}>
            <Typography
              sx={{
                fontFamily: "'Manrope' !important",
                fontSize: "18px !important",
                fontWeight: "600 !important",
                lineHeight: "160% !important",
              }}
            >
              Join Our Newsletter
            </Typography>

            <Box
              sx={{
                marginTop: "19px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "389px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                height: "52px",
                borderRadius: "28px",
                backgroundColor: "rgba(255, 255, 255, 0.05) ",
              }}
            >
              <Typography pl="20px">Your email address</Typography>

              <IconButton
                sx={{
                  height: "62px",
                  fontSize: "16px",
                  // margin: "0px 5px",
                  fontWeight: 500,
                  lineHeight: "170%",
                  borderRadius: "61px",
                  color: "#0F0F0E",
                  padding: "15px 55px",
                  // width: "246px",
                  backgroundColor: "#FBBF04",
                }}
              >
                Subscribe
              </IconButton>
            </Box>
            <Typography
              sx={{
                marginTop: "21px",
                fontFamily: "'Manrope' !important",
                fontSize: "16px !important",
                fontWeight: "400 !important",
                lineHeight: "170% !important",
                color: "#85898F",
              }}
            >
              Will send you weekly updates for your better finance management.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          md={10}
          sx={{
            display: "flex",
            borderTop: "1px solid #5e5757",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography>© 2022, Flash Technologies</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
