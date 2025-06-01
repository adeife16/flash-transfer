import { Grid, Typography } from "@mui/material";
import { useStyles } from "../../Styles";
import Map from "../../assests/Images/Map.jpg";
import { Box } from "@mui/system";
import "../../font.css/index.css"

const SearchMap = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        sx={{ backgroundImage: `url(${Map})` }}
        className={classes.find_location_process_5_container}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box className={classes.location_btn_map_box}>
              <Typography className={classes.Matthews_Street}>
                2345 Matthews Street
              </Typography>
              <Typography className={classes.Matthews_Street}>
                Bloomington, MM
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchMap;
