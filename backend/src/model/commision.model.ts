import mongoose, { mongo } from 'mongoose';
export interface CommisionDocument extends mongoose.Document {
    pourcent:number;
    about:string;
    level:number;
    rangeMax:number;
}

const CommisionSchema = new mongoose.Schema({
    pourcent:{
        type:Number,
        required:true
    },
    about:{
        type:String
    },
    level:{
        type:Number
    },
    rangeMax:{
        type:Number
    }

},{timestamps:true});

const Commision = mongoose.model<CommisionDocument>("commisions", CommisionSchema);
export default Commision;