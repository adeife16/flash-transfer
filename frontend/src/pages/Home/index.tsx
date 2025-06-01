import {
  Divider,
  TextField,
  IconButton,
  Grid,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent,
  InputAdornment,
  Avatar,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useRef } from "react";
import AppButton from "../../components/AppButton";
import Searchbar from "../../components/searchbar";
import Searchbar2 from "../../components/searchbar2";
// import { SearchIcon } from "@mui/icons-material";

import { useStyles } from "../../Styles";
import TrustPilot from "../../assests/Logo/Trustpilot_logo_1.png";
import Homebg from "../../assests/Images/Homebg.png";
import AppFooter from "../../components/AppFooter";
import "../../font.css/index.css";

import BinanceLogo from "../../assests/Logo/Binance_Logo_1.svg";
import BUSDlogo from "../../assests/Logo/BUSDlogo.svg";
import euroflag from "../../assests/Images/euroflag.png";
import Binanceimg from "../../assests/Images/Binanceimg.svg";
import "./index.css";
import Downarraow from "../../assests/Logo/Downarraow.svg";
import Partnerpic1 from "../../assests/Images/partnerpic1.png";
import Partnerpic2 from "../../assests/Images/partnerpic3.png";
import Partnerpic3 from "../../assests/Images/partnerpic2.png";
import Partnerpic4 from "../../assests/Images/partnerpic4.png";
import Partnerpic5 from "../../assests/Images/partnerpic5.png";
import Partnerpic6 from "../../assests/Images/partnerpic6.png";
import Partnerpic7 from "../../assests/Images/partnerpic7.png";
import Partnerpic8 from "../../assests/Images/partnerpic8.png";
import Partnerpic9 from "../../assests/Images/partnerpic9.png";
import Partnerpic10 from "../../assests/Images/partnerpic10.png";
import Slidermain from "../../assests/Images/Slidermain.png";
import m3 from "../../assests/Images/m1.svg";
import Btnslider from "../../components/Slider";
import brand1 from "../../assests/Images/band1.png";
import brand2 from "../../assests/Images/band2.png";
import brand3 from "../../assests/Images/band3.png";
import whychoose from "../../assests/Images/whychoose.png";
import UpArrow from "../../assests/Logo/UpArrow.svg";
import AppdropDown from "../../components/AppdropDown";
import CommonNav from "../../components/CommonNav";
import Layout from "../../components/Layout";

import Cardsbg4 from "../../assests/Images/cards_bg4.png";

import Cardsbg from "../../assests/Images/cards_bg.png";
import Cardsbg2 from "../../assests/Images/Cardsbg2.png";
import Cardsbg3 from "../../assests/Images/Cardsbg3.png";
import BigMobile from "../../assests/Images/smallMobile.svg";
import SmallMobile from "../../assests/Images/bigMobile.svg";
import BigMobile2 from "../../assests/Images/bigMobile2.svg";
import SmallMobile2 from "../../assests/Images/smallMobile2.svg";

import Up_right from "../../assests/Images/Up_right.png";
import Up_right2 from "../../assests/Images/Up_right2.png";
import StepsBg from "../../assests/Images/StepsBg.png";
import ytbtn from "../../assests/Images/youtubebtn.png";
import tpt from "../../assests/Images/tpt.png";
import wallet2 from "../../assests/Images/waallet.png";

import { CardsTypetwo, CardsTypethree } from "../../components/AppCards";
import AppCards from "../../components/AppCards";
// import {CardsTypetwo} from "../../components/AppCards";
import sett from "../../assests/Images/sett.png";
import Walet from "../../assests/Images/waallet.png";
import m1 from "../../assests/Images/m1.svg";

import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";

import mu1 from "../../assests/Images/mu1.svg";
import mu2 from "../../assests/Images/mu2.svg";
import mu3 from "../../assests/Images/mu3.svg";
import mu4 from "../../assests/Images/mu4.svg";
import mu5 from "../../assests/Images/mu5.svg";
import mu6 from "../../assests/Images/mu6.svg";
import mu7 from "../../assests/Images/mu7.svg";
import mu8 from "../../assests/Images/mu8.svg";
import mu9 from "../../assests/Images/mu9.svg";
import mu10 from "../../assests/Images/mu10.svg";
import mu11 from "../../assests/Images/mu11.svg";

import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";

import Brandimage from "../../assests/Logo/Brandicon.svg";
import Brandimage1 from "../../assests/Images/Brandicon1.png";
import Brandimage2 from "../../assests/Images/Brandicon2.png";

import PlayStore from "../../assests/Logo/playStore.svg";
import applestore from "../../assests/Images/applestore.png";

import UserAccount1 from "../../assests/Images/partnersicon.png";

import UserAccount2 from "../../assests/Images/clockicon.png";
import Patternimg from "../../assests/Images/patternimg.png";
import AppleIcon from "@mui/icons-material/Apple";
import Autocomplete from "@mui/material/Autocomplete";

import { useNavigate } from "react-router-dom";
import { useWallet } from "../../Context/wallet_context";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { CashList, getCashByVal, CurrencyList } from "./constant";
import { setReceiveCash } from "../../redux/actions/actionCreators";
import ModalWallet from "../../components/ModalWallet";

// import UseNFTIDs from "../../hooks/useNFTIDs";
// import UseNFTDetailByIDFromOpenSea from "../../hooks/useNFTDetailByIDFromOpenSea";
import { Link } from "react-router-dom";
import useCalPrice from "../../hooks/useCalPrice";
import useGetPrice from "../../hooks/useGetPrice";

export interface AppProps {
  event?: any;
  text?: any;
  props?: any;
  name?: any;
  value?: any;
  newData?: any;
}
const Home = () => {
  // const [value, setValue] = React.useState("BUSD");
  const [value2, setValue2]: any = React.useState("");

  const { account, connect, disconnect } = useWallet();



  const connectMetamask = () => {
    if (account) {
      toast.warning("you are connected now!");
    } else {
      connect("METAMASK");
    }
  };
  const navigate = useNavigate();
  const classes = useStyles();
  // const handleFilter = (event: AppProps): void => {
  //   const searchWorld = event.target.value;
  //   // console.log()
  //   const newData = menu1.filter((value) => {
  //     return value.title.toLowerCase().includes(searchWorld.toLowerCase());
  //   });

  //   if (searchWorld === "") {
  //     setfilterdData([]);
  //   } else {
  //     setfilterdData({ newData: AppProps });
  //   }
  //   // setfilterdData(newData);
  // };
  function SampleNextArrow({ props }: AppProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          right: "45%  ",
          top: "100%",
          zIndex: "999",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow({ props }: AppProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "green",
          left: "45%  ",
          top: "100%",
          zIndex: "999",
        }}
        onClick={onClick}
      />
    );
  }

  // const settings = {
  //   dots: true,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };

  const [age, setAge] = React.useState("");
  const [age2, setAge2] = React.useState<string>("37");
  const [val, setVal] = React.useState(true);

  // const [value, setValue] = React.useState<string | null>(options[0]);
  //  const [value, setValue] = React.useState<string | null>(options[0]);

  const [state, setState] = useState({
    from: CurrencyList[2],
    into: CashList[10],
    fromTag: "Choose a crypto",
    intoTag: "Choose a currency",
  });

  const { from, into, fromTag, intoTag } = state;


  const price = useGetPrice(state.from.label, "usd");
  const data = useCalPrice(state.from.label, "usd", val ? 0 : 1, 100, 0, 2);

  const handleFrom = (event, newValue) => {
    setState({
      ...state,
      from: newValue,
    });
    setValue(newValue);
    console.log("🚀 ~ file: index.tsx:232 ~ handleFrom ~ newValue:", newValue)
  };

  const handleInto = (event, newValue) => {
    setState({
      ...state,
      into: newValue,
    });
    setValue2(newValue);
    console.log("🚀 ~ file: index.tsx:241 ~ handleInto ~ newValue:", newValue)
  };
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const handleChange2 = (event: SelectChangeEvent) => {
    setAge2(event.target.value);
  };

  const handleSwitch = () => {
    // let temp = from;
    // setState({
    //   ...state,
    //   from: into,
    //   into: from,
    //   fromTag: intoTag,
    //   intoTag: fromTag
    setVal(!val);
    // })
  };
  const isAuth = localStorage.getItem("token");
  // const handleChange = ({ event }: AppProps)=> {
  //   setAge(event.target.value);
  // };
  // const options = [
  //   { label: "BUSD", value: "busd" },
  //   { label: "Vegetable", value: "vegetable" },
  //   { label: "Meat", value: "meat" },
  // ];
  // const options2 = [
  //   { label: "France - €", value: "France - €" },
  //   { label: "Vegetable", value: "vegetable" },
  //   { label: "Meat", value: "meat" },
  // ];
  const options = ["Option 1", "Option 2"];

  const imgObject = [
    {
      imgUrl: Partnerpic1,
    },
    {
      imgUrl: Partnerpic2,
    },
    {
      imgUrl: Partnerpic3,
    },
    {
      imgUrl: Partnerpic4,
    },
    {
      imgUrl: Partnerpic5,
    },
    {
      imgUrl: Partnerpic6,
    },
    {
      imgUrl: Partnerpic7,
    },
    {
      imgUrl: Partnerpic8,
    },
    {
      imgUrl: Partnerpic9,
      text: "ahmed",
    },
    {
      imgUrl: Partnerpic10,
      text: "ahmed",
    },
  ];

  const cardData1 = [
    {
      Number: "+200",
      title: "Fiat Currencies Support",
      description: "We support all Fiat currencies in the world!",
    },
    {
      Number: "12",
      title: "Popular cryptocurrencies available !",
      description:
        "You can exchange your cryptocurrencies: FLASH, BUSD, USDT, PAX GOLD, DAI, BNB, BITCOIN, MATIC, ETHEREUM, LUNC, SHIBA INU and DOGECOIN.",
    },
    {
      Number: "5k",
      title: "Active Users",
      description:
        "Our users are satisfied with the speed, low fees and support !",
    },
  ];

  const cardsData = [
    {
      pic: Brandimage,
      title: "Speed",
      description: "The transaction is instant with cryptocurrency in seconds.",
    },
    {
      pic: Brandimage1,
      title: "Security",
      description: "The blockchain is tamper-proof, transparent and secure.",
    },
    {
      pic: Brandimage2,
      title: "Easy Transfer",
      description:
        "Send money and easily convert your cryptocurrency to cash and vice versa.",
    },
  ];
  const cardsData3 = [
    {
      pic: brand3,
      title: "Register for free",
      description:
        "Register or connect directly with your no-custodial wallet.",
    },
    {
      pic: brand2,
      title: "Connect your crypto wallet",
      description:
        "You must connect your no-custodial wallet or your Binance account to use our site.",
    },
    {
      pic: brand1,
      title: "Make payment",
      description:
        "Once the payment has been validated, the beneficiary can receive his order.",
    },
  ];

  const AdvantageData = [
    {
      logo: UserAccount1,
      advantages: "First Advantage",
      advantages_description:
        "Allows you to transfer crypto vs fiat to another country, buy and sell cryptocurrency with cash.",
    },
    {
      logo: UserAccount2,
      advantages: "Second Advantage",
      advantages_description:
        "No hack possible everything is secured by the blockchain and by Binance which has a security fund.",
    },
  ];

  const QuestionsAnswers = [
    {
      questions: "How withdraw my cryptos in cash with Flash Transfer ?",
      Answers:
        "You must go to our Flash-transfer.com site, choose yourself as the beneficiary when transferring money and go to a merchant partner.",
    },
    {
      questions: "Where can the Flash Transfer service be used ?",
      Answers:
        "Flash Transfer can be used worldwide except in the following countries (US blacklist): Cuba, Iran, North Korea, Syria, Venezuela.",
    },
    {
      questions:
        "In which/how many countries does Flash Transfer operate ?      ",
      Answers:
        "For the moment Flash Transfer operates in Europe, Africa and the United Arab Emirates.",
    },
    {
      questions: "How to convert your cryptocurrency to another ?",
      Answers:
        "Go to our dex Flash-swap and exchange your crypto for any currently we support the Ethereum network and BNB Chain.     ",
    },

    {
      questions:
        "How to send the cryptocurrency so that the beneficiary receives it in cash ?",
      Answers:
        "You must create an account, put crypto currency accepted on our site against fiat currency, add a beneficiary, connect your wallet and validate your transaction.",
    },
    {
      questions: "How much are the transaction fees ?",
      Answers:
        "Transaction fees vary depending on the amount you send and the currency market.",
    },
  ];

  const ITEM_HEIGHT = 60;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        borderRadius: "8px",
        // padding: "10px",
        marginTop: "10px",
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 215,
      },
    },
  };
  // const [value, setValue] = useState(null);
  // const [inputValue, setInputValue] = React.useState("");

  // const handleClear = (e) => {
  //   console.log("clicked TARGET ELEMENT: ", e.target);
  //   setInputValue("");
  // };
  const MenuProps2 = {
    PaperProps: {
      style: {
        borderRadius: "8px",
        // padding: "10px",
        marginTop: "10px",
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 180,
      },
    },
  };

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const handleClear = (e) => {
    console.log("clicked TARGET ELEMENT: ", e.target);
    setInputValue("");
  };
  // const handleChange = ({ event }: AppProps): void => {
  //   setValue(event.target.value);
  // };

  const Span_div = ({ text }: AppProps) => {
    return <span className={classes.text_yellow}>{text}</span>;
  };

  const dispatch: Dispatch<any> = useDispatch();
  const handleContinue = () => {
    // const token = getCashByVal(into);
    // const country = token.label.split('-')[0].trim();
    // const amount = 0;
    // dispatch(setReceiveCash(country, amount, token.img))
    // window.location.href="/useexisting"
    val ? navigate("/useexisting") : navigate("/useexistingR");
  };
  // console.log("...vLUWE",value)
  return (
    <>
      <Layout>
        {/* <CommonNav login2="Login" Signup2="Signup" priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" /> */}
        {/* Home section 1 */}
        <Grid
          container
          sx={{
            backgroundImage: { md: `url(${Homebg})` },
            backgroundPosition: "85% 35%",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
          className={classes.m_Container3}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            className={classes.sub_container}
            columnGap={{ md: 1, lg: 1, xl: 1 }}
          >
            <Grid
              item
              xs={12}
              md={7}
              xl={5}
              sx={{
                backgroundImage: {
                  xs: `url(${Homebg})`,
                  sm: `url(${Homebg})`,
                  md: "none",
                },
                display: "flex",
                alignItems: "center",
                backgroundSize: "cover",
                backgroundPosition: { xs: "100% 0%", sm: "0% 19%" },
              }}
            >
              <Box
                sx={{
                  marginTop: { lg: "-80px", xs: "0px" },
                  transform: { lg: "scale(0.8) ", xs: "scale(none)" },
                }}
                className={classes.Section_1_grid_1}
              >
                <Typography className={classes.Flash_Transfer_Content}>
                  {/* all over the World with Flash Transfer  */}
                  <span style={{ color: "#FCBF07" }}>Send</span>,
                  <span style={{ color: "#FCBF07" }}> buy</span> or{" "}
                  <span style={{ color: "#FCBF07" }}>sell </span> cryptos vs
                  Cash all over the world with Flash Transfer
                </Typography>
                <Typography
                  sx={{ display: { xs: "none", sm: "flex" } }}
                  className={classes.useflash_para}
                >
                  Exchange your cryptocurrency vs cash or buy cryptocurrency
                  with cash form our approved partners. You can also send your
                  cryptocurrency vs fiat worldwide using a Binance account or
                  using your no-custodial wallet ( Flash wallet, Metamask,
                  Binance wallet, Trust wallet ...)
                </Typography>
                {/* <Typography
                  sx={{ display: { xs: "none", sm: "flex" } }}
                  className={classes.useflash_para2}
                > */}
                {/* If you want to buy cryptocurrency with cash for yourself or someone else. You must yourself as the beneficiary or recipient and add the address of the receiving wallet of the crypto-currency in question in the beneficiary page (Address starts with 0x............ for Polygon, BNB Chain, Ethereum, Avax and unique address for Bitcoin).              
                    </Typography> */}
                <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                  <Box sx={{ margin: "0px 16px 0px 0px" }}>
                    <AppButton
                      title={"Tutorial"}
                      backgroundColor={"#000"}
                      // fontSize={{xs:"12px",md:"18px"}}
                      // fontSize={"18px"}
                      fontWeight={"500"}
                      lineHeight={"28px"}
                      color={"#fff"}
                      maxWidth={"165px"}
                      textTransform="none"
                      height="62px"
                      padding={"21px 32px"}
                      borderRadius={"6px"}
                      boxShadow={
                        "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                      }
                      startIcon={<img src={ytbtn} alt={"imges"} />}
                      className={classes.sec_1_btn_1}
                    />
                  </Box>
                  <a
                    href="https://fr.trustpilot.com/review/flash-technologies.org"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <AppButton
                      border="1px solid #51B27E"
                      color={"#fff"}
                      maxWidth={"172px"}
                      textTransform="none"
                      height="62px"
                      padding={"21px 32px"}
                      borderRadius={"6px"}
                      boxShadow={
                        "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                      }
                      startIcon={<img src={tpt} alt={"imges"} />}
                      className={classes.sec_1_btn_1}
                    />
                  </a>
                </Box>
              </Box>
            </Grid>

            {/* end text button area */}
            <Grid
              item
              xs={12}
              md={4.7}
              xl={3.8}
              sx={{
                position: "relative",
              }}
            >
              <Box sx={{}} className={classes.Binance_Main_container}>
                {/* <AppButton
                  title={"Connect Your Binance account"}
                  backgroundColor={"#FCBF07"}
                  // fontSize={{xs:"12px",md:"18px"}}
                  fontSize={"16px"}
                  fontWeight={"500"}
                  lineHeight={"24px"}
                  color={"#fff"}
                  maxWidth={"100%"}
                  textTransform="none"
                  height=" 49.63px"
                  // padding={"17px 41px"}
                  borderRadius={"9px"}
                  startIcon={<img src={Binanceimg} alt="image" />}
                // className={classes.sec_1_btn_1}
                />
                <Box className={classes.orTxt}>or</Box> */}

                {/* <ModalWalet3/> */}
                <Box style={{ marginBottom: "10px", marginTop: "10px" }}>
                  {/* {img1 ? */}
                  <ModalWallet
                    width="100%"
                    priceimg1={wallet2}
                    name="Connect Your Wallet"
                    namesize="14px"
                  />
                  {/* : null} */}
                  {/* <ModalWalet2 margin="0px" priceimg1={wallet2} width="100px" name="Connect Your Wallet" namesize="14px" /> */}
                </Box>

                {/* <AppButton
                  title={"Connect Your Wallet"}
                  backgroundColor={"#5D5FEF"}
                  // fontSize={{xs:"12px",md:"18px"}}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  lineHeight={"28px"}
                  color={"#fff"}
                  height=" 56px"
                  onClick={connectMetamask}
                  textTransform="none"
                  maxWidth={"100%"}
                  margin="0px 0px 10px 0px"
                  // padding={"17px 41px"}
                  borderRadius={"9px"}

                  startIcon={
                    <ModalWallet
                      menuicon={
                        <img
                          src={Walet}
                          alt="image"
                        />
                      }
                    />
                    // <img
                    //   src={Walet}
                    //   alt="image"

                    // />

                  }

                />
               */}

                <Box className={classes.BinanceBox2}>
                  <Box mt="5px">
                    <Typography className={classes.Amount}>
                      Amount Send
                    </Typography>
                    <Typography className={classes.value}>100</Typography>
                  </Box>
                  {/* <Box className={classes.logo_dropdown_Box}> */}
                  {/* <img
                      src={BUSDlogo}
                      alt={"imges"}
                      style={{ marginLeft: "13px" }}
                    /> */}
                  <Box className={classes.logo_dropdown_Box2}>
                    {/* <Searchbar  /> */}
                    {/* <img
                      src={euroflag}
                      alt={"imges"}
                      style={{ marginLeft: "15px" }}
                    /> */}
                    {/* <Select
                      sx={{
                        width: "200px",
                        margin: "0px 10px 0px 10px",
                        fontFamily: "Inter !important",
                        fontSize: "18px",
                        backgroundColor: "White !important",
                        lineHeight: "28px !important",
                        fontWeight: "500",
                      }}
                      variant="standard"
                      disableUnderline
                      value={from}
                      onChange={handleFrom}

                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      MenuProps={MenuProps}
                    >
                      {
                        CashList.map((item) =>

                          <MenuItem style={{
                            fontSize: "16px",
                            marginLeft: "-5px",
                            // "&:hover": {
                            //   background: "rgba(0, 0, 0, 0.04)",
                            // },
                          }} className={classes.selectitem} value={item.value}  >
                            <img src={item.img} style={{
                              width: "24px", height: "24px", marginRight: "10px",
                              borderRadius: "100px"
                            }} />
                            {item.label}
                          </MenuItem>
                        )
                      }
                    </Select> */}

                    {val ? (
                      <Autocomplete
                        sx={{ width: 300 }}
                        value={from}
                        onChange={handleFrom}
                        options={CurrencyList}
                        autoHighlight
                        // getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            <img
                              loading="lazy"
                              width="20"
                              style={{ cursor: "pointer" }}
                              src={option.img}
                              alt=""
                            />
                            <span style={{ fontSize: "12px" }}>
                              {option.label}
                            </span>
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={fromTag}
                            InputProps={{
                              ...params.InputProps,
                              startAdornment: value ? (
                                <InputAdornment
                                  disablePointerEvents
                                  position="start"
                                >
                                  <img
                                    loading="lazy"
                                    width="20"
                                    style={{ cursor: "pointer" }}
                                    src={from ? from.img : mu4}
                                    alt=""
                                  />
                                </InputAdornment>
                              ) : null,
                            }}
                          />
                        )}
                      />
                    ) : (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 300 }}
                        options={CashList}
                        value={into}
                        onChange={handleInto}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{
                              "& > img": { mr: 2, flexShrink: 0 },
                            }}
                            {...props}
                          >
                            <img
                              loading="lazy"
                              width="20"
                              style={{ cursor: "pointer" }}
                              src={option.img}
                              alt=""
                            />
                            <span style={{ fontSize: "12px" }}>
                              {option.label}
                            </span>
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            sx={{ cursor: "pointer" }}
                            {...params}
                            label={intoTag}
                            InputProps={{
                              ...params.InputProps,

                              startAdornment: into ? (
                                <Link to="" style={{ cursor: "pointer" }}>
                                  <InputAdornment
                                    disablePointerEvents
                                    position="start"
                                  >
                                    <img
                                      loading="lazy"
                                      width="20"
                                      src={into ? into.img : m1}
                                      alt=""
                                    />
                                  </InputAdornment>
                                </Link>
                              ) : null,
                            }}
                          />
                        )}
                      />
                    )}

                    {/* <Select
                      sx={{
                        width: "170px",
                        margin: "0px 10px 0px 10px",
                        fontFamily: "Inter !important",
                        fontSize: "18px",
                        // display:"flex",
                        // flexWrap:"wrap",
                        background: "white !important",
                        lineHeight: "28px !important",
                        fontWeight: "500",
                      }}
                      variant="standard"
                      disableUnderline
                      value={from}
                      onChange={handleFrom}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      MenuProps={MenuProps2}

                    >
                      <MenuItem

                        className={classes.selectitem} value="" >
                        < img src={BUSDlogo} style={{ width: "24px", height: "24px", marginRight: "10px" }} />
                        BUSD
                      </MenuItem>
                      <MenuItem
                        className={classes.selectitem} value={1} >
                        < img src={mu1} style={{ width: "24px", height: "24px", marginRight: "10px" }} />
                        FLASH
                      </MenuItem>
                      <MenuItem value={2} className={classes.selectitem}>     <img src={mu2} style={{ width: "24px", height: "24px", marginRight: "10px" }} />  BNB</MenuItem>
                      <MenuItem value={3} className={classes.selectitem}>   <img src={mu3} style={{ width: "24px", height: "24px", marginRight: "10px" }} /> MATIC</MenuItem>
                      <MenuItem value={4} className={classes.selectitem}>   <img src={mu4} style={{ width: "24px", height: "24px", marginRight: "10px" }} /> USDT</MenuItem>
                      <MenuItem value={5} className={classes.selectitem}>       <img src={mu5} style={{ width: "24px", height: "24px", marginRight: "10px" }} />  DAI</MenuItem>
                      <MenuItem value={6} className={classes.selectitem}>   <img src={mu6} style={{ width: "24px", height: "24px", marginRight: "10px" }} /> ETHEREUM</MenuItem>
                      <MenuItem value={7} className={classes.selectitem}>   <img src={mu7} style={{ width: "24px", height: "24px", marginRight: "10px" }} /> PAX GOLD</MenuItem>
                      <MenuItem value={8} className={classes.selectitem}>       <img src={mu8} style={{ width: "24px", height: "24px", marginRight: "10px" }} />  BITCOIN</MenuItem>
                      <MenuItem value={9} className={classes.selectitem}>   <img src={mu9} style={{ width: "24px", height: "24px", marginRight: "10px" }} /> LUNC</MenuItem>
                      <MenuItem value={10} className={classes.selectitem}>   <img src={mu10} style={{ width: "24px", height: "24px", marginRight: "10px" }} /> SHIBA INU</MenuItem>
                      <MenuItem value={11} className={classes.selectitem}>   <img src={mu11} style={{ width: "24px", height: "24px", marginRight: "10px" }} /> DOGECOIN</MenuItem>
                    </Select> */}

                    {/* <Box sx={{

                      backgroundColor: "white",

                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",

                    }}> */}
                    {/* <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <TextField
                        sx={{
                          backgroundColor: "white",
                          textAlign: "center",
                        }}
                        placeholder="france (EUR - €)"
                        variant="standard"
                        fullWidth
                        InputProps={{
                          disableUnderline: true,
                        }}
                        type="text"
                        // value={value}
                        value={wordEntered}
                        // onChange={onChange}
                        onChange={handleFilter}
                      />
                      <div >
                        {filterdData.length === 0 ? (
                          <SearchIcon />
                        ) : (
                          <CloseIcon id="clearBtn" onClick={clearInput} />
                        )}
                      </div>
                    </Box> */}

                    {/* </Box> */}

                    {/* <select
                      value={value}
                      style={{
                      
                        width: "100%",
                        maxWidth: "140px",
                        fontFamily: "Inter !important",
                        fontSize: "18px",
                        fontWeight: "500",
                        backgroundColor: "white",
                        lineHeight: "28px",
                        margin: "0px 5px 0px -0px",
                        borderRadius: "6px",
                        border: "0px solid transparent",
                     
                        padding: "9px 13px",
                      }}
                    >
                      {options2.map((option) => (
                        <option style={{
                          padding: "10px 0px",
                          borderRadius: "6px",
                          border: "1px solid transparent",
                        }} value={option.value} key={Math.random()} >
                          {option.label}
                        
                        </option>
                      ))}
                    </select> */}
                    {/* <AppdropDown
                    options={options}
                    value={value}
                    border="0px  !important"
                    onChange={handleChange}
                    fontWeight={"500"}
                    fontSize={"18px"}
                    lineHeight={"28px"}
                    maxWidth={"100px"}
                    backgroundColor="white"
                  // margin={"0px 0px 0px 20px"}
                  /> */}
                  </Box>
                </Box>
                {/* ////---- */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    onClick={handleSwitch}
                    src={Downarraow}
                    alt={"imges"}
                    style={{ cursor: "pointer" }}
                  />
                  <img
                    onClick={handleSwitch}
                    src={UpArrow}
                    alt={"imges"}
                    style={{ cursor: "pointer" }}
                  />
                  <Typography className={classes.busd_1}>
                    1 <span className={classes.target_Busd}>{state.from.label}</span>={price} {state.into.label}
                  </Typography>
                </Box>
                <Box className={classes.BinanceBox2}>
                  <Box>
                    <Typography className={classes.Amount}>
                      Received Amount
                    </Typography>
                    <Typography className={classes.value}>100</Typography>
                  </Box>
                  <Box className={classes.logo_dropdown_Box2}>
                    {/* <img
                      src={euroflag}
                      alt={"imges"}
                      style={{ marginLeft: "15px" }}
                    /> */}
                    {/* <Searchbar2 /> */}
                    {/* <Select
                      sx={{
                        width: "200px",
                        margin: "0px 10px 0px 10px",
                        fontFamily: "Inter !important",
                        fontSize: "18px",
                        backgroundColor: "White !important",
                        lineHeight: "28px !important",
                        fontWeight: "500",
                      }}
                      variant="standard"
                      disableUnderline
                      value={into}
                      onChange={handleInto}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      MenuProps={MenuProps}
                    >
                      {
                        CashList.map((item) =>

                          <MenuItem style={{
                            fontSize: "16px",
                            marginLeft: "-5px",
                            // "&:hover": {
                            //   background: "rgba(0, 0, 0, 0.04)",
                            // },
                          }} className={classes.selectitem} value={item.value}  >
                            <img src={item.img} style={{
                              width: "24px", height: "24px", marginRight: "10px",
                              borderRadius: "100px"
                            }} />
                            {item.label}
                          </MenuItem>
                        )
                      }
                    </Select> */}
                    {val ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 300 }}
                        options={CashList}
                        value={into}
                        onChange={handleInto}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{
                              "& > img": { mr: 2, flexShrink: 0 },
                            }}
                            {...props}
                          >
                            <img
                              loading="lazy"
                              width="20"
                              style={{ cursor: "pointer" }}
                              src={option.img}
                              alt=""
                            />
                            <span style={{ fontSize: "12px" }}>
                              {option.label}
                            </span>
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            sx={{ cursor: "pointer" }}
                            {...params}
                            label={intoTag}
                            InputProps={{
                              ...params.InputProps,

                              startAdornment: into ? (
                                <Link to="" style={{ cursor: "pointer" }}>
                                  <InputAdornment
                                    disablePointerEvents
                                    position="start"
                                  >
                                    <img
                                      loading="lazy"
                                      width="20"
                                      src={into ? into.img : m1}
                                      alt=""
                                    />
                                  </InputAdornment>
                                </Link>
                              ) : null,
                            }}
                          />
                        )}
                      />
                    ) : (
                      <Autocomplete
                        sx={{ width: 300 }}
                        value={from}
                        onChange={handleFrom}
                        options={CurrencyList}
                        autoHighlight
                        // getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            <img
                              loading="lazy"
                              width="20"
                              style={{ cursor: "pointer" }}
                              src={option.img}
                              alt=""
                            />
                            <span style={{ fontSize: "12px" }}>
                              {option.label}
                            </span>
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={fromTag}
                            InputProps={{
                              ...params.InputProps,
                              startAdornment: value ? (
                                <InputAdornment
                                  disablePointerEvents
                                  position="start"
                                >
                                  <img
                                    loading="lazy"
                                    width="20"
                                    style={{ cursor: "pointer" }}
                                    src={from ? from.img : mu4}
                                    alt=""
                                  />
                                </InputAdornment>
                              ) : null,
                            }}
                          />
                        )}
                      />
                    )}

                    {/* <select
                      value={value}
                      style={{    
                        width: "100%",
                        maxWidth: "140px",
                        fontFamily: "Inter !important",
                        fontSize: "18px",
                        fontWeight: "500",
                        backgroundColor: "white",
                        lineHeight: "28px",
                        margin: "0px 5px 0px -0px",
                        borderRadius: "6px",
                        border: "0px solid transparent",
                     
                        padding: "9px 13px",
                      }}
                    >
                      {options2.map((option) => (
                        <option style={{
                          padding: "10px 0px",
                          borderRadius: "6px",
                          border: "1px solid transparent",
                        }} value={option.value} key={Math.random()} >
                          {option.label}
                        
                        </option>
                      ))}
                    </select> */}
                    {/* <AppdropDown
                    options={options}
                    value={value}
                    border="0px  !important"
                    onChange={handleChange}
                    fontWeight={"500"}
                    fontSize={"18px"}
                    lineHeight={"28px"}
                    maxWidth={"100px"}
                    backgroundColor="white"
                  // margin={"0px 0px 0px 20px"}
                  /> */}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <Box>
                    <Typography className={classes.Fee}>Fee</Typography>
                    <Typography className={classes.Fee}>
                      Transfer Time
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className={classes.same_text}>
                      +2.50 BUSD
                    </Typography>
                    <Typography align="right" className={classes.same_text}>
                      1 Min
                    </Typography>
                  </Box>
                </Box>
                <Divider
                  sx={{ marginBottom: "10px", border: "1px solid #6A6A6A" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <Box>
                    <Typography className={classes.Fee2}>
                      Total to pay
                    </Typography>
                    <Typography className={classes.Fee2}>
                      Recipient Gets
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className={classes.same_text}>
                      102.50 BUSD
                    </Typography>
                    <Typography align="right" className={classes.same_text}>
                      100.00 EUR
                    </Typography>
                  </Box>
                </Box>

                <AppButton
                  title={"Continue"}
                  backgroundColor={"black"}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  textTransform="none"
                  lineHeight={"28px"}
                  color={"white"}
                  padding={"15px"}
                  margin={"0px 0px 10px 0px"}
                  onClick={handleContinue}
                  boxShadow={
                    "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                  }
                />
                <AppButton
                  title={"Cancel"}
                  backgroundColor={"#FFFFFF"}
                  fontSize={"18px"}
                  textTransform="none"
                  fontWeight={"500"}
                  lineHeight={"28px"}
                  color={"#6A6A6A"}
                  padding={"15px"}
                  border={"1px solid #6A6A6A"}
                  boxShadow={
                    "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                  }
                />
              </Box>
            </Grid>
            {/* mobile screen grid */}
            <Grid item xs={12} sx={{ display: { xs: "block", sm: "none" } }}>
              <Box className={classes.Section_1_grid_2}>
                <Typography
                  sx={{ display: { xs: "flex", sm: "none" } }}
                  className={classes.useflash_para}
                >
                  Exchange your cryptocurrency vs cash or buy cryptocurrency
                  with cash form our approved partners. You can also send your
                  cryptocurrency vs fiat worldwide using a Binance account or
                  using your no-custodial wallet ( Flash wallet, Metamask,
                  Binance wallet, Trust wallet ...)
                </Typography>
                {/* <Typography
                  sx={{ display: { xs: "flex", sm: "flex" } }}
                  className={classes.useflash_para2}
                >
                  If you want to buy cryptocurrency with cash for yourself or someone else. You must yourself as the beneficiary or recipient and add the address of the receiving wallet of the crypto-currency in question in the beneficiary page (Address starts with 0x............ for Polygon, BNB Chain, Ethereum, Avax and unique address for Bitcoin).                </Typography> */}
                <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                  <AppButton
                    title={"Tutorial"}
                    backgroundColor={"#000"}
                    // fontSize={{xs:"12px",md:"18px"}}
                    fontWeight={"500"}
                    lineHeight={"28px"}
                    color={"#fff"}
                    maxWidth={"165px"}
                    textTransform="none"
                    height="62px"
                    padding={"21px 32px"}
                    borderRadius={"6px"}
                    boxShadow={
                      "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
                    }
                    startIcon={<img src={ytbtn} alt={"imges"} />}
                    className={classes.sec_1_btn_1}
                  />
                  <Box
                    sx={{
                      borderRadius: "6px",
                      border: "1px solid green",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0px 19px",
                      marginLeft: "16px",
                    }}
                  >
                    <img src={TrustPilot} alt={"imges"} height={"50px"} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* end home section 1  */}

        {/* Home section 2 */}
        <Grid container className={classes.text_card_box}>
          <Grid
            container
            sx={{
              transform: { lg: "scale(0.9)", xs: "scale(none)" },
              margin: {
                md: "50px 0px 0px 0px",
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <Grid
              item
              md={12}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography className={classes.trusted_partners}>
                Choose from our trusted partners
              </Typography>
              <Typography
                align="center"
                className={classes.trusted_Partners_Description}
              >
                We make sure your money is delivered quickly and easily. Choose
                from our network of trusted banks, cash pickup locations or
                mobile money.
              </Typography>
              <Grid
                container
                // rowGap={3}
                // columnGap={{ xs: 1, sm: 2.5, lg: 2.5 }}
                className={classes.setting_Cards_Cont}
                sx={{ display: "none" }}
              >
                {imgObject.map((value) => (
                  <Grid item xs={6} sm={2} lg={2}>
                    <Box>
                      <img
                        src={value.imgUrl}
                        alt={"imges"}
                        className={classes.trusted_P_Images}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container

          // className={classes.settings_cards_container}
          >
            <Grid
              container
              sx={{
                transform: "scale(0.9)",
                display: "flex",
                justifyContent: "center",
                flexDirection: { md: "row", lg: "row" },
                padding: { lg: "0px 30px", xs: "0px 10px" },
              }}
            >
              {imgObject.map((value, i) => (
                <Grid
                  sx={{ m: { lg: 2, xs: "", md: 2, sm: 2 } }}
                  item
                  xs={6}
                  sm={i === 9 ? 5.3 : i === 8 ? 5.3 : 2.5}
                  lg={2}
                >
                  <Box sx={{ display: { lg: "flex", xs: "none" } }}>
                    <img
                      src={value.imgUrl}
                      alt={"imges"}
                      className={classes.trusted_P_Images}
                    />
                  </Box>
                  <Box
                    sx={{
                      marginTop: "20px",
                      display: { lg: "none", xs: "flex" },
                    }}
                  >
                    <img
                      src={value.imgUrl}
                      alt={"imges"}
                      width="170"
                      height="80px"
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        {/* end home section 2  */}

        {/* Home section 3 */}
        <Grid
          container
          sx={{
            backgroundColor: "#F6FBFF",
          }}
        >
          <Grid
            container
            sx={{
              backgroundImage: {
                xs: `url(${Cardsbg3})`,
                // sm: `url(${Cardsbg2})`,
                lg: `url(${Cardsbg4})`,
              },

              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              // backgroundSize: { lg: "cover", xs: "cover", sm: "none" },
            }}
            className={classes.m_Container4}
          //  className={classes.sub_Container_3}
          >
            <Grid
              container
              sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" } }}
            >
              {cardData1.map((items) => (
                <Grid
                  item
                  xs={12}
                  sm={3.5}
                  md={4}
                  sx={{ marginTop: { lg: "0px", xs: "40px" } }}
                >
                  <Typography
                    sx={{
                      fontStyle: "normal !important",
                      fontFamily: "Inter !important",
                      fontWeight: "700 !important",
                      fontSize: "72px !important",
                      lineHeight: "76px !important",
                      textAlign: "center !important",
                      letterSpacing: "-0.02em !important",
                      color: "#2E2B26 !important",
                      marginBottom: "16px !important",
                    }}
                  // className={classes.c_Number}
                  >
                    {items.Number}
                  </Typography>
                  <Typography align="center" className={classes.cards_Title}>
                    {items.title}
                  </Typography>
                  <Typography
                    align="center"
                    className={classes.cards_Description}
                  >
                    {items.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        {/* end home section 3*/}

        {/* Home section 4 */}
        <Grid
          sx={{
            backgroundImage: `url(${whychoose})`,
            backgroundRepeat: "no-repeat",
            height: { lg: "640px", xl: "700px" },
            backgroundSize: "100%",
            backgroundColor: "black",
            backgroundPosition: "cover",
          }}
        >
          <Grid
            container
            sx={{
              transform: { lg: "scale(0.9)", xs: "scale(none)" },
            }}
            className={classes.m_Container_4}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography align="center" className={classes.chooses_Us}>
                  Why Choose Us
                </Typography>
                <Typography align="center" className={classes.c_Desc}>
                  Send & Receive money to your loved ones in minutes with great
                  rates and low fees. Over 180 countries and +200 currencies
                  supported.
                </Typography>
              </Grid>
              <AppCards cardsData={cardsData} />
            </Grid>
          </Grid>
        </Grid>
        {/* end Home section 4 */}

        {/* Home section 5 */}
        <Grid
          container
          sx={{
            transform: { lg: "scale(0.85)", xs: "scale(none)" },
          }}
        // className={classes.m_Container_5}
        >
          <Grid
            container
            md={12}
            xs={12}
            sx={{
              padding: {
                md: "60px 56px 56px",
                sm: "60px 112px 56px",
                xs: "20px 0px 20px",
              },
              columnGap: { sm: "20px", md: "50px", lg: "196px" },
              rowGap: "20px",
              justifyContent: "center",
              flexDirection: {
                // xs: "column-reverse",
                sm: "row-reverse",
                md: "row",
              },
            }}
          >
            <Grid
              item
              xs={11}
              sm={5}
              md={8}
              lg={5}
              sx={{ display: { lg: "none", xs: "flex" } }}
            >
              <img
                src={Patternimg}
                alt="image"
                width={"388px"}
                height={"288px"}
              />
            </Grid>
            <Grid
              item
              xs={11}
              sm={5}
              md={4}
              lg={4.5}
              xl={5}
              sx={{ transform: "scale(0.9)" }}
            >
              <Box sx={{ marginTop: { xs: "0px", lg: "60px" } }}>
                {" "}
                <Typography className={classes.fast_Secure}>
                  Fast, <span style={{ color: "#6A6A6A" }}>Secure</span> Money
                  Transfers
                </Typography>
                {AdvantageData.map((items) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "20px",
                    }}
                  // key={Math.random()}
                  >
                    <Box>
                      <img src={items.logo} alt={"imges"} />
                    </Box>
                    <Box sx={{ marginLeft: "24px" }}>
                      <Typography className={classes.advantages}>
                        {items.advantages}
                      </Typography>
                      <Typography className={classes.advantages_description}>
                        {items.advantages_description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid
              item
              xs={11}
              sm={5}
              md={8}
              lg={5.5}
              xl={5.3}
              sx={{
                display: { lg: "flex", xs: "none" },
                transform: "scale(0.9)",
              }}
            >
              <img
                src={Patternimg}
                alt="image"
                width={"560px"}
                height={"528px"}
              />
            </Grid>
          </Grid>
        </Grid>
        {/*end Home section 5 */}

        {/* Home section 8 */}
        <Grid
          container
          sx={{
            backgroundImage: `url(${StepsBg})`,

            backgroundRepeat: "no-repeat",
            // height: { lg: "640px", xl:"700px",},
            backgroundSize: "100%",
            // backgroundPosition: "cover",
          }}
          className={classes.m_Container_8}
        >
          <Grid
            sx={{
              transform: { lg: "scale(0.9)", xs: "scale(none)" },
            }}
            container
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter !important",
                  fontStyle: "normal !important",
                  fontWeight: "600 !important",
                  fontSize: "16px !important",
                  lineHeight: "24px !important",
                  textAlign: "center !important",
                  letterSpacing: " 0.025em !important",
                  textTransform: "uppercase !important",
                  color: "#5D5FEF !important",
                  marginBottom: "8px !important",
                }}
              // className={classes.how_Work}
              >
                How it works?
              </Typography>
              <Typography
                sx={{
                  fontsize: "Inter !important",
                  fontWeight: "800 !important",
                  fontSize: { lg: "36px !important", xs: "24px" },
                  lineHeight: { lg: "40px !important", xs: "29.05px" },
                  textAlign: "center !important",
                  letterSpacing: "-0.025em !important",
                  color: "#000000 !important",
                  marginBottom: { lg: "20px !important", xs: "4px" },
                }}
              // className={classes.Just_Few}
              >
                Just few steps to start
              </Typography>
              <Typography
                sx={{
                  fontsize: "Inter !important",
                  fontWeight: "400 !important",
                  fontSize: { lg: "20px !important", xs: "16px" },
                  lineHeight: { lg: "28px !important", xs: "24px" },
                  textAlign: "center !important",
                  color: "#979797 !important",
                  marginBottom: "48px !important",
                }}
              //  className={classes.three_Stp}
              >
                Its easiest as you think.Follow 3 easiest step
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  maxWidth: "122px",
                  position: "absolute",
                  top: " 40%",
                  left: "61%",
                  transform: "rotate(-6deg)",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <img
                  src={Up_right2}
                  alt={"imges"}
                  height="94px"
                  width={"100%"}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "122px",
                  position: "absolute",
                  top: " 40%",
                  left: "28%",
                  transform: "rotate(-6deg)",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <img
                  src={Up_right}
                  alt={"imges"}
                  height="94px"
                  width={"100%"}
                />
              </Box>
              <AppCards cardsData={cardsData3} />
            </Grid>
          </Grid>
        </Grid>
        {/*end Home section 8 */}

        {/* Home section 7 */}
        <Grid
          container
          sx={{
            transform: { lg: "scale(0.8)", xs: "scale(none)" },
          }}
          className={classes.main_Container_7}
        >
          <Grid
            container
            // columnGap={"2"}
            columnSpacing={{ md: 3 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              item
              sm={6}
              md={6}
              lg={6}
              xl={4}
              sx={{
                mt: { lg: "70px", xs: "10px" },
              }}
            >
              <Typography className={classes.world_First_Fast}>
                World First Fast &{" "}
                <span className={classes.Secure_color}>Secure</span> way to send
                Crypto to Fiat anywhere in the world
              </Typography>
              {/* <Typography className={classes.world_First_Fast_Description}>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </Typography> */}
              <Box sx={{ marginTop: "50px", display: "flex" }}>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "flex",
                      marginBottom: { md: "0px", xs: "0px", sm: "60px" },
                    },
                  }}
                >
                  <IconButton
                    sx={{
                      fontSize: "18px",
                      textTransform: "none",
                      fontWeight: "500",
                      maxWidth: "190px",
                      width: "190px",
                      fontFamily: "Inter !important",
                      lineHeight: "28px",
                      backgroundColor: "#000",
                      color: "#fff",
                      margin: "0px 0px 10px 0px",
                      borderRadius: "8px",
                      padding: "16px 25px",
                    }}
                  >
                    <Box>
                      <img
                        src={applestore}
                        style={{ marginTop: "0px", marginRight: "14px" }}
                      />
                    </Box>
                    Apple Store
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    marginBottom: { md: "0px", xs: "0px", sm: "40px" },
                    maxWidth: "190px",
                    marginLeft: "20px",
                    display: { xs: "none", sm: "flex" },
                  }}
                // className={classes.pS_Button_Container}
                >
                  <IconButton
                    sx={{
                      fontSize: "18px",
                      textTransform: "none",
                      fontWeight: "500",
                      maxWidth: "190px",
                      width: "190px",
                      fontFamily: "Inter !important",
                      lineHeight: "28px",
                      backgroundColor: "#000",
                      color: "#fff",
                      margin: "0px 0px 10px 0px",
                      borderRadius: "8px",
                      padding: "16px 25px",
                    }}
                  >
                    <Box>
                      <img
                        src={PlayStore}
                        style={{ marginTop: "3px", marginRight: "14px" }}
                      />
                    </Box>
                    Play Store
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              sm={6}
              md={6}
              lg={6}
              sx={{
                margin: "0px 0px -26px 0px",
                display: { xs: "none", md: "flex" },
                justifyContent: { md: "flex-end", lg: "flex-end" },
              }}
            >
              <Box
                sx={{
                  display: { lg: "flex" },
                  alignItems: { lg: "flex-end", xl: "flex-end" },
                  justifyContent: { md: "flex-end" },
                }}
              >
                {" "}
                <img
                  src={SmallMobile}
                  alt="image"
                  className={classes.small_Mobile_img}
                />
              </Box>
              <Box>
                <img
                  src={BigMobile}
                  alt="image"
                  className={classes.big_Mobile_img}
                />
              </Box>
            </Grid>
            <Grid
              item
              sm={6}
              md={6}
              lg={6}
              sx={{
                display: { xs: "flex", md: "none" },
                alignSelf: { sm: "center" },
                justifyContent: { sm: "flex-end" },
                flexDirection: { xs: "row-reverse", sm: "row" },
              }}
            >
              <Box sx={{ alignSelf: "flex-end" }}>
                <img
                  src={SmallMobile2}
                  alt="image"
                  className={classes.small_Mobile_img}
                />
              </Box>
              <Box sx={{ alignSelf: "flex-end" }}>
                <img
                  src={BigMobile2}
                  alt="image"
                  className={classes.big_Mobile_img}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: { sm: "none" } }}>
              <Box
                sx={{
                  transform: "scale(0.9)",
                  marginTop: "50px",
                  marginBottom: { md: "0px", xs: "30px" },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                  <IconButton
                    sx={{
                      fontSize: "18px",
                      textTransform: "none",
                      fontWeight: "500",
                      maxWidth: { lg: "190px", xs: "184px" },
                      width: { lg: "190px", xs: "184px" },
                      fontFamily: "Inter !important",
                      lineHeight: "28px",
                      backgroundColor: "#000",
                      color: "#fff",
                      margin: "0px 0px 10px -5px",
                      borderRadius: "8px",
                      padding: "16px 25px",
                    }}
                  >
                    <Box>
                      <img
                        src={applestore}
                        style={{ marginTop: "0px", marginRight: "14px" }}
                      />
                    </Box>
                    Apple Store
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    maxWidth: { lg: "190px", xs: "184px" },
                    marginLeft: { lg: "20px", xs: "10px" },
                    display: { xs: "flex", sm: "none" },
                  }}
                // className={classes.pS_Button_Container}
                >
                  <IconButton
                    sx={{
                      fontSize: "18px",
                      textTransform: "none",
                      fontWeight: "500",
                      maxWidth: { lg: "190px", xs: "184px" },
                      width: { lg: "190px", xs: "184px" },
                      fontFamily: "Inter !important",
                      lineHeight: "28px",
                      backgroundColor: "#000",
                      color: "#fff",
                      margin: "0px 0px 10px 0px",
                      borderRadius: "8px",
                      padding: "16px 25px",
                    }}
                  >
                    <Box>
                      <img
                        src={PlayStore}
                        style={{ marginTop: "3px", marginRight: "14px" }}
                      />
                    </Box>
                    Play Store
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/*end Home section 7 */}

        {/* Home section 6 */}
        <Grid container className={classes.Main_container_6}>
          <Grid
            container
            sx={{
              transform: { lg: "scale(0.9)", xs: "scale(none)" },
            }}
          >
            <Grid item xs={12}>
              <Typography className={classes.frequently_ask_question}>
                Frequently asked questions
              </Typography>
              <Grid container columnGap={5} rowGap={5} justifyContent="center">
                {QuestionsAnswers.map((i) => (
                  <Grid item sm={5} md={3.5}>
                    <Typography className={classes.Questions}>
                      {i.questions}
                    </Typography>
                    <Typography className={classes.Answers}>
                      {i.Answers}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: "#F7FDFF" }}>
          <Grid
            item
            xs={12}
            sx={{
              padding: { lg: "56px", xs: "20px 10px 50px 10px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transform: { lg: "scale(0.9)", xs: "scale(none)" },
            }}
          >
            <Box sx={{ display: { lg: "flex", xs: "none" } }}>
              <img src={Slidermain} />
            </Box>
            <Box sx={{ display: { lg: "none", xs: "flex" } }}>
              <img src={Slidermain} width="160px" height="44.5px" />
            </Box>
            <Typography
              sx={{
                marginTop: "20px",

                fontFamily: "Inter !important",
                fontWeight: "600 !important",
                fontSize: "16px !important",
                lineHeight: "24px !important",
                letterSpacing: "0.025em !important",
                color: "black",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              {/* <a href="https://widgets-trustboxinstructions.b2b.trustpilot.com/#/trustbox/eyJjb2RlSGVhZCI6IjwhLS0gVHJ1c3RCb3ggc2NyaXB0IC0tPlxuPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiLy93aWRnZXQudHJ1c3RwaWxvdC5jb20vYm9vdHN0cmFwL3Y1L3RwLndpZGdldC5ib290c3RyYXAubWluLmpzXCIgYXN5bmM%252BPC9zY3JpcHQ%252BXG48IS0tIEVuZCBUcnVzdEJveCBzY3JpcHQgLS0%252BIiwiY29kZUJvZHkiOiI8IS0tIFRydXN0Qm94IHdpZGdldCAtIE1pY3JvIFJldmlldyBDb3VudCAtLT5cbjxkaXYgY2xhc3M9XCJ0cnVzdHBpbG90LXdpZGdldFwiIGRhdGEtbG9jYWxlPVwiZW4tR0JcIiBkYXRhLXRlbXBsYXRlLWlkPVwiNTQxOWI2YThiMGQwNGEwNzY0NDZhOWFkXCIgZGF0YS1idXNpbmVzc3VuaXQtaWQ9XCI2MzQ2ZDI0OTcwNjdlNWU1ZjJiMWM1ZDZcIiBkYXRhLXN0eWxlLWhlaWdodD1cIjIwcHhcIiBkYXRhLXN0eWxlLXdpZHRoPVwiMTAwJVwiIGRhdGEtdGhlbWU9XCJsaWdodFwiIGRhdGEtbWluLXJldmlldy1jb3VudD1cIjBcIiBkYXRhLXN0eWxlLWFsaWdubWVudD1cImNlbnRlclwiPlxuICA8YSBocmVmPVwiaHR0cHM6Ly91ay50cnVzdHBpbG90LmNvbS9yZXZpZXcvZmxhc2gtdGVjaG5vbG9naWVzLm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI%252BVHJ1c3RwaWxvdDwvYT5cbjwvZGl2PlxuPCEtLSBFbmQgVHJ1c3RCb3ggd2lkZ2V0IC0tPiIsInRydXN0Qm94TmFtZSI6Ik1pY3JvIFJldmlldyBDb3VudCIsImxvY2FsZSI6ImVuLUdCIn0%253D"
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
              > */}
              See our reviews on Trustpilot
              {/* </a> */}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter !important",
                fontWeight: "800 !important",
                fontSize: { lg: "36px !important", xs: "14px" },
                lineHeight: { lg: "40px !important", xs: "29..5" },
                letterSpacing: { lg: "-0.5% !important", xs: "0%" },
                color: "black",
                marginBottom: "20px",
              }}
            >
              What our customers says
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter !important",
                fontWeight: "400 !important",
                fontSize: "20px !important",
                lineHeight: "28px !important",
                letterSpacing: "-0.5% !important",
                color: "#979797",
                marginBottom: { lg: "-84px", xs: "-50px" },
              }}
            >
              Happy Users
            </Typography>
            <Grid></Grid>
          </Grid>
        </Grid>
        <Box sx={{ backgroundColor: "#F7FDFF" }}>
          <Btnslider />
        </Box>

        {/* <Grid container className={classes.Main_container_7}>
        <Grid container>
          <Grid item xs={12}>
            <Slider {...settings}>
              <div>
              <AppCards cardsData={cardsData} />
              </div>
              <div>
              <AppCards cardsData={cardsData} />
              </div>
            </Slider>
          </Grid>
        </Grid>
      </Grid>

      {/*end Home section 6 */}

        {/* <AppFooter /> */}
      </Layout>
    </>
  );
};

export default Home;

// const menu1 = [
//   {
//     title: "name1",
//     //   logo: BUSDlogo,
//   },
//   {
//     title: "arif",
//     //   logo: BUSDlogo,
//   },
//   {
//     title: "name2",
//     //   logo: BUSDlogo,
//   },
//   {
//     title: "name3",
//     //   logo: BUSDlogo,
//   },

//   {
//     title: "sarif",
//     //   logo: BUSDlogo,
//   },
//   {
//     title: "kanez",
//     //   logo: BUSDlogo,
//   },
// ];
