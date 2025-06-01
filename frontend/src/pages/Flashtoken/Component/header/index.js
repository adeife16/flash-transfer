import { Typography, Grid, FormControl, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import FlashLogo from "../../../../assests/Logo/Flashlogo.png";
// import Flag from "../../assests/Logo/Flag.svg";
import AmericanFlag from "../../../../assests/Images/AmericanFlag.png";
import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const FTheader = () => {
  const classes = useStyles();
  const Navs = [
    {
      name: " Our services",
      color: "#FBBF04",
    },
    {
      name: " Roadmap",
      color: "#85898F",
    },
    {
      name: " Tokenomics",
      color: "#85898F",
    },
    {
      name: "Whitepaper",
      color: "#85898F",
    },
    {
      name: "Audit",
      color: "#85898F",
    },
    {
      name: " NFT",
      color: "#85898F",
    },
    {
      name: " Partners",
      color: "#85898F",
    },
    {
      name: "Team",
      color: "#85898F",
    },
    {
      name: "AMA",
      color: "#85898F",
    },
    {
      name: "FAQ",
      color: "#85898F",
    },
    {
      name: "Contact",
      color: "#85898F",
    },
  ];
  return (
    <>
      <Grid container>
        <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            item
            md={11.5}
            mt="20px"
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src={FlashLogo} />
                <Typography sx={{ color: "white", ml: "5px" }}>
                  Flash Technologies
                </Typography>
              </Box>
            </Grid>
            <Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "0px 10px",
                }}
              >
                {Navs.map((i) => {
                  return (
                    <Box sx={{ margin: "0px 7px", textTransform: "uppercase" }}>
                      <Typography
                        sx={{
                          color: `${i.color}`,
                          fontFamily: "Manrope !important",
                          fontSize: "14px !important",
                          fontWeight: "400 !important",
                          lineHeight: "16.4px !important",
                        }}
                      >
                        {i.name}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            <Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src={AmericanFlag}
                  style={{ width: "27px", height: "27px" }}
                />
                <FormControl
                  sx={{
                    // m: 1,
                    // minWidth: 70,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ color: "white" }}>En</Typography>
                  <Select
                    sx={{
                      // width: "120px",
                      // margin: "0px 10px",
                      fontSize: "14px",
                      color: "white",

                      fontWeight: "500",
                    }}
                    inputProps={{
                      classes: {
                        icon: { fill: "white" },
                      },
                    }}
                    variant="standard"
                    disableUnderline
                    displayEmpty
                  >
                    <MenuItem value="">August 2018</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <AppButton
                  textTransform="none"
                  title="Become a Merchant"
                  width="222px"
                  backgroundColor="#FBBF04"
                  borderRadius="66px"
                  height="48px"
                />
              </Box>
            </Grid>
          </Grid>{" "}
        </Grid>
      </Grid>
    </>
  );
};

export default FTheader;
