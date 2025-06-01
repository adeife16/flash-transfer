import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { Types } from "mongoose";
import log from '../logger';
import Post from '../model/posts.model';
import User from '../model/users.model';
import Membership from '../model/membership.model';

export { default as userAuthMiddleware } from "./auth";
export { uploadFiles } from "./upload";

export const ValidateRequestBody = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({
            code: 400,
            error: errors.array()
        });
    }
    else {
        next();
    }
};

export const CheckPostOwner = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const post = await Post.findOne({_id: new Types.ObjectId(req.params.postId)}, "postedBy");
        if(post?.postedBy == req.body.postedBy){
            next();
        } else {
            return res.status(401).json({error: "You are not authorized to access this route"})
        }
    } catch (error: any) {
        log.info(error);
        res.status(400).json({error: error.message})
    }
}

export const checkListings = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const userMembership = await User.findOne({_id: new Types.ObjectId(req.body.postedBy)}, "membership");
        if(!userMembership?.membership){
            return res.status(401).json({error: "Please purchase any membership first"})
        } else {
            const date = new Date(Date.now()-86400000*30)
            const [data] = await Membership.aggregate([
                {
                    $match: {
                        _id: new Types.ObjectId(userMembership.membership)
                    }
                }, 
                {
                    $project: {
                        duration: 1,
                        listings: 1,
                        categories: 1
                    }
                },
                {
                    $lookup: {
                        from: "posts",
                        pipeline: [
                            { 
                                $match: { $and: [
                                    { postedBy: new Types.ObjectId(req.body.postedBy) },
                                    { createdAt: { $gte: date}}
                                ]}
                            },
                            {
                                $project: {
                                    "features.mainCategory": 1,
                                }
                            }
                        ],
                        as: "postListings"
                    }
                },
                {
                    $group: {
                        "_id": "$_id",
                        "duration": { "$first": "$duration" },
                        "listings": { "$first": "$listings" },
                        "categories": { "$first": "$categories" },
                        "postCategories": { "$first": "$postListings.features.mainCategory" },
                        "numberOfListings": { "$first": "$postListings" }
                    }
                },
                {
                    $unwind: {
                        path: "$distinctPostCategories",
                        preserveNullAndEmptyArrays: true
                    }
                }
            ]);
            if(((data.listings > data.numberOfListings.length) || (data.listings == "unlimited")) && (data.categories > data.postCategories.length)){
                next();
            } else {
                return res.status(401).json({error: "Please upgrade your membership"})
            }
        }
    } catch (error: any) {
        log.info(error);
        res.status(400).json({error: error.message});
    }
}