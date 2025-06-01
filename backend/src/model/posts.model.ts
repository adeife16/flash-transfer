import mongoose from 'mongoose';
import { UserDocument } from '../model/users.model';

export interface PostDocument extends mongoose.Document {
    postedBy: UserDocument["_id"];
    title: string;
    photos: [string];
    features: {
        condition: string;
        brand: string;
        features: string;
        mainCategory: string;
        subCategory: string;
        model: string;
    };
    contactDetails: {
        name: string;
        phone: {
            type: [string];
            hide: boolean;
        };
        email: {
            type: string;
            hide: boolean;
        };
    };
    bid: [{
        bidPrice: string;
        bidBy: UserDocument["_id"];
        win: boolean;
        bidCreatedAt: Date;
        bidUpdatedAt: Date;
    }];
    location: {
        town: string;
        country: string; 
    },
    swapType: {
       type: string,
       price: string,
       swapWith: string,
       negotiable: boolean,
    };
    adPromote: string;
    hashTags: [string];
    bidding: {
        type: string,
        minimumBid: string,
        days: string,
        time: string
    };
    reviewed: boolean;
    description: string;
    status: string;
    expiredAt: Date;
    updatedAt: Date;
    createdAt: Date;
    error?: string
}

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    expiredAt: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'live', 'rejected'],
        default: 'pending' 
    },
    features: {
        condition: {
            type: String,
            enum: ['used', 'new']
        },
        brand: String,
        features: String,
        mainCategory: String,
        subCategory: String,
        model: String,
    },
    contactDetails: {
        name: String,
        phone: {
            type: {
                type: [String]
            },
            hide: Boolean,
        },
        email: {
            type: {
                type: String
            },
            hide: Boolean,
        }
    },
    swapType: {
        type: {
            type: String,
        },
        swapWith: {
            type: String
        },
        price: String,
        negotiable: Boolean,
    },
    adPromote: String,
    hashTags: [String],
    bidding: {
        type: {
            type: String
        },
        minBid: {
            type: String
        },
        days: String,
        time: String,
    },
    reviewed: Boolean,
    bid: [{
        bidPrice: {
            type: String,
        },
        bidBy: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
        },
        win: {
            type: Boolean,
            default: false,
        },
        bidCreatedAt: {
            type: Date,
        },
        bidUpdatedAt: {
            type: Date,
        },
    }],
    location: {
        town: String,
        country: String 
    },
    photos: [{
        type: String,
        // required: true
    }],
    postedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    },
}, { timestamps: true });

PostSchema.index({title: 'text'});

const Post = mongoose.model<PostDocument>("posts", PostSchema);

export default Post;