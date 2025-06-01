import { DocumentDefinition, Types } from "mongoose";
import Post, { PostDocument } from "../model/posts.model";
import { IBid } from '../../types/config';
import { UserDocument } from "../model/users.model";

export async function createPost(input: DocumentDefinition<PostDocument>, user: string) {
  try {
    input.expiredAt = new Date(input.expiredAt);
    input.postedBy = user;
    return await Post.create(input);
  } catch (error: any) {
    throw new Error(error as any);
  }
}

export async function getPosts() {
  try{
    return await Post.find({}, 
      "features.subCategory features.condition swapType.type swapType.price createdAt features.mainCategory title location.town location.country photos ");
  } catch(error: any) {
    throw new Error(error as any);
  }
}

export async function getPostById(id: string) {
  try{
    return await Post.findOne({_id: new Types.ObjectId(id)})
  } catch(error: any){
    throw new Error(error as any)
  }
}

export async function updatePost(id: string, user: string, updatedData: DocumentDefinition<PostDocument>){
  try {
    return await Post.findOneAndUpdate({$and: [{_id: new Types.ObjectId(id)}, {postedBy: user}] }, {$set: updatedData}, {new: true})
  } catch (error: any) {
    throw new Error(error as any)
  }
}

export async function updatePostBidStatus(id: string, user: string, updatedStatus: string){
  try {
    return await Post.findOneAndUpdate({$and: [{_id: new Types.ObjectId(id)}, {postedBy: user}] }, {$set: {status: updatedStatus}}, {new: true});
  } catch (error) {
    throw new Error(error as any)
  }
}

export async function deletePost(id: string, user: string){
  try{
    return await Post.deleteOne({$and: [{_id: new Types.ObjectId(id)}, {postedBy: user}]});
  } catch(error: any){
    throw new Error(error as any)
  }
}

export async function addBid(id: string, user: string, bid: IBid){
  try {
    const post = await getPostById(id);
    if(post?.status == "re"){

    }
    bid.bidBy = new Types.ObjectId(user);
    bid.bidCreatedAt = new Date(Date.now());
    bid.bidUpdatedAt = new Date(Date.now());
    return await Post.findOneAndUpdate({ _id: new Types.ObjectId(id) },
      [{
        $set: {
          bid: {
            $cond: [
              { $in: [bid.bidBy, "$bid.bidBy"] },
              {
                $map: {
                  input: "$bid",
                  in: {
                    $mergeObjects: [
                      "$$this",
                      {
                        $cond: [
                          { $eq: ["$$this.bidBy", bid.bidBy] },
                          {
                            "bidPrice": bid.bidPrice,
                            "bidUpdatedAt": bid.bidUpdatedAt,
                            "bidBy": bid.bidBy,
                            "bidCreatedAt": "$$this.bidCreatedAt"
                          },
                          {}
                        ]
                      }
                    ]
                  }
                }
              },
              { $concatArrays: ["$bid", [bid]] }
            ]
          }
        }
      }], {new: true});
  } catch (error) {
    throw new Error(error as any)
  }
}

export async function getPostsByCategory(category: string){
  return await Post.find({"features.subCategory": category}, "features.subCategory features.condition swapType.type swapType.price createdAt features.mainCategory title location.town location.country photos");
}

export async function getPostsByCategoryAndLocation(category: string, location: string){
  return await Post.find({$and: [{"features.mainCategory": category}, {"location.town": location}]}, "features.subCategory features.condition swapType.type swapType.price createdAt features.mainCategory title location.town location.country photos");
}

export async function getPostsByPostedBy(user: UserDocument["id"]){
  return await Post.find({"postedBy": user}, "features.subCategory features.condition swapType.type swapType.price createdAt features.mainCategory title location.town location.country photos")
}

export async function getPostsByLocation(location: string){
  return await Post.find({"location.town": location}, "features.subCategory features.condition swapType.type swapType.price createdAt features.mainCategory title location.town location.country photos");
}

export async function getPostsByMinMaxLocation(query: any){
  try {
    const posts = await Post.aggregate([
      {
        $match: {
          $and: [
            {
              'price': {
                $gte: query.min ? parseInt(query.min)  : 0
              }
            },
            {
              'price': {
                $lte: query.max ? parseInt(query.max ) : 9999999
              }
            },
            query.location ? {
              "location.town": query.location
            } : {},
            query.condition ? {
              "features.condition": query.condition 
            } : { 
              $or: [{"features.condition": "used"}, {"features.condition": "new"}]
            },
          ]
        }
      },
      {
        $project: {
          "features.condition":1,
          "swapType.type":1,
          "swapType.price": 1, 
          "createdAt": 1,
          "features.subCategory": 1,
          "features.mainCategory": 1,
          "title": 1,
          "location.town": 1,
          "location.country": 1,
          "photos": 1
        }
      }
    ]);
    return posts
  } catch (error) {
    throw new Error(error as any)
  }
}

export async function textSearch(search: string){
try {
  return await Post.find({$text: {$search : search}}, "features.subCategory features.condition swapType.type swapType.price createdAt features.mainCategory title location.town location.country photos");
} catch (error: any) {
  throw new Error(error)
}}

export async function getBids(adId: PostDocument["id"]){
  try {
    const bids = await Post.find({_id: new Types.ObjectId(adId)}, "bid").populate({path: 'bid.bidBy', select: 'name profileImg email'});
    return bids;
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function updateAdPromote(id: string, adPromote: string){
  try {
    const post = await Post.updateOne({_id: new Types.ObjectId(id)}, {$set: { adPromote: adPromote }});
    return post;
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function getPostType(postType: string){
  try {
    const posts = await Post.find({adPromote: postType});
    return posts;
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function getListings(user: string){
  try {
    const posts = await Post.find({postedBy: new Types.ObjectId(user)}, "-bid -createdAt -updatedAt -__v");
    return posts;
  } catch (error: any) {
    throw new Error(error)
  }
}