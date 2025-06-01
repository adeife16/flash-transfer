import TransferActivity from "../../../model/transferActivity.model";
import { BigNumber, ethers } from 'ethers';
import { PriceUnit, getValueOfUnits } from '../../../utils/crypto';
import { getUserWithWalletAddress } from "../../user.service";
import { DocumentDefinition, FilterQuery, Types } from "mongoose";
import {addBalanceRecord} from "../../affiliatorBalance.service";
import { AffiliatorBalanceDocument } from "../../../model/affiliatorBalance.model";
export const getTransferActivity = async (txHash:string)=>{
    return  TransferActivity.findOne({transactionHash: txHash});
}
export const addTransferActivity = async (from:string,tokenAddress:string,amount:BigNumber,_feeAmount:BigNumber,transactionHash: string)=>{
    const user = await getUserWithWalletAddress(from);
    const transferActivityInstance = new TransferActivity({
        transactionHash:transactionHash,
        from,
        owner:user,
        tokenAddress,
        tokenAmount:getValueOfUnits(amount,PriceUnit.Wei),
        feeAmount:getValueOfUnits(_feeAmount,PriceUnit.Usd)
    }) ;
    console.log("testfffffff")
   const record= await transferActivityInstance.save();
   console.log("result",user && user?.affiliator)
   if(user && user?.affiliator){
    const input = {
        affiliatorId:user.affiliator,
        isWithdrow:false,
        isCash:false,
        amount:parseFloat(record.earned.toFixed(5)),
     }
     console.log("input",input)
     await addBalanceRecord(input as AffiliatorBalanceDocument,record.toString(),user._id.toString());
   }
    
     return transferActivityInstance;
}
export const getAllTransferActivities =async (id:string) =>{
    // 
    return await TransferActivity.aggregate( [
        {$match:{owner:new Types.ObjectId(id)}},
        {
            $group:{
                _id:"$owner",
                transactions:{$push:"$$ROOT"},
                totalFee:{$sum:"$feeAmount"},
            }
        }
    ]);
}