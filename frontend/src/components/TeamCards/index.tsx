import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../Styles";
import "../../font.css/index.css"


export interface dataProps {
  title?: string;
  subtitle?: string;
  img?: any;
}

const TeamCards = ({ title, subtitle, img }:dataProps) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.teamcard_Cont}>
        <Box>

        <img src={img} alt="img" style={{ width: "288px%", height: "288px" }} />
        </Box>
        <Typography mt={0.5} className={classes.Feature_title}>
          {title}
        </Typography>
        <Typography className={classes.feature_sub}>{subtitle}</Typography>
      </Box>
    </>
  );
};

export default TeamCards;
