import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AppFooter from "../../components/AppFooter";
import AppInputFields from "../../components/AppInputFields";
import CommonNav from "../../components/CommonNav";
import Message from "../../assests/Logo/messageBox.svg";
import sett from "../../assests/Images/sett.png";
import wallet from "../../assests/Images/waallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import "../../font.css/index.css"


import HappyGirl from "../../assests/Images/happygirl.png";
import { useStyles } from "../../Styles";
import AppButton from "../../components/AppButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
const [age, setAge] = React.useState("");
export interface AppProps {
event?: any;

}
const PersonalDetails = () => {
  const classes = useStyles();
  const handleChange = ({ event }: AppProps): void => {
    setAge(event.target.value);
  };
  return (
    <>
      <CommonNav priceimg1 ={priceimg1} priceimg2 ={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" />
      {/* My deatils heading  */}
      <Grid container className={classes.details_h1_container}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.My_Detail}>My Detail</Typography>
            <Typography className={classes.registration}>
              Complete your registration
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* create account and pics container */}

      <Grid container className={classes.account_pics_box}>
        <Grid container rowGap={2}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.Create_Account}>
              Create Account
            </Typography>
            <Typography className={classes.Account_Description}>
              Fill in the data for profile. It will take a couple of minutes.
              You only need a passport
            </Typography>
            <Box sx={{ display: "flex", marginBottom: "36px" }}>
              <Checkbox
                sx={{
                  "& .css-i4bv87-MuiSvgIcon-root": {
                    color: "#FCBF07 ",
                    marginTop: "-10px",
                    marginLeft: "-10px",
                  },
                }}
              />
              <Typography className={classes.Agree_With}>
                I agree with{" "}
                <span className={classes.Terms_use}>Terms of use</span>
              </Typography>
            </Box>
            <Typography className={classes.F_name}>First Name</Typography>
            <Box sx={{ maxWidth: "435px", marginBottom: "24px" }}>
              {" "}
              <AppInputFields
                placeholder={"Numan"}
                padding={"0px 0px"}
                margin={"9px 0px 9px 10px"}
                border={"1px solid #D1D5DB"}
                borderRadius={"6px"}
              />
            </Box>
            <Typography className={classes.F_name}>Second Name</Typography>
            <Box sx={{ maxWidth: "435px", marginBottom: "24px" }}>
              {" "}
              <AppInputFields
                placeholder={"Numan"}
                padding={"0px 0px"}
                margin={"9px 0px 9px 10px"}
                border={"1px solid #D1D5DB"}
                borderRadius={"6px"}
              />
            </Box>
            <Typography className={classes.Gender}>Gender</Typography>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <Typography className={classes.DoB}>DOB</Typography>

            <Box sx={{ display: "flex", marginBottom: "24px" }}>
              <FormControl fullWidth size="small" sx={{ maxWidth: "84px" }}>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Year"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                size="small"
                sx={{ maxWidth: "99px", marginLeft: "10px" }}
              >
                <InputLabel id="demo-simple-select-label">Month</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Year"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                size="small"
                sx={{ maxWidth: "80px", marginLeft: "10px" }}
              >
                <InputLabel id="demo-simple-select-label">Day</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Year"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className={classes.Email_input_box}>
              <Box sx={{ p: "0px", display: "flex", alignItems: "center" }}>
                <img
                  src={Message}
                  style={{
                    height: "12px",
                    width: "100%",
                  }}
                />
              </Box>
              <AppInputFields
                placeholder={"you@example.com"}
                padding={"0px 0px"}
                margin={"9px 0px 9px 10px"}
              />
            </Box>

            <AppButton
              title={"Register Now"}
              backgroundColor={"#FCBF07"}
              color={"#FFFFFF"}
              fontSize={"20px"}
              fontWeight={"500"}
              lineHeight={"30px"}
              borderRadius={"6px"}
              maxWidth={"450px"}
              // height={"65px"}
              letterSpacing={"0.02em"}
              endIcon={<ArrowForwardIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={HappyGirl}
              alt="image"
              width={"100%"}
              height={"auto"}
              style={{ backgroundSize: "cover" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <AppFooter />
    </>
  );
};

export default PersonalDetails;
