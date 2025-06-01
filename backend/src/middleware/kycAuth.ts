import { Request, Response, NextFunction } from 'express';
import log from '../logger';
import {GetSessionInfo} from "../utils/kyc";
export default async function KYCAuth(req: Request, res: Response, next: NextFunction){
    try{
        const user = req['currentUser'];
        const kyc_session = user._doc.kycSession;
        if(kyc_session){    
            const result = !user._doc.kycIsVerify?"PENDING":"VERIFIED";;
            if(result){
                console.log("result:",result)
                if(result === "VERIFIED"){
                    next();
                }else if (result === "PENDING"){
                    return res.status(200).json({status:false,msg:"Please wait for accept KYC verification"});
                }else{
                    return res.status(200).json({status:false,msg:"Your KYC verification is canceled"});
                }
            }else{
                return res.status(200).json({status:false,msg:"There are some problem at Synpas"});
            }
        }else{
            return res.status(200).json({status:false,msg:"please make KYC verification"});
        }
    }catch(error:any){
        log.info(error);
        return res.status(400).json({error: error.message})
    }
}