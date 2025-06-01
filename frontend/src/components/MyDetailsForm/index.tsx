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
import AppInputFields from "../../components/AppInputFields";
import Message from "../../assests/Logo/messageBox.svg";
import HappyGirl from "../../assests/Images/happygirl.png";
import { useStyles } from "../../Styles";
import AppButton from "../../components/AppButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Layout from "../Layout";
import "../../font.css/index.css"


export interface AppProps {
  event?: any;

}
const MyDetailsForm = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = ({ event }: AppProps): void => {
    setAge(event.target.value);
  };
  return (
    <>
      <Layout>
        {/* My deatils heading  */}
        <Grid container sx={{ backgroundColor: "#F7FDFF", }}>

          <Grid item xs={12} sx={{transform:{lg:"scale(0.9)",xs:"none" ,}}} className={classes.details_h1_container}>
            <Typography className={classes.My_Detail}>My Detail</Typography>
            <Typography className={classes.registration}>
              Complete your registration
            </Typography>
          </Grid>

        </Grid>

        {/* create account and pics container */}

        <Grid container  className={classes.account_pics_box}>
          <Grid item md={12} xs={12} rowGap={2}
            sx={{ transform:{lg:"scale(0.9)",xs:"scale(none)"}  ,display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { md: "row", xs: "column-reverse" } }}>
            <Grid item xs={11.5} md={4.5}>
              <Typography className={classes.Create_Account}>
                Create Account
              </Typography>
              <Typography className={classes.Account_Description}>
                Fill in the data for profile. It will take a couple of minutes.
                You only need a passport
              </Typography>
              <Box sx={{ display: "flex", marginBottom: "36px", alignItems: "center" }}>
                <Checkbox
                  sx={{
                    "& .css-i4bv87-MuiSvgIcon-root": {
                      color: "#FCBF07 ",
                      // marginTop: "-10px",
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
                  padding={"9px 0px"}
                  height="42px"
                  border={"1px solid #D1D5DB"}
                  borderRadius={"6px"}
                />
              </Box>
              <Typography className={classes.F_name}>Second Name</Typography>
              <Box sx={{ maxWidth: "435px", marginBottom: "24px" }}>
                {" "}
                <AppInputFields
                  placeholder={"Zafar"}
                  padding={"9px 0px"}
                  height="42px"
                  border={"1px solid #D1D5DB"}
                  borderRadius={"6px"}
                />
              </Box>
              <Typography mb="29px" className={classes.Gender}>Gender</Typography>
              <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />
              <Typography className={classes.DoB}>DOB</Typography>

              <Box sx={{ display: "flex", marginBottom: "24px" }}>
                <FormControl fullWidth size="small" sx={{ maxWidth: "84px" }}>
                  <InputLabel id="demo-simple-select-label">Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Year"
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>

                <Typography className={classes.F_name}>Email address</Typography>
                <Box sx={{ backgroundColor: "#fff", p: "0px", }} className={classes.Email_input_box}>
                  <Box sx={{
                    // height: "42px",
                    display: "flex", alignItems: "center"
                  }}>
                    <img
                      src={Message}
                      style={{
                        height: "12px",
                        width: "100%",
                        backgroundColor: "#fff",

                      }}
                    />
                  </Box>
                  <AppInputFields
                    placeholder={"you@example.com"}
                    padding={"9px 0px"}
                    height="42px"
                  />
                </Box>
              </Box>
              <Box sx={{ marginBottom: { lg: "0px ", xs: "20px" } }}>



                <AppButton
                  title={"Register Now"}
                  backgroundColor={"#FCBF07"}
                  color={"#FFFFFF"}
                  textTransform="none"
                  fontSize={"20px"}
                  fontWeight={"500"}
                  lineHeight={"30px"}
                  borderRadius={"6px"}
                  maxWidth={"440px"}
                  height={"48px"}
                  letterSpacing={"0.02em"}
                  endIcon={<ArrowForwardIcon />}
                />
              </Box>
            </Grid>
            <Grid sx={{
              display: {
                lg: "flex", xs: "none"
              },
              transform:{lg:"scale(0.9)",xs:"scale(none)"} 
              // height: { lg: "765px", xs: "302px" }
            }} item xs={12} md={6}>
              <img
                src={HappyGirl}
                alt="image"
                width={"100%"}
                // height="765px"

                style={{ backgroundSize: "cover" }}
              />
            </Grid>
            <Grid sx={{
              display: {
                lg: "none", xs: "flex"
              },
              // height: { lg: "765px", xs: "302px" }
            }
            } item xs={12} md={6}>
              <img
                src={HappyGirl}
                alt="image"
                width={"428px"}
                height="302px"

                style={{ backgroundSize: "cover" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default MyDetailsForm;
