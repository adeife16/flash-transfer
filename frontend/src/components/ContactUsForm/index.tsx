import { Grid, Box } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "../../Styles";
import AppButton from "../AppButton";
import AppInputFields from "../AppInputFields";
import Notification from "../Notification";

import styled from "@emotion/styled";
import C1 from "../../assests/Images/corner2.png";
import "../../font.css/index.css"
import { useFormik } from "formik"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useSnackbar } from 'notistack'
import { Loader, Uploader } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'

import { createContact } from "../../Services/auth"
import { ContactSchema } from "../../schemas"
const InputContainer = styled("div")({
  marginBottom: "24px",
  maxWidth: "644px",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
});

const ContactUsForm = () => {

  const  [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const {
    name,
    email,
    phone,
    message
  } = state

  const disabled =
  !name ||
  !email ||
  !phone ||
  !message 

  const { enqueueSnackbar } = useSnackbar()
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [required, isRequired] = useState(false);
  const [error, setError]: any = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: ""
  });

 
  const handleChange = (key, value) => {
    setState(pre => ({ ...pre, [key]: value }))
  }
  const handleClick = () => {
    if (disabled) {
      isRequired(true)
      return
    }
    isRequired(false)
    setLoading(true)

    const data = {
      fullName: name,
      email: email,
      subject: "abcd",
      phone: phone,
      message: message
    }
    createContact(data).then(function (res) {
      debugger
     
      if(res?.data){
        setLoading(false)
        enqueueSnackbar('Form submit Successfully!', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
          }
        })   
      }else if(res.response.data.statusCode == 0)
      {
        setLoading(false)
        enqueueSnackbar(`Error: ${res.response.data.err }`, {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
          }
        })
      }
    }, function (err) {
      setLoading(false)
      enqueueSnackbar(`Error: ${err.message}`, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        }
      })
    })
  }


  const classes = useStyles();
 
  return (
    <>
      <Box component="form" >


        <Grid container sx={{ position: "relative" }} className={classes.contact_form2}>


          <Grid item md={12} sx={{ display: "flex", justifyContent: "end", position: "relative", margin: "-50px 0px -10px 40px" }}>
            <Box sx={{ display: { lg: "flex", xs: "none" } }}>

              <img src={C1} />
            </Box>
          </Grid>

          {/* // <Grid container sx={{ position: "relative" }}> */}

          <Grid item xs={12} sx={{ width: { lg: "89%" }, position: { xs: "none", lg: "absolute" }, margin: { lg: "0px 30px", xs: "0px 10px" } }}>
            {/* <Box sx={{ width: { lg: "100%", xs: "290px" ,xl:"660px"} }}> */}


            <InputContainer >
              <AppInputFields
                name="name"
                // position="absolute"
                // marginRight="20px"
                // width="585px"
                // onChange={(e: any) => setformData({ ...formData, name: e.target.value })}
                placeholder={"Full name"}
                padding={"13px 0px"}
                borderRadius="6px"
                border={"1px solid #D1D5DB"}
                onChange={value =>
                  handleChange('name', value.target.value)
                }                
              // onBlur={handleBlur}
              />
              
              {required && !name && (
                      <div>
                        <small  style={{color:"red",margin:"3px"}} className="error__message"> Name is required!</small>
                      </div>
                    )}
            </InputContainer>
            {/* </Box> */}
          </Grid>
          <Grid item xs={12} sx={{ margin: { lg: "0px 30px", xs: "0px 10px" } }}>
            <InputContainer>
              <AppInputFields
                name="email"
                // onChange={(e: any) => setformData({ ...formData, email: e.target.value })}
                type="email"
                placeholder={"Email"}
                padding={"13px 0px"}
                borderRadius="6px"
                onChange={value =>
                  handleChange('email', value.target.value)
                }
                // onBlur={handleBlur}
                border={"1px solid #D1D5DB"}
              />
              {required && !email && (
                      <div>
                        <small style={{color:"red"}} className="error__message"> Email is required!</small>
                      </div>
                    )}
            </InputContainer>
          </Grid>
          <Grid item xs={12} sx={{ margin: { lg: "0px 30px", xs: "0px 10px" } }}>
            <InputContainer>
              <AppInputFields
                name="phone"
                // onChange={(e: any) => setformData({ ...formData, phone: e.target.value })}
                type="tel"
                placeholder={"Phone"}
                padding={"13px 0px"}
                borderRadius="6px"
                onChange={value =>
                  handleChange('phone', value.target.value)
                }
                // onBlur={handleBlur}
                border={"1px solid #D1D5DB"}
              />
              {required && !phone && (
                      <div>
                        <small style={{color:"red"}} className="error__message"> Phone is required!</small>
                      </div>
                    )}

            </InputContainer>
          </Grid>
          <Grid item xs={12} sx={{ margin: { lg: "0px 30px", xs: "0px 10px" } }}>
            <InputContainer>
              <AppInputFields
                name="message"
                // onChange={(e: any) => setformData({ ...formData, message: e.target.value })}
                type="text"
                placeholder={"Message"}
                // width="550px"
                padding={"13px 0px"}
                borderRadius="6px"
                checkMultiLine
                maxRows={3}
                alignItems={"baseline"}
                height={"120px"}
                onChange={value =>
                  handleChange('message', value.target.value)
                }
                // onBlur={handleBlur}
                border={"1px solid #D1D5DB"}
              />
              {required && !message && (
                      <div>
                        <small style={{color:"red"}} className="error__message"> Message is required!</small>
                      </div>
                    )}
            </InputContainer>
          </Grid>
          {/* {loader ?
            (
              <div className="loader" >
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
          } */}
          <Grid item xs={12} sx={{ margin: { lg: "0px 30px", xs: "0px 10px" } }}>
            <AppButton
              onClick={handleClick}
              textTransform="none"
              title={loading ? <Loader /> : 'Submit'}
              color={"#fff"}
              backgroundColor={"#FCBF07"}
              maxWidth={"104px"}
              padding={"13px 0px"}
              borderRadius="6px"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactUsForm;
