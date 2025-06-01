import mongoose from 'mongoose';
import { UserDocument } from '../model/users.model';
import { calculateEarnforAffiliator, updateLevelForAffiliator } from '../services/affiliator.services';
import { findUserById } from '../services/user.service';

export interface LogsDocument extends mongoose.Document {
  email: string;
  status: string;
  fullName: string;
  transaction: string;
  location: string;
  country: string;
  city: string;
  users_transactions_id: string;
  ip_address: string;
  logsBy: UserDocument["_id"];
  amount:number;
  feeAmount:number;
  earned:number;
  createdAt:Date;
  updatedAt:Date;
}


const LogsSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  status: {
    type: String,
  },

  fullName: {
    type: String,
  },
  transaction: {
    type: String,
  },
 
  location: {
    type: Object,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  users_transactions_id: {
    type: String,
  },
  ip_address: {
    type: String,
  },
  amount:{
    type:Number
  },
  feeAmount:{
    type:Number
  },
  earned:{
    type:Number
  },
  logsBy: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
    required: true
}
  
}, { timestamps: true });

LogsSchema.pre("save",async function (next){
  let log = this as LogsDocument;
  try{
    if(log.logsBy && log.feeAmount){
      const user = await findUserById(log.logsBy.toString());
      if(user){
        const affiliatorId = user.affiliator;
        if(affiliatorId && log.feeAmount){
            const earnAmount = await calculateEarnforAffiliator(affiliatorId.toString(),log.feeAmount);
            log.earned = earnAmount;
            await updateLevelForAffiliator(affiliatorId.toString());
            return next();
        }
      }
    }
    return next();
  }catch(e:any){
    console.log("logs save error:",e);
  }

})
const Logs = mongoose.model<LogsDocument>("logs", LogsSchema);

export default Logs;