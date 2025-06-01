import { Request, Response, NextFunction } from 'express';
import { decode } from '../utils/jwt.utils';
import log from '../logger';

export default async function adminAuthMiddleware(req: Request, res: Response, next: NextFunction){
    try {
        const token = req.headers?.['authorization']?.split(' ')[1];
        if(token == null){
            return res.status(401).json({error: 'You are not authorized'})
        }
        /* Validate token */
        const decoded = decode(token);
        if(decoded?.decoded?.role == "ADMIN"){
          next();
        } else {
            return res.status(400).json({ error: 'You are not authorized' })
        }
    } catch (error: any) {
        log.info(error);
        res.status(400).json({error: error.message})
    }
}