import mongoose,{Types} from 'mongoose';
import config from '../../enviorments/default';
import {CommisionDocument} from "./commision.model";
 
const Schema = mongoose.Schema;
import { TransferActivityDocument } from './transferActivity.model';
export interface AffiliatorDocument extends  mongoose.Document {
  _id?:Types.ObjectId,
  email: string;
  firstName?: string;
  lastName?:string;
  userName?:string;
  phone?: string;
  profileImg?: string;
  status?: string;
  isVerified:boolean;
  createdAt?: Date;
  updatedAt?: Date;
  affiliatorCode: string;
  curLevel:CommisionDocument["_id"];
  kycSession?:string;
  kycIsVerify?:number;
}

const { SALT } = config;

const AffiliatorSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  isVerified:{
    type:Boolean
  },
  kycIsVerify:{
    type:Number
  },
  phone: {
    type: String,
  },
  profileImg: {
    type: String
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  }, 
  status: {
    type: String,
  }, 
  userName:{
    type:String
  },
  presentAddress: {
    type: String,
  },
  permenantAddress: {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  dob: {
    type: String,
  },
  role: {
    type: String,
  },
  affiliatorCode :{
    type:String,
    required:true
  },
  curLevel:{
    type:mongoose.Types.ObjectId,
    ref:"commisions",
    required:true
  },
  kycSession:{
    type:String
  }
  
}, { timestamps: true });




const Affiliator = mongoose.model<AffiliatorDocument>("affiliators", AffiliatorSchema);

export default Affiliator;