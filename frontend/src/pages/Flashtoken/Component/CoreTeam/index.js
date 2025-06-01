import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import partner1 from "../../../../assests/Images/partner1.png";
import partner3 from "../../../../assests/Images/partner3.png";
import partner4 from "../../../../assests/Images/partner4.png";
import partner17 from "../../../../assests/Images/partner17.png";
import partner18 from "../../../../assests/Images/partner18.png";
import partner19 from "../../../../assests/Images/partner19.png";
import partner20 from "../../../../assests/Images/partner20.png";
import partner21 from "../../../../assests/Images/partner21.png";
import partner22 from "../../../../assests/Images/partner22.png";
import partner23 from "../../../../assests/Images/partner23.png";
import partner24 from "../../../../assests/Images/partner24.png";
import partner25 from "../../../../assests/Images/partner25.png";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const CoreTeams = () => {
  const classes = useStyles();
  const list1 = [
    {
      img: partner1,
    },
    {
      img: partner4,
    },
    {
      img: partner3,
    },
    {
      img: partner17,
    },
    {
      img: partner18,
    },
    {
      img: partner19,
    },
  ];
  const list2 = [
    {
      img: partner20,
    },
    {
      img: partner21,
    },
    {
      img: partner22,
    },
    {
      img: partner23,
    },
  ];
  const list3 = [
    {
      img: partner24,
    },
    {
      img: partner25,
    },
  ];

  return (
    <>
      <Grid
        container
        sx={{
          height: "665.62px",
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
          <Grid
            item
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                mt: "80px",
                fontFamily: "'Manrope' !important",
                fontSize: "50px !important",
                fontWeight: "800 !important",
                lineHeight: "65px !important",
                color: "#ffff",
              }}
            >
              Listing & Partners
            </Typography>
          </Grid>
          <Grid
            item
            md={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                // mt: "88.22px",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {list1.map((i) => {
                return (
                  <Box
                    sx={{
                      margin: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <img src={i.img} />
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                // mt: "88.22px",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {list2.map((i) => {
                return (
                  <Box
                    sx={{
                      margin: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <img src={i.img} />
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                // mt: "88.22px",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {list3.map((i) => {
                return (
                  <Box
                    sx={{
                      margin: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <img src={i.img} />
                    </Box>
                  </Box>
                );
              })}
            </Box>{" "}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CoreTeams;
