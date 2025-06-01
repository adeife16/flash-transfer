import { Grid, TextField, Typography } from "@mui/material";
import AppButton from "../../components/AppButton";
import Layout from "../../components/Layout";
import { useStyles } from "../../Styles";
import AppFooter from "../../components/AppFooter";

import sett from "../../assests/Images/sett.png";
import female from "../../assests/Images/female.png";
import female2 from "../../assests/Images/female2.png";
import male1 from "../../assests/Images/man1.png";
import "../../font.css/index.css";

import CommonNav from "../../components/CommonNav";
import AppInputFields from "../../components/AppInputFields";
import updown from "../../assests/Images/updown.png";
import x from "../../assests/Images/Xclam.svg";
import flag2 from "../../assests/Images/flag2.svg";

import wallet from "../../assests/Images/waallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import right from "../../assests/Images/one.png";
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
import AddNewForm from "../../components/AddNewForm";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStoreState } from "../../redux/reducers/index";

const UseExisting = () => {
  const classes = useStyles();
  const ReceiveCash = useSelector((state: IStoreState) => state.payment);

  const options = [
    {
      img: female,
      text: "USA",
      number: "Lindsay Walton",
      active: "Transfer again",
    },

    {
      img: female2,
      text: "UK",
      number: "Courtney Henry",
      active: "Transfer again",
    },
    {
      img: male1,
      text: "France",
      number: "Tom Cook",
      active: "Transfer again",
    },
    {
      img: female,
      text: "USA",
      number: "Lindsay Walton",
      active: "Transfer again",
    },
    {
      img: female2,
      text: "UK",
      number: "Courtney Henry",
      active: "Transfer again",
    },
    {
      img: male1,
      text: "France",
      number: "Lindsay Walton",
      active: "Transfer again",
    },
  ];

  return (
    <>
      <Layout>
        {/* <Box>

        <CommonNav  login2="Login" Signup2="Signup"  priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" />
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
              <Grid
                md={3}
                sx={{
                  borderBottom: "3px solid #4F46E5",
                  display: { md: "flex", xs: "flex" },
                }}
              >
                <Tabh
                  img={carve}
                  imgright={right}
                  color="black"
                  text="Reciver’s info"
                  des="Vitae sed mi luctus laoreet."
                />
              </Grid>
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabh
                  img={carve}
                  imgright={two}
                  color="black"
                  text="Payment Method"
                  des="Cursus semper viverra."
                />
              </Grid>
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabh
                  img={carve}
                  imgright={three}
                  color="black"
                  text="Review & Confirm"
                  des="Penatibus eu quis ante."
                />
              </Grid>
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabh
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
            columnSpacing={3}
            sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" } }}
          >
            <Grid item xs={12} md={4}>
              <Typography className={classes.Choose_Card}>
                Reciver’s info
              </Typography>
              <Typography className={classes.Choose_Card_description}>
                You can see all the details of your transaction, check that you
                have made no mistake if necessary you can modify information on
                this page.
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
            </Grid>

            <Grid item xs={12} md={8}>
              <Grid
                container
                sx={{
                  padding: { lg: "24px 0px 24px 24px", xs: "20px 0px" },
                  borderRadius: "6px",
                }}
                // columnSpacing={2}
                rowGap={2}
                // columnGap={}
              >
                <Grid item xs={12}>
                  <Box
                  // sx={{ padding: "10px 0px 0px 0px" }}>
                  >
                    <Typography
                      sx={{
                        fontFamily: "Inter !important",
                        fontSize: "14px !important",
                        fontWeight: "500 !important",
                        lineHeight: "20px !important",
                        mb: "4px",
                      }}
                    >
                      Receiving Country - Currency
                    </Typography>
                    <Box
                      sx={{
                        border: "1px solid #D1D5DB",
                        borderRadius: "6px",
                        backgroundColor: "white",
                        height: "42px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        padding: "0px 13px !important",
                      }}
                    >
                      <Box sx={{ mr: "20px" }}>
                        <img src={flag2} />
                      </Box>

                      <TextField
                        sx={{
                          // marginTop: "3px",
                          // width: { md: "710px", xs: "330px" },
                          backgroundColor: "white",
                          textAlign: "center",
                          // padding: "0px 13px !important",
                          // height: "42px",
                        }}
                        placeholder="France (EUR - €)"
                        // disableUnderline={true}
                        variant="standard"
                        fullWidth
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                      <Box>
                        <img src={updown} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  container
                  sx={{
                    display: "flex",
                    flexDirecetion: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid item md={5.5} xs={12}>
                    <Typography className={classes.add_new_f_name}>
                      Amount sent
                    </Typography>
                    <AppInputFields
                      border={"1px solid #D1D5DB"}
                      borderRadius={"6px"}
                      padding={"9px -5px"}
                      height="38px"
                    />
                  </Grid>
                  <Grid item md={5.5} xs={12}>
                    <Typography className={classes.add_new_f_name}>
                      The beneficiary receives
                    </Typography>
                    <AppInputFields
                      border={"1px solid #D1D5DB"}
                      borderRadius={"6px"}
                      padding={"9px -5px"}
                      height="38px"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.add_new_f_name}>
                    Quick search
                  </Typography>
                  <AppInputFields
                    border={"1px solid #D1D5DB"}
                    borderRadius={"6px"}
                    padding={"9px -5px"}
                    height="38px"
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{ borderBottom: "1px solid #E8ECEF", mb: "-20px" }}
                >
                  <Typography className={classes.Choose_Card_description}>
                    Already Added
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      // padding: "0px -20px",
                      // backgroundColor: "#fff",
                      borderRadius: "4px",
                    }}
                    className={classes.settings_my_cards}
                  >
                    {options.map((i) => (
                      <Box key={Math.random()}>
                        <Box
                          sx={{
                            borderBottom: "1px solid #E8ECEF",
                            padding: "10px 0px",
                          }}
                          className={classes.status_checking_Container}
                        >
                          <Box sx={{ display: "flex" }}>
                            <img src={i.img} alt={"image"} height="40px" />
                            <Box sx={{ marginLeft: "24px" }}>
                              <Typography
                                sx={{
                                  fontWeight: "400 !important",
                                  fontFamily: "Inter !important",
                                  fontSize: "16px !important",
                                  lineHeight: "24px !important",
                                }}
                              >
                                {i.number}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: "Inter !important",
                                  fontWeight: "400 !important",
                                  fontSize: "14px !important",
                                  lineHeight: "21px !important",
                                  color: "#98A9BC !important",
                                }}
                              >
                                {i.text}
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              borderRadius: "19px",
                              padding: "9px 11px",
                              backgroundColor: "#F3F4F6",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Inter !important",
                                fontWeight: "400 !important",
                                fontSize: "16px !important",
                                lineHeight: "24px !important",
                                color: "#252631 !important",
                              }}
                            >
                              {i.active}
                            </Typography>
                            {/* <Typography sx={{
                            fontWeight: "400 !important",
                            fontSize: "14px !important",
                            lineHeight: "21px !important",
                            color: "#98A9BC !important",
                          }}>{i.status}</Typography> */}
                          </Box>
                        </Box>

                        {/* <Divider sx={{ margin: "16px 0px" }} /> */}
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  marginRight: "30px",
                  justifyContent: "flex-end",
                  marginTop: { lg: "56px", xs: "-20px" },
                }}
              >
                <Link to="/" style={{ textDecoration: "none", width: "142px" }}>
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
                  to="/addNew"
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

export default UseExisting;
