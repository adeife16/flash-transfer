import mongoose from 'mongoose';
import { UserDocument } from './users.model';

export interface BannerDocument extends mongoose.Document {
    bannerImage: string;
    bannerPosition: string;
    bannerTitle: string;
    postedBy: UserDocument["id"];
    error?: string;
}

const BannerSchema = new mongoose.Schema({
    bannerImage: {
        type: String,
        required: true
    },
    bannerPosition: {
        type: String,
        enum: ["topAds", "verticalMidAds", "midWidAds", "belowWideAds"],
        required: true,
    },
    bannerTitle: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    }
}, {
    timestamps: true
});

const Banner = mongoose.model<BannerDocument>("banners", BannerSchema);

export default Banner;