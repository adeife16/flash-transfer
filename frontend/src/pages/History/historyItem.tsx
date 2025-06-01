import {

  Grid,
  Typography,
  Box
} from "@mui/material";
import React, { useMemo, useState } from "react";
import dateImg from "../../assests/Logo/date.png";
import Location from "../../assests/Logo/location.png";
import Track from "../../assests/Logo/track.png";
import { BSCSCAN, DEFAULT_COIN_ADDRESS } from '../../constants/index';
import { DEFAULT_NETWORK } from '../../constants/chains';
import useTx from "../../hooks/useTx";
import { useEffect } from 'react';
import { ethers, BigNumber } from "ethers"
import { createTopic, formatEther, parseEther } from "../../utils";
import useActiveWeb3React from '../../hooks/useActiveWeb3React';
import useUSDPirce from "../../hooks/usePrice";
import { curTokenName } from "../Throughtpayment/constant";


export enum StateHistory {
  COMPLETE = 0,
  CENCEL = 1,
  INPROCESS = 3,
  PENDING = 4
}
export type IBgcolor = {
  color: "#fff" | "#92400E" | "#991B1B" | "#1F2937",
  bgColor: "#00CC64" | "#FEF3C7" | "#FEE2E2" | "#F3F4F6"
  success: "Complete" | "Pending" | "In Progress" | "Cencel"
}
export type IBackColor = {
  [index: number]: IBgcolor
}
export const BackColors: IBackColor = {
  [StateHistory.COMPLETE]: {
    color: "#fff",
    bgColor: "#00CC64",
    success: "Complete"
  },
  [StateHistory.CENCEL]: {
    color: "#991B1B",
    bgColor: "#FEE2E2",
    success: "Cencel"
  },
  [StateHistory.INPROCESS]: {
    color: "#1F2937",
    bgColor: "#F3F4F6",
    success: "In Progress"
  },
  [StateHistory.PENDING]: {
    color: "#92400E",
    bgColor: "#FEF3C7",
    success: "Pending"

  },
}
const HistoryItem: React.FC<{ txHash: string, timestamp: string, locationName: string, name: string, email: string, index?: number }> = ({ txHash, timestamp, locationName, name, email, index = 0 }) => {

  const [backColors, setBackColors] = useState<IBgcolor>(BackColors[StateHistory.COMPLETE]);
  const price: any = 0;
  const abi = ["event Transfer(address indexed from, address indexed to, uint256 value)", "event sendBNBEvent(address from,uint256 _amount,uint256 _feeAmount)", "event convertBNB(uint256 _bnbAmount,address _coinAddr,uint256 _amount)", "event convertToken(address _bfToken,uint256 _bfAmount,address _afToken, uint256 _afAmount)"]
  const iface = new ethers.utils.Interface(abi);
  const { tx, status } = useTx(txHash, index);
  const { chainId } = useActiveWeb3React();
  
  const logs = useMemo(() => {
    if (tx) {
      return tx.logs;
    }
    return null;
  }, [tx])

  const { tokenName, amount } = useMemo(() => {
    if (logs?.length) {
      if (logs[logs.length - 1].topics[0] === createTopic("convertBNB(uint256,address,uint256)")) {
        // const event = iface.parseLog(logs[logs.length-1])
        // const tokenAddress = event.args[1];
        // const tokenAmount = formatEther(event.args[2])
        const event = iface.parseLog(logs[logs.length - 1]);
        const tokenAmount = formatEther(event.args[2]);
        const tokenAddress = "0x00";
        console.log("events:........",event.args)
        return { tokenName: curTokenName(tokenAddress, chainId!), amount: tokenAmount }

      } else if (logs[logs.length - 1].topics[0] === createTopic("convertToken(address,uint256,address,uint256")) {
        // const event = iface.parseLog(logs[logs.length-1])
        // const tokenAddress = event.args[2];
        // const tokenAmount = formatEther(event.args[3])

        const event = iface.parseLog(logs[logs.length - 1]);
        const tokenAddress = logs[0].address;
        console.log("tokenAddress", tokenAddress);
        const tokenAmount = formatEther(event.args[3]);
        console.log("params", tokenAmount)
        return { tokenName: curTokenName(tokenAddress, chainId!), amount: tokenAmount }
      } else {
        if (logs[logs.length - 2].topics[0] === createTopic("Transfer(address,address,uint256)")) {
          // const event = iface.parseLog(logs[logs.length-2])
          // // const tokenAmount = BigNumber.from(event.args[2]).toNumber()
          // const tokenAmount = formatEther(event.args[2])
          // const tokenAddress = DEFAULT_COIN_ADDRESS[DEFAULT_NETWORK || chainId]
          const event = iface.parseLog(logs[0]);
          const tokenAddress = logs[0].address;
          const tokenAmount = formatEther(event.args[2]);
          return { tokenName: curTokenName(tokenAddress, chainId!), amount: tokenAmount }

        }
      }
    }
    return { tokenAddress: null, amount: null }
  }, [logs, chainId])
  const usdPrice = useUSDPirce(parseFloat(amount!), "BUSD");
  useEffect(() => {
    if (status === 1) {
      setBackColors(BackColors[StateHistory.COMPLETE])
    }

    if (status === 0) {
      setBackColors(BackColors[StateHistory.CENCEL])
    }

  }, [status])

  const date = useMemo(() => {
    if (parseInt(timestamp)) {
      var d = new Date(parseInt(timestamp) * 1000);
      return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    } else {
      return "";
    }
  }, [timestamp])
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
                src={Location}
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
                  locationName
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
                {name}
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
                }}
              >
                <a href={BSCSCAN[DEFAULT_NETWORK] + "tx/" + txHash} target={"_blank"}>
                  {"Show detail"}
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

              // alignItems: "end",
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
                  // background: "#00CC64",`
                  borderRadius: "10px",
                  fontsize: "Inter !important", fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "16px",
                  background: `${backColors.bgColor}`,
                  color: `${backColors.color}`,
                }}
              >
                {backColors.success}
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
                ${parseFloat(amount!).toFixed(3)}
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
                src={dateImg}
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
                {date}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default HistoryItem