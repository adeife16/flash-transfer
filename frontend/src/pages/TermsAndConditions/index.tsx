import { Grid, Typography } from "@mui/material";
import React from "react";
import AppFooter from "../../components/AppFooter";
import CommonNav from "../../components/CommonNav";
import Layout from "../../components/Layout";

import tnc from "../../assests/Images/tnc.png";
import "../../font.css/index.css"

import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import { useStyles } from "../../Styles";
import sett from "../../assests/Images/sett.png";
import wallet from "../../assests/Images/waallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";


import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const TermsAndCon = () => {
  const classes = useStyles();

  const Related = [
    {
      Name: "About us",
    },
    {
      Name: "Recipient Terms and Conditions | FastTransfer",
    },
    {
      Name: "Modern Slavery Statement",
    },
    {
      Name: "Prohibited business types",
    },
    {
      Name: "Refer a Friend Terms and Conditions | FastTransfer",
    },
  ];
  const introList = [
    {
      para1:
        " 1.1 " +
        "\xa0\xa0\xa0\xa0\xa0" +
        'These terms and conditions ("Terms and Conditions") govern the terms under which you can use:',
    },
    {
      para1:
        " (a)" +
        "\xa0\xa0\xa0\xa0\xa0\xa0  " +
        "      our Money Transfer services;",
    },
    {
      para1:
        " (b)" +
        "\xa0\xa0\xa0\xa0\xa0\xa0  " +
        "      our Digital Money Account (including redeeming electronic money and paying the proceeds of redemption to yourself or another person); and/or",
    },
    {
      para1: "(c) " + "\xa0\xa0\xa0\xa0\xa0\xa0  " + "      Airtime Top Up.",
    },
    {
      para1:
        "1.2 " +
        "\xa0\xa0\xa0\xa0\xa0\xa0  " +
        '    These Terms and Conditions, together with our web page setting out the charges applicable for our services, form your agreement with us for a Digital Money Account and/or use of Airtime Top Up (the "Agreement").',
    },
    {
      para1:
        "1.3 " +
        "\xa0\xa0\xa0\xa0\xa0\xa0  " +
        "      By accessing, registering with and using any of these services, you agree to be bound by the terms of the Agreement.",
    },
    {
      para1:
        "1.4 " +
        "\xa0\xa0\xa0\xa0\xa0\xa0  " +
        "     The language of the Agreement is English, and all services, instructions and transactions carried out in connection with it will be in English.        ",
    },
    {
      para1:
        "1.5 " +
        "\xa0\xa0\xa0\xa0\xa0\xa0  " +
        "     You can obtain a copy of the Agreement at any time by asking us to send you a copy via email.        ",
    },
    {
      para1:
        "1.6   " +
        "\xa0\xa0\xa0\xa0\xa0\xa0  " +
        '   In the Agreement, the terms "Flash Transfer for all words", "we", "us", and "our" refer to Flash Transfer for all words Ltd, together with its employees, directors, successors, and assigns. Flash Technologies LLC FZ for all words Ltd is a company registered number 2200798.01 in UAE, with its registered office at Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E.. Flash Transfer for all words Ltd is authorised and regulated by the Financial Conduct Authority under the Payment Services Regulations 2022 and Electronic Money Regulations 2022. Registration number: 2200798.01. Its regulated activities include providing payment services and issuing electronic money.',
    },
    {
      para1:
        "1.7 " +
        "\xa0\xa0\xa0\xa0\xa0\xa0  " +
        '      The terms "you" and "your" refer to you, the person who has registered to use some or all of the services described in the Agreement.',
    },
    {
      para1:
        "1.8  " +
        "\xa0\xa0\xa0\xa0\xa0\xa0  " +
        "   This Agreement will be treated as coming into effect on the date you register with us and will continue for an indefinite period, until terminated by you or us.",
    },
  ];

  return (
    <>
    <Layout>

      {/* <CommonNav login2="Login" Signup2="Signup"  priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" /> */}

      {/* <Box sx={{ display: { lg: "flex", xs: "none" }, paddingTop: "9px", backgroundColor: "#D1D5DB" }}>

      </Box> */}
      <Grid>
        <Grid container sx={{ backgroundColor: "#F7FDFF" }} >
          <Grid
            item
            md={12}
            xs={12}
            sx={{
              
              position: "relative",
              backgroundImage: `url(${tnc})`,
              height: { lg: "383px", xs: "188px" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              md={12}
              xs={12}
              sx={{
                height: { lg: "383px", xs: "188px" },
                backgroundColor: "#000000",
                display: "flex",
                opacity: "0.5",
                // justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ mt: { lg: "66.44px", xs: "50px" } }} className={classes.privacyhead}>
                Terms And Conditions
              </Typography>
              <Typography className={classes.privacysub}>
                Home is behind, the world ahead and there are many paths to
                tread through shadows to the edge.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              margin: { lg: "144px 0px 400px 0px", xs: "20px 0px 40px 0px" },
              
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              md={10}
              xs={11.5}
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "column-reverse" },
              }}
            >
              <Grid item md={8} p={1} xs={12}>
                <Typography className={classes.francehead}>
                  1. CONTRACT FORMATION AND OVERVIEW
                </Typography>

                {introList.map((i) => {
                  return (
                    <Box>
                      <Typography mt={1} className={classes.francepara}>
                        {i.para1}
                      </Typography>
                    </Box>
                  );
                })}
              </Grid>
              <Grid item md={4} p={1} xs={12}>
                <Typography className={classes.Related}>Related</Typography>
                {Related.map((i) => {
                  return (
                    <Grid p={1} sx={{ borderBottom: " 1px solid #D1D5DB" }}>
                      <Link className={classes.relatedLink} to="">
                        {i.Name}
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Layout>
      {/* <AppFooter /> */}
    </>
  );
};

export default TermsAndCon;
