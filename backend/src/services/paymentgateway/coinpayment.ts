/** @format */

import { url } from 'aws-sdk/clients/finspace';
import { PAYMENT_METHOD } from '../../business/price/exInfoManager';
import { UserDocument } from '../../model/users.model';
import { Request } from 'express';
import {
	IPaymentGateway,
	PAYMGETGATEWAY_STATUS_TYPE,
	PaymentInput,
	ReturnPayType,
} from './gateway';
import axios from 'axios';
import crypto from 'crypto';
export type CoinPaymentCreateTransactionOptType = {
	currency1: string;
	currency2: string;
	amount: number;
	buyer_email: string;
	address?: string;
	item_name?: string;
	item_number?: string;
	invoice?: string;
	custom?: string;
	ipn_url?: string;
	success_url?: string;
	cancel_url?: string;
};
type ParamType = {
	[key: string]: string;
};
type CreateTransactionPayloadType = {
	version: number;
	cmd: string;
	key: string;
	amount: number;
	currency1: string;
	currency2: string;
	buyer_email: string;
};
type CredentialType = {
	public_key: string;
	secret_key: string;
};
type CheckCoinPaymentInputType = {
	ipn_mode: string;
};
export class CoinPayment
	implements IPaymentGateway<CoinPaymentCreateTransactionOptType>
{
	protected url: url;
	protected credentials: CredentialType;
	protected ipn_secret: string;
	constructor() {
		this.url = 'https://www.coinpayments.net/api.php';
		const public_key = process.env.COIN_PAYMENT_PUBLIC_KEY || '';
		const private_key = process.env.COIN_PAYMENT_PRIVATE_KEY || '';
		const ipn_secret = process.env.COIN_PAYMENT_IPN_SECRET || '';
		if (public_key === '' || private_key === '') {
			throw new Error('Invalid Coinpayment key');
		}

		if (ipn_secret === '') {
			throw new Error('Ipn secret is not set');
		}
		this.credentials = {
			public_key: public_key,
			secret_key: private_key,
		};
		this.ipn_secret = ipn_secret;
	}
	async pay(
		user: UserDocument,
		payment_method: PAYMENT_METHOD,
		input: CoinPaymentCreateTransactionOptType
	): Promise<ReturnPayType> {
		const payload = {
			version: 1,
			cmd: 'create_transaction',
			key: this.credentials.public_key,
			amount: input.amount as number,
			currency1: 'USD', // Input currency
			currency2: 'LTCT' as string, // Desired cryptocurrency
			buyer_email: input.buyer_email,
			ipn_url: 'https://demo.5zeroinfo.com/api/exchange/testRecepit',
		};
		const payloadString = this.makePayloadString(payload);
		const hmacSignature = this.generateHMac(
			payloadString,
			this.credentials.secret_key
		);
		try {
			const response = await axios
				.post(this.url, payloadString, {
					headers: {
						HMAC: hmacSignature,
					},
				})
				.then((res) => res.data);
			console.log(response);
			return {
				status: PAYMGETGATEWAY_STATUS_TYPE.SUCCESS,
				checkout_url: response.checkout_url,
				status_url: response.status_url,
				txn_id: response.txn_id
			};
		} catch (e: any) {
			console.log();
			return {
				status: PAYMGETGATEWAY_STATUS_TYPE.ERROR,
				checkout_url: "",
				status_url: "",
				txn_id: ""
			};
		}
	}
	createPayInput(input: PaymentInput): CoinPaymentCreateTransactionOptType {
		const currency1 = "BUSD";
		const currency2 = input.fromToken;
		const amount = input.amount;
		const buyer_email = process.env.BUYER_EMAIL_COINPAYMENT || "";
		if (buyer_email === "") {
			throw new Error("Invalid buyer email");
		}
		const ipn_url = process.env.COINPAYMENT_IPN_URL || "";
		if (ipn_url === "") {
			throw new Error("COINPAYMENT IPNURL INVALID ERROR");
		}

		return { currency1, currency2, amount, buyer_email, ipn_url } as CoinPaymentCreateTransactionOptType;
	}
	checkPayment(paymentMethod: PAYMENT_METHOD, req: Request) {
		const {
			ipn_mode,
			ipn_type,
			txn_id,
			item_name,
			item_number,
			amount1,
			amount2,
			currency1,
			currency2,
			status,
			status_text,
		} = req.body;
		if (ipn_mode !== 'hmac') {
			throw new Error('Ipn Node is not HMAC');
		}
		if (!req.headers['http_hmac']) {
			throw new Error('No HMAC signature sent.');
		}
		const hmacSignature = this.generateHMac(req.body, this.ipn_secret);
		if (hmacSignature !== req.headers['http_hmac']) {
			throw new Error('HMAC signature does not match');
		}

		// if (currency1 !== 'USD') { // Replace 'USD' with your expected order currency
		//     errorAndDie('Original currency mismatch!');
		// }
	}

	protected makePayloadString(payload: CreateTransactionPayloadType): string {
		return Object.keys(payload)
			.map(
				(key) => `${key}=${payload[key as keyof CreateTransactionPayloadType]}`
			)
			.join('&');
	}
	protected generateHMac(payloadString: string, secret: string): string {
		return crypto
			.createHmac('sha512', secret)
			.update(payloadString)
			.digest('hex');
	}

}
