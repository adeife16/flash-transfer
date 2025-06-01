/** @format */

import mongoose, { Types, Document, mongo } from 'mongoose';
import { FTNDocument } from './ftn.model';
import { UserDocument } from './users.model';
export interface OrderDocument extends Document {
	_id?: Types.ObjectId;
	ftn: FTNDocument['_id'];
	status: string;
	track_numer: string;
	user: UserDocument['_id'];
}

const OrderSchema = new mongoose.Schema(
	{
		ftn: {
			type: Types.ObjectId,
			ref: 'ftns',
			required: true,
		},
		status: {
			type: String,
			required: true,
		},
		track_number: {
			type: String,
			required: true,
		},
		user: {
			type: Types.ObjectId,
			ref: 'users',
			required: true,
		},
	},
	{ timestamps: true }
);

const Order = mongoose.model<OrderDocument>('ftns', OrderSchema);

export default Order;
