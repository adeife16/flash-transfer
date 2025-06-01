import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";

import list1 from "../../../../assests/Images/list1.png";
import list2 from "../../../../assests/Images/list2.png";
import list3 from "../../../../assests/Images/list3.png";
import list4 from "../../../../assests/Images/list4.png";
import mapV from "../../../../assests/Images/V.png";
import mapV2 from "../../../../assests/Images/V2.png";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const Roadmap = () => {
  const classes = useStyles();
  const list = [
    {
      img: list1,
      name: "Binance",
    },
    {
      img: list2,
      name: "Cronos",
    },
    {
      img: list3,
      name: "Ethereum",
    },
    {
      img: list4,
      name: "Polygon",
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
          mt="130px"
          sx={{
            // position:"absolute",

            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            md={8}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontFamily: "'Manrope' !important",
                fontSize: "16px !important",
                letterSpacing: "1px",
                fontWeight: "500 !important",
                lineHeight: "24px !important",
                color: "#FBBF04",
              }}
            >
              ROADMAP
            </Typography>

            <Typography
              sx={{
                mt: "8px",
                fontFamily: "'Manrope' !important",
                fontSize: "50px !important",
                fontWeight: "800 !important",
                lineHeight: "130% !important",
                color: "#ffff",
              }}
            >
              Flash Technologies Roadmap
            </Typography>
          </Grid>
          <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <img src={mapV} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Roadmap;
