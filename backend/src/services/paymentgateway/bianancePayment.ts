/** @format */

import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { PAYMENT_METHOD } from '../../business/price/exInfoManager';
import { UserDocument } from '../../model/users.model';
import {
	IPaymentGateway,
	ReturnPayType,
	PAYMGETGATEWAY_STATUS_TYPE,
	PaymentInput,
} from './gateway';
import crypto from 'crypto';
import axios from 'axios';
enum REQUEST_METHOD {
	GET = 'GET',
	POST = 'POST',
}
export type CraeteBianncePaymentOrderType = {};
export class BianancePayment
	implements IPaymentGateway<CraeteBianncePaymentOrderType>
{
	protected apikey: string;
	protected baseUrl: string;
	constructor(apiKey?: string) {
		if (!apiKey) {
			this.apikey = process.env.BINANCE_APIKEY || '';
		} else {
			this.apikey = apiKey;
		}

		if (this.apikey === '') {
			throw new Error('Bianance Invalid Api key ');
		}
		this.baseUrl = 'https://bpay.binanceapi.com';
	}
	createPayInput(input: PaymentInput): CraeteBianncePaymentOrderType {
		return {}
	}
	async pay(
		user: UserDocument,
		payment_method: PAYMENT_METHOD,
		input: CraeteBianncePaymentOrderType
	): Promise<ReturnPayType> {
		try {
			const merchantTradeNo = new Date().getUTCMilliseconds();
			console.log('merchantTradeNo:', merchantTradeNo);
			const body = {
				env: {
					terminalType: 'APP',
				},
				orderTags: {
					ifProfitSharing: true,
				},
				merchantTradeNo: merchantTradeNo,
				orderAmount: 25.167,
				currency: 'USDT',
				description: 'very good ice cream',
				goodsDetails: [
					{
						goodsType: '01',
						goodsCategory: 'D000',
						referenceGoodsId: '7876763A3B',
						goodsName: 'Ice Cream',
						goodsDetail: 'Greentea ice cream once',
					},
				],
			};

			const response = await this.dispatch_request(
				REQUEST_METHOD.POST,
				'/binancepay/openapi/v3/order',
				body
			);
			console.log(response);
			return {
				status: PAYMGETGATEWAY_STATUS_TYPE.SUCCESS,
				checkout_url: "",
				status_url: "",
				txn_id: ""
			};
		} catch (e: any) {
			console.log('binance error:', e);
			return {
				status: PAYMGETGATEWAY_STATUS_TYPE.ERROR,
				checkout_url: "",
				status_url: "",
				txn_id: ""
			};
		}
	}
	checkPayment(
		paymentMethod: PAYMENT_METHOD,
		req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
	) { }

	createSignature(payload: string): string {
		const hmac = crypto.createHmac('sha512', this.apikey);
		hmac.update(payload);
		return hmac.digest('hex').toUpperCase();
	}

	random_string() {
		return crypto.randomBytes(32).toString('hex').substring(0, 32);
	}
	dispatch_request(
		http_method: REQUEST_METHOD,
		path: string,
		payload: Object = {}
	) {
		const timestamp = Date.now();
		const nonce = this.random_string();
		const payload_to_sign =
			timestamp + '\n' + nonce + '\n' + JSON.stringify(payload) + '\n';
		const url = this.baseUrl + path;
		const signature = this.createSignature(payload_to_sign);
		return axios
			.create({
				baseURL: this.baseUrl,
				headers: {
					'content-type': 'application/json',
					'BinancePay-Timestamp': timestamp,
					'BinancePay-Nonce': nonce,
					'BinancePay-Certificate-SN': this.apikey,
					'BinancePay-Signature': signature.toUpperCase(),
				},
			})
			.request({
				method: http_method,
				url,
				data: payload,
			});
	}
	query_order() {
		this.dispatch_request(
			REQUEST_METHOD.POST,
			'/binancepay/openapi/order/query',
			{
				merchantId: '12345678',
				merchantTradeNo: '12333333232',
			}
		)
			.then((response) => console.log(response.data))
			.catch((error) => console.log(error));
	}
}
