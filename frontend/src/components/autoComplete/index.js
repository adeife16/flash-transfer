import { Box } from "@mui/material";
import React from "react";
// import { Input } from "antd";
import MapIcon from "../../assests/Logo/MapIcon.svg";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    this.setState({ address });
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
    this.props.onAddressSelect(address);
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address || this.props.initialValue}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              style={{
                width: "100%",
                border: "1px solid #D1D5DB",
                padding: "9px 10px",
                borderRadius: "6px",
              }}
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
            />
            <Box
              style={{
                backgroundColor: "#fff",
                position: "absolute!important",
                zIndex: "1000",
                position: "absolute",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1) ",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box",
                boxSizing: "border-box",
                marginLeft: "2px",
                overflow: "hidden",
                borderRadius: "6px",
                width: { md: this.props.width, xs: "75%" },
              }}
              // className="autocomplete-dropdown-container"
            >
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
            </Box>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;
