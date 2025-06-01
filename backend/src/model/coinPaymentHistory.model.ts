/** @format */

import mongoose, { Types } from 'mongoose';
export enum PaymentHistoryTypeEnum {
	COINPAYMENT = 'coinpayment',
	BIANANCE = 'binance',
}
export interface CoinPaymentHistoryDocument extends mongoose.Document {
	_id?: Types.ObjectId;
	type: PaymentHistoryTypeEnum;
	currency1?: string;
	currency2?: string;
	fee?: string;
	ipn_id?: string;
	ipn_mode?: string;
	ipn_type?: string;
	ipn_version?: string;
	merchant?: string;
	received_amount?: string;
	received_confirms?: string;
	status: string;
	status_text: string;
	txn_id: string;
	email?: string;
	net?: string;
}

const CoinPaymentHistorySchema = new mongoose.Schema({
	type: {
		type: String,
	},
	currency1: {
		type: String,
	},
	currency2: {
		type: String,
	},
	fee: {
		type: String,
	},
	email: {
		type: String,
	},
	ipn_id: {
		type: String,
	},
	ipn_mode: {
		type: String,
	},
	ipn_type: {
		type: String,
	},
	ipn_version: {
		type: String,
	},
	merchant: {
		type: String,
	},
	received_amount: {
		type: String,
	},
	received_confirms: {
		type: String,
	},
	status: {
		type: String,
	},
	status_text: {
		type: String,
	},
	txn_id: {
		type: String,
	},
	net: {
		type: String,
	},
});

const PaymentHistory = mongoose.model<CoinPaymentHistoryDocument>(
	'coinPaymentHistories',
	CoinPaymentHistorySchema
);
export default PaymentHistory;
