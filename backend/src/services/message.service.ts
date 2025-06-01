import Message from '../model/message.model';
import { UserDocument } from '../model/users.model';
import { Types } from 'mongoose';

// Send message
export async function sendMessage(sender: UserDocument["id"], reciever: UserDocument["id"], body: string){
    try {
        const members = [ sender, reciever ];
        const message = {
            from: sender,
            body: body
        }
        const data = Message.create({members, message});
        return data;
    } catch (error: any) {
        throw new Error(error as any)
    }
}

// Get chat between sender and reciever
export async function getChatDocument(sender: UserDocument["id"], reciever: UserDocument["id"]){
    try {
        const doc = await Message.findOne({members: {$in: [sender, reciever]}}).populate({path: 'members', select: 'name'});;
        return doc;
    } catch (error: any) {
        throw new Error(error as any)
    }
}

// Update chat between sender and reciever
export async function updateChat(sender: UserDocument["id"], reciever: UserDocument["id"], body: string){
    try {
        const message = {
            from: sender,
            body: body
        }
        const doc = await Message.findOneAndUpdate({members: [sender, reciever]}, {$push: {message: message}}, {new: true}).populate({path: 'members', select: 'name'});;
        return doc;
    } catch (error) {
        throw new Error(error as any)
    }
}

// Get inbox chats
export async function getInboxChat(loggedUser: UserDocument["id"]){
    try {
        // const chats = await Message.find({members: {$in: [loggedUser]}},  "-__v -message").populate({path: 'members', select: 'name'});
        const chat = await Message.aggregate([
            {
                $match: {
                    members: { $in: [new Types.ObjectId(loggedUser)] }
                }
            },
            {
                $unwind: {
                    path: '$members'
                }
            },
            {
                $match: {
                    members: {
                        $ne: new Types.ObjectId(loggedUser)
                    }
                }
            },
            {
                $lookup: {
                    localField: 'members',
                    foreignField: '_id',
                    from: 'users',
                    as: 'user'
                }
            },
            {
                $unwind: {
                    path: "$user"
                }
            },
            {
                $addFields: {
                    "sender.name": "$user.name"
                }
            },
            {
                $project: {
                    "sender": 1
                }
            },
        ]);
        return chat;
    } catch (error: any) {
        throw new Error(error as any)
    }
}