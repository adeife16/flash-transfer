import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import list1 from "../../../../assests/Images/list1.png";
import list2 from "../../../../assests/Images/list2.png";
import list3 from "../../../../assests/Images/list3.png";
import list4 from "../../../../assests/Images/list4.png";
// 
import flashListedCoinBackground from "../../../../assests/Images/flashListedCoinBackground.png";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const FlashList = () => {
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
          height: "665.62px",
          color: "white",
          paddingTop:'60px',
          backgroundImage:`url(${flashListedCoinBackground})`,
          backgroundSize:'cover'
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
                textTransform: "uppercase",
                fontFamily: "'Manrope' !important",
                fontSize: "16px !important",
                letterSpacing: "1px",
                fontWeight: "500 !important",
                lineHeight: "24px !important",
                color: "#FBBF04",
              }}
            >
              OUR bLOCKCHAIN
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
              Flash is listed on
            </Typography>
          </Grid>
          <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Box 
              sx={{
                mt:"88.22px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {list.map((i) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <img src={i.img} />
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: "'Manrope' !important",
                        fontSize: "22px !important",
                        fontWeight: "700 !important",
                        lineHeight: "35.2px !important",
                        color: "#FFFF",
                      }}
                    >
                      {i.name}
                    </Typography>
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

export default FlashList;
