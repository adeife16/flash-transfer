import { Request, Response, NextFunction } from 'express';
import { findAffiliatorByEmail } from '../services/affiliator.services';

import {affiliatorAdmin} from "../config/firebase";
export default async function decodeIDTokenForCreate (req: Request, res: Response, next: NextFunction){
    const header = req.headers?.authorization;
    if (header !== 'Bearer null' && req.headers?.authorization?.startsWith('Bearer ')) {
        const idToken = req.headers.authorization.split("Bearer ")[1];
        try{
            const decodedToken = await affiliatorAdmin.auth().verifyIdToken(idToken);
            if(decodedToken.email_verified){
                req["decodeToken"] = decodedToken;
                next();
            }
           
        }catch(e:any){  
            console.log("affiliator middleware Error:",e);
            return res.status(400).json({error: e.message})
        }
    }else{
        return res.status(200).json({status:false,msg:"not Authoritized"});
    }
  
}