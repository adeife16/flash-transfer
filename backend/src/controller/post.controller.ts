import { Request, Response } from "express";
import log from "../logger";
import { addBid, createPost, deletePost, getPostById, getPosts, updatePost, updatePostBidStatus, getPostsByCategory, getPostsByCategoryAndLocation, getPostsByPostedBy, getPostsByLocation, getPostsByMinMaxLocation, textSearch, getBids, updateAdPromote, getPostType, getListings } from "../services/post.service";

// Create post
export async function CreatePostHandler(req: Request, res: Response){
   try {
    const post = await createPost(req.body, req.body.postedBy);
    res.status(200).json({data: post});
   } catch (error: any) {
       log.error(error);
       res.status(400).json({error: error.message as string})
   }
}

// Get posts
export async function GetPosts(req: Request, res: Response) {
    try {
        const post = await getPosts();
        res.status(200).json({data: post});
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message})
    }
}

// Get post by id
export async function GetPostById(req: Request, res: Response) {
    try {
        const post = await getPostById(req.params.postId);
        res.status(200).json({data: post});
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message})
    }
}

// Update specific post by id
export async function UpdatePostById(req: Request, res: Response) {
    try {
        const data = req.body;
        delete data.adPromote;
        delete data.bid;
        const post = await updatePost(req.params.postId, req.body.postedBy, data);
        if(post?.error){
            return res.status(401).json({error: post?.error})
        }
        res.status(200).json({data: post});
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message})
    }
}

// Update post status
export async function UpdatePostStatus(req: Request, res: Response) {
    try {
        const { status, postedBy } = req.body;
        const post = await updatePostBidStatus(req.params.postId, postedBy, status);
        if(post?.error){
            return res.status(401).json({error: post?.error})
        }
        res.status(200).json({data: post});
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message})
    }
}

// Delete specific post by id
export async function DeletePostById(req: Request, res: Response) {
    try {
        const post = await deletePost(req.params.postId, req.body.postedBy);
        if(post?.acknowledged && post?.deletedCount){
            return res.status(200).json({data: 'Post deleted'});
        } else {
            return res.status(200).json({error: 'You are not authorized'})
        }
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message});
    }
}

// Make a bid
export async function CreateBid(req: Request, res: Response) {
    try {
        const data = req.body;
        if(!data.bidPrice){
            return res.status(404).json({error: 'Bid price not found'})
        }
        const post = await addBid(req.params.postId, data.postedBy, data);
        res.send({data: post})
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : 'error'})
    }
}

export async function GetPostsByCategory(req: Request, res: Response) {
    try {
        const posts = await getPostsByCategory(req.params.category);
        res.send({data: posts})
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : 'error'})
    }
}

export async function GetPostsByCategoryAndLocation(req: Request, res: Response) {
    try {
        const {location, category} = req.params;
        const posts = await getPostsByCategoryAndLocation(category, location);
        res.send({data: posts})
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : 'error'})
    }
}

export async function GetPostsByPostUser(req: Request, res: Response){
    try {
        const posts = await getPostsByPostedBy(req.params.userId);
        res.send({
            data: posts
        })
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : 'error'})
    }
}

export async function GetPostsByLocation(req: Request, res: Response){
    try {
        console.log(req.params.location);
        const posts = await getPostsByLocation(req.params.location);
        res.send({
            data: posts
        })
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : 'error'});
    }
}

export async function GetPostsByMinMaxLocation(req: Request, res: Response){
    try {
        const { query } = req;
        const posts = await getPostsByMinMaxLocation(query);
        res.send({
            data: posts
        })
    } catch (error: any) {
        log.error(error)
        res.status(400).json({ error: error.message ? error.message : 'error' });
    }
}

export async function TextSearch(req: Request, res: Response){
    try {
        const posts = await textSearch(req.params.search);
        res.send({
            data: posts
        })
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : 'error'})
    }
}

export async function GetBids(req: Request, res: Response){
    try {
        const data = await getBids(req.params.adId);
        res.send({
            data: data
        })
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : "error"})
    }
}

export async function UpdateAdPromote(req: Request, res: Response){
    try {
        const data = await updateAdPromote(req.params.postId, req.body.adPromote);
        if(data.matchedCount && data.modifiedCount){
            return res.send({message: "Successfully updated"})
        }
        res.send({message: "Something went wrong"})
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : "error"})
    }
}

export async function GetPostType(req: Request, res: Response){
    try {
        const data = await getPostType(req.params.postType);
        res.send(data);
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : "error"});
    }
}

export async function GetListings(req: Request, res: Response){
    try {
       const posts = await getListings(req.body.postedBy);
       res.send({data: posts}) 
    } catch (error: any) {
        log.error(error);
        res.status(400).json({error: error.message ? error.message : "error"});
    }
}