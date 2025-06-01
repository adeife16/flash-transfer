import { Contract } from '@ethersproject/contracts';
// import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { formatEther, parseEther,parseUints} from '../utils';
import { toast } from 'react-toastify';
import { ethers } from 'ethers';
import tokenABI from "../abi/TokenABI.json"
import { isAddress } from 'ethers/lib/utils';
export const sendToken = async (
    transContract: Contract | null,
    amount: number,
    address: string,
    account: Maybe<string>,
    convertCoin: string,
    tokenName:string
)=>{
    if(transContract && account && address != "" && convertCoin !="" && tokenName!=""){
        try{
            let amountSend = parseEther(amount.toString());
            const amounts = await transContract.sendToken(address,amountSend,convertCoin,tokenName);
            const data=await amounts.wait();
            
            return data
        }catch(err:any){
            console.log("sendToken Error---",err);
            toast.error(err.reason || err.error?.data.message)
            return false
        }
    }else{
        toast.error("please input valid data");
        return false;
    }
}

export const approveToken = async(
    tokenContract: Contract | null,
    amount: number,
    spender: string,
    account: Maybe<string>
) =>{
    if(tokenContract && account && spender !=""){
        try{
            let amountApprove = parseEther(amount.toString());
            const result = await tokenContract.approve(spender,amountApprove);
            return result;
        }catch(err:any){
            console.log("Approve Error---",err);
            toast.error(err.reason || err.error?.data.message)
            return null;
        }
    }else{
        return null;
    }
}

export const getTransferFee= async(
    transContract: Contract | null,
    tokenName: String,
    account:String | null,
    sendVal:string
)=>{
    if(transContract && tokenName !="" && account && sendVal!="0"){
        try{
            // console.log("sendva",sendVal)
            const price = await transContract.calculateTransferFee(parseEther(sendVal),account,tokenName);
            return Number(formatEther(price).toString())
        }catch(error:any){
            console.log("getUSDPriceOftoken Err:",error);
            toast.error(error.reason || error.error?.data.message )
            return 0;
        }
    }else{
        return 0;
    }
}

export const getUSDPriceOftoken= async(
    priceOracle: Contract | null,
    tokenName: String
)=>{
    if(priceOracle && tokenName !==""){
        try{
            // console.log("priceOracle",priceOracle)
            const price = await priceOracle.getPriceOfTokenToUSD(tokenName);
            // console.log("price",price)
            return price.toNumber()/100000000;
        }catch(error:any){
            console.log("getUSDPriceOftoken Err:",error);
            toast.error(error.reason || error.error?.data.message )
            return 0;
        }
    }else{
        return 0;
    }
}

export const SendBnb = async (
    transContract: Contract | null,
    amount: number,
    account: Maybe<string>,
    convertCoin: string,
    tokenName:string,
    transFee:number
)=>{
    if(transContract && account && convertCoin !=="" && tokenName !== "" && transFee >0){
        try{
            let totalAmount = amount*1+transFee*1;
            
            let amountSend = parseEther((totalAmount).toString());
            let sendToken = parseEther((amount).toString());
            console.log("totalAmount",convertCoin,sendToken,tokenName);
            const amounts = await transContract.sendBNB(convertCoin,sendToken,tokenName,{value:amountSend});
            const data=await amounts.wait();
            console.log("send bnb data--",data);
            return data;
        }catch(err:any){
            toast.error(err.reason || err.error?.data.message )
            return false;
        }
    }else{
        toast.error("please input valid data");
        return false;
    }
}
export const walletsendToken  =async (tokenAddres:string,amount:number,provider:ethers.providers.Web3Provider)=>{
    if(!provider){
        toast.warn("No provider!");
        return;
    }
    if(!isAddress(tokenAddres)){
        toast.warn("Invalid token Address!");
        return;
    }
    if(!amount){
        toast.warn("No token to send!");
        return;
    }
    const signer = provider.getSigner();
    if(!signer){
        toast.warn("No singer!");
        return;
    }
    const tokenContract = new ethers.Contract(tokenAddres,tokenABI,provider);
    const tokenSigner = tokenContract.connect(signer);
    const token = ethers.utils.parseUnits(amount.toString(),18);
    const tx = await tokenSigner.transfer(tokenAddres,token);
    await tx.wait();
}