import mongoose,{Schema, Types} from 'mongoose';
import { generateRandomNumber, generteRandomString } from '../utils/helper';
import { DocumentDefinition } from 'mongoose';
import {AffiliatorDocument} from "../model/affiliator.model";
import { getLatestBalanceRecord } from '../services/affiliatorBalance.service';

export enum WithdrowType {
    PAPYAL="PAYPAL",
    BANK_TRANSFER ="BANK TRANSFER",
    BUSD = "BUSD"
}

export enum NETWORK {
    PAPAYL="Paypal",
    SEPA ="SEPA",
    BNB_CHAIN="BNB Chain"
};
export enum WithdrowStatus{
    PENDING=0,
    COMPLETE=1
}

export interface WithdrawHistoryDocument extends  mongoose.Document {
    affiliator:AffiliatorDocument["_id"],
    updatedAt:Date;
    createdAt:Date;
    amount:number;
    network:string;
    status?:number;  //0:pending 1:complete
    type:string; //0:paypal,1:banktransfer,2:crypto
    invoice?:string;
    //bank
    bankName?:string;
    bankHolder?:string;
    bankIban?:string;
    bankBic?:string;
    //paypal
    paypal_email?:string;
    //crypto
    toAddress?:string;
    smsCode?:string;
    smsIsVerify?:boolean;
}

const WithdrowSchema = new mongoose.Schema({
    affiliator:{
        type:Types.ObjectId,
        required:true,
    },
    smsCode:{
        type:String
    },
    smsIsVerify:{
        type:Boolean
    },
    amount:{
        type:Number,
        required:true
    },
    network:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    invoice:{
        type:String,
    },
    bankName:{
        type:String
    },
    bankHolder:{
        type:String
    },
    bankIban:{
        type:String
    },
    bankBic:{
        type:String
    },
    //paypal
    paypal_email:{
        type:String
    },
    //crypto
    toAddress:{
        type:String
    }
},{timestamps:true});
const Widthrow = mongoose.model<WithdrawHistoryDocument>("withdrows", WithdrowSchema);
export default Widthrow;