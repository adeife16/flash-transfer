
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../Styles";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import Layout from "../../components/Layout";
import FindLocationProcess2Form from "../../components/FindLocationProcess2Form";
import BigP from "../../assests/Logo/BigP.svg";
import React, { useCallback, useEffect, useState, useRef } from "react";
import AutoComplete from "../../components/autoComplete"
import AppButton from "../../components/AppButton";
import AppInputFields from "../../components/AppInputFields";
import SelectFlags from "../../components/FlagsSelect";
import MapIcon from "../../assests/Logo/MapIcon.svg";
import CurrentLocation from "../../assests/Logo/CurrentLocation.svg";
import { Link } from "react-router-dom";
import "../../font.css/index.css"

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Map from "../../assests/Images/Map.jpg";
import VisitUs from "../../components/VisitUs";
import SearchMap from "../../components/SearchMap";
import "../../font.css/index.css"
import GoogleMapReact from "google-map-react";

const FindLocationProcess2 = () => {
  const classes = useStyles();
  const LOS_ANGELES_CENTER = [24.9232091, 67.1023467]
  const [progresspercent, setProgresspercent] = useState(0);
  const [latitude, setlatitude]: any = useState()
  const [langitude, setlangitude]: any = useState()
  const [currentUserLocation, setCurrentUserLocation]: any = useState()
  const [presentAddress, setpresentAddress]: any = useState()
  const [countryState, setCountryState]: any = useState()
  const [country, setCountry]: any = useState()
  const [city, setCity]: any = useState()

  const [color, setColor]: any = useState("#E9F5FF")
  const [color1, setColor1]: any = useState("")


  const [state, setState] = useState({
    address: "",
  })


  const {
    address
  } = state;
  // useEffect(() => {
  //   getCurrentPosition()
  // }, [])

  const getCurrentPosition = () => {
    debugger
    if (navigator.geolocation) {
      console.log("yes")
      // ADDED FROM HERE 
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude // You have obtained latitude coordinate!
        let long = position.coords.longitude // You have obtained longitude coordinate!
        let location = {
          lat: lat,
          lng: long
        }

        setlatitude(lat)
        setlangitude(long)
        setCurrentUserLocation(location)
        getAddress(lat, long) // Will convert lat/long to City, State, & Zip code   
      }, error => {                               // REVISED
        posError(); // REVISED
      }, { maximumAge: 1000 });
    } else {
      alert("Sorry, Geolocation is not supported by this browser.");
    }
  }
  const posError = () => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then(res => {
        if (res.state === 'denied') {
          alert('Enable location permissions for this website in your browser settings.')
        }
      })
    } else {
      alert('Unable to access your location. You can continue by submitting location manually.') // Obtaining Lat/long from address necessary
    }
  }

  const getAddress = (lat, long) => {
    debugger
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyAkzhwHhdKNvEJDppexDObGOj9Mkv5-M2s`)
      .then(res => res.json())
      .then(address => setZip(address))
  }
  const setZip = (address) => {
    debugger
    let city = address.results[5].address_components[2].short_name
    let state = address.results[5].address_components[4].short_name
    let postal = address.results[5].address_components[0].short_name
    let country = address.results[5].address_components[5].long_name

    setState({
      ...state,
      address: postal,

    })
    setCity(city)
    setCountryState(state)
    setpresentAddress(postal)
    setCountry(country)
  }
  const renderMarker = (map, maps) => {
    let marker = new maps.Marker({
      position: currentUserLocation,
      map,
      title: "User Location"
    });
    return marker;
  };
  const handleChange = (address) => {

    setState({
      ...state,
      address: address,

    })

    // setCurrentLocation({ address });
  };

  const handleSelect = (address) => {
    debugger
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng: any) => {
        debugger
        let location: any = {
          lat: latLng.lat,
          lng: latLng.lng
        }
        setCurrentUserLocation(location)
        setState({
          ...state,
          address: address,

        })
      })
      .catch((error) => console.error("Error", error));
    // this.props.onAddressSelect(address);
  };
  return (
    <>
      <Layout>
        <Grid container sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" } }} className={classes.find_location_process_2_container}>
          <Grid container>
            <Grid item xs={12} >
              <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Typography className={classes.find_location_h1}>
                  Find locations
                </Typography>
                <Typography className={classes.find_location_h1_description}>
                  Home is behind, the world ahead and there are many paths to
                  tread through shadows to the edge.
                </Typography>
              </Box>
              <Box className={classes.error_container}>
                <Typography className={classes.error_name}>
                  <ReportGmailerrorredIcon className={classes.warning_icon} />
                  To continue, please enter the address.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" } }} className={classes.find_location_process_3_container}>
          <Grid container>
            <Grid item xs={12}>
              <Box
                component={"form"}
                sx={{
                  boxShadow:
                    "-4px -4px 22px rgba(0, 0, 0, 0.09), 2px 4px 22px rgba(0, 0, 0, 0.09)",
                  padding: { lg: "24px 30px", xs: "20px 10px" },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: { md: "row", lg: "row", xs: "column" } }} >
                  <Box sx={{ width: "100%" }}>
                    <Typography className={classes.send_FRom}>Send From</Typography>
                    <SelectFlags countryName={country}/>
                  </Box>

                  <Box sx={{ width: "100%", marginLeft: { md: "8px", sm: "80px" } }}>
                    <Typography className={classes.send_FRom}>
                      Enter ZIP/Postal Code
                    </Typography>
                    {/* <AutoComplete width="39%" /> */}
                    <PlacesAutocomplete
                      value={address}
                      onChange={handleChange}
                      onSelect={handleSelect}
                    >
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                          <input
                            style={{
                              width: "100%",
                              marginTop: "6px",
                              border: "1px solid #D1D5DB",
                              padding: "9px 10px",
                              borderRadius: "6px",
                            }}
                            {...getInputProps({
                              placeholder: "Search Places ...",
                              className: "location-search-input",
                            })}
                          />
                          <div style={{ position: "absolute" ,zIndex:"2"}} className="autocomplete-dropdown-container">
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
              borderRadius="6px"
              height="42px"
              placeholder={"Address,city,state or Zip"}
              inputIcon={<img src={MapIcon} alt={"image"} style={{height:"26.67px",width:"21.33px"}} />}
              border={"1px solid #D1D5DB"}
              padding={"9px 0px"}
            /> */}
                  </Box>
                </Box>

                <Box sx={{ display: "flex", cursor: "pointer", marginTop: "17px", justifyContent: "flex-end" }} onClick={getCurrentPosition}>
                  <Typography
                    onClick={getCurrentPosition}
                    className={classes.Current_Location}>
                    <img
                      src={CurrentLocation}
                      alt={"image"}
                      style={{ verticalAlign: "middle", marginRight: "10px" }}
                    />
                    Use Current Location
                  </Typography>
                </Box>

                <Typography className={classes.try_to_do}>
                  What are you trying to do?
                </Typography>
                <Box sx={{  zIndex: "-1", display: "flex", marginBottom: "48px" }}>
                  <AppButton
                    textTransform="none"
                    title={"Send Money"}
                    border={"1px solid #5D5FEF"}
                    backgroundColor={color}
                    padding={"19px 0px"}
                    onClick={() => {
                      setColor("#E9F5FF")
                      setColor1("#fff")

                    }}
                  />
                  <AppButton
                    textTransform="none"
                    title={"Pick up Money"}
                    border={"1px solid #5D5FEF"}
                    backgroundColor={color1}
                    padding={"19px 0px"}
                    className={classes.pick_up_money}
                    onClick={() => {
                      setColor("#fff")
                      setColor1("#E9F5FF")
                    }}
                  />
                </Box>
                <Link to="/findlocation2" style={{ textDecoration: "none", width: "142px" }}>

                  <Box sx={{ display: { lg: "flex", xs: "none" }, justifyContent: "flex-end" }}>
                    <AppButton
                      textTransform="none"
                      title={"Continue"}
                      backgroundColor={"#FCBF07"}
                      color={"#fff"}
                      maxWidth={"435px"}
                      padding={"17px 0px"}
                    />
                  </Box>
                  <Box sx={{ display: { lg: "none", xs: "flex" }, justifyContent: "flex-end" }}>
                    <AppButton
                      textTransform="none"
                      title={"Continue"}
                      backgroundColor={"#FCBF07"}
                      color={"#fff"}
                      fontSize="14px"
                      fontWeight="500"
                      lineHeight="20px"
                      maxWidth={"435px"}
                      padding={"9px 0px"}
                    />
                  </Box>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <VisitUs />


        <Grid item xs={12}>
          <Box style={{ height: '500px', width: '100%' }}>

            <GoogleMapReact

              bootstrapURLKeys={{
                key: "AIzaSyAkzhwHhdKNvEJDppexDObGOj9Mkv5-M2s"
              }}
              defaultZoom={13}
              defaultCenter={LOS_ANGELES_CENTER}
              center={currentUserLocation}
              yesIWantToUseGoogleMapApiInternals={true}
              onGoogleApiLoaded={({ map, maps }) => {
                renderMarker(map, maps)
              }}
            >
            </GoogleMapReact>
          </Box>
        </Grid>

        {/* <SearchMap /> */}

        <Box sx={{ padding: { lg: "0px 0px", xs: "0px 0px" } }}></Box>
      </Layout>
    </>
  );
};

export default FindLocationProcess2;
