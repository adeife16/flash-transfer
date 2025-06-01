import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import close from "../../assests/Images/close.png";
import four from "../../assests/Images/4icons.png";
import BUSDlogo from "../../assests/Logo/BUSDlogo.svg";
import "../../font.css/index.css"

import priceimg2 from "../../assests/Images/btnlist.png";
import B from "../../assests/Images/btnB.png";
import ModalPriceone from "../../components/ModalPriceone";

import D from "../../assests/Images/Darrow.png";
import X from "../../assests/Images/Clam.png";

import { Link } from "react-router-dom";
import AppButton from "../AppButton";
import { IconButton, MenuItem, Select, SelectChangeEvent, TextField, InputAdornment } from '@mui/material';
import useChainInfo from '../../hooks/useChainInfo';
import useActiveWeb3React from '../../hooks/useActiveWeb3React';
import { getshortWalletAddress, formatEther, getSigner } from '../../utils/index';
import { useState, useEffect, useCallback } from 'react';
import { ZAPPER_KEY } from "../../constants";
import { isAddress } from "ethers/lib/utils";
import useTokenList, { IToken } from '../../hooks/useTokenList';
import { toast } from 'react-toastify';
import { sendToken, walletsendToken } from '../../contract/index';
import { ethers } from "ethers";
import { SupportedChainId } from '../../constants/chains';
import { useTokenContract } from '../../hooks/useContract';
export interface AppProps {
  menuicon?: any;
  name?: any;
  namesize?: any;
  priceimg1?: any;

}
export default function Modal4({ menuicon, name, namesize, priceimg1 }: AppProps) {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(true);
  const [balance, setBalance] = useState<number>(0);
  const [curToken, setCurToken] = useState<string>("");
  const [toAddress, setToAddress] = useState<string>("");
  const [showAmountPage, setShowAmountPage] = useState<boolean>(false);
  const [sendAmount, setSendAmount] = useState<number>(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false); setShowAmountPage(false); setToAddress(""); setSendAmount(0) };

  const { account, library, chainId } = useActiveWeb3React();
  const isMainNet = chainId === SupportedChainId.MAINNET;
  const { chain, icon } = useChainInfo();
  const tokenList = useTokenList();

  const handleChange = (event: SelectChangeEvent) => {
    setCurToken(event.target.value as string);
  }

  const sendFunction = useCallback(async () => {
    if (showAmountPage) {  // case send token
      if (!isAddress(toAddress)) {
        toast.warning("Please input correct Address!");
        return;
      }

      if (!account) {
        toast.warning("Please connect wallet to send token!");
        return;
      }
      if (!library) {
        toast.warning("Invalid provider!");
        return;
      }
      const signer = getSigner(library, account);
      if (isMainNet) { // check if network  is mainnet
        if (curToken === "") {
          toast.warning("Please select correct token!");
          return;
        }
        if (tokenList.length === 0) {
          toast.warning("There is no token to send!");
          return;
        }
        const token = getTokenInfo(curToken, tokenList);
        const _tokenAddress = token?.tokenAddress;
        if (token?.tokenAmountFix && sendAmount > parseFloat(token?.tokenAmountFix)) {
          toast.warn("Insufficient balance.");
          return;
        }
        if (token?.tokenAddress === "0x0000000000000000000000000000000000000000") { // send bnb

          console.log("curToken", token, "amount:", sendAmount, "address:", toAddress, "signer:", signer);
          const tx = await signer.sendTransaction({
            to: toAddress,
            value: ethers.utils.parseEther(sendAmount.toString())
          })
          const recept = await tx.wait();
          handleClose();
        } else { // send token
          await walletsendToken(token?.tokenAddress!, sendAmount, library);
          handleClose();
        }
      } else {//case testnet
        // send bnb
        const tx = await signer.sendTransaction({
          to: toAddress,
          value: ethers.utils.parseEther(sendAmount.toString())
        })
        const recept = await tx.wait();
        handleClose();
      }
    } else {  // case next page
      if (!isAddress(toAddress)) {
        toast.warning("Please input correct Address!");
        return;
      }
      if (curToken === "" && isMainNet) {
        toast.warning("Please select correct token!");
        return;
      }

      setShowAmountPage(true);
    }
  }, [toAddress, showAmountPage, curToken, chain, account, tokenList, sendAmount, library, isMainNet])

  const getTokenInfo = (tSymbol: string, tokenList: Array<IToken>): IToken | undefined => {
    return tokenList.find((c: IToken) => {
      return c.symbol === tSymbol
    })
  }
  useEffect(() => {
    setShowAmountPage(false);
  }, [])

  useEffect(() => {
    const getBalacne = async (account: string) => {
      const result = await library?.getBalance(account);
      const balStr = formatEther(result!);
      setBalance(parseFloat(parseFloat(balStr).toFixed(3)))
      // setBalance(result!);
    }
    if (account && library) {
      getBalacne(account);
    }
  }, [account, library])

  return (
    <div>
      <Box>
        <Box sx={{ display: "flex", padding: "0px 30px 0px 30px", height: "56px", width: "190px", flexDirection: "row", borderRadius: "8px", backgroundColor: "#5D5FEF", alignItems: "center", }}>
          <Box sx={{ marginTop: "15px", }}>

            <img
              src={priceimg1}
              alt="image"
            />

            {priceimg2 ?
              <ModalPriceone
                menuicon={
                  <img
                    src={priceimg2}
                    alt="image"
                    style={{ marginTop: "-15px", width: "20px", height: "8px", marginRight: "-10px", marginBottom: "0px", marginLeft: "-1px" }}
                  />
                }
              />
              : null}
          </Box>
          <AppButton
            fontSize={namesize ? namesize : "24px"}
            title={name}
            color={"#FFFFFF"}
            width="117px"
            backgroundColor={"#5D5FEF"}
            borderRadius={"8px"}
            // height="56px"
            margin={"-5px 0px 0px 0px"}
            textTransform={"none"}
            boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}
            fontWeight={"700px"}
            lineHeight={"32px"}
            onClick={handleOpen}

          />
        </Box>
      </Box>
      {/* <AppButton
                fontSize={namesize ? namesize : "24px"}
                title={name}
                color={"#FFFFFF"}
                width="117px"
                backgroundColor={"#5D5FEF"}
                borderRadius={"8px"}
                height="56px"
                padding="13px 19px"
                textTransform={"none"}
                boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}
                fontWeight={"700px"}
                lineHeight={"32px"}
                onClick={handleOpen}
                startIcon={
                  // {priceimg1?
                    
                  <img
                  src={priceimg1}
                  alt="image"
                />
                }

                /> */}

      {/* // <IconButton onClick={handleOpen} >
      //   {menuicon}
      // </IconButton> */}
      <Modal
        aria-labelledby="transition-modal-title"
        open={open}
        BackdropComponent={Backdrop}
        onClick={handleClose}
        // hideBackdrop={true}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,

        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              cursor: "pointer",
              position: "absolute",
              top: { md: "39px", xs: "38%", },
              left: { md: "55%", xs: "50%", xl: "57%" },
              transform: "translate(-50%, 0%)",

            }}
          >
            <Box sx={{
              transform: "scale(0.85)",
              width: { md: "412px", xs: "370px" },
              height: { md: "auto", xs: "480px" },
              bgcolor: "background.paper",
              boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.15) ",
              padding: "0px 30px 20px 30px",
              // display: "flex",
              // flexDirection: "row-reverse",
              borderRadius: "14px",
            }}>


              <Box sx={{
                display: { lg: "flex", md: "flex", xs: "none" },
                justifyContent: "end"
              }}
              >
                <Button
                  onClick={handleClose}
                  endIcon={
                    <img
                      src={close}
                      style={{ marginTop: "22px" }}
                    />
                  }
                />
              </Box>

              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{
                  display: { lg: "flex", xs: "none" },
                  fontWeight: "700  !important",
                  fontSize: "24px  !important",
                  lineHeight: "32px  !important",
                  fontFamily: "Inter !important",
                  textAlign: "center"
                }}>
                  Wallet
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  {
                    icon === "binance" ?
                      <img src={B} width={40} height={40} /> :
                      <img src={icon} width={40} height={40} />
                  }

                  <Typography sx={{
                    ml: "10px",
                    fontWeight: "700  !important",
                    fontSize: "24px  !important",
                    lineHeight: "32px  !important",
                    fontFamily: "Inter !important",
                    textAlign: "center"
                  }}>

                    {chain ? chain.name : ""}
                  </Typography>
                </Box>
                <Box sx={{ opacity: "0.2", m: "16px 0px 8px 0px", width: "362px", borderTop: "1px solid #6A6A6A" }}>

                </Box>
                <Typography sx={{
                  fontWeight: "800  !important",
                  fontSize: "48px  !important",
                  lineHeight: "60px  !important",
                  fontFamily: "Inter !important",
                  textAlign: "center"
                }}>
                  {balance} $
                </Typography>
                <Typography sx={{
                  fontWeight: "500  !important",
                  fontSize: "18px  !important",
                  lineHeight: "28px  !important",
                  fontFamily: "Inter !important",
                  textAlign: "center",
                  color: "#6A6A6A"
                }}>
                  {account && getshortWalletAddress(account)}
                </Typography>
                <Box sx={{ opacity: "0.2", mt: "8px", width: "362px", borderTop: "1px solid #6A6A6A" }}>
                </Box>
                <Box mt="23px">

                  <img src={four} />
                </Box>
                {
                  !showAmountPage ? (
                    <>
                      {isMainNet && <Box sx={{
                        height: "77px",
                        padding: "9px 13px",
                        width: "362px",
                        border: "1px solid #D1D5DB",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}>

                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={curToken}
                          label="Token List"
                          sx={{ width: "100%" }}
                          onChange={handleChange}
                        >
                          {
                            tokenList.map((item: IToken) => {
                              return (
                                <MenuItem value={item.symbol}>
                                  <Box sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  }}>
                                    <img src={item.icon} style={{
                                      width: "32px", height: "32px"
                                    }} />
                                    <Typography sx={{
                                      ml: "10px",
                                      fontFamily: "'Inter' !important",
                                      fontWeight: "600  !important",
                                      fontSize: "16px  !important",
                                      lineHeight: "24px  !important",

                                    }}>
                                      {item.symbol} {parseFloat(item.tokenAmountFix).toFixed(5)}
                                    </Typography>
                                  </Box>
                                </MenuItem>
                              )
                            })
                          }
                        </Select>

                        <img src={D} />
                      </Box>}
                      <Box sx={{
                        m: "8px 0px 8px 0px",
                        // height: "77px",
                        padding: "9px 13px",
                        width: "362px",
                        border: "1px solid #D1D5DB",
                        borderRadius: "6px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}>
                        {/* <Typography sx={{
                      fontFamily: "'Inter' !important",
                      fontWeight: "600  !important",
                      fontSize: "16px  !important",
                      lineHeight: "24px  !important",
                    }}>
                      To
                    </Typography> */}
                        <TextField

                          id="filled-start-adornment"
                          sx={{ m: 1, width: '100%' }}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">To</InputAdornment>,
                          }}
                          onChange={(e: any) => setToAddress(e.target.value)}
                        />

                        <Box >
                          <img src={X} style={{ width: "16px", height: "16px" }} />
                        </Box>
                      </Box>
                    </>
                  ) : (<TextField
                    type={"number"}
                    id="filled-start-adornment"
                    sx={{ m: 1, width: '100%' }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">Amount</InputAdornment>,
                    }}
                    onChange={(e: any) => setSendAmount(parseFloat(e.target.value))}
                  />)
                }


                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "362px",
                }}>
                  <AppButton
                    title="Disconnect"
                    color={"#FFFFFF"}
                    margin="4px"
                    backgroundColor={"#6A6A6A"}
                    borderRadius={"6px"}
                    width="161px"
                    height="48px"
                    textTransform="none"
                    padding={"9px 17px"}
                    boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}
                    fontSize={"16px"}
                    fontWeight={"500px"}
                    lineHeight={"24px"}
                  />
                  <AppButton
                    margin="4px"
                    title="Send"
                    color={"#FFFFFF"}
                    backgroundColor={"#FCBF07"}
                    borderRadius={"6px"}
                    width="161px"
                    height="48px"
                    textTransform="none"
                    padding={"9px 17px"}
                    boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}
                    fontSize={"16px"}
                    fontWeight={"500px"}
                    lineHeight={"24px"}
                    onClick={sendFunction}
                  />
                </Box>

              </Box>

            </Box>
          </Box>

        </Fade>
      </Modal>
    </div >
  );
}
