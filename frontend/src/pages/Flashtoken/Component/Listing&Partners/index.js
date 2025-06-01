import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import partner1 from "../../../../assests/Images/partner1.png";
import partner2 from "../../../../assests/Images/partner2.png";
import partner3 from "../../../../assests/Images/partner3.png";
import partner4 from "../../../../assests/Images/partner4.png";
import partner5 from "../../../../assests/Images/partner5.png";
import partner6 from "../../../../assests/Images/partner6.png";
import partner7 from "../../../../assests/Images/partner7.png";
import partner8 from "../../../../assests/Images/partner8.png";
import partner9 from "../../../../assests/Images/partner9.png";
import partner10 from "../../../../assests/Images/partner10.png";
import partner11 from "../../../../assests/Images/partner11.png";
import partner12 from "../../../../assests/Images/partner12.png";
import partner13 from "../../../../assests/Images/partner13.png";
import partner14 from "../../../../assests/Images/partner14.png";
import partner15 from "../../../../assests/Images/partner15.png";
import partner16 from "../../../../assests/Images/partner16.png";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const ListingPartners = () => {
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
      img: partner4,
    },
    {
      img: partner5,
    },
  ];
  const list2 = [
    {
      img: partner6,
    },
    {
      img: partner7,
    },
    {
      img: partner8,
    },
    {
      img: partner9,
    },
  ];
  const list3 = [
    {
      img: partner10,
    },
    {
      img: partner11,
    },
    {
      img: partner12,
    },
    {
      img: partner13,
    },
    {
      img: partner14,
    },
  ];
  const list4 = [
    {
      img: partner15,
    },
    {
      img: partner16,
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
            <Box
              sx={{
                // mt: "88.22px",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {list4.map((i) => {
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ListingPartners;
