/** @format */

import mongoose, { Types, Document, mongo } from 'mongoose';
import { BeneficiaryDocument } from './beneficiary.model';
import { UserDocument } from './users.model';
import { PaymentMethodDocument } from './paymentMethod.model';
import { CurrencyDocument } from './currencies.model';
import { TokenDocument } from './tokens.model';
import {
	PAYMENT_METHOD,
	ORANGE_DEVELIVERD_METHOD,
} from '../business/price/exInfoManager';
export interface FTNDocument extends Document {
	_id?: Types.ObjectId;
	ftn_number: string;
	beneficiary: BeneficiaryDocument['_id'];
	pay_trx: string;
	withdraw_trx?: string;
	fee: number;
	user: UserDocument['_id'];
	payMethod: PAYMENT_METHOD;
	withdrawMethod: PAYMENT_METHOD;
	sent_amount: number;
	sent_currency: string;
	withdraw_amount: number;
	withdraw_currnecy: string;
	total_paid: number;
	orange_money_method: ORANGE_DEVELIVERD_METHOD;
	rate: string;
}

const FTNSchema = new mongoose.Schema(
	{
		ftn_number: {
			type: String,
			required: true,
		},
		beneficiary: {
			type: Types.ObjectId,
			required: true,
		},
		pay_trx: {
			type: String,
			required: true,
		},
		withdraw_trx: {
			type: String,
		},
		fee: {
			type: Number,
			required: true,
		},
		user: {
			type: Types.ObjectId,
			ref: 'users',
			required: true,
		},
		orange_money_method: {
			type: String,
			required: true,
		},
		payMethod: {
			type: String,
			required: true,
		},
		withrawMethod: {
			type: String,
			required: true,
		},
		sent_amount: {
			type: Number,
			required: true,
		},
		sent_currency: {
			type: String,
			required: true,
		},
		withdraw_amount: {
			type: Number,
			required: true,
		},
		withdraw_currency: {
			type: String,
			required: true,
		},
		total_paid: {
			type: Number,
			required: true,
		},
		rate: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const FTN = mongoose.model<FTNDocument>('ftns', FTNSchema);

export default FTN;
