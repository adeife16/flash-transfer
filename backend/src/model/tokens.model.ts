/** @format */

import mongoose, { Types, Document, mongo } from 'mongoose';

export interface TokenDocument extends Document {
	_id?: Types.ObjectId;
	name: string;
	symbol: string;
	status: boolean;
}

const TokenSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		symbol: {
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

const Tokens = mongoose.model<TokenDocument>('tokens', TokenSchema);

export default Tokens;
