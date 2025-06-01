import Affiliator, { AffiliatorDocument } from "../model/affiliator.model";
import { DocumentDefinition, FilterQuery, Types } from "mongoose";
import { findCommisionById, getCurLevelObject } from "./commision.service";
import { getLatestBalanceRecord } from "./affiliatorBalance.service";
export async function createAffiliator(input: DocumentDefinition<AffiliatorDocument>) {
    try {
        
      return await Affiliator.create(input);
    } catch (error: any) {
      throw new Error(error as any);
    }
  }
  export async function findAffiliator(query: FilterQuery<AffiliatorDocument>) {
    return Affiliator.findOne(query).lean();
  }
  

  export async function findAffiliatorByEmail(email: AffiliatorDocument["email"]) {
    return Affiliator.findOne({ email }, '-__v -createdAt -updatedAt');
  }

 

  export async function findUserById(id: string){
    return Affiliator.findById(id, "-password -createdAt -updatedAt -__v");
  }

  export async function updateUserDetails(id: string, userFields: DocumentDefinition<AffiliatorDocument>){
  
    const user = await Affiliator.findOneAndUpdate({_id: new Types.ObjectId(id)}, {$set: userFields}, {new: true});
    
    return user;
   }

   export async function emailVerify(emailId:  AffiliatorDocument["email"]){
    return  await Affiliator.findOneAndUpdate({email:emailId},{$set:{status: 'verified'}}, {new: true});
   }

   export async function getAffiliator(email: string){
    const user  = await Affiliator.findOne({email: email})
    return user;
  }
  export async function getAffiliatorByCode (code:string){
    const user = await Affiliator.findOne({affiliatorCode:code})
    return user;
  }
  export async function getAffiliatorBySession(sessionId:string){
    const user = await Affiliator.findOne({kycSession:sessionId});
    return user;
  }
  export async function getTotalEarnForAffiliator ( id: string){
    const data:any = await Affiliator.aggregate([
      { $match:{_id:new Types.ObjectId(id)}},
      { $lookup:{ from: "users", localField: "_id", foreignField: "affiliator", as: "users" } },
      { $lookup: { from: "transferactivities", localField: "users._id", foreignField: "owner", as: "blockchain" }},
      { $lookup: { from: "logs", localField: "users._id", foreignField: "logsBy", as: "logs"}},
      { $addFields: { history: { $concatArrays: ["$blockchain", "$logs"]}}},
      { $addFields: { totalearn: { $sum: "$history.earned"}}},
    ]);
    return data.totalearn;
  }
 
  export async function calculateEarnforAffiliator(id:string,amount:number){
      const affiliator = await findUserById(id);
      if(affiliator?.curLevel){
          const levelRecord = await findCommisionById(affiliator.curLevel);
          if(levelRecord && levelRecord.pourcent){
            return amount*levelRecord.pourcent/100;
          }
          return 0;
      }
      return 0;
  }
  export async function updateLevelForAffiliator(id:string){
    const affiliator = await findUserById(id);
    if(affiliator){
        const totalEarnRecord = await getLatestBalanceRecord(id);
        const totalPoint = totalEarnRecord?.totalEarned?totalEarnRecord?.totalEarned*100:0;
        const levelId=await getCurLevelObject("flash-transfer.com",totalPoint);
        if(levelId){
          affiliator.curLevel = new Types.ObjectId(levelId);
          await affiliator.save();
        }
    }
  }
  
   
   
   