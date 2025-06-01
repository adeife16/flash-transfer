/** @format */

import { Request, Response } from 'express';
export enum EXCHANGE_STEP {
	NO_INIT = 'no_init',
	PRICE_STEP = 'price',
	BENEFICIARY_STEP = 'beneficiary',
	PAYMENT_METHOD_STEP = 'payment_method',
}
import {
	makeCookieValue,
	parseCookieValue,
	getDecryptedCookie,
	setEncryptedCookie,
	decryptCookie,
	encryptCookie,
} from '../../utils/cookies';
import { EXCHANGE_TYPE } from '../../controller/type';
export type PriceInfoType = {
	exchange_type: EXCHANGE_TYPE | null;
	rate: {
		token: number;
		currency: number;
	} | null;
	token_name: string | null;
	currency_name: string | null;
	fee?: number;
	amount_token?: number;
	amount_fiat?: number;
	total_pay: number;
	receipt_amount: number;
};
export enum PAYMENT_METHOD {
	WALLET = 'wallet',
	BINANCE = 'binance',
	ORANGE = 'orange',
}
export enum ORANGE_DEVELIVERD_METHOD {
	MOBILE = 'mobile',
}

export type BeneficiaryInfoType = {
	id: string;
	info: {
		first_name: string;
		last_name: string;
		country: string;
		street_address: string;
		orange_phone?: string;
		city: string;
		state: string;
		zip: string;
	} | null;
};
export type PaymentMethodType = {
	sender_method: PAYMENT_METHOD;
	receiver_method: PAYMENT_METHOD;
	orange_delivered_method: ORANGE_DEVELIVERD_METHOD;
};
export type ExchangeInfo = {
	step: EXCHANGE_STEP;
	price: PriceInfoType | null;
	benificiary: BeneficiaryInfoType | null;
	payment_method: PaymentMethodType | null;
};
export class ExchangeInforManager {
	request: Request;
	response: Response;
	constructor(req: Request, res: Response) {
		this.request = req;
		this.response = res;
	}
	storePrice(price: PriceInfoType) {
		let result = {} as ExchangeInfo;
		result.price = price;
		result.step = EXCHANGE_STEP.PRICE_STEP;
		result.benificiary = null;
		result.payment_method = null;
		this.storeExchangeInfoToCookie(result);
	}
	storeBeneficiary(beneficiary: BeneficiaryInfoType) {
		const exchangeInfo = this.getExchangeInfoFromCookie();
		if (!exchangeInfo) {
			throw new Error('There is no Exchange info');
		}
		const step = exchangeInfo.step;
		if (step === EXCHANGE_STEP.NO_INIT) {
			throw new Error('Please do Price step ');
		}
		let result = {} as ExchangeInfo;
		result.step = EXCHANGE_STEP.BENEFICIARY_STEP;
		result.benificiary = beneficiary;
		result.price = exchangeInfo.price;
		result.payment_method = exchangeInfo.payment_method;
		this.storeExchangeInfoToCookie(result);
	}
	storePaymentMethod(pay_method: PaymentMethodType) {
		const exchangeInfo = this.getExchangeInfoFromCookie();
		if (!exchangeInfo) {
			throw new Error('There is no Exchange info');
		}
		const step = exchangeInfo.step;
		if (step === EXCHANGE_STEP.NO_INIT || step === EXCHANGE_STEP.PRICE_STEP) {
			throw new Error('Please do beneficiary step ');
		}
		let result = {} as ExchangeInfo;
		result.step = EXCHANGE_STEP.PAYMENT_METHOD_STEP;
		result.benificiary = exchangeInfo.benificiary;
		result.price = exchangeInfo.price;
		result.payment_method = pay_method;
		this.storeExchangeInfoToCookie(result);
	}
	getExchangeInfoFromCookie(): ExchangeInfo | null {
		const cookie = getDecryptedCookie(this.request, 'exchange');
		if (!cookie) return null;
		const exchangeInfo = parseCookieValue(cookie) as ExchangeInfo;
		return exchangeInfo;
	}
	getCurrentStep(): EXCHANGE_STEP {
		const exchangeInfo = this.getExchangeInfoFromCookie();
		if (!exchangeInfo) return EXCHANGE_STEP.NO_INIT;
		return exchangeInfo.step;
	}
	getBeneficiaryInformation(): BeneficiaryInfoType | null {
		const exchangeInfo = this.getExchangeInfoFromCookie();
		if (!exchangeInfo) return null;
		return exchangeInfo.benificiary;
	}
	storeExchangeInfoToCookie(info: ExchangeInfo) {
		setEncryptedCookie(this.response, 'exchange', makeCookieValue(info));
	}
	storeNoInit() {
		const price = {
			rate: null,
			amount_token: 0,
			amount_fiat: 0,
			exchange_type: null,
			fee: 0,
			token_name: null,
			currency_name: null,
			total_pay: 0,
			receipt_amount: 0,
		} as PriceInfoType;

		const exchangeInfo = {
			step: EXCHANGE_STEP.NO_INIT,
			price,
			benificiary: null,
			payment_method: null,
		} as ExchangeInfo;
		setEncryptedCookie(
			this.response,
			'exchange',
			makeCookieValue(exchangeInfo)
		);
	}
	checkPaymentMethod(payment: any): payment is PAYMENT_METHOD {
		return payment in PAYMENT_METHOD;
	}
	checkOrangeDeliveredMethod(pay: any): pay is ORANGE_DEVELIVERD_METHOD {
		return pay in ORANGE_DEVELIVERD_METHOD;
	}
	checkAllInformation():ExchangeInfo {
		const exchangeInfo = this.getExchangeInfoFromCookie();
		if (!exchangeInfo) {
			throw new Error('There is no exchange infomation');
		}
		const currentStep = this.getCurrentStep();
		if (currentStep !== EXCHANGE_STEP.PAYMENT_METHOD_STEP) {
			throw new Error('Invalid exchange information');
		}
		if (!exchangeInfo.price) {
			throw new Error('Threre is no price information');
		}
		if (!exchangeInfo.benificiary) {
			throw new Error('There is no beneficiary inforamtion');
		}
		if (!exchangeInfo.payment_method) {
			throw new Error('There is no payment inforamtion');
		}
		return exchangeInfo;
	}
}
