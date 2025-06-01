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
              // backgroundImage: `url(${Privacy})`,
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

                <IconButton
                  sx={{
                    color: "white",
                    width: "163px",
                    borderBottom: "5px solid #FCBF07",
                    backgroundColor: "black",
                    padding: "5px 0px",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "28px",
                    // height="38px"
                    borderRadius: "0px",
                    margin: {md: "0px 100px 10px 0px", xs: "0px 30px 10px 25px"},
                  }}
                >    How to Complaints
                </IconButton>
                <Link to="/Complaints2" style={{textDecoration:"none"}}>


                <IconButton
                  sx={{
                    color: "white",
                    width: "116px",
                    backgroundColor: "black",
                    padding: "10px 0px",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "28px",
                    // height="38px"
                    borderRadius: "0px",
                    // endIcon:<ArrowForwardIcon />}
                    margin: "0px 0px 10px 0px",
                  }}
                  >    Plus Rewards
                </IconButton>
                  </Link>

              </Box>
            </Grid>

          </Grid>
          <Grid
            container
            sx={{
              margin: { lg: "144px 0px 145px 0px", xs: "70px 0px 0px 0px" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              md={12}
              xs={11.5}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: { md: "row", xs: "column-reverse" },
              }}
            >
              <Grid item md={10} xs={12}>
                <Typography mt="-80px" className={classes.Complainthead}>
                  How we address complaints
                </Typography>
                <Typography className={classes.Complaintpara}>
                  We aim to provide excellent service and to treat all our customers fairly. Nevertheless, should you be dissatisfied with any aspect of our service, we will investigate any issues diligently and work to resolve your complaint at the earliest opportunity:
                </Typography>
                {/* {introList.map((i) => {
                  return ( */}
                <Box>
                  <Typography mt={4} className={classes.Complaintpara}>
                    <span className={classes.Complainttitle}>
                      Immediately  
                    </span>
                      - We will work to resolve your complaint as quickly as possible and will send you a Summary Resolution Communication for complaints resolved within 3 business days of receipt of your complaint.
                  </Typography>
                  <Typography mt={4} className={classes.Complaintpara}>
                    <span className={classes.Complainttitle}>
                      5 Business Days </span>
                     - If we are unable to resolve your complaint straight away, we will begin our detailed investigations on your complaint and provide you with a formal acknowledgement within 5 business days, along with an estimated timeframe for resolution. We will work to resolve your complaint as quickly as possible and will send you a Summary Resolution Communication for complaints resolved within 3 business days of receipt of your complaint.
                  </Typography>
                  <Typography mt={4} className={classes.Complaintpara}>
                    <span className={classes.Complainttitle}>
                      15 Business Days 
                    </span>
                     - In most cases, we will be in a position to resolve your complaint within 15 business days, providing you with the results of our investigation and decision through a written final response. In exceptional circumstances we will send you a holding reply specifying the deadline by which we will respond. This will not be longer than 35 business days from the date of your initial complaint.
                  </Typography>
                  <Typography mt={4} className={classes.Complaintpara}>
                    <span className={classes.Complainttitle}>
                      35 Business Days 
                    </span>
                    - As detailed above, in exceptional circumstances, we will provide our final response by no later than 35 business days after receipt of your complaint.
                  </Typography>
                  <Typography mt={4} className={classes.Complainttitle}>
                    If You Are Still Unhappy
                  </Typography>
                  <Box>

                    <Typography mt={4} className={classes.Complaintpara}>
                      We aim to resolve all complaints fairly and promptly. However, if you are dissatisfied with our suggested final resolution, or if over 35 business days have passed since you first brought your complaint to our attention, you may have the right to refer your complaint to Ombudsfin. Ombudsfin will only deal with your complaint once you tried to resolve it with us, so please notify us of your concerns and we'll do all we can to help.
                    </Typography>
                    <Typography mt={4} className={classes.Complaintpara}>
                      If you would like Ombudsfin to look into your complaint, you must contact them within six months of the date of our final response.                  </Typography>
                    <Box>

                      {/* <Typography mt={4} className={classes.Complaintparablack}>
                      our address : 

                      </Typography> */}
                      <Typography  mt={4} className={classes.Complaintparablack}>
                      Flash Technologies 

                      </Typography>
                      <Typography className={classes.Complaintparablack}>
                      Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, 

                      </Typography>
                      <Typography className={classes.Complaintparablack}>
                      Dubai, U.A.E.
                      </Typography>  
                       {/* <Typography className={classes.Complaintparablack}>
                        Website: www.ombudsfin.be.

                      </Typography> */}
                    </Box>

                  </Box>
                  <Typography mt={4} className={classes.Complaintpara}>
                    Ombudsfin will only deal with complaints about problems that occurred within Belgium or acts and omissions conducted by an NBB authorised payment service provider within the EEA. If you have a complaint about problems that occurred outside of Belgium and/or acts and omission by a non-NBB authorised entity, you may also have the right to refer your complaint to the local ombudsman where the problem occurred and follow the local out of court complaints and redress procedures to register your complaint. Further information can be found on the website of the European consumer financial complaints network at https://ec.europa.eu.
                  </Typography>
                  <Typography mt={4} className={classes.Complaintpara}>
                    You also have the right to refer your complaint to the EU-Commission's internet platform for resolution of disputes (ODR Platform). The ODR platform allows both customers and business seeking out-of-court resolutions for disputes to online contracts for the sale of goods or services. You can access the platform via the following link <Link  to="" style={{textDecoration:"none",color:"blue"}}>
                      https://ec.europa.eu/consumers/odr/main/index.cfm.
                    </Link >
                  </Typography>
                  {/* <Typography mt={4} className={classes.francehead}>
                        {i.title}
                      </Typography>
                      <Typography mt={4} className={classes.francehead}>
                        {i.name}
                      </Typography>
                      <Typography mt={1} className={classes.francepara}>
                        {i.para1}
                      </Typography>
                      <Typography mt={1} className={classes.francepara}>
                        {i.para2}
                      </Typography>
                      <Typography mt={1} className={classes.francepara}>
                        {i.para3}
                      </Typography>
                      <Typography mt={1} className={classes.francepara}>
                        {i.para4}
                      </Typography>
                      <Typography className={classes.paragraphs}>
                        {i.paragraph1}{" "}
                      </Typography>
                      <Typography className={classes.paragraphs}>
                        {i.paragraph2}
                      </Typography>
                      <Typography className={classes.paragraphs}>
                        {i.paragraph3}
                      </Typography>
                      <Typography className={classes.paragraphs}>
                        {i.paragraph4}
                      </Typography>
                      <Typography className={classes.paragraphs}>
                        {i.paragraph5}
                      </Typography>
                      <Typography className={classes.paragraphs}>
                        {" "}
                        {i.paragraph6}
                      </Typography>
                      <Typography className={classes.paragraphs}>
                        {" "}
                        {i.paragraph7}
                      </Typography>
                      <Typography className={classes.paragraphs}>
                        {" "}
                        {i.paragraph8}
                      </Typography>
                      <Typography className={classes.paragraphs}>
                        {" "}
                        {i.paragraph9}
                      </Typography>
                      <Typography className={classes.paragraphs}>
                        {" "}
                        {i.paragraph10}
                      </Typography>
                      <Typography className={classes.paragraphs}>
                        {" "}
                        {i.paragraph11}
                      </Typography>{" "}
                      <Typography className={classes.paragraphs}>
                        {" "}
                        {i.paragraph12}
                      </Typography>{" "}
                      <Typography className={classes.paragraphs}>
                        {" "}
                        {i.paragraph13}
                      </Typography>{" "}
                      <Typography className={classes.paragraphs}>
                        {" "}
                        {i.paragraph14}
                      </Typography>{" "}
                      <Typography className={classes.paragraphs}>
                        {" "}
                        {i.paragraph15}
                      </Typography>{" "}
                      <Typography className={classes.paragraphs}>
                        {" "}
                        {i.paragraph16}
                      </Typography>{" "}
                      <Typography className={classes.paragraphs}>
                        {" "}
                        {i.paragraph17}
                      </Typography> */}
                </Box>
                {/* ); */}
                {/* })} */}
              </Grid>
              {/* <Grid item md={4} p={1} xs={12}>
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
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>

        {/* <AppFooter /> */}
      </Layout>
    </>
  );
};

export default Complaints;
