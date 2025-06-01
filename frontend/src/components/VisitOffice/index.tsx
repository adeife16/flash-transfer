import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../Styles";
import Officebg from "../../assests/Images/Officebg.png";
import Tower from "../../assests/Logo/Tower.svg";
// import Phonelogo from "../../assests/Logo/Phonelogo.svg";
import Messagelogo from "../../assests/Logo/Messagelogo.svg";
import "../../font.css/index.css"

import CardsTypefour  from "../AppCards";

const VisitOffice = () => {
  const classes = useStyles();
  const officeCardsObject = [
    {
      cityName: "Dubai",
      email: "contact@flash-transfer.com",
      emailIcon: Messagelogo,
      countryIcon: Tower,
    },
    {
      cityName: "Paris Soon ...",
      email: "contact@flash-transfer.com",
      emailIcon: Messagelogo,
      countryIcon: Tower,
    },
    {
      cityName: "London Soon ...",
      email: "contact@flash-transfer.com",
      emailIcon: Messagelogo,
      countryIcon: Tower,
    },
  ];
  return (
    <>
      <Grid container className={classes.p2_container_2}>
        <Grid container sx={{ backgroundImage: `url(${Officebg})` }}>
          <Grid item xs={12}>
            <Typography className={classes.visit_office}>
              Visit our offices around <br className={classes.hide_br} /> the
              world
            </Typography>
            <Box>
              <Typography className={classes.visit_office_description}>
                A short paragraph describing your team. You may{" "}
                <br className={classes.hide_br} /> want to describe what they
                are responsible for
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            {/* cards here */}
            <Grid container rowSpacing={3}>
              {" "}
              <Grid item xs={12}>
                {/* <CardsTypefour officeCardsObject={officeCardsObject} /> */}
              </Grid>
              <Grid item xs={12}>
                {/* <CardsTypefour officeCardsObject={officeCardsObject} /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default VisitOffice;
