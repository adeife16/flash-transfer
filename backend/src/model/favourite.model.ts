import mongoose from 'mongoose';
import { UserDocument } from './users.model';
import { PostDocument } from './posts.model';

export interface FavouriteDocument extends mongoose.Document {
    userId: UserDocument["id"];
    adId: PostDocument["id"];
}

const FavouriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    adId: [{
        type: mongoose.Types.ObjectId,
        ref: 'Post',
        required: true
    }],
}, {
    timestamps: true
});

const Favourite = mongoose.model<FavouriteDocument>("favourites", FavouriteSchema);

export default Favourite;