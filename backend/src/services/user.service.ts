import { DocumentDefinition, FilterQuery, Types } from "mongoose";
import { omit } from "lodash";
import User, { UserDocument } from "../model/users.model";
import Favourite, { FavouriteDocument } from '../model/favourite.model';
import bcrypt from 'bcrypt';
import config from '../../enviorments/default';
import { uploadFiles } from "../middleware";
import twilioClient from '../config/twillio';
import { getAffiliatorByCode } from "./affiliator.services";

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await User.create(input);
  } catch (error: any) {
    throw new Error(error as any);
  }
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return User.findOne(query).lean();
}

export async function findUserByEmail(email: UserDocument["email"]) {
  return User.findOne({email: email});
}
export async function getAllTransactionforAffiliator(id:string){
    const data  =await User.aggregate([
      { $match: {affiliator: new Types.ObjectId(id),} },
      { $lookup: { from: "transferactivities", localField: "_id", foreignField: "owner", as: "blockchain" }},
      { $lookup: { from: "logs", localField: "_id", foreignField: "logsBy", as: "logs"}},
      { $addFields: { history: { $concatArrays: ["$blockchain", "$logs"]}}},
      { $unwind: { path: "$history" }},
      { $sort:{"history.createdAt": -1}},
      { $project: { transferActivities: 0, blockchain: 0, logs: 0, nonce: 0, updatedAt: 0, createdAt: 0, __v: 0 } },
    ] );
    return data;
}



export async function validatePassword({
  email,
  password,
}: {
  email: UserDocument["email"];
  password: string;
}) {
  const user = await User.findOne({ email }, '-__v -createdAt -updatedAt');

  if (!user) {
    return {error: 'No user found'};
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return {error: 'Invalid credentials'};
  }

  return omit(user.toJSON(), "password");
}

export async function findUserById(id: string){
  return User.findById(id, "-password -createdAt -updatedAt -__v");
}

export async function updateUserDetails(id: string, userFields: DocumentDefinition<UserDocument>){
  
 const user = await User.findOneAndUpdate({_id: new Types.ObjectId(id)}, {$set: userFields}, {new: true});
 
 return user;
}

export async function emailVerify(id: string){
  return  await User.findOneAndUpdate({_id:id},{$set:{status: 'verified'}}, {new: true});
 }
 

export async function addFavourite(favData: DocumentDefinition<FavouriteDocument>){
  try {
    const haveFav = await Favourite.findOne({userId: favData.userId});
    if(haveFav != null && !haveFav?.adId.includes(favData.adId)){
      const doc = await Favourite.findOneAndUpdate({userId: favData.userId}, {$addToSet: {"adId": favData.adId}}, {new: true});
      return doc
    } else if(haveFav != null && haveFav?.adId.includes(favData.adId)){
      const doc = await Favourite.findOneAndUpdate({userId: favData.userId}, {$pull: {"adId": favData.adId}}, {new: true});
      return doc
    } else {
      let data = await Favourite.create(favData);
      return data
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getFavourites(user: string){
  try {
    return await Favourite.find({userId: new Types.ObjectId(user)}).populate({path: 'adId', select: 'title photos price status'});
  } catch (error: any) {
    throw new Error(error as any)
  }
}

export async function changePassword(user: string, password: string){
  try {
    const { SALT } = config;
    const salt = await bcrypt.genSalt(parseInt(SALT));
    const hash = await bcrypt.hashSync(password, salt);
    return await User.updateOne({_id: new Types.ObjectId(user)}, {$set: {password: hash}});
  } catch(error: any){
    throw new Error(error)
  }
}
export async function getUserWithWalletAddress(pub_addr:string){
  return User.findOne({pub_addr:pub_addr});
}
export async function getUser(email: string){
  const user  = await User.findOne({email: email})
  return user;
}

export async function getUsersbyRole(role: string){
  const users  = await User.find({role: role})
  return users;
}
export const sendOtp = (userId:any, contact:any) => {
  return new Promise ( async (resolve, reject)  => {
        try {
          const user = await User.findOne({ _id :userId });
          if (user) {
            let otp = Math.floor(100000 + Math.random() * 900000);
            let response = await twilioClient.messages.create({
              from: "+12407711834",
              to: contact,
              body: "Your Flash Transfer OTP Code is " + otp,
            });
             await User.findOneAndUpdate({_id:userId},{$set:{ otp: otp}}, {new: true});
            resolve({
              status: "success",
              message: "OTP sent",
            });
          } else {
            throw "No User Found";
          }
        } catch (error) {
          reject({ status: "fail", message: error });
        }
      
  });
};
export const verifyOtp = (userId:any, otp:any) => {
  return new Promise( async (resolve, reject) => {
        try {
          const user:any = await User.findOne({ _id :userId });          
          if (user) {
            console.log("FAADS", user);
            if (user.otp == otp ) {
              let user = await User.findOneAndUpdate({_id:userId},{$set:{ otp: null,isPhoneVerified: true,}}, {new: true});
              resolve({
                status: "success",
                message: "OTP Verified",
              });
            } else {
              throw "Wrong OTP";
            }
          } else {
            throw "No User Found";
          }
        } catch (error:any) {
          reject({
            status: "fail",
            message: error
          });
        }
  });
};
















export async function addAffiliator(id: string,code:string){
    const Affiliator = await getAffiliatorByCode(code);
    const user = await findUserById(id);
    if(user && !user.affiliator  && Affiliator){
      user.affiliator = Affiliator["_id"];
      user.save();
    }
    return user;
}
export async function getAllUserforAffiliator(id:string){
  return await User.find({affiliator:new Types.ObjectId(id) }).populate("affiliator","-_id -__v");
}

export async function getFullUserInforforAffiliator(id:string){
  
}