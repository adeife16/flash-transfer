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
import { useNavigate , useParams } from "react-router-dom";
import Layout from "../Layout";
import { styled } from "@mui/system";
import { useState } from "react";
import { useAuth } from "../../Context/globaltContext"
import { changePassword, login } from '../../Services/auth';
import { ContactSchema } from "../../schemas"
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { id } from 'ethers/lib/utils';
import SubmitButton from "../SubmitButton";
import * as yup from 'yup';

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

type MyInterface = {
  userId: string
}

const ResetPasswordForm = () => {

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
 
  let { userId } = useParams<'userId'>()
  const id = userId

  const initialValues = {
    id: id,
    password: "",
    confirmPassword:""
  }

  const validationSchema = yup.object().shape({
    password: yup.string().min(6, 'Please enter a valid password').required('Please enter password'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Your password do not matched').required('Your password do not matched'),
});

const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const data = {
        postedBy: id,
        password: values.password
      }


      debugger
    setLoader(true)
    changePassword(data).then(res => {
    
        debugger
        setLoader(false)
        setOpen(true)
        resetForm()
      
      
})
    }
});



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

              <form onSubmit={formik.handleSubmit}>
                <Typography className={classes.SignIn_heading2}>
                  Reset Password
                </Typography>
                <InputFieldBox>

                <AppInputFields
                  name="password"
                  type="password"
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

                </InputFieldBox>
                <InputFieldBox>

                <AppInputFields
                  name="confirmPassword"
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
                <LoginBtnContainer>
                  {/* <Link to="/" style={{textDecoration:"none"}}> */}

                  <SubmitButton
                  title={"Change Password"}
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

                  {/* </Link> */}
                </LoginBtnContainer>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default ResetPasswordForm;