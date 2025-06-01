import React from "react";
import { useStyles } from "../../Styles";
import VisaSmall from "../../assests/Images/VisaSmall.png";
import master from "../../assests/Images/matersmall.png";
import "../../font.css/index.css"

import { Box } from "@mui/system";
import { Divider, Grid, Typography } from "@mui/material";
export interface AppProps {
  close?: any;

}

const CardsStatus = ({ close }: AppProps) => {
  const classes = useStyles();
  const visaCardsobject = [
    {
      img: VisaSmall,
      text: "Card number",
      bg:"#26C000",
      border: "1px solid #E8ECEF",
      number: "3210 **** **** 4008",
      active: "Active",
      status: "Status"

    },
    {
      img: master,
      text: "Card number",
      bg:"#C5221F",
      border: "1px solid #E8ECEF",
      number: "3210 **** **** 4008",
      active: "Active",
      status: "Status"

    }, {
      img: VisaSmall,
      text: "Card number",
      bg:"#26C000",
      border: "1px solid #E8ECEF",
      number: "3210 **** **** 4008",
      active: "Blocked",
      status: "Status"

    }, {
      img: master,
      text: "Card number",
      bg:"#26C000",
      border: "1px solid #E8ECEF",
      number: "3210 **** **** 4008",
      active: "Active",
      status: "Status"

    }, {
      img: VisaSmall,
      text: "Card number",
      bg:"#26C000",
      border: "none",
      number: "3210 **** **** 4008",
      active: "Blocked",
      status: "Status"

    },

  ];
  return (
    <>
      <Grid container sx={{ marginTop: "32px" }}>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: { lg: "#fff", xs: "#fff" },
              borderRadius: "4px",
            }}
            className={classes.settings_my_cards2}
          >
            <Box  sx={{ m:{lg:"20px",xs:"10px"},display: { lg: "none", xs: "flex" }, justifyContent: "end" }}>
              <img src={close} />
            </Box>
            {visaCardsobject.map((i) => (
              <Box key={Math.random()}>
                <Box className={classes.status_checking_Container} sx={{padding:{lg:"0px 120px 0px 20px",xs:"0px 20px 0px 20px"}}}>

                  <Box sx={{ display: "flex", }}>
                    <img src={i.img} alt={"image"} height="40px" />
                    <Box sx={{ marginLeft: "24px" }}>
                      <Typography sx={{
                        fontWeight: "400 !important",
                        fontSize: "16px !important",
                        lineHeight: "24px !important",
                      }}>{i.number}</Typography>
                      <Typography sx={{
                        fontWeight: "400 !important",
                        fontSize: "14px !important",
                        lineHeight: "21px !important",
                        color: "#98A9BC !important",
                      }}>{i.text}</Typography>
                    </Box>
                  </Box>
                  <Box pr="20px" sx={{display:{lg:"flex",xs:"none"}, width: "60px",  flexDirection: "column" }}>
                    <Typography sx={{
                      fontWeight: "400 !important",
                      fontSize: "16px !important",
                      lineHeight: "24px !important",
                      color: "#252631 !important",
                    }}>{i.active}</Typography>
                    <Typography sx={{
                      fontWeight: "400 !important",
                      fontSize: "14px !important",
                      lineHeight: "21px !important",
                      color: "#98A9BC !important",
                    }}>{i.status}</Typography>
                  </Box>
                   <Box sx={{display:{lg:"none",xs:"flex"},}}>
                    <Box sx={{backgroundColor:`${i.bg}`,width:" 13px",height:"13px",mt:"15px",borderRadius:"100px"}}>

                  </Box>  
                  </Box> 


                </Box>
                <Box sx={{ margin: "20px 10px 16px 20px", borderTop: `${i.border}` }}>
                  {/* <Divider sx={{ margin: "16px 0px" }} /> */}
                </Box>
                {/* <Box sx={{display:`${i.flex}`}}> */}
                {/* <Divider sx={{ margin: "16px 0px" }} /> */}
                {/* </Box> */}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CardsStatus;
