import { DocumentDefinition, Types } from "mongoose";
import Logs, { LogsDocument } from "../model/logs.model";
import { AffiliatorBalanceDocument } from "../model/affiliatorBalance.model";
import { addBalanceRecord } from "./affiliatorBalance.service";
import { findUserById } from "./user.service";

export async function createLogs(input: DocumentDefinition<LogsDocument>, user: string) {
  try {
     input.logsBy = user;

    const record = await Logs.create(input);
    const _user = await findUserById(user);
    if(_user && _user?.affiliator){
      
      const input = {
          affiliatorId:_user.affiliator["_id"],
          isWithdrow:false,
          isCash:true,
          amount:parseFloat(record.earned.toFixed(5)),
       }
  
       await addBalanceRecord(input as AffiliatorBalanceDocument,record["_id"].toString(),user);
     }
     return record;
  } catch (error: any) {
    throw new Error(error as any);
  }
}

export async function getLogs() {
  try{
    return await Logs.find({});
  } catch(error: any) {
    throw new Error(error as any);
  }
}

export async function getLogsById(id: string) {
  try{
    return await Logs.findOne({_id: new Types.ObjectId(id)})
  } catch(error: any){
    throw new Error(error as any)
  }
}

