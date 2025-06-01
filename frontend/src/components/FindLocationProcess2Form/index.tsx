import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../Styles";
import AppButton from "../AppButton";
import AppInputFields from "../AppInputFields";
import SelectFlags from "../FlagsSelect";
import MapIcon from "../../assests/Logo/MapIcon.svg";
import CurrentLocation from "../../assests/Logo/CurrentLocation.svg";
import { Link } from "react-router-dom";
import "../../font.css/index.css"

const FindLocationProcess2Form = ({ country, getCurrentPosition, presentAddress }: any) => {
  const classes = useStyles()
  return (
    <>
      <Box
        component={"form"}
        sx={{
          boxShadow:
            "-4px -4px 22px rgba(0, 0, 0, 0.09), 2px 4px 22px rgba(0, 0, 0, 0.09)",
          padding: { lg: "24px 30px", xs: "20px 10px" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: { md: "row", lg: "row", xs: "column" } }} >
          <Box sx={{ width: "100%" }}>
            <Typography className={classes.send_FRom}>Send From</Typography>
            <SelectFlags countryName={country} />
          </Box>

          <Box sx={{ width: "100%", marginLeft: { md: "8px", sm: "80px" } }}>
            <Typography className={classes.send_FRom}>
              Enter ZIP/Postal Code
            </Typography>
            <AppInputFields
              borderRadius="6px"
              height="42px"
              placeholder={"Address,city,state or Zip"}
              inputIcon={<img src={MapIcon} alt={"image"} style={{ height: "26.67px", width: "21.33px" }} />}
              border={"1px solid #D1D5DB"}
              padding={"9px 0px"}
              value={presentAddress}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", marginTop: "17px", justifyContent: "flex-end" }} onClick={getCurrentPosition}>
          <Typography className={classes.Current_Location}
            sx={{ cursor: "pointer" }}
          >
            <img
              src={CurrentLocation}
              alt={"image"}
              style={{ verticalAlign: "middle", cursor: "pointer", marginRight: "10px" }}
            />
            Use Current Location
          </Typography>

        </Box>

        <Typography className={classes.try_to_do}>
          What are you trying to do?
        </Typography>

        <Box sx={{ display: "flex", marginBottom: "48px" }}>
          <AppButton
            textTransform="none"
            title={"Send Money"}
            border={"1px solid #5D5FEF"}
            backgroundColor={"#E9F5FF"}
            padding={"19px 0px"}
          />
          <AppButton

            textTransform="none"
            title={"Pick up Money"}
            border={"1px solid #5D5FEF"}
            backgroundColor={"#fff"}
            padding={"19px 0px"}
            className={classes.pick_up_money}
          />
        </Box>
        <Link to="/findlocation2" style={{ textDecoration: "none", width: "142px" }}>

          <Box sx={{ display: { lg: "flex", xs: "none" }, justifyContent: "flex-end" }}>
            <AppButton
              textTransform="none"
              title={"Continue"}
              backgroundColor={"#FCBF07"}
              color={"#fff"}
              maxWidth={"435px"}
              padding={"17px 0px"}
            />
          </Box>
          <Box sx={{ display: { lg: "none", xs: "flex" }, justifyContent: "flex-end" }}>
            <AppButton
              textTransform="none"
              title={"Continue"}
              backgroundColor={"#FCBF07"}
              color={"#fff"}
              fontSize="14px"
              fontWeight="500"
              lineHeight="20px"
              maxWidth={"435px"}
              padding={"9px 0px"}
            />
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default FindLocationProcess2Form;
