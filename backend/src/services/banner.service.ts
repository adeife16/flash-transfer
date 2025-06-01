import Banner, { BannerDocument } from '../model/adBanners.model';
import { DocumentDefinition, Types } from 'mongoose';
import { UserDocument } from '../model/users.model';

// Create banner
export async function createBanner(input: DocumentDefinition<BannerDocument>){
    try {
        return await Banner.create(input);
    } catch (error: any) {
        throw new Error(error)
    }
}

// Get banners
export async function getBanner(){
    try {
        const data = await Banner.aggregate([
            {
                $match: {}
            },
            {
                $lookup: {
                    localField: "postedBy",
                    foreignField: "_id",
                    from: "users",
                    as: "postedBy"
                }
            },
            {
                $addFields: {
                    "postedBy": "$postedBy.name"
                }
            },
            {
                $unwind: {
                    path: "$postedBy",
                    preserveNullAndEmptyArrays: true
                }
            }
        ]);
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// Update banner
export async function updateBanner(id: string, user: UserDocument["id"], updatedData: DocumentDefinition<BannerDocument>){
    try {
        const banner = await Banner.findOne({_id: new Types.ObjectId(id)}, "postedBy");
        if(banner && String(banner?.postedBy) === user){
            return await Banner.findOneAndUpdate({_id: new Types.ObjectId(id)}, {$set: updatedData}, {new: true});
        } else {
            return {error: 'You are not authorized'}
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

// Delete banner
export async function deleteBanner(id: string, user: UserDocument["id"]){
    try {
        return await Banner.deleteOne({_id: new Types.ObjectId(id), postedBy: new Types.ObjectId(user)});
    } catch (error: any) {
        throw new Error(error);
    }
}