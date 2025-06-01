import mongoose from 'mongoose';
import { UserDocument } from './users.model';

export interface MessageDocument extends mongoose.Document {
    members: [UserDocument["id"]];
    message: [{
        from: UserDocument["id"];
        body: string;
        time: Date;
    }];
    createdAt: string;
    updatedAt: string;
}

const MessageSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    message: [{
        from: {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        },
        body: {
            type: String
        },
        time: {
            type: Date,
            default: new Date(Date.now())
        }
    }]
}, {
    timestamps: true
});

const Message = mongoose.model<MessageDocument>("messages", MessageSchema);

export default Message;