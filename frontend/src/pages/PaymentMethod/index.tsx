import { useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import AppButton from "../../components/AppButton";
import Layout from "../../components/Layout";
import { useStyles } from "../../Styles";
import MiniHeader from "../../components/MiniHeader";
import Tabh from "../../components/TabhCard";
import carve from "../../assests/Images/carve.png";
import right from "../../assests/Images/blueright.png";
import right2 from "../../assests/Images/gray4.png";
import two from "../../assests/Images/two.png";
import three from "../../assests/Images/gray3.png";
import AppFooter from "../../components/AppFooter";
import "../../font.css/index.css"
import ModalAddtoCard from "../../components/ModalAddtoCard";


import BtnWallet from "../../assests/Logo/BtnWallet.svg";
import { Box } from "@mui/system";
import sett from "../../assests/Images/sett.png";
import CommonNav from "../../components/CommonNav";
// import Layout from "../../components/Layout";

import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";


import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import CardsStatus from "../../components/CardsStatus";
import { Link } from "react-router-dom";

const PaymentMethod = () => {
  const [modalopen, setModalopen] = useState(true)
  const classes = useStyles();
  const modalClick = () => {

    setModalopen(true)
  }
  return (
    <>
      <Layout>

        {/* <CommonNav login2="Login" Signup2="Signup" priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" /> */}
        <Box sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" }, }}>
          <MiniHeader />
        </Box>
        <Grid container >
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              backgroundColor: "#F7FDFF",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid  #D1D5DB",
              borderTop: "1px solid  #D1D5DB",
            }}
          >
            <Grid
              item
              md={10.2}
              xs={12}
              sx={{
                transform: { lg: "scale(0.9)", xs: "scale(none)" },
                marginBottom: { lg: "-4px", xs: "0px" },
                borderRight: "1px solid  #D1D5DB",
                borderLeft: "1px solid  #D1D5DB",
                display: "flex",

                flexDirection: { md: "row", sm: "row", xs: "column" },
              }}
            >
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
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
                  // border="1px solid blue"
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
          <Grid container sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" }, }}>
            <Grid item xs={12} md={4}>
              <Typography className={classes.Choose_Card}>Choose Card</Typography>
              <Typography className={classes.Choose_Card_description}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>

              
              <ModalAddtoCard
                    BtnWallet={BtnWallet}
                  />


              {/* <AppButton
                textTransform="none"
                title={"Add New Card"}
                backgroundColor={"#5D5FEF"}
                color={"#fff"}
                height="60px"
                padding={"16px 26px"}
                maxWidth={"229px"}
                startIcon={
                  <img src={BtnWallet} alt={"image"} style={{ color: "#fff" }} />

                  />
                }
              /> */}


            </Grid>

            <Grid item xs={12} md={8}>
              <Box sx={{ marginTop: { md: "0px", xs: "30px" }, display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{
                  fontFamily: "Inter !important",
                  fontWeight: "400 !important",
                  fontsize: "16px !important",
                  lineHeight: "24px !important",
                  color: "#778CA2 !important",
                }}>Your cards</Typography>
                <Typography sx={{
                  fontFamily: "Inter !important",
                  fontWeight: "500 !important",
                  fontsize: "18px !important",
                  lineHeight: "28px !important",
                  color: "#252631 !important",
                }}>All Accounts</Typography>
              </Box>
              <CardsStatus />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "56px",
                }}
              >
                <Link to="/addnewtwo" style={{ textDecoration: "none", }}>
                  <Box sx={{ marginRight: { md: "0px", xs: "10px" }, width: "142px" }}>


                    <AppButton
                      title={"Cancel"}
                      textTransform="none"
                      backgroundColor={"#6A6A6A"}
                      boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}
                      maxWidth={"142px"}
                      color={"#fff"}
                      height="38px"

                      padding={"9px 0px"}
                    />
                  </Box>
                </Link>
                <Link to="/reviewanddetail" style={{ textDecoration: "none", width: "142px" }}>

                  <AppButton
                    title={"Continue"}
                    textTransform="none"
                    backgroundColor={"#5D5FEF"}
                    boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}
                    maxWidth={"142px"}
                    color={"#fff"}
                    height="38px"

                    padding={"9px 0px"}
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

export default PaymentMethod;
