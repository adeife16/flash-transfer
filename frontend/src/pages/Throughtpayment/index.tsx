import { Grid, TextField, Typography ,MenuItem,Select,SelectChangeEvent} from "@mui/material";
import React, { useMemo, useState } from "react";
import CommonNav from "../../components/CommonNav";
import Layout from "../../components/Layout";

import MiniHeader from "../../components/MiniHeader";
import right from "../../assests/Images/blueright.png";
import right2 from "../../assests/Images/blueright2.png";
import three from "../../assests/Images/three.png";
import carve from "../../assests/Images/carve.png";
import updown from "../../assests/Images/updown.png";
import "../../font.css/index.css"
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import two from "../../assests/Images/two.png";

import Footer from "../../components/AppFooter";
import { useStyles } from "../../Styles";
import flag from "../../assests/Images/americanflag.png";
import BtnWallet from "../../assests/Logo/BtnWallet.svg";


import flashwallet from "../../assests/Images/flashwallet.png";
import walletconnet from "../../assests/Images/walletconnect.png";
import meta from "../../assests/Images/meta.png";
import trust from "../../assests/Images/trust.png";

import female from "../../assests/Images/female.png";
import walet from "../../assests/Images/walet.png";
import sett from "../../assests/Images/sett.png";
import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import Bicon from "../../assests/Images/Bicon.png";


import running from "../../assests/Images/running.png";
import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import { Box } from "@mui/system";
import TabHeader from "../../components/TabHeader";
import AppButton from "../../components/AppButton";
import Tabh from "../../components/TabhCard";
import { Link, useNavigate } from "react-router-dom";
import { useWallet } from '../../Context/wallet_context';
import { toast } from 'react-toastify';

import BUSDlogo from "../../assests/Logo/BUSDlogo.svg";
import Binanceimg from "../../assests/Images/Binanceimg.svg";
import { ITokenTypes, TokenList, IToken, curTokenAddress } from './constant';
import { useWeb3React } from '@web3-react/core';
import { DEFAULT_NETWORK } from "../../constants/chains";
import useUSDPirce from "../../hooks/usePrice";
import useTransferFee from "../../hooks/useTransferFee";
import UseSendTokens from '../../hooks/useSendTokens';
import useTokenPrice from "../../hooks/useTokenPrice";
import useActiveWeb3React from '../../hooks/useActiveWeb3React';
import { getshortWalletAddress } from "../../utils";
import {useEffect} from 'react';

const ReviewandDetail = () => {
  
  const { chainId} = useWeb3React();
  const classes = useStyles();
  const {account,connect,disconnect} = useWallet();
  const [age, setAge] = React.useState('');
  const [network,setNetwork] = React.useState(" ");
  const [curAmount,setCurAmount ] = useState<number>(0);
  
  const tokenPrice = useTokenPrice(age);
  const usdPrice = useUSDPirce(curAmount,age);
  
  const TransferFee = useTransferFee(curAmount,age);
  const curAdddress  = curTokenAddress(age,chainId!);
  // const SendToken = UseSendTokens(curAmount,age,TransferFee,curAdddress);
  

  const handleChange = (event: SelectChangeEvent) => {
    const _age = event.target.value.split("-")[0];
    const _network = event.target.value.split("-")[1];
    setAge(_age);
    setNetwork(_network);
  };
  const {walletType} = useWallet();
  
  const tokenList= useMemo(()=>{
      if(account && chainId){
        return TokenList[DEFAULT_NETWORK || chainId];
      }
  },[chainId])
  useEffect(()=>{
    if(tokenList && tokenList?.length>0){
      setAge("BUSD");
      setNetwork("Binance");
    }
  },[tokenList])
  const connectMetamask =()=>{
    if(account){
      toast.warning("you are connected now!");
    }else{
      connect("METAMASK");
    }
  }
  const connectWallet =()=>{
    if(account){
      toast.warning("you are connected now!");
    }else{
      connect("WALLET_CONNECT");
    }
  }
  const connectTrustWallet = ()=>{
    if(account){
      toast.warning("you are connected now!");
      return;
    }else{
      connect("TRUST_CONNECT");
    }
  }
  const navigate = useNavigate();
  const handleNextPage = ()=>{
    const tokenName = age;
    const tokenAmount = curAmount;
    if(tokenName ===""){
      toast.warning("Please select token type!");
      return;
    }
    if(tokenAmount ===0){
      toast.warning("Please input amount of token correctly");
      return;
    }
    const tokenStr = tokenName !==""?"/"+tokenName:"/any";
    const amountStr = tokenAmount !==0?"/"+tokenAmount:"/0";
    navigate("/frame"+tokenStr+amountStr)
  }
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
        {/* <TabHeader /> */}

        <Grid
          container
          sx={{
            display: "flex",
            backgroundColor: "#F7FDFF",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            md={10.8}
            xs={12}
            sx={{
              transform: { lg: "scale(0.9)", xs: "scale(none)" },
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <Grid item md={4} xs={12} sx={{ padding: { lg: "11px 11px", xs: " 0px 20px" }, pb: { lg: "0px", xs: "0px" }, marginTop: { lg: "56px", xs: "13px" }, }}>
              <Typography className={classes.Review}>Choose Wallet </Typography>
              <Typography sx={{ width: { md: "95%", xs: "100%" } }} className={classes.Review_para}>
             
              Choose your non-custodial wallet if you are not already connected
              </ Typography>
              {account&&<Box sx={{ margin: { lg: "47.64px 0px 0px 0px", xs: "20px 0px 0px 0px" },display:"flex" }}>

                <AppButton
                  textTransform="none"
                  title={getshortWalletAddress(account)}
                  backgroundColor={"#5D5FEF"}
                  color={"#fff"}
                  height="60px"
                  padding={"16px 16px"}
                  maxWidth={"197px"}
                />

                <AppButton
                  textTransform="none"
                  title={"Disconnect"}
                  backgroundColor={"#FFE1E1"}
                  color={"#fff"}
                  height="60px"
                  padding={"16px 16px"}
                  maxWidth={"197px"}
                  onClick={disconnect}
                />
              </Box>}

            </Grid>
            <Grid item
              md={8}
              xs={12} sx={{ mt: { lg: "70px", xs: "43px" }, display: "flex", flexDirection: "column" }}>
              <Box sx={{ padding: "0px 20px 0px 20px" }}>
                <Typography className={classes.all_a}>All Accounts</Typography>
              </Box>
              <Box
                sx={{ mt: { md: "22px", xs: "20px" }, marginBottom: { lg: "24px", xs: "20px" }, borderRadius: "6px" }}
                className={classes.error_container1}
              >
                <Typography className={classes.error_name}>
                  <ReportGmailerrorredIcon className={classes.warning_icon} />
                  Select Wallet First
                </Typography>
              </Box>
              <Grid container sx={{ transform: { lg: "scale(0.95)", xs: "scale(0.9)" } }} columnSpacing={2} rowSpacing={2}>

                <Grid item md={6} xs={6} >
                  <Box sx={{
                    display: "flex", borderRadius: "12px", flexDirection: "column", justifyContent: "center", alignItems: "center",border: `1px solid ${walletType==="FLASH_WALLET"?"#2473e9":"#0000001A"}`, height: "150px", backgroundColor: "white"
                  }}>


                    <img src={flashwallet} />
                    <Typography>
                      Flash Wallet
                    </Typography>
                  </Box >
                  {/* </Grid> */}

                </Grid>
                <Grid item md={6} xs={6} >
                 <a onClick={connectMetamask} style={{cursor:"pointer"}} >
                  <Box sx={{
                    display: "flex", borderRadius: "12px", flexDirection: "column", justifyContent: "center", alignItems: "center",border: `1px solid ${walletType==="METAMASK"?"#2473e9":"#0000001A"}`, height: "150px", backgroundColor: "white"
                  }}
                 
                  >


                    <img src={meta} />
                    <Typography>
                      Metamask
                    </Typography>
                  </Box >
                  </a>
                 
                  {/* </Grid> */}

                </Grid>
                
                  <Grid item md={6} xs={6} >
                  <a onClick={connectTrustWallet}>
                    <Box sx={{
                      display: "flex",
                      borderRadius: "12px", flexDirection: "column", justifyContent: "center", alignItems: "center", border: `1px solid ${walletType==="TRUST_CONNECT"?"#2473e9":"#0000001A"} `, height: "150px", backgroundColor: "white"
                    }}>


                      <img src={trust} />
                      <Typography>
                        Trust Wallet
                      </Typography>
                    </Box >
                    {/* </Grid> */}
                    </a>
                  </Grid>
                
               
                <Grid item md={6} xs={6} >
                <a onClick={connectWallet}>
                  <Box sx={{
                    display: "flex", borderRadius: "12px", flexDirection: "column", justifyContent: "center", alignItems: "center",border: `1px solid ${walletType==="WALLET_CONNECT"?"#2473e9":"#0000001A"}`, height: "150px", backgroundColor: "white"
                  }}>


                    <img src={walletconnet} />
                    <Typography>
                      Wallet Connect
                    </Typography>
                  </Box >
                  {/* </Grid> */}
                  </a>
                </Grid>
                  
              </Grid>
              <Grid>
                <Box
                  sx={{ mt: { md: "40px", xs: "20px" }, marginBottom: { lg: "24px", xs: "20px" }, borderRadius: "6px" }}
                  className={classes.error_container1}
                >
                  <Typography className={classes.error_name}>
                    <ReportGmailerrorredIcon className={classes.warning_icon} />
                    Select Token First
                  </Typography>
                </Box>
              </Grid>

              <Grid

                item
                md={12}
                xs={12}
                sx={{
                  // marginBottom:{lg:"0px",xs:"-10"},
                  // height: "1,108px",
                  margin: { lg: "4px 20px 196px 20px", xs: "0px 0px 0px 0px", },
                  padding: "0px 15px",
                  backgroundColor: "#ffff",
                }}
              >

                <Box mt="4px">
                  <Box sx={{ padding: "10px 0px 0px 0px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Inter !important",
                        fontSize: "14px !important",
                        fontWeight: "500 !important",
                        lineHeight: "20px !important",
                        marginBottom: "4px",

                      }}
                    >
                      Choose Crypto Token
                    </Typography>
                    <Box sx={{
                      border: "1px solid #D1D5DB",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      padding: "9px 13px !important",
                    }}>

                      {/* <Box>
                        <img src={Bicon} />
                      </Box> */}
                      {/* <TextField
                        sx={{
                          // marginTop: "9px",
                          // width: { md: "710px", xs: "330px" },
                          backgroundColor: "white",
                          textAlign: "center",
                          padding: "0px 12px !important",
                          // height: "42px",
                        }}
                        placeholder="Bitcoin (BTC)"
                        // disableUnderline={true}
                        variant="standard"
                        fullWidth
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                       */}
                       <Select
                      sx={{
                        width: "100%",
                        margin: "0px 10px 0px 10px",
                        fontFamily: "Inter !important",
                        fontSize: "18px",
                        // display:"flex",
                        // flexWrap:"wrap",
                        lineHeight: "28px !important",
                        fontWeight: "500",
                      }}
                      variant="standard"
                      disableUnderline
                      value={age+"-"+network}
                      onChange={(e)=>handleChange(e)}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      
                    >
                      {
                        tokenList?.length&&tokenList?.map((item:IToken,index:any)=>{
                          return ( <MenuItem key={index}
                            className={classes.selectitem} value={item.value+"-"+item.network} >
                            < img src={item.img} style={{ marginRight: "10px" }} />
                            {item.value}
    
                          </MenuItem>)
                        })
                      }
                      {/* <MenuItem
                        className={classes.selectitem} value="" >
                        < img src={BUSDlogo} style={{ marginRight: "10px" }} />
                        BUSD

                      </MenuItem>
                      <MenuItem
                        className={classes.selectitem} value={1} >
                        < img src={mu1} style={{ marginRight: "10px" }} />
                        FLASH
                      </MenuItem>


                      <MenuItem value={2} className={classes.selectitem}>       <img src={mu2} style={{ marginRight: "10px" }} />  BNB</MenuItem>
                      <MenuItem value={3} className={classes.selectitem}>   <img src={mu3} style={{ marginRight: "10px" }} /> MATIC</MenuItem>
                      <MenuItem value={4} className={classes.selectitem}>   <img src={mu4} style={{ marginRight: "10px" }} /> USDT</MenuItem>
                      <MenuItem value={5} className={classes.selectitem}>       <img src={mu5} style={{ marginRight: "10px" }} />  DAI</MenuItem>
                      <MenuItem value={6} className={classes.selectitem}>   <img src={mu6} style={{ marginRight: "10px" }} /> ETHEREUM</MenuItem>
                      <MenuItem value={7} className={classes.selectitem}>   <img src={mu7} style={{ marginRight: "10px" }} /> PAX GOLD</MenuItem>
                      <MenuItem value={8} className={classes.selectitem}>       <img src={mu8} style={{ marginRight: "10px" }} />  BITCOIN</MenuItem>
                      <MenuItem value={9} className={classes.selectitem}>   <img src={mu9} style={{ marginRight: "10px" }} /> LUNC</MenuItem>
                      <MenuItem value={10} className={classes.selectitem}>   <img src={mu10} style={{ marginRight: "10px" }} /> SHIBA INU</MenuItem>
                      <MenuItem value={11} className={classes.selectitem}>   <img src={mu11} style={{ marginRight: "10px" }} /> DOGECOIN</MenuItem> */}

                    </Select>
                      {/* <Box>

                        <img src={updown} />
                      </Box> */}
                    </Box>
                  </Box>
                  <Box sx={{ padding: "10px 0px 0px 0px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Inter !important",
                        fontSize: "14px !important",
                        fontWeight: "500 !important",
                        lineHeight: "20px !important",
                        marginBottom: "4px",
                      }}
                    >
                      Add Amount
                    </Typography>
                    <Box sx={{
                      border: "1px solid #D1D5DB",
                      borderRadius: "6px",
                      display: "flex",
                      width: { lg: "50%", xs: "100%" },
                      alignItems: "center",
                      flexDirection: "row",
                      padding: "9px 13px !important",
                    }}>


                      <TextField
                        sx={{
                          // marginTop: "3px",
                          // width: { md: "710px", xs: "330px" },
                          backgroundColor: "white",
                          textAlign: "center",
                          // padding: "0px 13px !important",
                          // height: "38px",
                        }}
                        placeholder="0,0050 BTC = 100 $"
                        // disableUnderline={true}
                        variant="standard"
                        fullWidth
                        InputProps={{
                          disableUnderline: true,
                        }}
                        onChange={(e:any)=>setCurAmount(parseFloat(e.target.value))}
                      />
                      {/* <Box>

                        <img src={updown} />
                      </Box> */}
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px 10px 0px 10px",
                    margin: { lg: "48px 0px 40px 0px", xs: "20px 0px 40px 0px" },
                  }}
                >
                  <Box>
                    <Typography className={classes.transaction}>
                      You Sent
                    </Typography>
                    <Typography className={classes.transaction}>
                      Blockchain
                    </Typography>{" "}
                    <Typography className={classes.transaction}>
                      Transfer Rate
                    </Typography>{" "}
                    <Box sx={{ marginTop: { md: "43px", xs: "0px" }, display: { lg: "flex", xs: "none" }, flexDirection: "column" }}>

                      <Typography className={classes.transaction}>Fee</Typography>{" "}
                      <Typography className={classes.transaction}>
                        Transfer Time
                      </Typography>
                    </Box>
                    <Box sx={{ marginTop: { md: "43px", xs: "0px" }, display: { lg: "flex", xs: "none" }, flexDirection: "column" }}>

                      <Typography className={classes.transaction_Link}>
                        Recipient Gets
                      </Typography>
                      <Typography className={classes.transaction_Link}>
                        Total to pay
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography align="right" className={classes.Prices}>{curAmount?curAmount:0} {age} = {usdPrice}$</Typography>
                    <Typography align="right" className={classes.Prices}>
                      {network}
                    </Typography>{" "}
                    <Typography align="right" className={classes.Prices}>
                      0,000050 = 1 $
                    </Typography>
                    <Box sx={{ marginTop: { md: "43px", xs: "0px" }, display: { lg: "flex", xs: "none" }, flexDirection: "column" }}>

                      <Typography align="right" className={classes.Prices}>+ ${(TransferFee*tokenPrice).toFixed(4)}</Typography>{" "}
                      <Typography align="right" className={classes.Prices}>1 Min</Typography>{" "}
                    </Box>
                    <Box sx={{ marginTop: { md: "43px", xs: "0px" }, display: { lg: "flex", xs: "none" }, flexDirection: "column" }}>

                      <Typography align="right" className={classes.Prices}>${usdPrice}</Typography>
                      <Typography align="right" className={classes.Prices}>
                        <span style={{ color: "#FF0000" }}>
                        {curAmount?curAmount:0}  {age}
                        </span>
                        = ${(usdPrice + TransferFee*tokenPrice).toFixed(4)}</Typography>{" "}
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ marginTop: "32px", backgroundColor: { lg: "#F7FDFF", xs: "white" }, margin: { lg: "0px -20px", xs: "0px 0px" }, padding: { lg: "40px 20px 0px 0px", xs: "10px 10px 10px 0px" } }}>
                  <Box
                    sx={{
                      // height: "62px",
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                      flexDirection: "row",
                      // marginTop: "56px",
                    }}
                  >
                    <Link to="/addnewtwo" style={{ textDecoration: "none", }}>

                      <Box sx={{ marginRight: { md: "10px", xs: "10px" }, width: "142px" }}>
                      <AppButton
                        title={"Cancel"}
                        color={"#FFFFFF"}
                        textTransform="none"
                        maxWidth={"142px"}
                        width={"142px"}
                        backgroundColor={"#6A6A6A"}
                        // padding={"9px 10px"}
                        fontSize={"14px"}
                        fontWeight={"500"}
                        lineHeight={"20px"}
                        border="1px solid #6A6A6A"
                        borderRadius="6px"
                        height="38px"
                        // endIcon={<ArrowForwardIcon />}
                        margin={"0px 0px 0px 10px"}
                        />
                        </Box>
                    </Link>
                    <a onClick={()=>{handleNextPage()}}  style={{ textDecoration: "none", width: "142px" }}>


                        <AppButton
                          textTransform="none"
                          title={"Continue"}
                          color={"#FFFFFF"}
                          maxWidth="142px"
                          width="100%"
                          backgroundColor={"#5D5FEF"}
                          // padding={"9px 15px"}
                          fontSize={"14px"}
                          fontWeight={"500"}
                          lineHeight={"20px"}
                          height="38px"
                          borderRadius="6px"
                          // endIcon={<ArrowForwardIcon />}
                          margin={"0px 0px 0px 10px"}
                        />
                    </a>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid>
        <Footer />
      </Grid> */}

      </Layout>

    </>
  );
};

export default ReviewandDetail;
//
