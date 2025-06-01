/** @format */

import { BaseRepository } from './base.repository';
import { IPaymentHistoryRepository } from './interfaces/paymentHistory.interface';

import PaymentHistory, {
	CoinPaymentHistoryDocument,
	PaymentHistoryTypeEnum,
} from '../../model/coinPaymentHistory.model';
import BinancePaymentHistory, {
	BinancePaymentHistoryDocument,
} from '../../model/binancePaymentHIstory.model';
export class PaymentHistoryRepository
	extends BaseRepository<CoinPaymentHistoryDocument>
	implements IPaymentHistoryRepository<CoinPaymentHistoryDocument>
{
	constructor() {
		super(PaymentHistory);
	}
	async storeHistory(
		input: any
	): Promise<
		CoinPaymentHistoryDocument | BinancePaymentHistoryDocument | null
	> {
		const { type } = input;
		let params: any = null;
		if (type === PaymentHistoryTypeEnum.COINPAYMENT) {
			params = {
				amount1: input.amount1,
				amount2: input.amount2,
				type: PaymentHistoryTypeEnum.COINPAYMENT,
				currency1: input.currency1,
				currency2: input.currency2,
				email: input.email,
				fee: input.fee,
				ipn_mode: input.ipn_mode,
				ipn_id: input.ipn_id,
				ipn_type: input.ipn_type,
				ipn_version: input.ipn_version,
				merchant: input.merchant,
				received_amount: input.received_amount,
				status: input.status,
				status_text: input.status_text,
				txn_id: input.txn_id,
				net: input.net ?? null,
			};
			const record = await this.model.findOne({ ipn_id: input.ipn_id }).exec();
			if (record) {
				return null;
			}
			return this.model.create(params);
		} else if (type === PaymentHistoryTypeEnum.BIANANCE) {
			params = {
				bizType: input.bizType,
				bizId: input.bizId,
				bizIdStr: input.bizIdStr,
				bizStatus: input.bizStatus,
				data: input.data,
			};
			return BinancePaymentHistory.create(params);
		}
		return null;
	}
}
