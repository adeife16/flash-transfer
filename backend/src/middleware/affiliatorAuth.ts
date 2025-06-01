import { Request, Response, NextFunction } from 'express';
import { findAffiliatorByEmail } from '../services/affiliator.services';
import {affiliatorAdmin} from "../config/firebase";
export default async function decodeIDToken (req: Request, res: Response, next: NextFunction){
    const header = req.headers?.authorization;
    if (header !== 'Bearer null' && req.headers?.authorization?.startsWith('Bearer ')) {
        const idToken = req.headers.authorization.split("Bearer ")[1];
        
        try{
            const decodedToken = await affiliatorAdmin.auth().verifyIdToken(idToken);
            if(decodedToken.email_verified){
                    const user = await findAffiliatorByEmail(decodedToken.email);
                    if(user){
                        if(!user.isVerified){
                            user.isVerified = true;
                            await user.save();
                        }
                        const _user = Object.assign(decodedToken,user);
                        req['currentUser'] = _user;
                        next();
                    }else{
                        return res.status(200).json({status:false,msg:"you should registered on database"});
                    }
                
            }else{
                return res.status(200).json({status:false,msg:"You should verify email!"});
            }
        }catch(e:any){  
            console.log("affiliator middleware Error:",e);
            return res.status(400).json({error: e.message})
        }
    }else{
        return res.status(200).json({status:false,msg:"not Authoritized"});
    }
  
}