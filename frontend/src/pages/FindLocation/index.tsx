import { Grid, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import { useStyles } from "../../Styles";
import FindLocationbg from "../../assests/Images/FindLocationbg.png";
import LocationMap from "../../assests/Images/LocationMap.png";
import AppInputFields from "../../components/AppInputFields";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationSymbol from "../../assests/Logo/LocationSymbol.svg";
import PersonLogo from "../../assests/Logo/PersonLogo.svg";
import { Box } from "@mui/system";
import MapIcon from "../../assests/Logo/MapIcon.svg"
import LocationForm from "../../components/LocationForm";
import "../../font.css/index.css"
import GoogleMapReact from "google-map-react";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import AutoComplete from "../../components/autoComplete"
import { getUsersRole } from "../../Services/auth";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const FindLocation = () => {
  const classes = useStyles();
  const [userMerchant, setUserMerchant]: any = useState([])
  const [selectedMerchant, setSelectedMerchant] = useState('');

  const LOS_ANGELES_CENTER = [24.9232091, 67.1023467]

  const getUser = () => {
    const data = {
      role: "merchant"
    }
    getUsersRole(data).then((data) => {
      debugger
      const getMerchant = data.user
      setUserMerchant(getMerchant)
      // console.log("dd", data.users)
    })
  }
  // console.log("dd", userMerchant.map((item: any) => {
  //   return (
  //     <Box>

  //       {item.email}
  //     </Box>
  //   )
  // })
  // )

  useEffect(() => {
    getUser()
  }, [])


  const [state, setState] = useState({
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    places: [],
    address: ""

  })

  const {
    places, mapApiLoaded, mapInstance, mapApi,address
  } = state;

  const apiHasLoaded = (map, maps) => {
    setState({
      ...state,
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    })
  };
  const handleChange = (address) => {

    setState({
      ...state,
      address: address,

    })

    // setCurrentLocation({ address });
  };
  const filteredData = userMerchant.filter((user) => {
        return user?.city.startsWith(address);
        // Use the toLowerCase() method to make it case-insensitive
      });
  const handleSelect = (address) => {

    // debugger
    // if (address !== '') {
    //   const results = userMerchant.filter((user) => {
    //     return user?.location.startsWith(address);
    //     // Use the toLowerCase() method to make it case-insensitive
    //   });
    //   setUserMerchant(results);
    // } else {
    //   setUserMerchant(userMerchant);
    //   // If the text field is empty, show all users
    // }

    setState({
      ...state,
      address: address,

    })
  };

  return (
    <Layout>
      {/* <Grid sx={{
        display: { lg: "flex", xs: "none" },
        // paddingTop: "9px !important",
        // backgroundColor: "#D1D5DB",
      }}>

      </Grid> */}
      <Grid
        container
        sx={{
          backgroundImage: `url(${FindLocationbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: { lg: "383px", xs: "190px" },
          opacity: "1"

        }}
        className={classes.Find_location_container1}
      >
        <Grid container className={classes.Find_location_subcontainer1}>
          <Grid item xs={12} sx={{
            // background: "#000000",
            // opacity: "0.75"
          }}>
            <Typography sx={{ opacity: "1" }} color="white" mt="63px" className={classes.retail_store}>
              Our retail stores are available
            </Typography>
            <Typography className={classes.retail_store_description}>
              Send and receive money at a Flash transfer agent <br className={classes.hide_break_agent} /> location near you
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container sx={{ mb: { md: "-60px", xs: "-20px" }, }} className={classes.Find_location_container2}>
        <Grid container sx={{
          display: "flex", justifyContent: "center"
          //  transform: { lg: "scale(0.9)", xs: "scale(none)" } 
        }}
        >
          <Grid item xs={10.9} sx={{
            mt: { lg: "-20px", xs: "20px" }
          }}>
            <Typography className={classes.Find_location_h2}>
              Find locations
            </Typography>
            <Typography className={classes.France_h1}>France </Typography>
            <Box sx={{ display: { xs: "flex", sm: "none" }, height: { lg: "0px", xs: "266.33px" }, backgroundColor: "red" }}>
              {/* <img src={LocationMap} alt={"image"} width="100%" height="266.33px" /> */}
              <GoogleMapReact

                bootstrapURLKeys={{
                  key: "AIzaSyAkzhwHhdKNvEJDppexDObGOj9Mkv5-M2s"
                }}

                defaultZoom={15}
                defaultCenter={LOS_ANGELES_CENTER}

              >
              </GoogleMapReact>
            </Box>


            <Typography className={classes.Find_here}>
              Find from here{" "}
            </Typography>
            <Box sx={{ width: { md: "100%", xl: "92%" } }}>
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
                              border: "1px solid #D1D5DB",
                              padding: "9px 10px",
                              borderRadius: "8px",
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

                borderRadius="8px"
                placeholder={"Search address ,city or Postal code"}
                border={"1px solid #D1D5DB"}
                inputIcon={<SearchOutlinedIcon />}
              /> */}
            </Box>

          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{
      }} className={classes.Find_location_container3}>
        <Grid sx={{
          display: "flex",
          justifyContent: "Center",
        }} container columnSpacing={1}>
          <Grid sx={{
            //  transform: { lg: "scale(0.9)", xs: "scale(none)" }
          }} item xs={12} md={5} className={classes.container2_md_6
          } >
            {
              filteredData.map((item: any, index: any) => {
                return (
                  <LocationForm
                  location={item.city}
                    nameValue={"Agent Name"}
                    personName={item.email}
                    openingTime={"Opening Time"}
                    timeValue={item.createdAt}
                    contactNumber={"Contact Number"}
                    number={item.phone}
                    LocationSymbol={LocationSymbol}
                    PersonLogo={PersonLogo}
                  />
                )
              })
            }
            {/* createdAt,
         email,
         membership
         password
         phone,
         role
         updatedAt */}

            {/* <LocationForm
              nameValue={"Agent Name"}
              personName={"Numan Xafar"}
              openingTime={"Opening Time"}
              timeValue={"7:00AM to 5PM"}
              contactNumber={"Contact Number"}
              number={"0123 456 789"}
              LocationSymbol={LocationSymbol}
              PersonLogo={PersonLogo}
            /> */}

          </Grid>
          <Grid
            item
            sx={{ display: { xs: "none", sm: "flex" } }}
            xs={12}
            md={6}
          >
            <Box style={{ height: '961px', width: '700px' }}>

              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAkzhwHhdKNvEJDppexDObGOj9Mkv5-M2s"
                }}

                defaultZoom={15}
                defaultCenter={LOS_ANGELES_CENTER}

              >
              </GoogleMapReact>
            </Box>
          </Grid>
        </Grid>
      </Grid >
    </Layout >
  );
};

export default FindLocation;
