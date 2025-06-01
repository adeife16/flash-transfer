import { DocumentDefinition, FilterQuery, Types } from "mongoose";
import withdrow,{NETWORK, WithdrawHistoryDocument, WithdrowStatus, WithdrowType} from "../model/withdrawHis.model";
import { generateRandomNumber } from "../utils/helper";
import { addBalanceRecord, makeWithdrowTransaction } from "./affiliatorBalance.service";


export type WithdrowRequestType ={
    type: WithdrowType;
    amount:number;
    status:WithdrowStatus;
}
export async function createCryptoRecord(affiliator_id:string,crypto_address:string,amount:number){
    const inputData =  {
        type:WithdrowType.BUSD,
        amount:amount,
        network:NETWORK.BNB_CHAIN,
        affiliator:new Types.ObjectId(affiliator_id),
        toAddress:crypto_address
    } as WithdrawHistoryDocument;
    return inputData
}
export async function createBankRecord(affiliator_id:string,bank_name:string,holder:string,iban:string,bic:string,amount:number){
    const inputData = {
        type:WithdrowType.BANK_TRANSFER,
        amount:amount,
        network:NETWORK.SEPA,
        affiliator:new Types.ObjectId(affiliator_id),
        bankName:bank_name,
        bankHolder:holder,
        bankIban:iban,
        bankBic:bic
    } as WithdrawHistoryDocument
    return inputData
}
export async function createPaypalRecord(affiliator_id:string,paypal_email:string,amount:number){
    const inputData = {
        type:WithdrowType.PAPYAL,
        amount:amount,
        network:NETWORK.PAPAYL,
        affiliator:new Types.ObjectId(affiliator_id),
        paypal_email:paypal_email
    } as WithdrawHistoryDocument
    return inputData
}

export async function createWithdrowHis( input : DocumentDefinition<WithdrawHistoryDocument>){
    try{
        const invoce = generateRandomNumber(10);
        const smsCode = generateRandomNumber(6);
        input.smsCode =smsCode;
        input.smsIsVerify=false;
        input.invoice = invoce;
        input.status = WithdrowStatus.PENDING;
        const result = await withdrow.create(input);
        return {smsCode,id:result._id.toString()};
    }catch(e:any){
        throw new Error(e as any);
    }
}

export async function findHistory(query: FilterQuery<WithdrawHistoryDocument>){
    return withdrow.findOne(query).lean();
}

export async function findHistoryById ( id : string ){
    return withdrow.findOne({_id:new Types.ObjectId(id)},"-__v");
}
export async function getHistoryforAffiliator(affiliator_id: string) {
    return withdrow.find({affiliator:new Types.ObjectId(affiliator_id)}).sort({updatedAt:-1});
}
export async function setConfirmHistory(id:string){
    try{
        const record = await findHistoryById(id);
        if(record){
            record.status = WithdrowStatus.COMPLETE;
            await record.save();
            const inputData = makeWithdrowTransaction(record.affiliator?.toString()!,record.amount);
            await addBalanceRecord(inputData,id,"");
        }
    }catch(e:any){
        throw new Error(e as any);
    }
    
}
export async function getWithdrowHistory(id:string){
    const records =await  withdrow.aggregate([
        { $match:{affiliator:new Types.ObjectId (id),smsIsVerify: true}},
        { $sort: { updatedAt: -1}},
        { $project: { smsCode: 0, smsIsVerify: 0,__v: 0,affiliator: 0,},},
      ])
      return records;
}
export async function getLatestWithdrowHistory (id:string){
    const records =await  withdrow.aggregate([
        { $match:{affiliator:new Types.ObjectId (id),smsIsVerify: true,status:1}},
        { $sort: { updatedAt: -1}},
        {$limit:3},
        { $project: { smsCode: 0, smsIsVerify: 0,__v: 0,affiliator: 0,},},
      ])
      return records;
}