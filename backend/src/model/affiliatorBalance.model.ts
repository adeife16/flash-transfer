import mongoose,{Types} from 'mongoose';
import { AffiliatorDocument } from './affiliator.model';
import { TransferActivityDocument } from './transferActivity.model';
import { WithdrawHistoryDocument } from './withdrawHis.model';
import {LogsDocument} from "./logs.model";
import { UserDocument } from './users.model';
export interface AffiliatorBalanceDocument extends mongoose.Document {
    affiliatorId:AffiliatorDocument["_id"];
    isWithdrow:boolean;
    isCash?:boolean;
    curBalance?:number;
    prevBalance?:number;
    amount:number;
    user:UserDocument["_id"];
    totalEarned:number;
    withdrowId?:WithdrawHistoryDocument["_id"];
    blockchainTrId?:TransferActivityDocument["_id"];
    logId?:LogsDocument["_id"];
    createdAt?:Date;
    updatedAt?:Date;
    checkIswithdrow():boolean;
    checkIsCash():boolean;
};
const AffiliatorBalanceSchema = new mongoose.Schema({
    affiliatorId:{
        type:Types.ObjectId,
        required:true,
        ref:"affiliators"
    },
    amount:{
        type:Number,
        required:true,
    },
    totalEarned:{
        type:Number
    },
    isWithdrow:{
        type:Boolean,
    },
    user:{
        type:Types.ObjectId,
        ref:"users"
    },
    isCash:{
        type:Boolean
    },
    curBalance:{
        type:Number,
        required:true,
    },
    prevBalance:{
        type:Number,
        required:true,
        default:0
    },
    withdrowId:{
        type:Types.ObjectId,
        ref:"withdrows"
    },
    blockchainTrId:{
        type:Types.ObjectId,
        ref:"transferActivities"
    },
    logId:{
        type:Types.ObjectId,
        ref:"logs"
    }
},{timestamps:true});

AffiliatorBalanceSchema.methods.checkIswithdrow = function(){
    const balance = this as AffiliatorBalanceDocument;
    return balance.isWithdrow;
}
AffiliatorBalanceSchema.methods.checkIsCash = function(){
    const balance = this as AffiliatorBalanceDocument;
    return balance.isCash;
}
const AffiliatorBalance = mongoose.model<AffiliatorBalanceDocument>("afbalances", AffiliatorBalanceSchema);

export default AffiliatorBalance;