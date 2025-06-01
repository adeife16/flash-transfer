import { Request, Response } from 'express';
import log from '../logger';
import { getChatDocument, getInboxChat, sendMessage, updateChat } from '../services/message.service';

// Send message
export async function SendMessage(req: Request, res: Response){
    try {
        const { message, postedBy } = req.body;
        const chatDoc = await getChatDocument(postedBy, req.params.reciever);
        if(chatDoc == null){
            const data = await sendMessage(postedBy, req.params.reciever, message[0].body);
            return res.send({
                    data: data
                    })
        }
        const updatedChat = await updateChat(postedBy, req.params.reciever, message[0].body);
        res.send({
            data: updatedChat
        })
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : 'error'});
    }
}

// Get chat message
export async function GetChatMessage(req: Request, res: Response){
    try {
        const chatDoc = await getChatDocument(req.params.sender, req.body.postedBy);
        res.send({
            data: chatDoc
        })
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : 'error'});
    }
}

// Get inbox messages
export async function GetInboxMessage(req: Request, res: Response){
    try {
        const chats = await getInboxChat(req.body.postedBy);
        res.send({
            data: chats
        })
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : 'error'});
    }
}