import { Box, Grid, Typography } from "@mui/material";
import AppInputFields from "../AppInputFields";
import { styled } from "@mui/system";
import { useStyles } from "../../Styles";
import AppButton from "../AppButton";
import "../../font.css/index.css"
import { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./index.css"
import MapIcon from "../../assests/Logo/MapIcon.svg";
import SelectFlags from "../../components/FlagsSelect";

import { updateProfile } from "../../Services/auth"
import { useAuth } from "../../Context/globaltContext";
import { storage } from '../../firebase';

import SmallCamera from "../../assests/Images/SmallCamera.png";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import avatar from "../../assests/Images/avatar.png";
import { getUser } from "../../Services/auth"
import { Loader } from 'rsuite'

import { useSnackbar } from 'notistack'
import 'rsuite/dist/rsuite.min.css'
import Flowersbg from "../../assests/Images/Flowersbg.jpeg";
import { toast } from 'react-toastify';
const InputContainer = styled("div")({
  marginBottom: "32px",
});

const ProfileForm = () => {
  const { setImgUrl, country, setCountry }: any = useAuth()

  const [loader, setLoader] = useState(false);
  const { enqueueSnackbar } = useSnackbar()

  const [currentUserLocation, setCurrentUserLocation]: any = useState()

  const [state, setState] = useState({
    address: "",
  })
  const [progresspercent, setProgresspercent] = useState(0);
  const [firstName, setfirstName]: any = useState()
  const [lastName, setlastName]: any = useState()
  const [presentAddress, setpresentAddress]: any = useState()
  const [permenantAddress, setPermenantAddress]: any = useState()
  // const [country, setCountry]: any = useState()
  const [city, setCity]: any = useState()
  const [postalCode, setpostalCode]: any = useState()
  const [dob, setDob]: any = useState()
  const [phone, setPhone]: any = useState()
  const [email, setEmail]: any = useState()

  const [profileImg, setprofileImg]: any = useState()



  //  image function
  const handleUploadClick = (e: any) => {
    runLoader()

    e.preventDefault()
    const file = e.target.files[0]
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on("state_changed",

      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
          setprofileImg(downloadURL)

        });
        setLoader(false)
      }
    );
  };
  const handleChange = (address) => {

    setState({
      ...state,
      address: address,

    })
    setCity(address)


    // setCurrentLocation({ address });
  };
  console.log("city", city)

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
  const runLoader = () => {
    setLoader(true)
  }

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleUpdate = async () => {
    // if(!validateEmail(email)){
    //   toast.warn("Please Input email correctly");
    //   return;
    // }
    runLoader()
    const data = {
      firstName: firstName,
      profileImg: profileImg,
      phone: phone,
      lastName: lastName,
      presentAddress: presentAddress,
      permenantAddress: permenantAddress,
      country: country,
      city: city,
      postalCode: postalCode,
      dob: dob,

    }
    updateProfile(data).then(() => {
      geCurrenttUser()
      setImgUrl(profileImg)
      setLoader(false)
      enqueueSnackbar('Profile Updated Successfully!', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        }
      })
    })
  }
  const geCurrenttUser = () => {
    getUser().then((data) => {
      debugger
      const userData: any = JSON.parse(JSON.stringify(data.data))
      setfirstName(userData.firstName ? userData.firstName : "")
      setlastName(userData.lastName ? userData.lastName : "")
      setpresentAddress(userData.presentAddress ? userData.presentAddress : "")
      setPermenantAddress(userData.permenantAddress ? userData.permenantAddress : "")
      setPhone(userData.phone ? userData.phone : "")
      setDob(userData.dob ? userData.dob : "")
      setCity(userData.city ? userData.city : "")
      setpostalCode(userData.postalCode ? userData.postalCode : "")
      setCountry(userData.country ? userData.country : "")
      setEmail(userData.email ? userData.email : "")
      setprofileImg(userData.profileImg ? userData.profileImg : "")

      console.log("userdata", userData)

    })
  }

  const classes = useStyles();


  useEffect(() => {
    geCurrenttUser()

  }, [])

  return (
    <>
      <div>
        <Grid container>
          <Grid
            container
            sx={{
              backgroundImage: `url(${Flowersbg})`,
            }}
            className={classes.Profile_container_1}
          >
            {/* <Grid > */}
            {/* <Box sx={{  display: { xs: 'none', sm: "flex" } }} className={classes.camera_box1}>
              <input
                accept="image/*"
                style={{
                  opacity: "0",
                  position: "absolute",
                  zIndex: "1",
                  // marginRight:"-120px",
                  width:"40px"
                }}
                // className={classes.input}
                id="contained-button-file"
                // multiple
                type="file"

              />
              </Box> */}
            <Box className={classes.camera_box}>

              <input
                accept="image/*"
                style={{
                  cursor: "pointer",
                  marginLeft: "-160%",
                  marginTop: "12%",
                  opacity: "0",
                  position: "absolute",
                }}
                id="contained-button-file"
                // multiple
                type="file"
                onChange={handleUploadClick}
              />
            </Box>
            <Box sx={{ backgroundImage: `url(${SmallCamera})`, display: { xs: 'none', sm: "flex" } }} className={classes.camera_box}>
              {/* <img src={SmallCamera} alt={"image"} style={{ cursor: "pointer", position: "relative" }} /> */}

            </Box>
            <Grid sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "center", alignItems: "center" }} item xs={12}>
              <Box >
                <img src={SmallCamera} alt={"image"} />
              </Box>
              {/* </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.Profile_container_2}>
          <Grid container className={classes.Profile_sub_container_2}>
            <Grid item xs={12} className={classes.grid_xs_12_conatiner}>


              <Box>

                {
                  profileImg ?
                    <img src={profileImg} alt={"image"} width="186px" height="186px" style={{ borderRadius: "100px" }} className={classes.noman_pic_settings} />
                    :
                    <img src={avatar} alt={"image"} width="186px" height="186px" style={{ borderRadius: "100px" }} className={classes.noman_pic_settings} />

                }

              </Box>
              <Box className={classes.main_contianer_profile_pic}>
                <Typography className={classes.Numan}>{firstName ? firstName : ""} </Typography>
                <Box className={classes.continer_id_btn}>
                  <Typography className={classes.customer_id}>
                    {email ? email : "Customer ID :FT121212 "}
                    {loader ?
                      (
                        <span className="loader2">
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
                        </span>
                      )
                      : null
                    }
                  </Typography>

                  <AppButton
                    textTransform="none"
                    backgroundColor={"#5D5FEF"}
                    title={"Save"}
                    color={"#fff"}
                    maxWidth={"142px"}
                    onClick={handleUpdate}
                    className={classes.hide_noman_btn}
                  />
                </Box>


              </Box>

            </Grid>
          </Grid>
        </Grid>

      </div>
      <Grid container className={classes.Profile_container_3}>
        <Grid container columnSpacing={2} className={classes.sub_Profile_container_3}>
          <Grid item xs={12} md={6}>
            <InputContainer>
              <Typography className={classes.p_F_name}>First Name</Typography>
              <AppInputFields
                value={firstName}
                onChange={(e: any) => {
                  setfirstName(e.target.value)
                }}
                placeholder={"Charlene Reed"}
                border={"1px solid #D1D5DB"}
                borderRadius="6px"
              />
            </InputContainer>
            <InputContainer>
              <Typography className={classes.p_F_name}>Email</Typography>
              <AppInputFields
                // onChange={(e: any) => {
                //   setlastName (e.target.value)

                // }}
                value={email}
                // disabled
                placeholder={""}
                border={"1px solid #D1D5DB"}
                borderRadius="6px"
              />
            </InputContainer>
            <InputContainer>
              <Typography className={classes.p_F_name}>Phone</Typography>
              <AppInputFields
                value={phone}
                onChange={(e: any) => {
                  setPhone(e.target.value)

                }}
                placeholder={"25 January 1990"}
                border={"1px solid #D1D5DB"}
                borderRadius="6px"
              />
            </InputContainer>
            <InputContainer>
              <Typography className={classes.p_F_name}>Date of Birth</Typography>
              <AppInputFields
                value={dob}

                onChange={(e: any) => {
                  setDob(e.target.value)

                }}
                placeholder={"San Jose, California, USA"}
                border={"1px solid #D1D5DB"}
                borderRadius="6px"
              />
            </InputContainer>
            <InputContainer>
              <Typography className={classes.p_F_name}>Postal Code</Typography>
              <AppInputFields
                value={postalCode}
                onChange={(e: any) => {
                  setpostalCode(e.target.value)

                }}
                placeholder={"45962"}
                border={"1px solid #D1D5DB"}
                borderRadius="6px"
              />
            </InputContainer>


          </Grid>
          <Grid item xs={12} md={6}>
            <InputContainer>
              <Typography className={classes.p_F_name}>Last Name</Typography>
              <AppInputFields
                value={lastName}
                onChange={(e: any) => {
                  setlastName(e.target.value)

                }}
                placeholder={"Charlene Reed "}
                border={"1px solid #D1D5DB"}
                borderRadius="6px"
              />
            </InputContainer>

            <InputContainer>
              <Typography className={classes.p_F_name}>Present Address</Typography>
              <AppInputFields
                value={presentAddress}
                onChange={(e: any) => {
                  setpresentAddress(e.target.value)

                }}
                placeholder={"San Jose, California, USA"}
                border={"1px solid #D1D5DB"}
                borderRadius="6px"
              />
            </InputContainer>
            <InputContainer>
              <Typography className={classes.p_F_name}>Permenent Address</Typography>
              <AppInputFields
                value={permenantAddress}
                onChange={(e: any) => {
                  setPermenantAddress(e.target.value)
                }}
                placeholder={"San Jose, California, USA"}
                border={"1px solid #D1D5DB"}
                borderRadius="6px"
              />
            </InputContainer>
            <InputContainer>
              <Typography className={classes.p_F_name}>City</Typography>
              {/* <AppInputFields
                value={city}
                onChange={(e: any) => {
                  setCity(e.target.value)

                }}
                placeholder={"San Jose"}
                border={"1px solid #D1D5DB"}
                borderRadius="6px"
              /> */}

              <PlacesAutocomplete
                value={city ? city : state.address}
                onChange={handleChange}
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
                            <img
                              src={MapIcon}
                              alt=""
                              style={{
                                height: "26.67px",
                                marginRight: "5px",
                                width: "21.33px",
                              }}
                            />
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </PlacesAutocomplete>

            </InputContainer>
            <InputContainer>
              <Typography className={classes.p_F_name}>Country</Typography>
              {country ?
                <AppInputFields
                  borderRadius="6px"
                  placeholder={"Address,city,state or Zip"}
                  border={"1px solid #D1D5DB"}
                  padding={"16px 0px"}
                  margin="14px 0px"
                  value={country}
                  onChange={(e: any) => setCountry(e.target.value)} />
                :
                <SelectFlags />
              }
            </InputContainer>

            <Box sx={{ display: { xs: "flex", sm: "none", justifyContent: "flex-end" } }}>
              <AppButton
                backgroundColor={"#5D5FEF"}
                title={"Save"}
                color={"#fff"}
                maxWidth={"55px"}
                onClick={handleUpdate}
              // className={classes.hide_noman_btn}
              />
            </Box>


          </Grid>
        </Grid>

      </Grid>
    </>
  );
};

export default ProfileForm;
