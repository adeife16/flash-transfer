import AffiliatorBalance,{AffiliatorBalanceDocument} from "../model/affiliatorBalance.model";
import { DocumentDefinition, FilterQuery, Types } from "mongoose";

export  function makeWithdrowTransaction(affiliatorId:string,amount:number){
    let result = {
        affiliatorId:new Types.ObjectId(affiliatorId),
        isWithdrow:true,
        amount:amount
    } as AffiliatorBalanceDocument;
    return result;
}

export async function addBalanceRecord(input:AffiliatorBalanceDocument,refId:string,user_id:string){
    const latestRecord = await getLatestBalanceRecord(input.affiliatorId?.toString()!);
    if(!input.isWithdrow){
        if(input.isCash){
            input.logId = new Types.ObjectId(refId);
            const record = await AffiliatorBalance.find({logId:refId});
            if(record.length){
                return;
            }
        }else{
            input.blockchainTrId = new Types.ObjectId(refId);
            const record = await AffiliatorBalance.find({blockchainTrId:refId});
            if(record.length){
                return;
            }
        }
        if(latestRecord){
            input.prevBalance = latestRecord.curBalance;
            input.totalEarned = latestRecord.totalEarned + input.amount;
        }else{
            input.prevBalance = 0;
            input.totalEarned = input.amount;
        }
        input.user = new Types.ObjectId(user_id);
        input.curBalance = input.prevBalance!+input.amount;
        return await AffiliatorBalance.create(input);
    }else{
        const record = await AffiliatorBalance.find({withdrowId:refId});
        if(record.length){
            return;
        }
        input.withdrowId = new Types.ObjectId(refId);
        if(latestRecord && latestRecord.curBalance! >= input.amount){
            input.prevBalance = latestRecord.curBalance;
            input.curBalance = latestRecord.curBalance!-input.amount;
            input.totalEarned = latestRecord.totalEarned;
            return await AffiliatorBalance.create(input);
        }
    }
}
export async function getLatestBalanceRecord(affiliatorId:string){
    const blalanceRecord = await AffiliatorBalance.find({affiliatorId:affiliatorId}).sort({createdAt:-1});
    if(blalanceRecord.length){
        return blalanceRecord[0];
    }else{
        return null;
    }
}
export async function getAllTransactionInforForAffiliator(affiliatorId:string){
    const pipeline = [
        { "$match":{"affiliatorId": new Types.ObjectId(affiliatorId),"isWithdrow": false}},
        {"$lookup":{from: "users",localField: "user",foreignField: "_id",as: "user"},},
        {"$replaceRoot":{"newRoot": {"$mergeObjects": [{$arrayElemAt: ["$user", 0],},"$$ROOT"]}}},
        {"$project":{email: 1,createdAt: 1,firstName: 1,lastName: 1,amount: 1,profileImg: 1}},
      ];
      const records = await AffiliatorBalance.aggregate(pipeline);
      return records;
}
export async function getAllTransactionCountforAffiliator(affiliatorId:string){
    return await AffiliatorBalance.find({affiliatorId:new Types.ObjectId(affiliatorId),isWithdrow:false}).count();
}
//get max record for this month;
export async function getRecordforCertainMonth(affiliatorId:string,year:number,month:number){
    const records = await AffiliatorBalance.aggregate([
        { $match: { $expr: { $and: [
                { $eq: [ { $month: "$createdAt" }, month ]},
                { $eq: [ { $year: "$createdAt"},year]},
                { $eq:["$affiliatorId",new Types.ObjectId(affiliatorId)]}
              ]
            }
          }
        }
      ]);
    return records.length?records[0]:null; 
}

export async function getTopAffiliatorInformation(){
    return await AffiliatorBalance.aggregate([
        { $group:{ _id: "$affiliatorId", totalEarn: { $max: "$totalEarned"}}},
        { $sort: { totalEarn: -1}},
        { $limit: 10},
        { $lookup: { from: "affiliators", localField: "_id", foreignField: "_id", as: "affiliator"}},
        { $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: ["$affiliator", 0]},"$$ROOT"]}}},
        { $project:{_id: 1,email: 1,totalEarn: 1,userName:1,profileImg:1}},
      ])
}
export async function getAllAffiliatorInfor(){
    return await AffiliatorBalance.aggregate([
        { $group:{ _id: "$affiliatorId", totalEarn: { $max: "$totalEarned"}}},
        { $sort: { totalEarn: -1}},
        { $lookup: { from: "affiliators", localField: "_id", foreignField: "_id", as: "affiliator"}},
        { $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: ["$affiliator", 0]},"$$ROOT"]}}},
        { $project:{_id: 1,email: 1,totalEarn: 1}},
      ])
}

export async function getTransactionCountforMonth(affiliatorId:string,year:number,month:number){
    let date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(0);
    
    return await AffiliatorBalance.find( { $expr: { $and: [
            { $lte: [ "$createdAt", date ]},
            { $eq:["$affiliatorId",new Types.ObjectId(affiliatorId)]},
            { $eq:["$isWithdrow",false]}
          ]
        }
      }
    ).count();
   
}

export async function getEarndRecordBetweenDays(affiliatorId:string,from:Date,end:Date){
    const records = await AffiliatorBalance.find({$and:[{affiliatorId:new Types.ObjectId(affiliatorId)},{createdAt:{$gte:from}},{createdAt:{$lte:end}}]}).sort({createdAt:-1});
    if(records.length>=2){
        return [records[0],records[records.length-1]];
    }else if (records.length===1){
        return records[0];
    }else return null;
}

export async function getTotalEarnByMonth(affiliatorId:string,year:number){
    const pipeline = [
        { "$addFields": { "year": { "$year": "$createdAt"}}},
        { "$match": { "isWithdrow":false,"affiliatorId":new Types.ObjectId(affiliatorId),"year": year}},
        { "$group": { "_id": { "year": { "$year": "$createdAt"},"month": { "$month": "$createdAt"}},"max_earn": { "$max": "$totalEarned"},"min_earn": { "$min": "$totalEarned"},"first_amount": { "$first": "$amount"}}},
        { "$addFields": { "totalEarned": { "$add": [ { "$subtract": [ "$max_earn", "$min_earn"]},"$first_amount"]}}},
      ];
      const data  = await AffiliatorBalance.aggregate(pipeline);
      return data;
}
export async function getTotalEarnBetween(affiliatorId:string,from:Date,to:Date){
    const pipeline = [
        { "$addFields": { "year": { "$year": "$createdAt"}}},
        { "$match": {"isWithdrow":false,"affiliatorId":new Types.ObjectId(affiliatorId),"createdAt": {"$gt":from,"$lte":to}}},
        { "$group": { "_id": {"$dateToString":{format: "%Y-%m-%d", date: "$createdAt"}},"max_earn": { "$max": "$totalEarned"},"min_earn": { "$min": "$totalEarned"},"first_amount": { "$first": "$amount"}}},
        { "$addFields": { "totalEarned": { "$add": [ { "$subtract": [ "$max_earn", "$min_earn"]},"$first_amount"]}}},
      ];
      const data  = await AffiliatorBalance.aggregate(pipeline);
      return data;
}
export async function getTotalEarnYear(affiliatorId:string,year:number){
    const pipeline = [
        { "$addFields": { "year": { "$year": "$createdAt"}}},
        { "$match": {"isWithdrow":false,"affiliatorId":new Types.ObjectId(affiliatorId),"year": year}},
        { "$group": { "_id": {"$dateToString":{format: "%Y", date: "$createdAt"}},"max_earn": { "$max": "$totalEarned"},"min_earn": { "$min": "$totalEarned"},"first_amount": { "$first": "$amount"}}},
        { "$addFields": { "totalEarned": { "$add": [ { "$subtract": [ "$max_earn", "$min_earn"]},"$first_amount"]}}},
      ];
      const data  = await AffiliatorBalance.aggregate(pipeline);
      return data;
}
export async function getBalanceForAffiliator(affiliatorId:string){
    const data  = await AffiliatorBalance.aggregate([
        { "$match": { "affiliatorId":new Types.ObjectId(affiliatorId)}},
        { $sort: { updatedAt: -1}},
        { $limit:1},
    ])
    return data;
}
export async function getTopAffilatedUser (affiliatorId:string){
    const data = await AffiliatorBalance.aggregate([
        { $match:{affiliatorId:new Types.ObjectId(affiliatorId),isWithdrow: false}},
        { $group:{_id: "$user",total_earn: {$max: "$totalEarned"}}},
        { $lookup:{from: "users",localField: "_id",foreignField: "_id",as: "user",},},
        { $replaceRoot:  { newRoot: { $mergeObjects: [{$arrayElemAt: ["$user", 0]},"$$ROOT"]}}},
        { $project: { total_earn: 1, profileImg: 1, userName: 1, firstName: 1, lastName: 1}},
        { $sort:{ total_earn: -1, }},
        { $limit:10},
      ])
      return data;
}
