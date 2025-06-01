import { Request, Response } from "express";
import log from "../logger";
import { CreateNotifications,getNotificationById,getNotifications } from "../services/notification.service";

// Create post
export async function CreateNotificationHandler(req: Request, res: Response){

    console.log(req.body)
   try {
    const post = await CreateNotifications(req.body, req.body.notifyBy);
    res.status(200).json({
        statusCode: 1,
        statusDesc: "create notification successfully.",
        data: post});
   } catch (error: any) {
       log.error(error);
       res.status(400).json({error: error.message as string,
        statusCode: 0,
        statusDesc: "error occurred."})
   }
}

// Get posts
export async function GetNotifications(req: Request, res: Response) {
    try {
        const post = await getNotifications();
        res.status(200).json({
            statusCode: 1,
            statusDesc: "get notification successfully.",
            data: post});
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message,
            statusCode: 0,
            statusDesc: "error occurred."})
    }
}

// Get post by id
export async function GetNotificationById(req: Request, res: Response) {
    try {
        const post = await getNotificationById(req.params.notifyId);
        res.status(200).json({
            statusCode: 1,
            statusDesc: "get notification successfully.",
            data: post});
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message,
            statusCode: 0,
            statusDesc: "error occurred."})
    }
}