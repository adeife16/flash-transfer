import { Checkbox, Divider, Grid, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { useStyles } from "../../Styles";
import LogIn_image from "../../assests/Images/create_account_image.png";
import logo2 from "../../assests/Logo/logo2.svg";
import logo3 from "../../assests/Logo/Apple.png";
import logo4 from "../../assests/Logo/logo4.svg";
import logof from "../../assests/Logo/logo5.svg";
import logo5 from "../../assests/Logo/wallet.png";
import Key from "../../assests/Logo/key.svg";

import { Box } from "@mui/system";
import "../../index.css"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import AppInputFields from "../AppInputFields";
import Message from "../../assests/Logo/messageBox.svg";
import AppButton from "../AppButton";
import SubmitButton from "../SubmitButton";
import Layout from "../Layout";
import { styled } from "@mui/system";

import { register } from "../../Services/auth"
import { useFormik } from "formik";
import * as yup from 'yup';
import CheckboxLabels from "../CheckBox";
import { Link, useNavigate } from "react-router-dom";
import SelectFlags from "../FlagsSelect";

import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from "../../Context/globaltContext";
import { toast } from 'react-toastify';
import WalletSignUpModal from "../WalletSignUpModal";
import { useParams } from 'react-router-dom';
import PasswordStrengthBar from 'react-password-strength-bar'
import { Loader } from 'rsuite'

import { useSnackbar } from 'notistack'
import 'rsuite/dist/rsuite.min.css'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const SignUpFormContainer = styled("form")({});
const InputFieldBox2 = styled("form")({
  marginBottom: "24px",
});
const LoginBtnContainer = styled("div")({
  marginBottom: "38px",
});
const CommonBtnContainers = styled("div")({
  marginBottom: "8px",
});

const SignUpForm = () => {
  const { id } = useParams();
  console.log("id:", id)
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: ""
  }
  const [open, setOpen] = React.useState(false);
  const [loader, setLoader] = useState(false);
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar()


  const validationSchema = yup.object().shape({
    email: yup.string().email('Email is not valid').required('Email is required'),
    password: yup.string().min(6, 'Please enter a valid password').required('Please enter password'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Your password do not matched').required('Your password do not matched'),
  });
  const formRef = useRef<HTMLFormElement | null>(null)

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const data = {
        email: values.email,
        password: values.password,
        name: "sfsf",
        phone: "sdfsfs",
        affiliatorCode: id
      }



      setLoader(true)
      register(data).then(res => {
        // debugger

        if (res?.data) {
          setLoader(false)
          enqueueSnackbar('Signup Successfully!', {
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            }
          })
          resetForm()
        } else if (res.response.data.statusCode == 2) {
          setLoader(false)
          enqueueSnackbar(`Error: ${res.response.data.err}`, {
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

            You are Sucessfully signup !

          </Alert>
        </Snackbar>

        <Grid container className={classes.sign_up_main_container}>
          <Grid container sx={{ transform: { lg: "scale(0.93)", xs: "scale(none)" }, marginLeft: { lg: "-3.5%", xs: "0px" }, backgroundColor: "#fff" }}>
            <Grid item xs={12} md={7} sx={{ backgroundImage: `url(${LogIn_image})` }}
              className={classes.grid_container_md_7}
            >
              <Grid >
                <Typography className={classes.Image_up_Text}>
                  Create your account & send payment with now fee
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5} className={classes.sign_up_grid_5_box}>

              <SignUpFormContainer>

                <Typography className={classes.Create_account_h1}>
                  Create an account
                </Typography>
                {/* <Typography className={classes.Get_started} >
                  Let’s get started with your 30 days free trial
                </Typography> */}

              </SignUpFormContainer>
              <form onSubmit={formik.handleSubmit} ref={formRef} >
                <InputFieldBox2>
                  <Typography className={classes.Email_heading}>
                    Email address
                  </Typography>
                  <AppInputFields
                    name="email"
                    type="email"
                    height="42px"
                    borderRadius="6px"
                    placeholder={"you@example.com"}
                    border={"1px solid #D1D5DB"}
                    padding={"9px 14px"}
                    inputIcon={<img src={Message} alt={"image"} />}
                    onChange={formik.handleChange}
                    value={formik.values.email}

                  />
                  {formik.errors.email && (
                    <div style={{ color: "red" }}>
                      {formik.errors.email}
                    </div>
                  )}

                </InputFieldBox2>
                <InputFieldBox2>
                  <Typography className={classes.Email_heading}>
                    Password
                  </Typography>

                  <AppInputFields
                    name="password"
                    type="password"
                    placeholder={"password"}

                    height="42px"
                    borderRadius="6px"
                    border={"1px solid #D1D5DB"}
                    padding={"9px 14px"}
                    inputIcon={<img src={Key} alt={"image"} />}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password && (
                    <div style={{ color: "red" }}>
                      {formik.errors.password}
                    </div>
                  )}
                  <Typography className={classes.passowrd_instruction}>
                    Your password should be at least 8 characters, and include 1
                    upper case letter, 1 lower case letter and 1 number.
                  </Typography>
                </InputFieldBox2>
                <InputFieldBox2>
                  <Typography className={classes.Email_heading}>
                    Confirm Password
                  </Typography>

                  <AppInputFields
                    name="confirmPassword"
                    placeholder={"Confirm password"}

                    type="password"
                    height="42px"
                    borderRadius="6px"
                    border={"1px solid #D1D5DB"}
                    padding={"9px 14px"}
                    inputIcon={<img src={Key} alt={"image"} />}
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  {formik.errors.confirmPassword && (
                    <div style={{ color: "red" }}>
                      {formik.errors.confirmPassword}
                    </div>
                  )}
                </InputFieldBox2>
                <PasswordStrengthBar
                  style={{ marginTop: 10 }}
                  password={formik.values.password}
                />
                <InputFieldBox2>

                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box>
                      <Checkbox

                        size="small"
                        style={{
                          borderRadius: "4px",
                          margin: "-8px 0px 0px -10px",
                          color: "#FCBF07"
                        }} />
                    </Box>

                    <Typography className={classes.checkBox_description}>
                      If you DO NOT wish to receive marketing information about
                      our products and special offers, please check this box
                    </Typography>
                  </Box>

                </InputFieldBox2>

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
                <LoginBtnContainer>

                  <SubmitButton
                    title={"Create Account"}
                    textTransform="none"
                    backgroundColor={"#FCBF07"}
                    color={"#FFFFFF"}
                    fontSize={"20px"}
                    fontWeight={"500"}
                    lineHeight={"30px"}
                    borderRadius={"6px"}
                    letterSpacing={"0.02em"}
                    padding={"18px 0px 17px"}
                  />
                </LoginBtnContainer>
                {/* </Link> */}
                <Divider className={classes.sign_in_divider}>or</Divider>
                <Box sx={{ display: { lg: "flex", xs: "none" }, flexDirection: "column" }} >

                  <CommonBtnContainers>
                    <AppButton
                      title={"Sign up with Binance"}
                      backgroundColor={"white"}
                      color={"#000000"}
                      fontSize={"20px"}
                      fontWeight={"500"}
                      lineHeight={"30px"}
                      textTransform="none"
                      borderRadius={"8px"}
                      border={"1px solid #979797"}
                      letterSpacing={"0.02em"}
                      padding={"18px 0px 17px"}
                      startIcon={
                        <img
                          src={logo2}
                          alt="image"
                          className={classes.Apple_logo}
                        />
                      }
                    />
                  </CommonBtnContainers>
                  <CommonBtnContainers>
                    <AppButton
                      title={"Sign up with Apple"}
                      backgroundColor={"black"}
                      color={"#fff"}
                      fontSize={"20px"}
                      textTransform="none"
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
                    />
                  </CommonBtnContainers>
                  <CommonBtnContainers>
                    <AppButton
                      title={"Sign up with Google"}
                      backgroundColor={"white"}
                      color={"#000000"}
                      textTransform="none"
                      fontSize={"20px"}
                      fontWeight={"500"}
                      lineHeight={"30px"}
                      borderRadius={"8px"}
                      border={"1px solid #979797"}
                      letterSpacing={"0.02em"}
                      padding={"18px 0px 17px"}
                      startIcon={
                        <img src={logo4} alt="image" className={classes.Apple_logo} />
                      }
                    />
                  </CommonBtnContainers>
                  <CommonBtnContainers>
                    <AppButton
                      title={"Sign up with Facebook"}
                      backgroundColor={"#1877F2"}
                      color={"#fff"}
                      textTransform="none"
                      fontSize={"20px"}
                      fontWeight={"500"}
                      lineHeight={"30px"}
                      borderRadius={"8px"}
                      border={"1px solid #979797"}
                      letterSpacing={"0.02em"}
                      padding={"18px 0px 18px 20px"}
                      startIcon={
                        <img src={logof} alt="image" />
                      }
                    />
                  </CommonBtnContainers>
                  <WalletSignUpModal />
                </Box>
                <Box sx={{ display: { lg: "none", xs: "flex" }, flexDirection: "column" }} >
                  <CommonBtnContainers>

                    <AppButton
                      title={"Sign up with Binance"}
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
                      title={"Sign up with Apple"}
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
                      title={"Sign up with Google"}
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
                      startIcon={
                        <img src={logo4} alt="image" style={{ width: "20px", height: "20px" }} />
                      }
                    />
                  </CommonBtnContainers>
                  <CommonBtnContainers>
                    <AppButton
                      title={"Sign up with Facebook"}
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
                      startIcon={
                        <img src={logof} alt="image" style={{ marginLeft: "20px", width: "20px", height: "20px" }} />
                      }
                    />
                  </CommonBtnContainers>

                  <CommonBtnContainers>
                    <WalletSignUpModal />
                  </CommonBtnContainers>
                </Box>

              </form>
            </Grid>
          </Grid>
        </Grid>

      </Layout>
    </>
  );
};

export default SignUpForm;
