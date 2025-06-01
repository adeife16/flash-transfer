import { Grid, Typography } from "@mui/material";
import AppButton from "../../components/AppButton";
import Layout from "../../components/Layout";
import { useStyles } from "../../Styles";
import sett from "../../assests/Images/sett.png";
import CommonNav from "../../components/CommonNav";
import AppFooter from "../../components/AppFooter";

import wallet from "../../assests/Images/waallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import right from "../../assests/Images/blueright.png";
import right2 from "../../assests/Images/gray4.png";

import one from "../../assests/Images/one.png";
import two from "../../assests/Images/gray2.png";
import three from "../../assests/Images/gray3.png";
import carve from "../../assests/Images/carve.png";

import MiniHeader from "../../components/MiniHeader";
import Tabh from "../../components/TabhCard";

import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import BtnpersonLogo from "../../assests/Logo/BtnpersonLogo.svg";
import BtnBenefitLogo from "../../assests/Logo/BtnBenefitLogo.svg";
import { Box } from "@mui/system";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import BankTransferForm from "../../components/BankTransferForm";
import { Link } from "react-router-dom";
import "../../font.css/index.css"

const AddNew = () => {
  const classes = useStyles();
  return (
    <>

      <Layout>
        {/* <Box>

        <CommonNav login2="Login" Signup2="Signup" priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" />
      </Box> */}
        <Box sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" }, }}>
          <MiniHeader />
        </Box>
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              backgroundColor: "#F7FDFF",
              display: "flex",
              justifyContent: "center",
              borderTop: "1px solid  #D1D5DB",
              borderBottom: "1px solid  #D1D5DB",
              marginBottom: { lg: "-4px", xs: "0px" },

            }}
          >
            <Grid
              item
              md={10.2}
              xs={12}
              sx={{

                transform: { lg: "scale(0.9)", xs: "scale(none)" },
                borderRight: "1px solid  #D1D5DB",
                borderLeft: "1px solid  #D1D5DB",
                // borderHeight:"5px",
                marginBottom: { lg: "-4px", xs: "0px" },

                display: "flex",
                flexDirection: { md: "row", sm: "row", xs: "column" },
              }}
            >
              <Grid md={3} sx={{
                display: { md: "flex", xs: "none" }
              }}>
                <Tabh
                  img={carve}
                  imgright={right}
                  color="black"
                  text="Reciver’s info"
                // des="Vitae sed mi luctus laoreet."
                />
              </Grid>
              <Grid md={3} sx={{ borderBottom: "3px solid  #4F46E5", display: { md: "flex", xs: "flex" } }}>
                <Tabh
                  img={carve}
                  imgright={two}
                  color="black"
                  text="Payment Method"
                // des="Cursus semper viverra."
                />
              </Grid>
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabh
                  img={carve}
                  imgright={three}
                  color="black"
                  text="Review & Confirm"
                // des="Penatibus eu quis ante."
                />
              </Grid>
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabh
                  img={carve}
                  imgright={right2}
                  text="reCeipt"
                  color="#4F46E5"
                // des="Penatibus eu quis ante."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.paymentmethod_container_1}>
          <Grid container sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" }, }} columnSpacing={3}>
            <Grid item xs={12} md={4} >
              {/* <Box sx={{ margin: { md: "0px 0px 0px 0px", xs: "0px 20px 0px 20px !important", } }}> */}

              <Typography className={classes.Choose_Card}>
                Bank Transfer

              </Typography>
              <Typography className={classes.Choose_Card_description}>
                Enter your beneficiary information correctly if the name of the bank account is different from the beneficiary the transaction will be canceled.
              </Typography>


              {/* </Box> */}
            </Grid>

            <Grid item xs={12} md={8}>
              <Box
                sx={{ mt: { md: "0px", xs: "20px" }, marginBottom: { lg: "21px", xs: "20px" }, borderRadius: "6px" }}
                className={classes.error_message}
              >
                <Typography className={classes.error_name}>
                  <ReportGmailerrorredIcon className={classes.warning_icon} />
                  Bank Detail Should be Valid
                </Typography>
              </Box>
              <Box sx={{ backgroundColor: "white", borderRadius: "6px", border: "1px solid #0000001A" }}>
                <BankTransferForm />


                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { lg: "flex-end", xs: "center" },
                    marginTop: { lg: "50px", xs: "20px" },
                    marginRight: { lg: "30px", xs: "0px" },
                    marginBottom: { lg: "24px", xs: "0px" },
                  }}
                >

                  <Link to="/addnewtwo" style={{ textDecoration: "none", width: "142px" }}>

                    <AppButton
                      title={"Cancel"}
                      textTransform="none"
                      backgroundColor={"#6A6A6A"}
                      boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}
                      maxWidth={"142px"}
                      width="142px"
                      color={"#fff"}
                      padding={"9px 17px"}
                    />
                  </Link>
                  <Link to="/framebank" style={{ textDecoration: "none", width: "142px" }}>

                    <AppButton

                      textTransform="none"
                      title={"Continue"}
                      backgroundColor={"#5D5FEF"}
                      boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}
                      maxWidth={"142px"}
                      width="142px"
                      color={"#fff"}
                      padding={"9px 17px"}
                      className={classes.paymethod_btn}
                    />
                  </Link>
                </Box>

              </Box>

            </Grid>
          </Grid>
        </Grid>
        {/* <AppFooter /> */}

      </Layout>

    </>

  );
};

export default AddNew;
