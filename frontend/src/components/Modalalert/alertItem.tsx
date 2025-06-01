import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import A1 from "../../assests/Images/icongreen.png";
import A2 from "../../assests/Images/iconred.png";
import { useState, useMemo } from 'react';
import React from "react";
import useTx from '../../hooks/useTx';
import useInternalTx from "../../hooks/useInternalTx";
import {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import useActiveWeb3React from '../../hooks/useActiveWeb3React';
import {ethers,BigNumber} from "ethers"
import { createTopic, formatEther, parseEther } from "../../utils";
import { curTokenName } from "../../pages/Throughtpayment/constant";
export type ItemType={
    logo:string;
    border:string;
    text:string;
    date:string;
    color:string;
    para:string;
    url:string;
}
const AlertItem:React.FC<{item:any,index:number}> =  ({item,index})=>{
   
    const [Item,setItem] = useState<ItemType | null>(null);
    console.log("item:",item)
    const status = item?.status?BigNumber.from(item?.status).toNumber():0;
    const timestamp = item?.tx?.timeStamp;
    const abi = ["event Transfer(address indexed from, address indexed to, uint256 value)", "event sendBNBEvent(address from,uint256 _amount,uint256 _feeAmount)", "event convertBNB(uint256 _bnbAmount,address _coinAddr,uint256 _amount)", "event convertToken(address _bfToken,uint256 _bfAmount,address _afToken, uint256 _afAmount)"]

    const iface = new ethers.utils.Interface(abi);
    const {chainId} = useActiveWeb3React();
    const navigate = useNavigate();
    const timeDuring = useMemo(()=>{
        if(timestamp==="")return "";
        const now = Date.now();
        const during= now- parseInt(timestamp)*1000;
        const days = Math.floor(during /(24*60*60*1000));
        let rest = during%(24*60*60*1000);
        const hours = Math.floor(rest/(60*60*1000));
        rest = rest%(60*60*1000);
        const mins =  Math.floor(rest/(60*1000));
        rest =  rest%(60*1000);
        const seconds = Math.floor(rest/(1000));
        console.log("days",days,"hours:",hours,"mins:",mins,"second:",seconds);
        let result = seconds+" sec ago";
        if(mins>0){
            result = mins+" mins"+" "+result;
        }
        if(hours>0){
            result = hours+" hr"+" "+result;
        }
        if(days>0){
            result = days+" day"+" "+result;
        }
        return result;
    },[timestamp])
    const logs = useMemo(()=>{
      if(item && item?.txLogs){
          return item.txLogs.logs;
      }
      return null;
  },[item])
  const {tokenName,amount} = useMemo(()=>{
    if(logs?.length){
        if(logs[logs.length-1].topics[0]===createTopic("convertBNB(uint256,address,uint256)")){
            // const event = iface.parseLog(logs[logs.length-1])
            // const tokenAddress = event.args[1];
            // const tokenAmount = formatEther(event.args[2])
            const event =  iface.parseLog(logs[logs.length - 1]);
            const tokenAmount = formatEther(event.args[2]);
            const tokenAddress = "0x00";
            return {tokenName:curTokenName(tokenAddress,chainId!),amount:tokenAmount}
            
        }else if(logs[logs.length-1].topics[0]===createTopic("convertToken(address,uint256,address,uint256)")){
            // const event = iface.parseLog(logs[logs.length-1])
            // const tokenAddress = event.args[2];
            // const tokenAmount = formatEther(event.args[3])
          
            const event = iface.parseLog(logs[logs.length - 1]);
            const tokenAddress = logs[0].address;
            const tokenAmount = formatEther(event.args[3]);
          
            return {tokenName:curTokenName(tokenAddress,chainId!),amount:tokenAmount}
        }else {
            if(logs[logs.length-2].topics[0]===createTopic("Transfer(address,address,uint256)")){
                // const event = iface.parseLog(logs[logs.length-2])
                // // const tokenAmount = BigNumber.from(event.args[2]).toNumber()
                // const tokenAmount = formatEther(event.args[2])
                // const tokenAddress = DEFAULT_COIN_ADDRESS[DEFAULT_NETWORK || chainId]
                const event = iface.parseLog(logs[0]);
                const tokenAddress = logs[0].address;
                const tokenAmount = formatEther(event.args[2]);
                return {tokenName:curTokenName(tokenAddress,chainId!),amount:tokenAmount}
                
            }
        }   
    }
    return {tokenAddress:null,amount:null}
    
},[logs,chainId])
console.log("amount:",amount)
    useEffect(()=>{
        setItem({
            logo:status?A1:A2,
            border:status?"4px solid #34D399":"4px solid #C5221F",
            text:status?"Payment sent!":"Payment Declined!",
            date:timeDuring,
            color:status?"black":"#C5221F",
            para:status?`Your transfer of $${amount?parseFloat(amount).toFixed(3):0} has been sent!`:`Your transfer of $${amount?parseFloat(amount).toFixed(3):0} has been declined!`,
            url: ""
        })
    },[status,timeDuring])
    return(
        <Box m="8px 0px" sx={{cursor:"pointer"}} onClick={()=>{navigate("/history")}}>
        <Box
          sx={{
            borderLeft: `${Item?.border}`,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            padding: "10px 10px",
          }}
        >
          <img src={Item?.logo} />
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", marginLeft: "10px" }}>
            <Typography sx={{
                
              fontWeight: "300  !important",
              fontSize: "10px  !important",
              lineHeight: "20px  !important",
              fontFamily: "Inter !important",
            }}>
              {Item?.date}
            </Typography>
            <Typography
              sx={{
               color: `${Item?.color}`,
                fontWeight: "500  !important",
                fontSize: "14px  !important",
                lineHeight: "20px  !important",
                fontFamily: "Inter !important",

              }}
            >
              {Item?.text}
            </Typography>
            <Typography sx={{
              fontWeight: "400  !important",
              fontSize: "14px  !important",
              lineHeight: "20px  !important",
              fontFamily: "Inter !important",
              color: "#6B7280"
            }}>
              {Item?.para}
            </Typography>
          </Box>
        </Box>
      </Box>
    )
}
export default AlertItem;
  // borderLeft: `${i.border}`,
  // color: `${i.color}`,