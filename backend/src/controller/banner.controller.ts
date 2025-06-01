import { Request, Response } from 'express';
import log from '../logger';
import { createBanner, deleteBanner, getBanner, updateBanner } from '../services/banner.service';

// Create banner
export async function CreateBanner(req: Request, res: Response){
    try {
        const data = req.body;
        const banner = await createBanner(data);
        res.send({
            data: banner
        })
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : 'error' });
    }
}

// Get banner
export async function GetBanners(req: Request, res: Response){
    try {
        const data = await getBanner();
        res.send({
            data: data
        })
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : "error"})
    }
}

// Update banner
export async function UpdateBanner(req: Request, res: Response){
    try {
        const updatedData = req.body;
        const user = req.body.postedBy;
        delete updatedData.postedBy;
        const data = await updateBanner(req.params.bannerId, user, updatedData);
        if(data?.error){
            res.status(400).json({error: data?.error})
        }
        else {
            res.send({
                data: data
            })
        }
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : 'error'});
    }
}

// Delete banner
export async function DeleteBanner(req: Request, res: Response){
    try {
        const data = await deleteBanner(req.params.bannerId, req.body.postedBy);
        if(data?.acknowledged && data?.deletedCount){
            return res.status(200).json({data: 'Banner deleted'});
        } else {
            return res.status(200).json({error: 'You are not authorized'})
        }
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : "error"})
    }
}