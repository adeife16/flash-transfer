import * as React from 'react';
import {
  Box,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
// import "./loader.css"
import { useStyles } from "../../Styles";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import LogIn_image from "../../assests/Images/SignIn_image.png";
import logo2 from "../../assests/Logo/logo2.svg";
import logo3 from "../../assests/Logo/Apple.png";
import logof from "../../assests/Logo/logo5.svg";
import logo4 from "../../assests/Logo/logo4.svg";
import logo5 from "../../assests/Logo/wallet.png";
import AppInputFields from "../AppInputFields";
import Message from "../../assests/Logo/messageBox.svg";
import Key from "../../assests/Logo/key.svg";
import AppButton from "../AppButton";
import SubmitButton from "../SubmitButton";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { styled } from "@mui/system";
import { useRef, useState } from "react";
import { useAuth } from "../../Context/globaltContext"
import { ContactSchema } from "../../schemas"
import { useFormik } from 'formik';
import * as yup from 'yup';
import { getNonce, login, signInWithWallet } from '../../Services/auth';
import useActiveWeb3React from '../../hooks/useActiveWeb3React';
import { hexEncode, signMessage } from '../../utils';
import WalletSignInModal from '../WalletSignInModal';
import { Loader } from 'rsuite'

import { useSnackbar } from 'notistack'
import 'rsuite/dist/rsuite.min.css'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


//--    Reuse Components
const InputFieldBox = styled("form")({
  marginBottom: "8px",
});
const LabelBox = styled("div")({
  marginBottom: "24px",
  display: "flex",
  justifyContent: "flex-end",
});
const LoginBtnContainer = styled("div")({
  marginBottom: "38px",
});
const CommonBtnContainers = styled("div")({
  marginBottom: "8px",
});



const SignInForm = () => {

  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const { library, account } = useActiveWeb3React();
  const storage = localStorage.getItem("token")
  const { AppleLogin, googleSignIn, signInWithFacebook }: any = useAuth()
  const { enqueueSnackbar } = useSnackbar()

  const initialValues = {
    email: "",
    password: "",

  }

  const validationSchema = yup.object().shape({
    email: yup.string().email('Email is not valid').required('Email is required'),
    password: yup.string().min(6, 'Please enter a valid password').required('Please enter password')
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: any) => {

      setLoader(true)

      const data = {
        email: values.email,
        password: values.password
      }
      login(data).then((res) => {
        // debugger
        if (res?.email) {
          setLoader(false)
          enqueueSnackbar('Login Successfully!', {
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            }
          })
          navigate("/")
        } else if (res.response.data.statusCode == 0) {
          setLoader(false)
          enqueueSnackbar(`Error: ${res.response.data.statusDesc}`, {
            variant: 'error',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            }
          })
        }

      }, (err) => {

        enqueueSnackbar(`Error: ${err.message}`, {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
          }
        })
      })
    }
  });



  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      // alert("You have Signin with Google");
      // navigate("/");
    } catch (error) {
      console.log(error);

    }
  };
  const handleFacebookSignIn = async () => {
    try {
      await signInWithFacebook();
      // alert("You have Signin with Facebook");
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Layout>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>

        <Grid container className={classes.login_page_main_container}>
          <Grid container sx={{ transform: { lg: "scale(0.93)", xs: "scale(none)" }, marginLeft: { lg: "-3.5%", xs: "0px" }, }}>
            <Grid item xs={12} md={7} sx={{ display: { lg: "flex", xs: "none" } }} >
              <img src={LogIn_image} width={"100%"} height={"100%"} />
            </Grid>
            <Grid item xs={12} md={7} sx={{ display: { lg: "none", xs: "flex" } }} >
              <img src={LogIn_image} width={"428px"} height={"164px"} />
            </Grid>
            <Grid item xs={12} md={5} className={classes.grid_form_container}>
              <form onSubmit={formik.handleSubmit}>
                <Typography className={classes.SignIn_heading}>
                  Sign in
                </Typography>
                <InputFieldBox>
                  <Typography className={classes.Email_heading}>
                    Email address
                  </Typography>
                  <AppInputFields
                    type="email"
                    borderRadius="6px"
                    placeholder={"Email Here"}
                    border={"1px solid #D1D5DB"}
                    padding={"9px 15px"}
                    height="42px"
                    inputIcon={<img src={Message} alt={"image"} />}
                    name="email"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <div style={{ color: "red" }}>
                      {formik.errors.email}
                    </div>
                  )}

                </InputFieldBox>
                <Box mb="24px" sx={{ justifyContent: "end", alignItem: "center", display: "flex", flexDirection: "row" }}>
                  <Checkbox
                    size="medium"
                    style={{
                      borderRadius: "4px",
                      margin: "-12px 0px 0px 0px",
                      color: "#5D5FEF"
                    }} />
                  <Typography className={classes.remember_meText}>
                    Remember Me
                  </Typography>
                </Box>
                <InputFieldBox >
                  <Typography className={classes.Email_heading}>
                    Password
                  </Typography>
                  <AppInputFields
                    type="password"
                    borderRadius="6px"
                    placeholder={"Password Here"}
                    border={"1px solid #D1D5DB"}
                    padding={"9px 15px"}
                    height="42px"
                    inputIcon={<img src={Key} alt={"image"} />}
                    name="password"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && (
                    <div style={{ color: "red" }}>
                      {formik.errors.password}
                    </div>
                  )}

                </InputFieldBox>
                {loader ?
                  (
                    <div className="loader">
                      <svg className="circular" viewBox="25 25 50 50"
                      >
                        <circle
                          className="path"
                          cx="50"
                          cy="50"
                          r="20"
                          fill="none"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                  )
                  : null
                }
                <LabelBox>
                  <Typography
                    onClick={() => navigate("/forgotpassword")}

                    className={classes.Forgot_password}>
                    Forgot Password?
                  </Typography>
                </LabelBox>
                <LoginBtnContainer>
                  <SubmitButton
                    title={"Login"}
                    backgroundColor={"#FCBF07"}
                    color={"#FFFFFF"}
                    fontSize={"20px"}
                    textTransform="none"
                    fontWeight={"500"}
                    lineHeight={"30px"}
                    height="65px"
                    borderRadius={"6px"}
                    letterSpacing={"0.02em"}
                    padding={"18px 0px 17px"}
                  />
                </LoginBtnContainer>
                <Divider className={classes.sign_in_divider} >or  </Divider>
                <Box sx={{ display: { lg: "flex", xs: "none" }, flexDirection: "column" }} >
                  <CommonBtnContainers>
                    <AppButton
                      title={"Login with Binance"}
                      backgroundColor={"white"}
                      textTransform="none"
                      color={"#000000"}
                      fontSize={"20px"}
                      fontWeight={"500"}
                      lineHeight={"30px"}
                      borderRadius={"8px"}
                      border={"1px solid #979797"}
                      letterSpacing={"0.02em"}
                      padding={"18px 0px 17px"}
                      startIcon={
                        <img
                          src={logo2}
                          alt="image" className={classes.Apple_logo}
                        />
                      }
                    />
                  </CommonBtnContainers>
                  <CommonBtnContainers>
                    <AppButton
                      title={"Login with Apple"}
                      backgroundColor={"black"}
                      textTransform="none"
                      color={"#fff"}
                      fontSize={"20px"}
                      fontWeight={"500"}
                      lineHeight={"30px"}
                      borderRadius={"8px"}
                      border={"1px solid #979797"}
                      letterSpacing={"0.02em"}
                      padding={"18px 0px 17px"}
                      startIcon={
                        <img
                          src={logo3}
                          alt="image"
                          className={classes.Apple_logoAd}
                        />
                      }
                      onClick={AppleLogin}
                    />
                  </CommonBtnContainers>
                  <CommonBtnContainers>
                    <AppButton
                      title={"Login with Google"}
                      backgroundColor={"white"}
                      color={"#000000"}
                      fontSize={"20px"}
                      textTransform="none"
                      fontWeight={"500"}
                      lineHeight={"30px"}
                      borderRadius={"8px"}
                      border={"1px solid #979797"}
                      letterSpacing={"0.02em"}
                      padding={"18px 0px 17px"}
                      startIcon={
                        <img src={logo4} alt="image" className={classes.Apple_logo} />
                      }
                      onClick={handleGoogleSignIn}
                    />
                  </CommonBtnContainers>
                  <CommonBtnContainers>
                    <AppButton
                      title={"Login with Facebook"}
                      backgroundColor={"#1877F2"}
                      color={"#fff"}
                      textTransform="none"
                      fontSize={"20px"}
                      fontWeight={"500"}
                      lineHeight={"30px"}
                      borderRadius={"8px"}
                      border={"1px solid #979797"}
                      letterSpacing={"0.02em"}
                      padding={"18px 0px 17px"}
                      startIcon={
                        <img src={logof} alt="image" className={classes.Apple_logo} />
                      }
                      onClick={handleFacebookSignIn}
                    />
                  </CommonBtnContainers>
                  <CommonBtnContainers>
                    <WalletSignInModal />
                  </CommonBtnContainers>
                </Box>

                <Box sx={{ display: { lg: "none", xs: "flex" }, flexDirection: "column" }} >
                  <CommonBtnContainers>

                    <AppButton
                      title={"Login with Binance"}
                      backgroundColor={"white"}
                      textTransform="none"
                      color={"#000000"}
                      fontSize={"16px"}
                      fontWeight={"500"}
                      lineHeight={"24px"}
                      borderRadius={"8px"}
                      height="42px"
                      border={"1px solid #979797"}
                      letterSpacing={"0.02em"}
                      padding={"18px 0px 17px"}
                      startIcon={
                        <img
                          src={logo2}
                          alt="image" style={{ width: "20px", height: "20px" }}
                        />
                      }
                    />
                  </CommonBtnContainers>


                  <CommonBtnContainers>
                    <AppButton
                      title={"Login with Apple"}
                      backgroundColor={"black"}
                      textTransform="none"
                      color={"#fff"}
                      fontSize={"16px"}
                      fontWeight={"500"}
                      lineHeight={"24px"}
                      borderRadius={"8px"}
                      height="42px"
                      border={"1px solid #979797"}
                      letterSpacing={"0.02em"}
                      padding={"18px 0px 17px"}
                      onClick={AppleLogin}
                      startIcon={
                        <img
                          src={logo3}
                          alt="image"

                          style={{ width: "20px", height: "20px" }}
                        />
                      }
                    />
                  </CommonBtnContainers>
                  <CommonBtnContainers>
                    <AppButton
                      title={"Login with Google"}
                      backgroundColor={"white"}
                      color={"#000000"}
                      textTransform="none"
                      fontSize={"16px"}
                      fontWeight={"500"}
                      lineHeight={"24px"}
                      borderRadius={"8px"}
                      height="42px"
                      border={"1px solid #979797"}
                      letterSpacing={"0.02em"}
                      padding={"18px 0px 17px"}
                      onClick={handleGoogleSignIn}
                      startIcon={
                        <img src={logo4} alt="image" style={{ width: "20px", height: "20px" }} />
                      }
                    />
                  </CommonBtnContainers>
                  <CommonBtnContainers>
                    <AppButton
                      title={"Login with Facebook"}
                      backgroundColor={"white"}
                      color={"#000000"}
                      textTransform="none"
                      fontSize={"16px"}
                      fontWeight={"500"}
                      lineHeight={"24px"}
                      borderRadius={"8px"}
                      height="42px"
                      border={"1px solid #979797"}
                      letterSpacing={"0.02em"}
                      padding={"18px 0px 17px"}
                      onClick={handleFacebookSignIn}
                      startIcon={
                        <img src={logof} alt="image" style={{ marginLeft: "20px", width: "20px", height: "20px" }} />
                      }
                    />
                  </CommonBtnContainers>

                  <CommonBtnContainers>
                    <WalletSignInModal />
                  </CommonBtnContainers>
                </Box>
                <Typography
                  className={classes.Account_Q}
                  onClick={() => navigate("/signup")}
                >
                  Do not have an account?{" "}
                  <span className={classes.Register}>Register</span>
                </Typography>
              </form>


            </Grid>
          </Grid>
        </Grid>


      </Layout>
    </>
  );
};

export default SignInForm;
