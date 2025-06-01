import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../Styles";
import { locationFormProps } from "../../types/locationTypes";
import AppButton from "../AppButton";
import "../../font.css/index.css"

const LocationForm = ({
  nameValue,
  location,
  personName,
  openingTime,
  timeValue,
  contactNumber,
  number,
  LocationSymbol,
  PersonLogo,
}: locationFormProps) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <Box className={classes.sub_container2_md_6}>
            <Box className={classes.address_main_box}>
              <Box>
                <img src={LocationSymbol} alt={"image"} />
              </Box>
              <Box className={classes.address_test_Box}>
                <Typography className={classes.Location_text}>
                  {location}
                </Typography>
                <Typography className={classes.Location_text_description}>
                  Maqsood Plaza, Bank Road, Sadi <br></br>
                  Sadiqabad, Sindh
                </Typography>
              </Box>
            </Box>

            <Box className={classes.agent_padding}>
              <Box className={classes.section_container}>
                <Box className={classes.icon_name_container}>
                  <Box>
                    <img src={PersonLogo} alt={"image"} />
                  </Box>
                  <Typography className={classes.Agent_name}>
                    {nameValue}
                  </Typography>
                </Box>
                <Typography className={classes.Agent_full_name}>
                  {personName}
                </Typography>
              </Box>
              <Divider sx={{ margin: "26px 0px 26px 0px" }} />
            </Box>
            <Box className={classes.agent_padding}>
              <Box className={classes.section_container}>
                <Box className={classes.icon_name_container}>
                  <Box>
                    <img src={PersonLogo} alt={"image"} />
                  </Box>
                  <Typography className={classes.Agent_name}>
                    {openingTime}
                  </Typography>
                </Box>
                <Typography className={classes.Agent_full_name}>
                  {timeValue}
                </Typography>
              </Box>
              <Divider sx={{ margin: "26px 0px 26px 0px" }} />
            </Box>
            <Box className={classes.agent_padding}>
              <Box className={classes.section_container}>
                <Box className={classes.icon_name_container}>
                  <Box>
                    <img src={PersonLogo} alt={"image"} />
                  </Box>
                  <Typography className={classes.Agent_name}>
                    {contactNumber}
                  </Typography>
                </Box>
                <Typography className={classes.Agent_full_name}>
                  {number}
                </Typography>
              </Box>
              <Divider sx={{ margin: "26px 0px 26px 0px" }} />
            </Box>

            <Box className={classes.location_btn_container}>
              <AppButton
                textTransform="none"
                title={"Share"}
                color={"#fff"}
                backgroundColor={"#5D5FEF"}
                borderRadius={"6px"}
                boxShadow={
                  "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                }
                maxWidth={"186px"}
                padding={"10px 0px"}
              />
              <AppButton
                textTransform="none"
                title={"Direction"}
                color={"#fff"}
                backgroundColor={"#FCBF07"}
                borderRadius={"6px"}
                maxWidth={"204px"}
                className={classes.location_btn}
                padding={"10px 0px"}
              />
            </Box>
          </Box>
          <Divider sx={{ margin: "10px 0px" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LocationForm;
