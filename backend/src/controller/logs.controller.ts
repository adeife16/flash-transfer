import { Request, Response } from "express";
import log from "../logger";
import { createLogs, getLogs, getLogsById } from "../services/logs.service";

// Create post
export async function CreateLogsHandler(req: Request, res: Response){

    console.log(req.body)
   try {
    const post = await createLogs(req.body, req.body.logsBy);
    res.status(200).json({
        statusCode: 1,
        statusDesc: "create logs successfully.",
        data: post});
   } catch (error: any) {
       log.error(error);
       res.status(400).json({error: error.message as string,
        statusCode: 0,
        statusDesc: "error occurred."})
   }
}

// Get posts
export async function GetLogs(req: Request, res: Response) {
    try {
        const post = await getLogs();
        res.status(200).json({
            statusCode: 1,
            statusDesc: "get logs successfully.",
            data: post});
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message,
            statusCode: 0,
            statusDesc: "error occurred."})
    }
}

// Get post by id
export async function GetLogsById(req: Request, res: Response) {
    try {
        const post = await getLogsById(req.params.logsId);
        res.status(200).json({
            statusCode: 1,
            statusDesc: "get logs successfully.",
            data: post});
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message,
            statusCode: 0,
            statusDesc: "error occurred."})
    }
}