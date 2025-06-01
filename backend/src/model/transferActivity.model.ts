import  mongoose from 'mongoose';
import { calculateEarnforAffiliator, updateLevelForAffiliator } from '../services/affiliator.services';

import {  findUserById } from '../services/user.service';
const Schema = mongoose.Schema;
export interface TransferActivityDocument extends mongoose.Document {
    transactionHash:string; //transaction hash
    from:string; //address of sender
    tokenAddress:string; //token address sended
    tokenAmount:number; //amount of token 
    feeAmount:number; //amount of usd price
    owner:any;
    earned:number;
    createdAt: Date;
    updatedAt: Date;
}
const transferActivitySchema = new Schema({
    transactionHash:{
        type:String,
        required: true
    },
    earned:{
        type:Number
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:"user"
    },
    from:{
        type:String,
        required:true
    },
    tokenAddress:String,
    tokenAmount:Number,
    feeAmount:Number
},{timestamps:true})

transferActivitySchema.pre('save',async function(next){
    let transfer  = this as TransferActivityDocument;
    try{
        if(transfer.owner){
            const user = await findUserById(transfer.owner);
            if(user){
                const affiliatorId = user.affiliator;
                if(affiliatorId && transfer.feeAmount){
                    const earnAmount = await calculateEarnforAffiliator(affiliatorId.toString(),transfer.feeAmount);
                    transfer.earned = earnAmount;
                    await updateLevelForAffiliator(affiliatorId.toString());
                    return next();
                }
            }
        }
        return next();

    }catch(error:any){
        console.log("transferActivity save error:",error);
    }
})


export default mongoose.model<TransferActivityDocument>("transferActivities",transferActivitySchema);

