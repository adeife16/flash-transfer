import { Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppInputFields from "../../components/AppInputFields";
import Layout from "../../components/Layout";
import { useStyles } from "../../Styles";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import UploadFile from "../../assests/Images/UploadFile.png";
import { Box } from "@mui/system";
import AppButton from "../../components/AppButton";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import MerchantRegisterForm from "../../components/MerchantRegisterForm";
import "../../font.css/index.css"
import MapIcon from "../../assests/Logo/MapIcon.svg";

// import { useDropzone } from "React-dropzone";

const [currentUserLocation, setCurrentUserLocation]: any = useState()

const [state, setState] = useState({
  address: "",
})
import { register } from "../../Services/auth";
import { ContactSchema } from "../../schemas";
import { useFormik } from "formik";
import CountrySelect from "../../components/autoComplete";
import { useLocalStorageState } from "../../hooks";
import { useNavigate } from "react-router-dom";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const RagistrationForMerchat = () => {

  // const { getRootProps, getInputProps } = useDropzone({});
  const [selectedImage, setSelectedImage]: any = useState(null);
  const [imageUrl, setImageUrl]: any = useState(null);
  const [open, setOpen] = React.useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [city, setCity] = useState()

  const classes = useStyles();
  const initialValues = {
    name: "",
    email: "",
    password: "",


  }
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleChangeCity = (address) => {

    setState({
      ...state,
      address: address,

    })
    setCity(address)


    // setCurrentLocation({ address });
  };
  // console.log("city", city)

  const handleSelect = (address) => {
    // debugger
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng: any) => {
        // debugger
        let location: any = {
          lat: latLng.lat,
          lng: latLng.lng
        }
        setCurrentUserLocation(location)
        setCity(address)
        setState({
          ...state,
          address: address,

        })
      })
      .catch((error) => console.error("Error", error));
    // this.props.onAddressSelect(address);
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: ContactSchema,
    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm();
    },

  })
  const registration = () => {
    handleSubmit()
    const data = {
      email: values.email,
      password: values.password,
      name: "abc",
      phone: "123"
    }
    register(data).then(res => {
      setLoader(true)
      setOpen(true)
      navigate("/")
    }, function (err) {
      setLoader(false)

    })
  }

  useEffect(() => {
    if (open === false) {
      setLoader(false)

    }
  })
  return (
    <>
      <Layout>

        <Grid container className={classes.merchatnt_container_1}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
              {values.email ? "You are Sucessfully signup with Merchants !" : "please Fill the fields"}

            </Alert>
          </Snackbar>
          <Grid container sx={{ transform: { lg: "scale(0.9)", xs: "none" } }}>
            <Grid item xs={12} sx={{ backgroundColor: "#fff" }}>
              <Typography className={classes.registration_text}>
                Registration Page For Merchants
              </Typography>
            </Grid>

          </Grid>
        </Grid>
        <Grid container className={classes.merchatnt_container_2}>
          <Grid
            sx={{ transform: { lg: "scale(0.9)", xs: "none" } }}
            container
            columnSpacing={2}
            rowGap={2}
            className={classes.form_grid}
          >
            <Grid item xs={12} sm={6}>
              <Typography className={classes.p_F_name}>First name</Typography>
              <AppInputFields
                name="name"
                type="text"
                // onChange={(e: any) => {
                //   setName(e.target.value)
                // }}
                border={"1px solid #D1D5DB"}
                borderRadius={"6px"}
                padding={"9px 0px"}
                onChange={handleChange}
                value={values.name}

              />
              {errors.name && touched.name ? (
                <p style={{ color: "red" }}>{errors.name}</p>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.p_F_name}>Last name</Typography>
              <AppInputFields
                // onChange={handleChnage}
                border={"1px solid #D1D5DB"}
                borderRadius={"6px"}
                padding={"9px 0px"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.p_F_name}>Email address</Typography>
              <AppInputFields
                type="email"
                name="email"
                // onChange={(e: any) => {
                //   setEmail(e.target.value)
                // }}
                onChange={handleChange}
                value={values.email}
                border={"1px solid #D1D5DB"}
                borderRadius={"6px"}
                padding={"9px 0px"}
              />
              {errors.email && touched.email ? (
                <p style={{ color: "red" }}>{errors.email}</p>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.p_F_name}>Password</Typography>
              <AppInputFields
                type="password"
                name="password"
                // onChange={(e: any) => {
                //   setpassword(e.target.value)
                // }}
                onChange={handleChange}
                value={values.password}
                border={"1px solid #D1D5DB"}
                borderRadius={"6px"}
                padding={"9px 0px"}
              />
              {errors.password && touched.password ? (
                <p style={{ color: "red" }}>{errors.password}</p>
              ) : null}
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography className={classes.p_F_name}>
                Name Of Conpany
              </Typography>
              <AppInputFields
                // onChange={handleChnage}
                border={"1px solid #D1D5DB"}
                borderRadius={"6px"}
                padding={"9px 0px"}
              />
            </Grid>

            <Grid item xs={12} sm={6} >
              <Typography className={classes.p_F_name}>
                Country / Region
              </Typography>

              <CountrySelect />
              {/* <AppInputFields
              // onChange={handleChnage}
              border={"1px solid #D1D5DB"}
              borderRadius={"6px"}
              padding={"9px 0px"}
            /> */}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography className={classes.p_F_name}>Street address</Typography>
              <AppInputFields
                // onChange={handleChnage}
                border={"1px solid #D1D5DB"}
                borderRadius={"6px"}
                padding={"9px 0px"}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.p_F_name}>Telephone</Typography>
              <AppInputFields

                // onChange={handleChnage}
                border={"1px solid #D1D5DB"}
                borderRadius={"4px"}
                padding={"9px 0px"}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.p_F_name}>City</Typography>
              <PlacesAutocomplete
                value={state.address}
                onChange={handleChangeCity}
                onSelect={handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      style={{
                        width: "100%",
                        border: "1px solid #D1D5DB",
                        padding: "15px 10px",
                        borderRadius: "6px",
                      }}
                      {...getInputProps({
                        placeholder: "Search Places ...",
                        className: "location-search-input",
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? {
                            cursor: "pointer",
                            borderBottom: "0.5px solid #D1D5DB",
                            borderLeft: "0.5px solid #D1D5DB",
                            borderRight: "0.5px solid #D1D5DB",
                            background: "white",
                            padding: "8px 10px",
                          }
                          : {
                            borderBottom: "0.5px solid #D1D5DB",
                            borderLeft: "0.5px solid #D1D5DB",
                            borderRight: "0.5px solid #D1D5DB",

                            padding: "8px 10px",
                            // borderRadius: "6px",
                            backgroundColor: "#ffffff",
                            cursor: "pointer",
                          };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            {" "}
                            <img
                              src={MapIcon}
                              alt=""
                              style={{
                                height: "26.67px",
                                marginRight: "5px",
                                width: "21.33px",
                              }}
                            />
                            '<span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </PlacesAutocomplete>
              {/* <AppInputFields
                // onChange={handleChnage}
                border={"1px solid #D1D5DB"}
                borderRadius={"6px"}
                padding={"9px 0px"}
              /> */}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.p_F_name}>ZIP / Postal</Typography>

              <AppInputFields
                // onChange={handleChnage}
                border={"1px solid #D1D5DB"}
                borderRadius={"6px"}
                padding={"9px 0px"}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography className={classes.send_identity}>
                Send us your identity card or passport front / back as well as
                your document which proves the existence of your company.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* <MerchantRegisterForm /> */}
        <Divider />
        <Grid container className={classes.merchatnt_container_2}>
          <Grid container sx={{ transform: { lg: "scale(0.9)", xs: "none" } }}>

            <Grid item xs={12}>
              <Typography className={classes.Upload_documnets}>
                Upload Company Documents
              </Typography>


            </Grid>
            <Grid item xs={12} className={classes.upload_file_contianer}>
              <Box className={classes.upload_icon_box}>



                {imageUrl && selectedImage && (
                  <Box mt={2} textAlign="center">
                    {/* <div>Image Preview:</div> */}
                  </Box>
                )}
                {imageUrl ?
                  <img src={imageUrl} alt={selectedImage.name} height="100px" />
                  :
                  <img src={UploadFile} alt={"image"} />
                }
              </Box>


              <Typography className={classes.Upoad_text}>
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  name="Upload a file"
                  style={{ position: "absolute", opacity: "0", }}
                  onChange={(e: any) => setSelectedImage(e.target.files[0])}
                />
                <span style={{ color: "#5D5FEF" }}>Upload a file </span>
                or drag
                and drop
              </Typography>
              <Typography className={classes.images_format}>
                PNG, JPG, GIF up to 10MB
              </Typography>
            </Grid>
            {/* <div {...getRootProps({ className: "dropzone" })}>
              <input className="input-zone" {...getInputProps()} />
              <div className="text-center">
                <p className="dropzone-content">
                  Drag’n’drop some files here, or click to select files
                </p>
        )}
              </div>
            </div> */}
            {loader === true ?
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
            }
            <Grid item xs={12} className={classes.btn_submit_form_box}>
              <AppButton
                textTransform="none"
                title={"Submit Form"}
                color={"#fff"}
                maxWidth={"119px"}
                backgroundColor={"#5D5FEF"}
                boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}
                borderRadius={"6px"}
                onClick={registration}
              />
            </Grid>

          </Grid>
        </Grid>

      </Layout>
    </>
  );
};

export default RagistrationForMerchat;
