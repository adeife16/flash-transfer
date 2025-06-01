import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo } from "react";
import sett from "../../assests/Images/sett.png";
import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import "../../font.css/index.css"
import Layout from "../../components/Layout";
import Pagination from '@mui/material/Pagination';
import CommonNav from "../../components/CommonNav";
import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import Footer from "../../components/AppFooter";
import { useStyles } from "../../Styles";
import email from "../../assests/Images/email.png";
import Type from "../../assests/Logo/type.png";
import Search from "../../assests/Logo/search.png";
import Calender from "../../assests/Logo/calander.png";
import date from "../../assests/Logo/date.png";
import location from "../../assests/Logo/location.png";
import Track from "../../assests/Logo/track.png";
import { Box } from "@mui/system";
import AppButton from "../../components/AppButton";
import useHistory from "../../hooks/useHIstory";
import useTx from "../../hooks/useTx";
import { getBSCTx } from "../../api/scanAPI/bscScan";
import { toast } from "react-toastify";
import HistoryItem from "./historyItem";
import { Link } from "react-router-dom";
import { SWAP_CONTRACT_ADDRESS } from "../../constants";
import { getHistory } from "../../Services/auth";

export interface Props {
  event?: any;
}
export type IVisitCard = {
  Location: any;
  name: string;
  locationName: string;
  emaillogo: any;
  color: string;
  bgcolor: string;
  tagImg: any;
  tag: string;
  padding: "2px 10px";
  details: "Show detail";
  email: string;
  success: "Complete" | "In process" | "Cencel" | "Pending";
  price: string;
  dateimg: any;
  date: string
}
const History = () => {
  const [age, setAge] = React.useState("");
  const [curPage, setCurPage] = React.useState<number>(1);
  const [showCount, setShowCount] = React.useState<number>(10);
  const [historyList, setHistorylist] = React.useState([]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurPage(value);
  }
  const handleChange = (event: any) => {
    // setCurPage(1);
    // setShowCount(parseInt(event.target.value));
  };

  const classes = useStyles();
  const history = useHistory();
  const totalPage = useMemo(() => {
    if (history) {
      const HisLength = history.length;
      if (HisLength % showCount === 0) {
        return Math.floor(HisLength / showCount);
      } else {
        return Math.floor(HisLength / showCount) + 1;
      }
    } else {
      return 0
    }
  }, [history, showCount])
  const curHistory = useMemo(() => {
    if (history && curPage) {
      const firstIndex = (curPage - 1) * showCount;
      if (curPage < totalPage) {
        return history.slice(firstIndex, showCount);
      } else {
        return history.slice(firstIndex);
      }
    } else {
      return null;
    }
  }, [history, curPage, totalPage, showCount]);
  // 
  const getData = async () => {

    await getHistory().then((res) => {

      setHistorylist(res)
      console.log("alerts", historyList)
    })

  }
  useEffect(() => {
    getData()
  }, [])
  const History = [
    {
      Location: location,
      locationName: "Pakistan",
      name: "Kathryn Murphy",
      emaillogo: email,
      color: "#fff",
      bgcolor: "#00CC64",
      tagImg: Track,
      tag: "Track",
      padding: "2px 10px",

      // padding: "2px 79%",
      details: "Show detail",
      email: "nathan.roberts@example.com",
      success: "Complete",
      price: "291,07 €",
      dateimg: date,
      date: "Feb 2, 2019 19:28",
    },
    {
      Location: location,
      locationName: "Senegal",
      name: "Floyd Miles",
      emaillogo: email,
      color: "#fff",
      bgcolor: "#00CC64",
      tagImg: Track,
      tag: "Track",
      padding: "2px 10px",
      details: "Show detail",
      email: "nathan.roberts@example.com",
      success: "Complete",
      price: "87,00 €",
      dateimg: date,
      date: "Dec 4, 2019 21:42",
    },
    {
      Location: location,
      locationName: "Santo Tome Y Principe",
      name: "Darlene Robertson",
      emaillogo: email,
      color: "#fff",
      bgcolor: "#00CC64",
      tagImg: Track,
      tag: "Track",
      padding: "2px 10px",
      details: "Show detail",
      email: "nathan.roberts@example.com",
      success: "Complete",
      price: "255,72 €",
      dateimg: date,
      date: "Dec 30, 2019 07:52",
    },
    {
      Location: location,
      locationName: "Gabon",
      name: "Devon Lane",
      emaillogo: email,
      color: "#991B1B",
      bgcolor: "#FEE2E2",
      tagImg: Track,
      tag: "Track",
      padding: "2px 10px",
      details: "Show detail",
      email: "nathan.roberts@example.com",
      success: "Cencel",
      price: "94,00 €",
      dateimg: date,
      date: "Mar 20, 2019 23:14",
    },
    {
      Location: location,
      locationName: "Dinamarca",
      name: "Savannah Nguyen",
      emaillogo: email,
      color: "#92400E",
      bgcolor: "#FEF3C7",
      tagImg: Track,
      tag: "Track",
      padding: "2px 10px",
      details: "Show detail",
      email: "nathan.roberts@example.com",
      success: "Pending",
      price: "171,52 €",
      dateimg: date,
      date: "Mar 20, 2019 23:14",
    },
    {
      Location: location,
      locationName: "Mozambique",
      name: "Jane Cooper",
      emaillogo: email,
      color: "#fff",
      bgcolor: "#00CC64",
      tagImg: Track,
      tag: "Track",
      padding: "2px 10px",
      details: "Show detail",
      email: "nathan.roberts@example.com",
      success: "Complete",
      price: "75,00 €",
      dateimg: date,
      date: "Dec 4, 2019 21:42",
    },
    {
      Location: location,
      locationName: "Italia",
      name: "Esther Howard",
      emaillogo: email,
      color: "#1F2937",
      bgcolor: "#F3F4F6",
      tagImg: Track,
      tag: "Track",
      padding: "2px 10px",
      details: "Show detail",
      email: "nathan.roberts@example.com",
      success: "In process",
      price: "200 EUR",
      dateimg: date,
      date: "Dec 30, 2019 05:18",
    },
    {
      Location: location,
      locationName: "Rumania",
      name: "Dianne Russell",
      emaillogo: email,
      color: "#fff",
      bgcolor: "#00CC64",
      tagImg: Track,
      tag: "Track",
      padding: "2px 10px",
      details: "Show detail",
      email: "nathan.roberts@example.com",
      success: "Complete",
      price: "246,00 €",
      dateimg: date,
      date: "Dec 7, 2019 23:26",
    },
    {
      Location: location,
      locationName: "Dinamarca",
      name: "Savannah Nguyen",
      emaillogo: email,
      color: "#92400E",
      bgcolor: "#FEF3C7",
      tagImg: Track,
      tag: "Track",
      padding: "2px 10px",
      details: "Show detail",
      email: "nathan.roberts@example.com",
      success: "Pending",
      price: "171,52 €",
      dateimg: date,
      date: "Mar 20, 2019 23:14",
    },
    {
      Location: location,
      locationName: "Santo Tome Y Principe",
      name: "Darlene Robertson",
      emaillogo: email,
      color: "#fff",
      bgcolor: "#00CC64",
      tagImg: Track,
      tag: "Track",
      padding: "2px 10px",
      details: "Show detail",
      email: "nathan.roberts@example.com",
      success: "Complete",
      price: "255,72 €",
      dateimg: date,
      date: "Dec 30, 2019 07:52",
    },
  ];
  return (
    <Grid>
      <Layout>

        {/* <Grid>
        <CommonNav login2="Login" Signup2="Signup" priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" />
      </Grid> */}
        <Grid sx={{ backgroundColor: "#F7FDFF", }}>


          <Grid
            container
            sx={{
              transform: { lg: "scalex(0.9)", xs: "none" },
              display: "flex",
              justifyContent: "center",

            }}
          >
            <Grid
              item
              md={10}
              sm={10}
              xs={11}
              sx={{
                marginTop: { lg: "90px", xs: "30px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter !important",
                  fontSize: { xs: "24px", md: "48px" },
                  fontsize: "Inter !important", fontWeight: { xs: "700", md: "800" },

                  lineHeight: { xs: "32px", md: "60px" },
                }}
              >
                History
              </Typography>
              <Box sx={{ display: { lg: "flex", xs: "none" }, }}>
                <Link to="/">
                  <AppButton
                    textTransform="none"
                    title={"Start New Transfer"}
                    color={"#fff"}
                    width="224px"
                    padding={"10px 32px 10px 36px"}
                    fontSize={"18px"}
                    fontWeight={"500"}
                    lineHeight={"28px"}
                    borderRadius="6px"
                    backgroundColor="#5D5FEF"
                    height="48px"
                  // endIcon={<ArrowForwardIcon />}
                  // margin={"10px 10px 0px 0px"}
                  />
                </Link>
              </Box>
              <Box sx={{ display: { lg: "none", xs: "flex" }, }}>
                <AppButton
                  textTransform="none"
                  title={"Start New Transfer"}
                  color={"#fff"}
                  width="224px"
                  // padding={"10px 32px 10px 36px"}
                  fontSize={"14px"}
                  fontWeight={"500"}
                  lineHeight={"28px"}
                  borderRadius="6px"
                  backgroundColor="#5D5FEF"
                  height="48px"
                // endIcon={<ArrowForwardIcon />}
                // margin={"10px 10px 0px 0px"}
                />
              </Box>
              {/* </Button> */}
            </Grid>
            <Grid
              md={10}
              xs={11}
              sx={{
                // transform: { lg: "scalex(0.9)", xs: "none" },
                marginBottom: "30px",
                marginTop: "20px",
                backgroundColor: "#fff",
                display: { lg: "flex", xs: "none" },
                alignItems: "center",
                flexDirection: { md: "row", xs: "column" },
                justifyContent: "space-between",
              }}
            >
              <Grid item md={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    padding: "10px 20px",
                    // alignItems: "center",
                    // justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* <img src={Search} alt="logo" style={{ marginRight: "  5px " }} /> */}
                  <TextField
                    variant="standard"
                    InputProps={{
                      // color: "#6A6A6A",
                      disableUnderline: true,
                      style: { color: "#6A6A6A", width: "118px", fontSize: "12px " },
                    }}
                    placeholder="FIND TRANSACTION "
                  />
                  <Button
                    sx={{
                      fontsize: "Inter !important", fontWeight: "500",
                      fontSize: "12px",
                      color: "black",
                      lineHeight: "15px",
                      textTransform: "uppercase",
                    }}
                  >
                    find transaction
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <FormControl
                  sx={{
                    // m: 1,
                    // minWidth: 70,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img src={Calender} alt="logo" />
                  <Typography className={classes.inputTitle}>Date</Typography>
                  <Select
                    sx={{
                      width: "120px",
                      margin: "0px 10px",
                      fontFamily: "Inter !important",
                      marginTop: "6px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                    variant="standard"
                    defaultValue={0}
                    disableUnderline
                    // value={showCount}
                    // onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>last month</MenuItem>
                    <MenuItem value={2}>last 6 months</MenuItem>
                    <MenuItem value={3}>last year</MenuItem>
                    <MenuItem value={4}>2021-2020 </MenuItem>
                    {/* <MenuItem value={5}>2022-2021 </MenuItem> */}
                  </Select>
                </FormControl>
                <FormControl
                  sx={{
                    // m: 1,
                    // minWidth: 70,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img src={Type} alt="logo" />
                  <Typography className={classes.inputTitle}>Type</Typography>
                  <Select
                    sx={{
                      width: "60px",
                      margin: "1px 10px",
                      marginTop: "8px",
                      fontFamily: "Inter !important",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                    variant="standard"
                    disableUnderline
                    defaultValue={0}
                    onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value={0} >All</MenuItem>
                    <MenuItem value={1}>Pay in cash</MenuItem>
                    <MenuItem value={2}>Crypto</MenuItem>
                    <MenuItem value={3}>Credit Card </MenuItem>
                    <MenuItem value={4}>Bank Transfer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              xs={11}
              sx={{
                // transform:{lg:"scale(0.9)",xs:"none"},
                marginBottom: "30px",
                marginTop: "20px",
                backgroundColor: "#fff",
                display: { lg: "none", xs: "flex" },
                alignItems: "center",
                flexDirection: "row",
                padding: "10px 20px",
                justifyContent: "space-between",
              }}>
              <Typography sx={{

                fontFamily: "Inter !important",
                fontWeight: "500 !important",
                fontSize: "12px !important",
                lineHeight: "15px !important",
                color: "#6A6A6A !important",
                textTransform: "uppercase"
              }}>find transaction</Typography>

              <Typography sx={{
                fontFamily: "Inter !important",
                fontsize: "Inter !important", fontWeight: "500 !important",
                fontSize: "12px !important",
                lineHeight: "15px !important",
                color: "#6A6A6A !important",
              }}>DATE:</Typography>
            </Grid>
            <Grid
              md={12}
              sm={12}
              xs={12}

            >
              {/* <>
              {historyList.map((item: any) => {
                return (
                  <Grid
                    item
                    md={12}
                    sm={12}
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: { md: "center", sm: "center", xs: "center" },
                    }}
                  >

                    <Grid
                      item
                      md={10}
                      sm={10}
                      xs={11}
                      sx={{
                        display: "flex",
                        justifyContent: {
                          md: "center",
                          sm: "center",
                          xs: "center",
                        },
                      }}
                    >

                      <Grid
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{
                          padding: { lg: "10px", xs: "5px" },
                          display: "flex",
                          justifyContent: {
                            md: "space-between",
                            sm: "center",
                            xs: "center",
                          },
                          borderBottom: "1px solid #D1D5DB",
                          background: "#FFFFFF",
                          boxShadow: "0px 4px 25px rgba(93, 95, 239, 0.1)",
                        }}
                      >
                        <Grid
                          item
                          md={6}
                          sm={6}
                          xs={6}
                          sx={{
                            padding: { lg: "10px", xs: "10px 0px" },
                            height: "132px",
                          }}
                        >
                          <Box
                            sx={{
                              flexDirection: "row",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <img
                              src={location}
                              style={{
                                marginRight: "5px",
                                width: "14px",
                                height: "16.9px",
                              }}
                            />
                            <Typography
                              sx={{
                                marginTop: "2px",
                                fontsize: "Inter !important", fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "20px",
                                color: "#6B7280",
                              }}
                            >

                              {
                                item.country
                              }
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              marginTop: "10px",
                              flexDirection: "row",
                              display: "flex",
                              alignItems: "end",
                            }}
                          >
                            <Typography
                              sx={{
                                fontsize: "Inter !important", fontWeight: "400",
                                fontSize: { md: "24px", xs: "14px" },
                                lineHeight: "32px",
                              }}
                            >
                              {item.fullName}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              marginTop: "20px",
                              flexDirection: "row",
                              display: "flex",
                              alignItems: "center",
                              background: "#FFFFFF",
                              boxShadow:
                                "8px 8px 30px 10px background: rgba(255, 255, 255, 1)",
                              borderRadius: "24px",
                            }}
                          >
                            <img
                              src={Track}
                              style={{
                                marginRight: "5px",
                                width: "16.67px",
                                height: "16.67px",
                              }}
                            />
                            <Typography
                              sx={{
                                marginRight: "15px",
                                fontsize: "Inter !important", fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "20px",
                                color: "#5D5FEF",
                              }}
                            >
                              {"Track"}
                            </Typography>
                            <Typography
                              sx={{
                                textDecorationLine: "underline",
                                fontWeight: "400",
                                fontFamily: "Inter !important",
                                fontSize: { md: "14px", xs: "12px" },
                                lineHeight: "20px",
                                color: "#6B7280",
                                
                                cursor:"pointer"
                              }}
                            >

                              Show detail
                              {/* <a href={BSCSCAN[DEFAULT_NETWORK] + "tx/" + txHash} target={"_blank"}>
                </a> 
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          md={6}
                          sm={6}
                          xs={6}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            padding: { lg: "10px", xs: "10px 0px" },
                          }}
                        >
                          <Box
                            sx={{
                              justifyContent: "end",
                              flexDirection: "column",
                              display: "flex",
                              alignItems: "end",
                            }}
                          >
                            <Typography
                              sx={{
                                padding: "2px 10px",
                                borderRadius: "10px",
                                fontsize: "Inter !important", fontWeight: "500",
                                fontSize: "12px",
                                lineHeight: "16px",
                                color: "white",
                                background: "#00CC64",
                                // background: `${backColors.bgColor}`,
                                // color: `${backColors.color}`,
                              }}
                            >
                              {item.status}
                              {/* {backColors.success} 
                            </Typography>

                            <Typography
                              sx={{
                                marginTop: "10px",

                                padding: `${"2px 10px"}`,
                                background: "#F3F4F6",
                                // display:"flex",
                                // flexWrap:"wrap",
                                display: "inline-block",
                                // flexDirection:"row",
                                borderRadius: "10px",
                                fontsize: "Inter !important", fontWeight: "700",
                                fontSize: { md: "24px", xs: "14px" },
                                lineHeight: "32px",
                                color: "#1F2937",
                              }}
                            >
                              {/* sas *{
                                item.transaction
                              }
                              {/* ${usdPrice.toFixed(3)} *
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              marginTop: "20px",
                              justifyContent: "end",
                              flexDirection: "row",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img

                              src={date}
                              style={{
                                width: "20px",
                                height: "16px",
                                marginRight: "5px",
                              }}
                            />
                            <Typography
                              sx={{
                                fontWeight: "400",
                                fontFamily: "Inter !important",
                                fontSize: { md: "14px", xs: "12px" },
                                lineHeight: "20px",
                                color: "#6B7280",
                              }}
                            >

                              {item.createdAt}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>

                  </Grid>
                )
              })}
              </> */}
              {curHistory &&
                curHistory?.map((i: any, index: number) => {
                  return (
                    <HistoryItem key={index} txHash={i.hash} timestamp={i.timeStamp} index={index} locationName="Senegal" name="Darlene Robertson" email="nathan.roberts@example.com" />
                  );
                })
              }

            </Grid>
            <Box sx={{
              marginBottom: "80px",
              marginTop: "20px"
              // transform:{lg:"scale(0.9)",xs:"none"},
            }}>
              <Pagination count={totalPage} defaultPage={1} onChange={handlePageChange} boundaryCount={2} color="primary" />

            </Box>
          </Grid>



        </Grid>
        {/* <Grid>
      <Footer />
    </Grid> */}
      </Layout>

    </Grid >
  );
};

export default History;
// const VisitCard:Array<IVisitCard> = [
  //   {
  //     Location: location,
  //     locationName: "Pakistan",
  //     name: "Kathryn Murphy",
  //     emaillogo: email,
  //     color: "#fff",
  //     bgcolor: "#00CC64",
  //     tagImg: Track,
  //     tag: "Track",
  //     padding: "2px 10px",

  //     // padding: "2px 79%",
  //     details: "Show detail",
  //     email: "nathan.roberts@example.com",
  //     success: "Complete",
  //     price: "291,07 €",
  //     dateimg: date,
  //     date: "Feb 2, 2019 19:28",
  //   },
  //   {
  //     Location: location,
  //     locationName: "Senegal",
  //     name: "Floyd Miles",
  //     emaillogo: email,
  //     color: "#fff",
  //     bgcolor: "#00CC64",
  //     tagImg: Track,
  //     tag: "Track",
  //     padding: "2px 10px",
  //     details: "Show detail",
  //     email: "nathan.roberts@example.com",
  //     success: "Complete",
  //     price: "87,00 €",
  //     dateimg: date,
  //     date: "Dec 4, 2019 21:42",
  //   },
  //   {
  //     Location: location,
  //     locationName: "Santo Tome Y Principe",
  //     name: "Darlene Robertson",
  //     emaillogo: email,
  //     color: "#fff",
  //     bgcolor: "#00CC64",
  //     tagImg: Track,
  //     tag: "Track",
  //     padding: "2px 10px",
  //     details: "Show detail",
  //     email: "nathan.roberts@example.com",
  //     success: "Complete",
  //     price: "255,72 €",
  //     dateimg: date,
  //     date: "Dec 30, 2019 07:52",
  //   },
  //   {
  //     Location: location,
  //     locationName: "Gabon",
  //     name: "Devon Lane",
  //     emaillogo: email,
  //     color: "#991B1B",
  //     bgcolor: "#FEE2E2",
  //     tagImg: Track,
  //     tag: "Track",
  //     padding: "2px 10px",
  //     details: "Show detail",
  //     email: "nathan.roberts@example.com",
  //     success: "Cencel",
  //     price: "94,00 €",
  //     dateimg: date,
  //     date: "Mar 20, 2019 23:14",
  //   },
  //   {
  //     Location: location,
  //     locationName: "Dinamarca",
  //     name: "Savannah Nguyen",
  //     emaillogo: email,
  //     color: "#92400E",
  //     bgcolor: "#FEF3C7",
  //     tagImg: Track,
  //     tag: "Track",
  //     padding: "2px 10px",
  //     details: "Show detail",
  //     email: "nathan.roberts@example.com",
  //     success: "Pending",
  //     price: "171,52 €",
  //     dateimg: date,
  //     date: "Mar 20, 2019 23:14",
  //   },
  //   {
  //     Location: location,
  //     locationName: "Mozambique",
  //     name: "Jane Cooper",
  //     emaillogo: email,
  //     color: "#fff",
  //     bgcolor: "#00CC64",
  //     tagImg: Track,
  //     tag: "Track",
  //     padding: "2px 10px",
  //     details: "Show detail",
  //     email: "nathan.roberts@example.com",
  //     success: "Complete",
  //     price: "75,00 €",
  //     dateimg: date,
  //     date: "Dec 4, 2019 21:42",
  //   },
  //   {
  //     Location: location,
  //     locationName: "Italia",
  //     name: "Esther Howard",
  //     emaillogo: email,
  //     color: "#1F2937",
  //     bgcolor: "#F3F4F6",
  //     tagImg: Track,
  //     tag: "Track",
  //     padding: "2px 10px",
  //     details: "Show detail",
  //     email: "nathan.roberts@example.com",
  //     success: "In process",
  //     price: "200 EUR",
  //     dateimg: date,
  //     date: "Dec 30, 2019 05:18",
  //   },
  //   {
  //     Location: location,
  //     locationName: "Rumania",
  //     name: "Dianne Russell",
  //     emaillogo: email,
  //     color: "#fff",
  //     bgcolor: "#00CC64",
  //     tagImg: Track,
  //     tag: "Track",
  //     padding: "2px 10px",
  //     details: "Show detail",
  //     email: "nathan.roberts@example.com",
  //     success: "Complete",
  //     price: "246,00 €",
  //     dateimg: date,
  //     date: "Dec 7, 2019 23:26",
  //   },
  //   {
  //     Location: location,
  //     locationName: "Dinamarca",
  //     name: "Savannah Nguyen",
  //     emaillogo: email,
  //     color: "#92400E",
  //     bgcolor: "#FEF3C7",
  //     tagImg: Track,
  //     tag: "Track",
  //     padding: "2px 10px",
  //     details: "Show detail",
  //     email: "nathan.roberts@example.com",
  //     success: "Pending",
  //     price: "171,52 €",
  //     dateimg: date,
  //     date: "Mar 20, 2019 23:14",
  //   },
  //   {
  //     Location: location,
  //     locationName: "Santo Tome Y Principe",
  //     name: "Darlene Robertson",
  //     emaillogo: email,
  //     color: "#fff",
  //     bgcolor: "#00CC64",
  //     tagImg: Track,
  //     tag: "Track",
  //     padding: "2px 10px",
  //     details: "Show detail",
  //     email: "nathan.roberts@example.com",
  //     success: "Complete",
  //     price: "255,72 €",
  //     dateimg: date,
  //     date: "Dec 30, 2019 07:52",
  //   },
  // ];