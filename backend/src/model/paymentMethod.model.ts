/** @format */

import mongoose, { Types, Document, mongo } from 'mongoose';
export enum PAYMENT_WAY_TYPE {
	CRYPTO_CASH = '0',
	CASH_CRYPTO = '1',
}
export enum PAYMENT_TYPE {
	COIN_PAYMENT = 'coinpayment',
	BINANCE_PAYMENT = 'bianancepayment',
	ORANGE_MONEY = 'orangemoney',
}
export interface PaymentMethodDocument extends Document {
	_id?: Types.ObjectId;
	name: string;
	type: string;
	status: boolean;
	options: string;
}

const PaymentMethodSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		options: {
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

const PaymentMethods = mongoose.model<PaymentMethodDocument>(
	'paymentmethods',
	PaymentMethodSchema
);

export default PaymentMethods;
