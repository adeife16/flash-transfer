import mongoose from 'mongoose';

export interface MembershipDocument extends mongoose.Document {
  name: string;
  rupees: string;
  duration: number;
  listings: string;
  categories: number;
}

const MembershipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rupees: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  listings: {
    type: String,
    required: true
  },
  categories: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const Membership = mongoose.model<MembershipDocument>("memberships", MembershipSchema)

export default Membership;