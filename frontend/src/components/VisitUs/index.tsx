import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../Styles";
import BigP from "../../assests/Logo/BigP.svg";
import BigP1 from "../../assests/Images/BigP1.png";
import BigP2 from "../../assests/Images/BigP2.png";
import BigP3 from "../../assests/Images/BigP3.png";
import BigP4 from "../../assests/Images/BigP4.png";

import "../../font.css/index.css"

const VisitUs = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" }, }} className={classes.find_location_process_4_container}>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }} >

              <Typography className={classes.Visit_us}>Visit us</Typography>
              <Typography className={classes.Visit_us_description}>
                Home is behind, the world ahead and there are many paths to tread
                through shadows to the edge.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={BigP1} alt={"image"} />
              <img
                src={BigP}
                alt={"image"}
                className={classes.social_media_images}
              />
              <img
                src={BigP2}
                alt={"image"}
                className={classes.social_media_images}
              />
              <img
                src={BigP3}
                alt={"image"}
                className={classes.social_media_images}
              />
              <img
                src={BigP4}
                alt={"image"}
                className={classes.social_media_images}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default VisitUs;
