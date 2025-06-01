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
import Tabhs from "../../components/TabhCard";

import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import BtnpersonLogo from "../../assests/Logo/BtnpersonLogo.svg";
import BtnBenefitLogo from "../../assests/Logo/BtnBenefitLogo.svg";
import { Box } from "@mui/system";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import AddNewFormR from "../../components/AddNewFormR";
import { Link } from "react-router-dom";
import "../../font.css/index.css";

const AddNewR = () => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        {/* <Box>

        <CommonNav login2="Login" Signup2="Signup" priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" />
      </Box> */}
        <Box sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" } }}>
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
            }}
          >
            <Grid
              item
              md={10.2}
              xs={12}
              sx={{
                marginBottom: { lg: "-4px", xs: "0px" },
                transform: { lg: "scale(0.9)", xs: "scale(none)" },
                borderRight: "1px solid  #D1D5DB",
                borderLeft: "1px solid  #D1D5DB",
                display: "flex",
                flexDirection: { md: "row", sm: "row", xs: "column" },
              }}
            >
              <Grid md={3} sx={{ display: { md: "flex", xs: "flex" } }}>
                <Tabhs
                  img={carve}
                  imgright={right}
                  color="black"
                  text="Reciver’s info"
                  des="Vitae sed mi luctus laoreet."
                />
              </Grid>
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabhs
                  img={carve}
                  imgright={two}
                  color="black"
                  text="Payment Method"
                  des="Cursus semper viverra."
                />
              </Grid>
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabhs
                  img={carve}
                  imgright={three}
                  color="black"
                  text="Review & Confirm"
                  des="Penatibus eu quis ante."
                />
              </Grid>
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabhs
                  img={carve}
                  imgright={right2}
                  text="reCeipt"
                  color="#4F46E5"
                  des="Penatibus eu quis ante."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.paymentmethod_container_1}>
          <Grid
            container
            sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" } }}
            columnSpacing={3}
          >
            <Grid item xs={12} md={4}>
              {/* <Box sx={{ margin: { md: "0px 0px 0px 0px", xs: "0px 20px 0px 20px !important", } }}> */}

              <Typography className={classes.Choose_Card}>
                Beneficiary Info
              </Typography>
              <Typography className={classes.Choose_Card_description}>
                Enter the information of your beneficiary who will receive the
                amount of your transaction. If you want to send to a beneficiary
                already registered you can select it in "Select from existing".
                If you are the beneficiary, you can click directly on "i’m the
                benefit" to automatically fill in the fields.
              </Typography>
              {/* <Box sx={{ marginBottom: "18px" }}>
                <AppButton

                  textTransform="none"
                  title={"Select from existing"}
                  backgroundColor={"#5D5FEF"}
                  color={"#fff"}
                  maxWidth={"270px"}
                  padding={"13px 0px"}
                  startIcon={
                    <img
                      src={BtnpersonLogo}
                      alt={"image"}
                      style={{ color: "#fff", height: "33px" }}
                    />
                  }
                />
              </Box> */}
              <Box sx={{ display: { lg: "flex", xs: "flex" } }}>
                <AppButton
                  title={`i'm the benefit
                `}
                  textTransform="none"
                  backgroundColor={"#6A6A6A"}
                  color={"#fff"}
                  maxWidth={"240px"}
                  padding={"13px 0px"}
                  startIcon={
                    <img
                      src={BtnBenefitLogo}
                      alt={"image"}
                      style={{ color: "#fff", height: "33px" }}
                    />
                  }
                />
              </Box>
              {/* </Box> */}
            </Grid>

            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  mt: { md: "0px", xs: "20px" },
                  marginBottom: { lg: "24px", xs: "20px" },
                  borderRadius: "6px",
                }}
                className={classes.error_container}
              >
                <Typography className={classes.error_name}>
                  <ReportGmailerrorredIcon className={classes.warning_icon} />
                  To continue, please enter the address.
                </Typography>
              </Box>

              <AddNewFormR />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { lg: "flex-end", xs: "center" },
                  marginTop: { lg: "56px", xs: "20px" },
                  marginRight: { lg: "30px", xs: "0px" },
                }}
              >
                <Link
                  to="/useexistingR"
                  style={{ textDecoration: "none", width: "142px" }}
                >
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
                <Link
                  to="/addnewtwoR"
                  style={{ textDecoration: "none", width: "142px" }}
                >
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
            </Grid>
          </Grid>
        </Grid>
        {/* <AppFooter /> */}
      </Layout>
    </>
  );
};

export default AddNewR;
