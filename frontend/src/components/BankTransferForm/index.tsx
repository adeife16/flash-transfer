import { Box, Grid, Typography } from "@mui/material";
import { useStyles } from "../../Styles";
import AppInputFields from "../AppInputFields";
import "../../font.css/index.css"

import { useState } from "react";
import AppdropDown from "../AppdropDown";

const AddNewForm = () => {
  const [value, setValue] = useState("United States");
  const classes = useStyles();
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  const options = [
    { label: "United States", value: "busd" },
    { label: "Vegetable", value: "vegetable" },
    { label: "Meat", value: "meat" },
  ];
  const options1 = [
    { label: "ABC Bank", value: "ABC Bank" },
    { label: "Vegetable", value: "vegetable" },
    { label: "Meat", value: "meat" },
  ];
  const options2 = [
    { label: "Choose", value: "busd" },
    { label: "Vegetable", value: "vegetable" },
    { label: "Meat", value: "meat" },
  ];
  return (
    <>

      <Grid
        container
        sx={{ padding: {lg:"24px 24px",xs:"0px 10px"}, backgroundColor:"white", borderRadius: "6px" }}
        // columnSpacing={2}
        rowGap={2}
      // columnGap={}
      >
      
      
        <Grid item xs={12}>
          <Typography className={classes.add_new_f_name}>
            Country / Region
          </Typography>
          
          <select
            value={value}
            // onChange={onChange}
            style={{
              border: "1px solid #D1D5DB",
              width: "100%",
              maxWidth: "100%",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "20px",
              backgroundColor: "white",
              margin: " margin",
              borderRadius: "6px",
              padding: "9px 13px",
            }}
          >
            {options.map((option) => (
              <option value={option.value} key={Math.random()} >
                {option.label}
              </option>
            ))}
          </select>
        </Grid>
       
        <Grid item xs={12}>
          <Typography className={classes.add_new_f_name}>
          Choose Bank
          </Typography>
          <select
            value={value}
            // onChange={onChange}
            style={{
              border: "1px solid #D1D5DB",
              width: "100%",
              maxWidth: "100%",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "20px",
              backgroundColor: "white",
              margin: " margin",
              borderRadius: "6px",
              padding: "9px 13px",
            }}
          >
            {options1.map((option) => (
              <option value={option.value} key={Math.random()} >
                {option.label}
              </option>
            ))}
          </select> 
         
        </Grid> 
          <Grid item xs={12} sm={6}>
          <Box sx={{ marginRight: { xs: "none", sm: "24px" } }}>
            {" "}
            <Typography className={classes.add_new_f_name}>
            IBAN Number
            </Typography>
            <AppInputFields
              border={"1px solid #D1D5DB"}
              borderRadius={"6px"}
              padding={"9px -5px"}
              height="38px"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.add_new_f_name}>Account Number</Typography>
          <AppInputFields
            border={"1px solid #D1D5DB"}
            borderRadius={"6px"}
            padding={"9px -5px"}
            height="38px"
          />
        </Grid>
       
      </Grid>

    </>
  );
};

export default AddNewForm;
