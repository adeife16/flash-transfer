import { DocumentDefinition, FilterQuery, Types } from "mongoose";
import { omit } from "lodash";
import Commision,{CommisionDocument} from "../model/commision.model";

export async function createCommision(input:DocumentDefinition<CommisionDocument>){
    try{
        return await Commision.create(input);
    }catch(e:any){
        throw new Error(e as any);
    }
}

export async function findCommision(query: FilterQuery<CommisionDocument>) {
    return Commision.findOne(query).lean();
}
export async function findCommisionByLevelAndAbout(about: CommisionDocument["about"],level:CommisionDocument['level']) {
    return Commision.findOne({ about,level }, '-__v -createdAt -updatedAt');
}
export async function getAllCommisions(){
    return await Commision.aggregate([{$sort:{level: 1}}]);
}

export async function findCommisionById(id: string){
    return Commision.findById(id, "-createdAt -updatedAt -__v");
}

export async function updateCommisionDetails(id: string, commisionFields: DocumentDefinition<CommisionDocument>){
    return  await Commision.findOneAndUpdate({_id: new Types.ObjectId(id)}, {$set: commisionFields}, {new: true});
}
export async function getCurLevelObject(about:string,totalPoint:number){
    const levelRecords = await Commision.aggregate([
        { $match: { about: about}},
        { $match: { rangeMax: { $gte: totalPoint }}},
        { $sort:  { rangeMax: 1 }},
    ]);
    if(levelRecords){
        if(levelRecords.length>0){
            return levelRecords[0]._id.toString();
        }else{
            const _levelRecords = await Commision.aggregate([
                { $match: { about: about}},
                { $sort:  { rangeMax: -1 }},
            ]);
            return _levelRecords[0]._id.toString();
        }
    }else{
        return null;
    }
}
export async function calculateNextRankProgress(curPoint:number,about:string){
    const levelObjectId = await getCurLevelObject(about,curPoint);
    if(levelObjectId){
        const levelRecord = await findCommisionById(levelObjectId);
        if(levelRecord?.level === 10){
            return {percent:100,range:levelRecord.rangeMax,curLevel:levelRecord?.level};
        }else{
            if(levelRecord?.level ===1){
                return {percent:100*curPoint/levelRecord?.rangeMax,range:levelRecord.rangeMax,curLevel:levelRecord?.level};
            }else{
                const preveLevelRecord = await findCommisionByLevelAndAbout(about,levelRecord?.level!-1);
                if(preveLevelRecord){
                    const prevRangeMax  = preveLevelRecord.rangeMax;
                    const curRangeMax = levelRecord?.rangeMax;
                    return {percent:100*(curPoint-prevRangeMax)/(curRangeMax!-prevRangeMax),range:levelRecord?.rangeMax,curLevel:levelRecord?.level};
                }else{
                    return null;
                }
            }
        }
    }else{
        return null;
    }
}