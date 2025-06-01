/** @format */

import mongoose, { Types } from 'mongoose';
export enum PaymentHistoryTypeEnum {
	COINPAYMENT = 'coinpayment',
	BIANANCE = 'binance',
}
export type NotificationDataType = {
	merchantTradeNo: string;
	productType: string;
	productName: string;
	transactTime: number;
	tradeType: string;
	totalFee: number;
	currency: string;
	transactionId?: string;
	openUserId?: string;
	passThroughInfo?: string;
	commission: number;
	paymentInfo?: PaymentInformationDataType;
};
export type PaymentInformationDataType = {
	payerId: number;
	payMethod: string;
	paymentInstructions: PaymentInstructionDataType[];
	channel?: string;
	subChannel?: string;
};
export type PaymentInstructionDataType = {
	currency: string;
	amount: string;
	price: string;
};
export interface BinancePaymentHistoryDocument extends mongoose.Document {
	_id?: Types.ObjectId;
	bizType: string;
	bizId: number;
	bizIdStr: string;
	bizStatus: string;
	data: NotificationDataType;
}

const BinancePaymentHistorySchema = new mongoose.Schema({
	bizType: {
		type: String,
		required: true,
	},
	bizId: {
		type: Number,
		required: true,
	},
	bizIdStr: {
		type: String,
		required: true,
	},
	bizStatus: {
		type: String,
		required: true,
	},
	data: {
		merchantTradeNo: {
			type: String,
			required: true,
		},
		productType: {
			type: String,
			required: true,
		},
		productName: {
			type: String,
			required: true,
		},
		transactTime: {
			type: String,
			required: true,
		},
		tradeType: {
			type: String,
			required: true,
		},
		totalFee: {
			type: Number,
			required: true,
		},
		currency: {
			type: String,
			required: true,
		},
		transactionId: {
			type: String,
		},
		openUserId: {
			type: String,
		},
		passThroughInfo: {
			type: String,
		},
		commission: { type: Number, required: true },
		paymentInfo: {
			payerId: {
				type: Number,
				required: true,
			},
			payMethod: {
				type: String,
				required: true,
			},
			paymentInstructions: [
				{
					currency: {
						type: String,
						required: true,
					},
					amount: {
						type: String,
						required: true,
					},
					price: {
						type: String,
						required: true,
					},
				},
			],
			channel: {
				type: String,
			},
			subChannel: {
				type: String,
			},
		},
	},
});

const BinancePaymentHistory = mongoose.model<BinancePaymentHistoryDocument>(
	'binancePaymentHistories',
	BinancePaymentHistorySchema
);
export default BinancePaymentHistory;
