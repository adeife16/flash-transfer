import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../Styles";
import "../../font.css/index.css"


export interface dataProps {
  title?: string;
  subtitle?: string;
  img?: any;
}
const AboutCard = ({ title, subtitle, img }: dataProps) => {
  const classes = useStyles();


  
  return (
    <>
      <Box className={classes.card_container}>
        <img src={img} alt="img" style={{ marginBottom: "20px" }} />
        <Typography className={classes.Feature_title}>{title}</Typography>
        <Typography className={classes.feature_sub}>{subtitle}</Typography>
      </Box>
    </>
  );
};

export default AboutCard;
