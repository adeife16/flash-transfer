/** @format */

import mongoose, { Types, Document, mongo } from 'mongoose';

export interface BeneficiaryDocument extends Document {
	_id?: Types.ObjectId;
	email: string;
	first_name?: string;
	last_name?: string;
	country: string;
	street_address: string;
	city: string;
	state: string;
	zip: string;
	orange_phone?: string;
	user_id: Types.ObjectId;
}

const BeneficiarySchema = new mongoose.Schema(
	{
		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		street_address: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		zip: {
			type: String,
			required: true,
		},
		orange_phone: {
			type: String,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Beneficiary = mongoose.model<BeneficiaryDocument>(
	'beneficiaries',
	BeneficiarySchema
);

export default Beneficiary;
