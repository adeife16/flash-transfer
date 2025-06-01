/** @format */

import mongoose, { Types, Document, mongo } from 'mongoose';
import { UserDocument } from './users.model';
export interface PaymentCardDocument extends Document {
	_id?: Types.ObjectId;
	user: UserDocument['_id'];
	name: string;
	type: string;
	card_number: string;
	cvc_cvv: string;
	holder_name: string;
}

const PaymentCardSchema = new mongoose.Schema(
	{
		user: {
			type: Types.ObjectId,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		card_number: {
			type: String,
			required: true,
		},
		expiry_date: {
			type: Date,
			required: true,
		},
		holder_name: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const PaymentCards = mongoose.model<PaymentCardDocument>(
	'paymentcards',
	PaymentCardSchema
);

export default PaymentCards;
