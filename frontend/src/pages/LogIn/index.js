import { Checkbox, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import AppFooter from "../../components/AppFooter";
import CommonNav from "../../components/CommonNav";
import { useStyles } from "../../CssFile";
import LogIn_image from "../../assests/Images/create_account_image.png";
import logo2 from "../../assests/Logo/logo2.svg";
import logo3 from "../../assests/Logo/logo3.svg";
import logo4 from "../../assests/Logo/logo4.svg";
import { Box } from "@mui/system";
import AppInputFields from "../../components/AppInputFields";
import Message from "../../assests/Logo/messageBox.svg";
import AppButton from "../../components/AppButton";
import SelectFlags from "../../components/FlagsSelect";
import { useNavigate } from "react-router-dom";
import "../../font.css/index.css"

const LogIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <CommonNav />
      <Grid className={classes.EmptyContainer}></Grid>
      <Grid container className={classes.logIn_main_Container2}>
        <Grid container className={classes.logIn_sub_Container}>
          <Grid
            item
            sx={{
              display: {
                // xs: "none",
                xs: "flex",
              },
              justifyContent: "center",
              padding: "359px 6px 235px 36px",
              backgroundImage: `url(${LogIn_image})`,
              backgroundPosition: { xs: "70%", sm: "100%" },
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            sm={8.3}
            md={6.9}
          >
            {/* <img src={LogIn_image} width={"100%"} height={"auto"} /> */}
            <Typography className={classes.Image_up_Text}>
              Create your account & send payment with now fee
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8.3} md={5} className={classes.login_md_6_2}>
            <Box component={"form"} className={classes.Form_div}>
              <Typography className={classes.Create_account_h1}>
                Create an account
              </Typography>
              <Typography className={classes.Get_started}>
                Let’s get started with your 30 days free trial
              </Typography>
              {/* input field 0 */}
              <Typography className={classes.Email_heading}>
                Send From
              </Typography>
              {/* country select button*/}
              <SelectFlags />

              <Typography className={classes.Email_heading}>
                Email address
              </Typography>
              {/* input Field 1      */}
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

              {/* input Field 2      */}
              <Typography className={classes.Email_heading}>
                Password
              </Typography>
              <Box className={classes.input_box_2}>
                <Box sx={{ p: "0px", display: "flex", alignItems: "center" }}>
                  {/* <img
                    src={Key}
                    style={{
                      height: "12px",
                      width: "16px",
                    }}
                  /> */}
                </Box>
                <AppInputFields
                  placeholder={""}
                  padding={"0px 0px"}
                  margin={"9px 0px 9px 10px"}
                />
              </Box>
              {/* Forgot Password? */}
              <Typography className={classes.passowrd_instruction}>
                Your password should be at least 8 characters, and include 1
                upper case letter, 1 lower case letter and 1 number.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  marginBottom: "24px",
                  maxWidth: "435px",
                  marginLeft: "-11px",
                }}
              >
                {" "}
                <Checkbox
                  sx={{
                    "& .css-i4bv87-MuiSvgIcon-root": {
                      color: "#FCBF07 ",
                      marginTop: "-22px",
                    },
                  }}
                />
                <Typography className={classes.checkBox_description}>
                  If you DO NOT wish to receive marketing information about our
                  products and special offers, please check this box
                </Typography>
              </Box>
              <AppButton
                title={"Login"}
                backgroundColor={"#FCBF07"}
                color={"#FFFFFF"}
                fontSize={"20px"}
                fontWeight={"500"}
                lineHeight={"30px"}
                borderRadius={"6px"}
                maxWidth={"450px"}
                height={"65px"}
                letterSpacing={"0.02em"}
              />
              <Divider sx={{ maxWidth: "450px", margin: "38px 0px 38px 0px" }}>
                or
              </Divider>
              <AppButton
                title={"Login with Binance"}
                backgroundColor={"white"}
                color={"#000000"}
                fontSize={"20px"}
                fontWeight={"500"}
                lineHeight={"30px"}
                borderRadius={"8px"}
                maxWidth={"450px"}
                height={"65px"}
                border={"1px solid #979797"}
                letterSpacing={"0.02em"}
                startIcon={
                  <img src={logo2} alt="image" style={{ height: "32px" }} />
                }
                margin={"0px 0px 8px 0px"}
              />
              <AppButton
                title={"Login with Apple"}
                backgroundColor={"black"}
                color={"#fff"}
                fontSize={"20px"}
                fontWeight={"500"}
                lineHeight={"30px"}
                borderRadius={"8px"}
                maxWidth={"450px"}
                height={"65px"}
                border={"1px solid #979797"}
                letterSpacing={"0.02em"}
                startIcon={
                  <img
                    src={logo3}
                    alt="image"
                    style={{
                      height: "24px",
                      background: "white",
                      borderRadius: "50px",
                      padding: "4px 4px",
                    }}
                  />
                }
                margin={"0px 0px 8px 0px"}
              />
              <AppButton
                title={"Login with Google"}
                backgroundColor={"white"}
                color={"#000"}
                fontSize={"20px"}
                fontWeight={"500"}
                lineHeight={"30px"}
                borderRadius={"8px"}
                maxWidth={"450px"}
                height={"65px"}
                border={"1px solid #979797"}
                letterSpacing={"0.02em"}
                startIcon={
                  <img
                    src={logo4}
                    alt="image"
                    style={{
                      height: "32px",
                      background: "white",
                      borderRadius: "50px",
                      padding: "4px 4px",
                    }}
                  />
                }
                margin={"0px 0px 8px 0px"}
              />
              <Typography
                className={classes.Account_Q}
                onClick={() => navigate("/")}
              >
                Already have an account?{" "}
                <span className={classes.Register}>Sign in</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <AppFooter />
    </>
  );
};

export default LogIn;
