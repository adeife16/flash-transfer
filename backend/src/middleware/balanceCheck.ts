import { Request, Response, NextFunction } from 'express';
import log from '../logger';
import { getLatestBalanceRecord } from '../services/affiliatorBalance.service';
export default async function BalanceChecker ( req:Request, res:Response, next:NextFunction){
    try{
        const user  = req["currentUser"];
        const balanceRecord = await getLatestBalanceRecord(user._doc._id.toString());
        const balance = balanceRecord?balanceRecord.curBalance!:0;
        const {amount} = req.body;
        if(!parseFloat(amount)) return res.status(200).json({status:false, msg:"Please input correct balance"});
        if(balance < parseFloat(amount)){
            return res.status(200).json({status:false,msg:"Not enough your Balance"});
        } 
        next();
    }catch(error:any){
        log.info(error);
        return res.status(400).json({error: error.message})
    }
}