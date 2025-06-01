import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout";
import { useStyles } from "../../Styles";
import Flash_logo from "../../assests/Images/Flash_logo.png";
import { Box } from "@mui/system";
import CommonNav from "../../components/CommonNav";
import Footer from "../../components/AppFooter";
import "../../font.css/index.css"

import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import sett from "../../assests/Images/sett.png";
import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
const PageNotFound = () => {
  const classes = useStyles();
  return (
    <>
    <Layout>
      
      {/* <CommonNav  login2="Login" Signup2="Signup"  priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" /> */}

      <Grid >

        <Grid container className={classes.page_not_found_container}>
          <Grid item xs={12} sx={{transform:{lg:"scale(0.9)",xs:"none"}}}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "64px",
              }}
            >
              <img src={Flash_logo} alt={"image"} />
            </Box>
            <Typography className={classes.error_404}>404 error</Typography>
            <Typography className={classes.Page_not_found}>
              Page not found.
            </Typography>
            <Typography className={classes.sorray_message}>
              Sorry, we couldn’t find the page you’re looking for.
            </Typography>
            <Typography className={classes.go_back_home}>
              Go back home →
            </Typography>
            <Typography className={classes.contact_support}>
              Contact support{" "}
              <Divider
                orientation="vertical"
                sx={{ height: "20px", margin: "0px 16px" }}
              />
              Status
              <Divider
                orientation="vertical"
                sx={{ height: "20px", margin: "0px 16px" }}
              />
              Twitter
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={12} sx={{
          mt: "20px",
          backgroundColor: "red"
        }}>
        </Grid>
      </Grid>
      
      </Layout>
      {/* <Footer /> */}

    </>
  );
};

export default PageNotFound;
