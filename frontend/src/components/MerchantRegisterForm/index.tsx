import { Grid, Typography } from "@mui/material";
import { useStyles } from "../../Styles";
import AppInputFields from "../AppInputFields";
import "../../font.css/index.css"
import { register } from "../../Services/auth";
import { Formik, useFormik } from "formik";
import { ContactSchema } from "../../schemas";
import CountrySelect from "../autoComplete";
// import  from "react-autocomplete"
const MerchantRegisterForm = () => {
  const classes = useStyles();





  const initialValues = {
    fullName: "",
    email: "",


  }



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
      email: "",
      password: "",
    }
    register(data)
  }
  return (
    <>
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
              value={values.fullName}
              onChange={handleChange}
              border={"1px solid #D1D5DB"}
              borderRadius={"6px"}
              padding={"9px 0px"}
            />
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
              name="email"
              onChange={handleChange}
              value={values.email}
              border={"1px solid #D1D5DB"}
              borderRadius={"6px"}
              padding={"9px 0px"}
            />
          </Grid>
          
          {/* <Autocomplete
            getItemValue={(item: any) => item.label}
            items={[
              { label: 'apple' },
              { label: 'banana' },
              { label: 'pear' }
            ]}
            renderItem={(item: any, isHighlighted: any) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
              </div>
            } */}
          {/* value={value} */}
          {/* onChange={(e: any) => value = e.target.value} */}
          {/* onSelect={(val: any) => value = val} */}
          {/* /> */}
          <Grid item xs={12} sm={6} >
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
            {/* <CountrySelect /> */}
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
            <AppInputFields
              // onChange={handleChnage}
              border={"1px solid #D1D5DB"}
              borderRadius={"6px"}
              padding={"9px 0px"}
            />
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
    </>
  );
};

export default MerchantRegisterForm;
