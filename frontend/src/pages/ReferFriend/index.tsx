import { Button, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AppButton from "../../components/AppButton";
import { useStyles } from "../../Styles";
import Friendreferbg from "../../assests/Images/Friendreferbg.png";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import sett from "../../assests/Images/sett.png";
import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import "../../font.css/index.css"

import AppInputFields from "../../components/AppInputFields";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Message from "../../assests/Logo/messageBox.svg";
import logo1 from "../../assests/Images/dollaricon.png";
import logo2 from "../../assests/Images/emailicon.png";
import logo3 from "../../assests/Images/malesicon.png";
import Layout from "../../components/Layout";

import CheckboxLabels from "../../components/CheckBox";
import CommonNav from "../../components/CommonNav";
import AppFooter from "../../components/AppFooter";
import { register } from "../../Services/auth";
import { useNavigate } from "react-router-dom";

import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from "../../Context/globaltContext";
import { useFormik } from "formik";
import { ContactSchema } from "../../schemas";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ReferFriend = () => {
  const { error, setError }: any = useAuth;
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const navigate = useNavigate()


  const [email, setEmail] = useState();
  // const [open, setOpen] = React.useState(false);
  // const [error, setError] : any = useState(false);
  const [loader, setLoader] = useState(false);

  const [password, setPassword] = useState();
  const labelText = () => {
    return (
      <>
        <Typography className={classes.checkbox_text}>
          i agree with <span style={{ color: "#FCBF07" }}>Terms of use</span>
        </Typography>
      </>
    );
  };

  const initialValues = {
    email: email,
    password: password,
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({


    initialValues,
    validationSchema: ContactSchema,

    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm();
    },

  })



  const messageFunc = () => {
    if (email && password) {

      //  setOpen(true);
      // const geterror =  localStorage.getItem("error")
      setError("You are successfully singup width referral program")
      // navigate("/signin")
      // setLoader(false)

    }

    else {
      // setOpen(true);
      setError("please fill the fields ")
      navigate("/referfriend")

    }

  }

  // const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // const action = (
  //   <React.Fragment>
  //     <Button color="secondary" size="small" onClick={handleClose}>
  //       UNDO
  //     </Button>
  //     <IconButton
  //       size="small"
  //       aria-label="close"
  //       color="inherit"
  //       onClick={handleClose}
  //     >
  //       <CloseIcon fontSize="small" />
  //     </IconButton>
  //   </React.Fragment>
  // );
  const runLoader = () => {
    setLoader(true)
  }
  const handleReferRegister = () => {
    handleSubmit()
    setLoader(true)
    const data = {
      email: values.email,
      password: values.password,
      name: "abc",
      phone: "123"
    }
    register(data).then(function (res) {
      setLoader(false)
      setOpen(true)
    }, function (err) {
      setLoader(false)

    })



  }
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const codeHeading = [
    {
      heading: "Get your code",
      description:
        `Exchange your  cryptocurrency vs cash or buy 
          cryptocurrency with cash form our approved partners.`,
      icon: logo1,
    },
    {
      heading: "Share with colleagues",
      description:
        `Exchange your  cryptocurrency vs cash or buy 
            cryptocurrency with cash form our approved partners.`,
      icon: logo2,
    },
    {
      heading: "Earn Rewards",
      description:
        `Exchange your  cryptocurrency vs cash or buy 
              cryptocurrency with cash form our approved partners.`,
      icon: logo3,
    },
  ];
  return (
    <>
      <Layout>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>

            {values.email && values.password ? " You are Sucessfully signup in our refferal Program !" : "please fill the fields"}

          </Alert>
        </Snackbar>

        {/* <CommonNav login2="Login" Signup2="Signup" priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" /> */}
        <Grid container className={classes.refer_friend_container1}>
          <Grid
            container
            columnSpacing={{ md: 3, lg: 5, xs: 0 }}
            rowGap={2}
            // columnGap={2}
            className={classes.refer_friend_subcontainer1}
          >
            <Grid item xs={12} sx={{

            }}>
              <Box sx={{
                transform: { lg: "scale(none)", xs: "scale(0.8)" },
                display: { lg: 'none', xs: "flex" },
              }}>
                <img
                  src={Friendreferbg}
                  alt={"images"}
                  width={"388px"}
                  height="216px"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              className={classes.refer_btn_text_button_Box}
              flexDirection={"column"}
            >
              <Typography className={classes.refer_a_friend}>
                Refer a friend
              </Typography>
              <Typography className={classes.refer_a_friend_description}>
                Exchange your cryptocurrency vs cash or buy{" "}
                <br className={classes.refer_remove_br} /> cryptocurrency with
                cash form our approved partners.
              </Typography>
              <Box sx={{ maxWidth: "433px" }}>
                <AppButton
                  textTransform="none"
                  title={"Get Referrel code"}
                  backgroundColor={"#FCBF07"}
                  color={"#fff"}
                  fontWeight={"500"}
                  fontSize={"20px"}
                  lineHeight={"30px"}
                  letterSpacing={"0.02em"}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={7} sx={{
              display: { lg: 'flex', xs: "none" },
              justifyContent: "end",
            }}>
              <Box >
                <img
                  src={Friendreferbg}
                  alt={"images"}
                  width={"636px"}
                  height="350px"
                />
              </Box>
            </Grid>

          </Grid>
        </Grid>

        <Grid container className={classes.refer_friend_container2}>
          <Grid md={12} columnSpacing={{ md: 0 }} columnGap={15} rowGap={3} sx={{
            display: "flex",
            transform: "scale(0.9)", flexDirection: { md: "row", xs: "column" },
          }}>
            <Grid item xs={12} md={5} sx={{
              border: "1px solid #D1D5DB"
              , borderRadius: "16px"
            }}>
              <Box component={"form"} className={classes.friend_form_box}>

                {/* {open?
              <Alert action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
         >{error}</Alert>
         : null} */}
                <Typography className={classes.Referral_Program}>
                  Referral Program
                </Typography>
                <Typography className={classes.Referral_Program_description}>
                  Sign up for the referral program
                </Typography>

                {/* <Typography className={classes.input_label_name}>
                First Name
              </Typography>
              <AppInputFields
                height="42px"
                placeholder={"Numan"}
                padding="9px 12px"
                border={"1px solid #D1D5DB"}
                className={classes.friend_inputs}
              /> */}

                <Typography className={classes.input_label_name}>
                  Email address
                </Typography>
                <AppInputFields
                  name="email"
                  type="email"
                  // onChange={(e: any) => {
                  //   setEmail(e.target.value)
                  // }}
                  height="42px"
                  padding="9px 12px"
                  placeholder={"you@example.com"}
                  border={"1px solid #D1D5DB"}
                  className={classes.friend_inputs_Email}
                  position={"start"}
                  inputIcon={<img src={Message} alt={"image"} />}
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <p style={{ color: "red" }}>{errors.email}</p>
                ) : null}
                <Typography className={classes.input_label_name}>
                  Password
                </Typography>
                <AppInputFields
                  name="password"
                  type={"password"}
                  // onChange={(e: any) => {
                  //   setPassword(e.target.value)
                  // }}
                  placeholder={"Zafar"}
                  height="42px"
                  padding="9px 12px"
                  border={"1px solid #D1D5DB"}
                  className={classes.friend_inputs}
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <p style={{ color: "red" }}>{errors.password}</p>
                ) : null}
                <Box className={classes.friend_inputs_Email}>
                  <CheckboxLabels
                    label={labelText()}
                    checkBoxBgColor={"#FCBF07"}
                  />
                </Box>
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
                <AppButton
                  title={"Sign Up"}
                  textTransform="none"
                  backgroundColor={"#FCBF07"}
                  color={"#fff"}
                  fontWeight={"500"}
                  fontSize={"20px"}
                  height="48px"
                  lineHeight={"30px"}
                  letterSpacing={"0.02em"}
                  onClick={handleReferRegister}
                  endIcon={<ArrowRightAltIcon />}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                padding: { lg: "0px 0px", xs: "56px 0px" },
                display: "flex",
                backgroundColor: "#F7FDFF",
                flexDirection: "column",
                justifyContent: "center",

              }}
            >
              {codeHeading.map((value, i) => (
                <Box
                  sx={{ padding: "0px 30px", marginBottom: i == 2 ? "" : "32px", display: "flex" }}
                  key={i}
                >
                  <Box>
                    <img
                      src={value.icon}
                      alt={"image"}
                    // width={"43px"}
                    // height={"3px"}
                    />
                  </Box>
                  <Box sx={{ marginLeft: "27px" }}>
                    <Typography className={classes.code_heading}>
                      {value.heading}
                    </Typography>
                    <Typography className={classes.code_heading_description}>
                      {value.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
        {/* // <AppFooter /> */}
      </Layout>
    </>
  );
};

export default ReferFriend;
