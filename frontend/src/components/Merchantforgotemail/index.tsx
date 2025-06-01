import * as React from 'react';
import {
  Grid,
  Typography,
} from "@mui/material";
// import "./loader.css"
import { useStyles } from "../../Styles";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import LogIn_image from "../../assests/Images/password.png";
import AppInputFields from "../AppInputFields";
import Key from "../../assests/Logo/key.svg";
import AppButton from "../AppButton";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { styled } from "@mui/system";
import { useState } from "react";
import { useAuth } from "../../Context/globaltContext"
import { forgotPassword } from '../../Services/auth';
import { ContactSchema } from "../../schemas"
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
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
const LoginBtnContainer = styled("div")({
  marginBottom: "38px",
});
const MerchantforgotPassword = () => {
  //--     States
  const classes = useStyles();
  const navigate = useNavigate();
  const [loginerror, setLoginError] = useState("")
  const [loading, setLoading] = useState(false)

  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const storage = localStorage.getItem("token")
  const { password, email, signup, googleSignIn, signInWithFacebook }: any = useAuth()
  const initialValues = {
    email:email
    // password: password,

  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit }: any = useFormik({
    initialValues,
    validationSchema: ContactSchema,

    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm();

    },

  })
  const runLoader = () => {
    setLoader(true)
  }

  const handleLogin = async () => {
    handleSubmit()
    runLoader()
    const data = {
    email: values.email,
    

    }
    forgotPassword(data)
    // forgotPassword(data).then(() => {
    //   // navigate('/')

    // }, (err) => {

    // })


  };

  const handleClick = async (e: any) => {
    e.preventDefault();
  }
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

              <form onSubmit={(e: any) => handleClick(e)}>
                <Typography className={classes.SignIn_heading2}>
                  Forgot Password
                </Typography>
                <InputFieldBox>
                  <Typography className={classes.Email_heading}>
                    Please enter your email address to reset your password.
                  </Typography>

                  <AppInputFields
                    type="email"
                    borderRadius="6px"
                    placeholder={"Email "}
                    border={"1px solid #D1D5DB"}
                    padding={"9px 15px"}
                    height="42px"
                    inputIcon={<img src={Key} alt={"image"} />}
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  ) : null}

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
                <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
                  <LoginBtnContainer>

                    <AppButton
                      title={"Send an email"}
                      backgroundColor={"#FCBF07"}
                      color={"#FFFFFF"}
                      fontSize={"20px"}
                      textTransform="none"
                      fontWeight={"500"}
                      lineHeight={"30px"}
                      height="65px"
                      margin="40px 0px"
                      borderRadius={"6px"}
                      letterSpacing={"0.02em"}
                      padding={"18px 0px 17px"}
                      onClick={handleLogin}
                    />
                  </LoginBtnContainer>
                </Link>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default MerchantforgotPassword;