/** @format */

import mongoose, { Types, Document, mongo } from 'mongoose';

export interface CurrencyDocument extends Document {
	_id?: Types.ObjectId;
	name: string;
	code: string;
	format: string;
	status: boolean;
}

const CurrnecySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		code: {
			type: String,
			required: true,
		},
		format: {
			type: String,
			required: true,
		},

		status: {
			type: Boolean,
			required: true,
		},
	},
	{ timestamps: true }
);

const Currencies = mongoose.model<CurrencyDocument>(
	'currencies',
	CurrnecySchema
);

export default Currencies;
