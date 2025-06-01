/** @format */

import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { BinancePriceGetter } from '../business/price/priceGetter';
import { PriceManager } from '../business/price/priceManager';
import log from '../logger';
import axios from 'axios';
import crypto from 'crypto';
import Benificiary, { BeneficiaryDocument } from '../model/beneficiary.model';
import {
	PaymentMethodDocument,
	PAYMENT_TYPE,
	PAYMENT_WAY_TYPE,
} from '../model/paymentMethod.model';
import { BeneficiaryRepository } from '../services/repository/beneficiary.repository';
import { FTNRepository } from '../services/repository/ftn.repository';
import { PaymentHistoryRepository } from '../services/repository/paymentHIstory.repository';
import { PaymentHistoryTypeEnum } from '../model/coinPaymentHistory.model';

import { UserRepository } from '../services/repository/user.repository';
import {
	setEncryptedCookie,
	getDecryptedCookie,
	makeCookieValue,
	parseCookieValue,
} from '../utils/cookies';
import { PaymentRepository } from '../services/repository/payment.repository';
import { EXCHANGE_TYPE, CALCULATE_PRICE_INPUT_TYPE } from './type';
import {
	ExchangeInforManager,
	PAYMENT_METHOD,
	EXCHANGE_STEP,
} from '../business/price/exInfoManager';
import { PAYMGETGATEWAY_STATUS_TYPE } from '../services/paymentgateway/gateway';
export async function caluclatePrice(req: Request, res: Response) {
	try {
		const {
			token, //token name
			currency, //currency name
			input_type, //input token amount or input fiat amount
			amount_token, //amount of token optional
			amount_fiat, //amount of fiat optional
			exchange_type, //fiat to crypto or crypto to fiat or fiat to fiat
		} = req.body;
		// --------------------------  check amount token and amount fiat exist ---------------------------------------------
		if (input_type === CALCULATE_PRICE_INPUT_TYPE.FIAT) {
			if (!amount_fiat)
				return res
					.status(500)
					.json({ success: false, msg: 'amount_fiat feild should be exist' });
		}

		if (input_type === CALCULATE_PRICE_INPUT_TYPE.TOKEN) {
			if (!amount_token)
				return res
					.status(500)
					.json({ success: false, msg: 'amount_token feild should be exist' });
		}

		// --------------------------  check exchange type ---------------------------------------------
		let _exchangeType = EXCHANGE_TYPE.CRYPTO_FIAT;

		if (exchange_type === EXCHANGE_TYPE.CRYPTO_FIAT) {
			_exchangeType = EXCHANGE_TYPE.CRYPTO_FIAT;
		} else if (exchange_type === EXCHANGE_TYPE.FIAT_CRYPTO) {
			_exchangeType = EXCHANGE_TYPE.FIAT_CRYPTO;
		} else {
			_exchangeType = EXCHANGE_TYPE.FIAT_FIAT;
		}

		// --------------------------  get users fee to exchange currency---------------------------------------------
		const userInstance = new UserRepository();

		let fee = await userInstance.getFee(
			req.session.user_id ?? '-1',
			_exchangeType
		);

		// --------------------------  get price from binance ---------------------------------------------
		const priceGetter = new BinancePriceGetter('https://www.binance.com');
		const priceInstance = new PriceManager(priceGetter);
		const price = await priceInstance.getPrice(token, currency);
		const exchangeInfoManager = new ExchangeInforManager(req, res);

		if (!price.status) {
			//no init
			exchangeInfoManager.storeNoInit();

			return res.status(200).json({ success: false, msg: price.msg });
		}

		// --------------------------  calcualte amount part ---------------------------------------------
		let token_amount = 1;
		let fiat_amount = price.price?.currency!;
		let total_pay = 0;
		let receipt_amount = 0;
		let feeAmount = 0;
		if (input_type === CALCULATE_PRICE_INPUT_TYPE.FIAT) {
			token_amount = amount_fiat / fiat_amount;
			fiat_amount = amount_fiat;
		} else if (input_type === CALCULATE_PRICE_INPUT_TYPE.TOKEN) {
			token_amount = amount_token;
			fiat_amount = amount_token * fiat_amount;
		}

		//-------------------- calculate receipient amonut -----------------------------
		if (exchange_type === EXCHANGE_TYPE.CRYPTO_FIAT) {
			total_pay = token_amount;
			receipt_amount =
				(token_amount - fee * token_amount) * price.price?.currency!;
			feeAmount = fee * token_amount;
		} else if (exchange_type === EXCHANGE_TYPE.FIAT_CRYPTO) {
			total_pay = fiat_amount;
			receipt_amount =
				(fiat_amount - fee * fiat_amount) / price.price?.currency!;
			feeAmount = fee * fiat_amount;
		}

		const priceInfo = {
			exchange_type: _exchangeType,
			fee: fee,
			total_pay: total_pay,
			receipt_amount: receipt_amount,
			rate: price.price!,
			amount_token: token_amount,
			amount_fiat: fiat_amount,
			token_name: token,
			currency_name: currency,
		};

		exchangeInfoManager.storePrice(priceInfo);

		return res.json({
			success: true,
			data: {
				rate: price.price!,
				amout_token: token_amount,
				exchange_type: _exchangeType,
				feeAmount: feeAmount,
				total_pay: total_pay,
				receipt_amount: receipt_amount,
			},
		});
	} catch (e: any) {
		log.error('Calculate Price Error:', e);
		res.status(400).json({ error: e.message as string });
	}
}
export async function getPrice(req: Request, res: Response) {
	try {
		const { token, currency } = req.body;
		const priceGetter = new BinancePriceGetter('https://www.binance.com');
		const priceInstance = new PriceManager(priceGetter);
		const price = await priceInstance.getPrice(token, currency);

		if (!price.status) {
			req.session.exchange_info = {
				step: EXCHANGE_STEP.NO_INIT,
				rate: undefined,
				amount_token: 0,
				amount_fiat: 0,
				exchange_type: null,
				fee: 0,
				total_pay: 0,
				receipt_amount: 0,
			};
			return res.status(200).json({ success: false, msg: price.msg });
		}

		req.session.exchange_info = {
			step: EXCHANGE_STEP.PRICE_STEP,
			rate: price.price!,
			exchange_type: null,
			amount_token: 0,
			amount_fiat: 0,
			fee: 0,
			total_pay: 0,
			receipt_amount: 0,
		};

		return res.status(200).json({ success: true, price: price.price });
	} catch (e: any) {
		log.error('getPrice Error:', e);
		res.status(400).json({ error: e.message as string });
	}
}

// function generateHmac(data: any, secret: any) {
// 	const hmac = crypto.createHmac('sha512', secret);
// 	hmac.update(data);
// 	return hmac.digest('hex');
// }

export async function testModel(req: Request, res: Response) {
	try {
		const { amount, currency } = req.body;

		const ftnInstance = new FTNRepository();
		const payment = PAYMENT_METHOD.WALLET;
		const paymentGateway = ftnInstance.createPaymentGateway(payment);
		if (!paymentGateway)
			return res.json({ msg: 'There is no payment gateway' });
		const result = await paymentGateway.pay({} as any, payment, {
			amount,
			currency2: currency,
			buyer_email: 'ernestpapyan0718@gmail.com',
		});
		console.log(result);
		return res.json({ status: true, result });
	} catch (e: any) {
		log.error('getPrice Error:', e);
		res.status(400).json({ error: e.message as string });
	}
}

export async function testReceipt(req: Request, res: Response) {
	try {
		console.log('res,', req.body, req.params);
		let input = req.body;
		if (input.buyer_name === 'CoinPayments API') {
			input.type = PaymentHistoryTypeEnum.COINPAYMENT;
		}
		const respositoryInstance = new PaymentHistoryRepository();
		const result = await respositoryInstance.storeHistory(input);
		console.log('result:', result);
		return res.json({ result });
	} catch (e: any) {
		log.error('getPrice Error:', e);
		res.status(400).json({ error: e.message as string });
	}
}
export async function storeBeneficiary(req: Request, res: Response) {
	try {
		const BeneficiaryInstance = new BeneficiaryRepository();
		const result = await BeneficiaryInstance.create(req.body);
		res.json({ success: true, data: result });
	} catch (e: any) {
		log.error('getPrice Error:', e);
		res.status(400).json({ error: e.message as string });
	}
}

export async function getBeneficiaries(req: Request, res: Response) {
	try {
		if (!req.session.user_id) {
			return res.status(500).json({ success: false, msg: 'Please login!' });
		}
		const userInstance = new UserRepository();
		const user = await userInstance.findById(req.session.user_id);
		if (!user) {
			return res.status(500).json({ success: false, msg: 'There is no user' });
		}

		const beneficiaries = await userInstance.getBeneficiaryInformationById(
			req.session.user_id
		);
		return res.status(200).json({ success: true, data: beneficiaries });
	} catch (e: any) {
		log.error('get beneficiries api  Error:', e);
		res.status(400).json({ error: e.message as string });
	}
}

export async function postSelectBeneficiary(req: Request, res: Response) {
	try {
		const { beneficiary } = req.body;

		const exchangeInfoManager = new ExchangeInforManager(req, res);
		exchangeInfoManager.storeBeneficiary({ id: beneficiary, info: null });
		return res.json({ succcess: true });
	} catch (e: any) {
		log.error('get beneficiries api  Error:', e);
		res.status(400).json({ error: e.message as string });
	}
}

export async function showBeneficiaryInformation(req: Request, res: Response) {
	try {
		const exchangeInfoManager = new ExchangeInforManager(req, res);
		const beneficiary = exchangeInfoManager.getBeneficiaryInformation();
		if (!beneficiary) {
			return res
				.status(500)
				.json({ success: false, msg: 'There is no benificiary information' });
		}
		const id = beneficiary?.id;
		if (id === '0') {
			//for me
			const userRepositoryInstance = new UserRepository();
			const user = await userRepositoryInstance.findById(req.session.user_id!);
			if (!user) {
				return res
					.status(500)
					.json({ success: false, msg: 'Something went wrong' });
			}

			return res.json({ success: true, data: user });
		} else if (id === '-1') {
			return res.json({ success: true, data: {} });
		} else {
			const beneficiaryRepositoryIns = new BeneficiaryRepository();
			const beneficiaryInformation = await beneficiaryRepositoryIns.findById(
				id.toString()
			);

			if (!beneficiaryInformation) {
				return res
					.status(500)
					.json({ success: false, msg: 'There is no benenficiary record' });
			}

			return res.json({ success: true, data: beneficiaryInformation });
		}
	} catch (e: any) {
		log.error('get beneficiries api  Error:', e);
		res.status(400).json({ error: e.message as string });
	}
}

export async function postBeneficiaryInformation(req: Request, res: Response) {
	try {
		const exchangeInfo = new ExchangeInforManager(req, res);
		const beneficiary = exchangeInfo.getBeneficiaryInformation();

		if (!beneficiary) {
			return res
				.status(500)
				.json({ success: false, msg: 'There is no beneficiary information' });
		}

		const id = beneficiary.id;
		if (id === '-1') {
			const {
				email,
				first_name,
				last_name,
				country,
				street_address,
				city,
				province,
				zip_postal,
				state,
				orange_phone,
			} = req.body;
			if (
				!email ||
				!first_name ||
				!last_name ||
				!country ||
				!street_address ||
				!city ||
				!province ||
				!zip_postal ||
				!state
			) {
				return res.json({
					success: false,
					msg: 'Please input information correctly',
				});
			}

			const user_id = req.session.user_id;
			if (!user_id)
				return res
					.status(500)
					.json({ success: false, msg: 'Something went wrong' });
			const userId = new Types.ObjectId(user_id);
			const params = {
				email,
				first_name,
				last_name,
				country,
				street_address,
				city,
				province,
				zip: zip_postal,
				state,
				orange_phone,
			};

			exchangeInfo.storeBeneficiary({ id: '-1', info: params });
		}

		return res.json({ success: true });
	} catch (e: any) {
		log.error('postBeneficiaryInformation api  Error:', e);
		res.status(400).json({ error: e.message as string });
	}
}

export async function selectPaymentMethod(req: Request, res: Response) {
	try {
		const { pay_way, receive_way, orange_delivered_method } = req.body;
		const exchangeInfo = new ExchangeInforManager(req, res);
		if (!exchangeInfo.checkPaymentMethod(pay_way)) {
			return res
				.status(500)
				.json({ status: false, msg: 'Invalid payment method' });
		}
		if (!exchangeInfo.checkPaymentMethod(receive_way)) {
			return res
				.status(500)
				.json({ status: false, msg: 'Invalid payment method' });
		}
		if (pay_way === receive_way) {
			return res.status(500).json({
				status: false,
				msg: 'pay paymentmethod should not be same with receive payment method',
			});
		}
		if (!exchangeInfo.checkOrangeDeliveredMethod(orange_delivered_method)) {
			return res
				.status(500)
				.json({ status: false, msg: 'Invalid orange money method' });
		}
		exchangeInfo.storePaymentMethod({
			sender_method: pay_way,
			receiver_method: receive_way,
			orange_delivered_method,
		});
		return res.json({ status: true });
	} catch (e: any) {
		log.error(' selectPaymentMethod api  Error:', e);
		res.status(400).json({ error: e.message as string });
	}
}

export async function getReviewDetail(req: Request, res: Response) {
	try {
		const exchangeInfoMnager = new ExchangeInforManager(req, res);
		const currentStep = exchangeInfoMnager.getCurrentStep();
		if (currentStep !== EXCHANGE_STEP.PAYMENT_METHOD_STEP) {
			return res
				.status(500)
				.json({ status: false, msg: 'Invalid review detail' });
		}
		const exchangeInfo = exchangeInfoMnager.getExchangeInfoFromCookie();
		if (!exchangeInfo) {
			return res
				.status(500)
				.json({ status: false, msg: 'There is no exchange info' });
		}
		return res.json({ status: true, data: { exchangeInfo } });
	} catch (e: any) {
		log.error(' binance notification api  Error:', e);
		return res.json({ returnCode: 'FAIL', returnMessage: e?.message });
	}
}
export async function processConvert(req: Request, res: Response) {
	try {
		const exchangeInfoMnager = new ExchangeInforManager(req, res);
		const user_id = req.session.user_id;
		if (!user_id) {
			return res.status(500).json({ status: false, msg: "There is no user" });
		}
		const exchangeInforWithChecking = exchangeInfoMnager.checkAllInformation();
		const ftnInstance = new FTNRepository();
		const result = await ftnInstance.processPayment(user_id, exchangeInforWithChecking)
		if (result.status === PAYMGETGATEWAY_STATUS_TYPE.ERROR) {
			return res.status(500).json({ status: false, msg: "Something went wrong" });
		}
		return res.json({
			status: true, data: {
				checkout_url: result.checkout_url
			}
		})
	} catch (e: any) {
		log.error(' binance notification api  Error:', e);
		return res.json({ returnCode: 'FAIL', returnMessage: e?.message });
	}
}
export async function getFTNInformation(req: Request, res: Response) {
	try {
		const { ftn_number } = req.body;
		const ftnInstance = new FTNRepository();
		const ftnInformation = await ftnInstance.getFTNInformationByFtNNumber(ftn_number);
		return res.json({
			status: true, data: {
				ftn: ftnInformation
			}
		})
	} catch (e: any) {
		log.error(' binance notification api  Error:', e);
		return res.json({ returnCode: 'FAIL', returnMessage: e?.message });
	}
}
export async function binanceNotification(req: Request, res: Response) {
	try {
		const { bizType, data, bizIdStr, bizId, bizStatus } = req.body;
	} catch (e: any) {
		log.error(' binance notification api  Error:', e);
		return res.json({ returnCode: 'FAIL', returnMessage: e?.message });
	}
}
export async function testOrangeMoney(req: Request, res: Response) {
	try {
		const ftnInstance = new FTNRepository();
		const payment = PAYMENT_METHOD.ORANGE
		const paymentGateway = ftnInstance.createPaymentGateway(payment);
		if (!paymentGateway)
			return res.json({ msg: 'There is no payment gateway' });
		const result = await paymentGateway.pay({} as any, payment, {});
		console.log('result', result);
	} catch (e: any) {
		log.error('teset orangemoney api error', e);
		return res.status(400).json({ error: e.message as string });
	}
}
