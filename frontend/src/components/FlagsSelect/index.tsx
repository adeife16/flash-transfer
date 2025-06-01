import { Box } from "@mui/system";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useAuth } from "../../Context/globaltContext";
import "../../font.css/index.css"
import AppInputFields from "../AppInputFields";

export interface SelectFlagsProps {
  maxWidth?: string;
  marginBottom?: string;
  height?: any;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  countryName?: any;
}

const SelectFlags = ({  countryName, borderRadius, margin, padding, height, maxWidth, marginBottom }: SelectFlagsProps) => {
  const { country,
    setCountry }: any = useAuth()

  const [selected, setSelected] = useState(countryName);
  console.log("country", country)
  return (
    <>
      <Box sx={{
        margin: margin,
        borderRadius: borderRadius,
        height: height || "42px !important", padding: padding, maxWidth: maxWidth, marginBottom: marginBottom,
      }}>
        {countryName ?

          <AppInputFields
            borderRadius="6px"
            height="42px"
            placeholder={"Address,city,state or Zip"}
            border={"1px solid #D1D5DB"}
            padding={"9px 0px"}
            value={countryName}
          />
          :
          <ReactFlagsSelect
            // value={countryName}/
            selected={selected}
            onSelect={(code) => {
              setSelected(code)
              setCountry(code)
            }
            }
            // searchable={true}
            fullWidth={true}
          />
        }
      </Box>
    </>
  );
};

export default SelectFlags;
