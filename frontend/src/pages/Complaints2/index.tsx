import { Grid, Typography, IconButton } from "@mui/material";
import React from "react";
import AppFooter from "../../components/AppFooter";
import Layout from "../../components/Layout";
import Privacy from "../../assests/Images/privacy.png";

import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import sett from "../../assests/Images/sett.png";
import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import "../../font.css/index.css"
import complaintbg from "../../assests/Images/complaintbg.png";



import { useStyles } from "../../Styles";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import AppButton from "../../components/AppButton";

const Complaints = () => {
  const classes = useStyles();


  const introList = [
    {
      title: "Immediately -",
      // name: "Introduction",
      para1:
        " We will amend or update this Policy regularly to reflect changes in our practices with respect to the processing of personal information, or changes in applicable law. We encourage you to read this Policy carefully, and to regularly check this page to review any changes we might make to the terms of this Policy. ",
      para2:
        "  This Privacy Policy (`Policy`) explains among other things: what we do with your personal information; what we do to keep it secure;  with whom we share your information; your rights in relation to the personal information we hold about you; and who you can contact for more information. ",
      para3:
        "We will amend or update this Policy regularly to reflect changes in our practices with respect to the processing of personal information, or changes in applicable law. We encourage you to read this Policy carefully, and to regularly check this page to review any changes we might make to the terms of this Policy.",
    },
    {
      name: "If you don't want to read all the details. Here are the highlights that you may really wish to know:",
      para1:
        "Your privacy and keeping your personal information secure are extremely important to us. At Flash Transfer for all words Limited, we are committed to protecting and respecting Your privacy and handling Your information in an open and transparent manner. ",

      para2:
        "Your privacy and keeping your personal information secure are extremely important to us. At Flash Transfer for all words Limited, we are committed to protecting and respecting Your privacy and handling Your information in an open and transparent manner.We will amend or update this Policy regularly to reflect changes in our practices with respect to the processing of personal information, or changes in applicable law. We encourage you to read this Policy carefully, and to regularly check this page to review any changes we might make to the terms of this Policy.",

      para3:
        "Your privacy and keeping your personal information secure are extremely important to us. At Flash Transfer for all words Limited, we are committed to protecting and respecting Your privacy and handling Your information in an open and transparent manner.We will amend or update this Policy regularly to reflect changes in our practices with respect to the processing of personal information, or changes in applicable law. We encourage you to read this Policy carefully, and to regularly check this page to review any changes we might make to the terms of this Policy.",
    },
    {
      name: "Who are we?",
      para1:
        "Your privacy and keeping your personal information secure are extremely important to us. At Flash Transfer for all words Limited, we are committed to protecting and respecting Your privacy and handling Your information in an open and transparent manner. ",

      para2:
        "Your privacy and keeping your personal information secure are extremely important to us. At Flash Transfer for all words Limited, we are committed to protecting and respecting Your privacy and handling Your information in an open and transparent manner.We will amend or update this Policy regularly to reflect changes in our practices with respect to the processing of personal information, or changes in applicable law. We encourage you to read this Policy carefully, and to regularly check this page to review any changes we might make to the terms of this Policy.",

      para3:
        "Your privacy and keeping your personal information secure are extremely important to us. At Flash Transfer for all words Limited, we are committed to protecting and respecting Your privacy and handling Your information in an open and transparent manner.We will amend or update this Policy regularly to reflect changes in our practices with respect to the processing of personal information, or changes in applicable law. We encourage you to read this Policy carefully, and to regularly check this page to review any changes we might make to the terms of this Policy.",
      para4:
        "Your privacy and keeping your personal information secure are extremely important to us. At Flash Transfer for all words Limited, we are committed to protecting and respecting Your privacy and handling Your information in an open and transparent manner.We will amend or update this Policy regularly to reflect changes in our practices with respect to the processing of personal information, or changes in applicable law. We encourage you to read this Policy carefully, and to regularly check this page to review any changes we might make to the terms of this Policy.",
    },
    {
      name: "The personal information we collect about you",
      para1:
        " We may collect, record and use information about You in physical and electronic form and will hold, use and otherwise process this data in accordance with the Data Protection Legislation and as set out in this Policy.",
      para2:
        "The personal information we collect and use may include, amongst other things:",

      paragraph1: "Your name;",
      paragraph2:
        "Your contact information such as Your email address, postal address and telephone number or any telephone number used to call us;",
      paragraph3:
        "Your demographic information such as age, education, gender, and interests;",

      paragraph4:
        "evidence of Your identity (for example passport information);",

      paragraph5: "the reason for your transfer request;",
      paragraph6:
        "unique identifiers such as Your username, account number and password;",

      paragraph7: "the reason for your transfer request;",
      paragraph8:
        "Your profiles and postings on any other social media applications and services that we provide or that You make available to us;",
      paragraph9:
        "Your payment details and other financial data (for example, Your bank or payment method provider’s name and Your account number and sort code); and",

      paragraph10:
        "information about Your visit to our website, including the full Uniform Resource Locators (URL), clickstream to, through and from our website (including date and time), length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs) and methods used to browse away from the page.",
    },
    {
      name: "How we use your personal information ",
      para1:
        "   Our primary purpose in collecting user information is to provide You with a safe, smooth, efficient, and customised experience and to provide the services You have requested from us. We may also use the information that You have provided to ensure that the content on our site is presented in the most effective manner for You and Your computer or device.",
      para2: "We use Your information for the following specific purposes: ",

      paragraph1:
        "to carry out our obligations arising from any contracts entered into between You and us or from applicable law such as anti-money laundering laws, and to provide You with the Services in accordance with our terms and conditions and with this Policy;",
      paragraph2: "to register You with a Flash Transfer for all words account;",

      paragraph3: "to fulfil Your Transaction / (Airtime Top Up) Request; ",
      paragraph4: "to send You confirmations or other notifications; ",
      paragraph5:
        "to notify You about temporary or permanent changes to our services or other service-related messages; ",
      paragraph6: "to assist you where online applications are not completed; ",
      paragraph7:
        "to prevent fraud, money laundering, and any other illegal activity;",
      paragraph8:
        "to ensure that content from our site is presented in the most effective manner for You and for Your computer;",
      paragraph9: "to promote our business;",
      paragraph10:
        "to send You Marketing communications, where You have shown interest; or purchased Our services and in the course of doing so You provided your contact details and You have not opted out from receiving marketing communications. ",
      paragraph11:
        "to administer our site and for internal operations, including troubleshooting, data analysis, profiling and segmentation analysis, testing, research, statistical and survey purposes;",
      paragraph12:
        "as part of our efforts to keep our site, Mobile App and our services safe and secure;",
      paragraph13:
        "to measure or understand the effectiveness of advertising we serve to You and others, and to deliver relevant advertising to You;",
      paragraph14:
        "to make suggestions and recommendations to You and other users of our site about services that may interest You or them;",
      paragraph15:
        "to train, monitor and assess the effectiveness of the manner in which we provide the Services to You;",
      paragraph16:
        "to consider and investigate any concerns or complaints you may have; and",
      paragraph17:
        "to display personal testimonials of satisfied customers on our website in addition to other endorsements, where You have agreed with a third-party review site that we may do so. If You wish to update or delete Your testimonial, contact us at dataprivacy@Flash Transfer for all words.com",
    },
  ];

  return (
    <>
      {/* <CommonNav login2="Login" Signup2="Signup"  priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" /> */}
      <Layout>
        {/* <Box sx={{ display:{lg:"flex",xs:"none"},paddingTop:"9px",backgroundColor:"#D1D5DB"}}>

      </Box> */}
        <Grid container
        //  sx={{ backgroundColor: "#F7FDFF" }}
        >
          <Grid
            item
            md={12}
            xs={12}
            sx={{
              backgroundColor: "black",
              height: "78px",
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Grid item md={11}
              xs={12} sx={{
                padding: {md: "0px 50px", sm: "0px 30px"},
              }}>


              <Box >
                <Link to="/Complaints" style={{ textDecoration: "none" }}>
                  <IconButton
                    sx={{
                      color: "white",
                      width: "163px",
                      backgroundColor: "black",
                      padding: "10px 0px",
                      fontSize: "18px",
                      fontWeight: "500",
                      lineHeight: "28px",
                      // height="38px"
                      borderRadius: "0px",
                      margin: {md: "0px 100px 10px 0px", xs: "0px 30px 10px 25px"},
                    }}
                  >    How to Complaints
                  </IconButton>
                </Link>
                <IconButton
                  sx={{
                    color: "white",
                    width: "116px",
                    // width: "100%",
                    borderBottom: "5px solid #FCBF07",
                    backgroundColor: "black",
                    padding: "5px 0px",
                    fontSize: "18px",
                    // textTransform="none"
                    fontWeight: "500",
                    lineHeight: "28px",
                    // height="38px"
                    borderRadius: "0px",
                    // endIcon:<ArrowForwardIcon />}
                    margin: "0px 0px 10px 0px",
                  }}
                >    Plus Rewards
                </IconButton>

              </Box>
            </Grid>

          </Grid>
          <Grid
            item md={12}
            sx={{
              height: "514px",
              backgroundSize: "100% 100%",
              display: "flex",
              backgroundPosition: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${complaintbg})`,
              justifyContent: "center",
            }}
          >
            <Grid
              item
              md={10}
              xs={11.5}
              sx={{

                display: "flex",

                paddingTop: {md: "100px", sm: "20px"},
                // justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography sx={{
                textAlign: "center",
                fontFamily: "Inter !important",
                fontWeight: "800 !important",
                fontSize: "48px !important",
                lineHeight: "72px !important",
                color: "white"
              }}>
                Get Rewarded with Flash Transfer Plus Rewards™
              </Typography>
              <AppButton
                title={"Register with Plus Rewards"}
                textTransform="none"
                color={"#FFFFFF"}
                maxWidth={"258px"}
                width={"258px"}
                backgroundColor={"#4F46E5"}
                fontSize={"16px"}
                fontWeight={"500"}
                lineHeight={"24px"}
                padding="13px 0px"
                borderRadius="6px"
                height="50px"
                margin={ "30px 0px 20px 0px"}
              />
              <AppButton
                title={"Send Online"}
                textTransform="none"
                color={"#4338CA"}
                maxWidth={"258px"}
                width={"258px"}
                backgroundColor={"#E0E7FF"}
                fontSize={"16px"}
                fontWeight={"500"}
                lineHeight={"24px"}
                padding="13px 0px"
                borderRadius="6px"
                height="50px"
              />
            </Grid>
          </Grid>
        </Grid>

        {/* <AppFooter /> */}
      </Layout>
    </>
  );
};

export default Complaints;
