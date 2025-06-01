/** @format */

import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { PAYMENT_METHOD } from '../../business/price/exInfoManager';
import { UserDocument } from '../../model/users.model';
import { FedaPay, Transaction } from 'fedapay';
import axios from 'axios';
import {
	IPaymentGateway,
	PAYMGETGATEWAY_STATUS_TYPE,
	PaymentInput,
	ReturnPayType,
} from './gateway';
export type OrangeMomeyCreateTransactionOpsType = {};
export enum ENVIRONMENT {
	PRODUCTION = 'production',
	DEVELOPMENT = 'development',
}
export class OrangeMoney
	implements IPaymentGateway<OrangeMomeyCreateTransactionOpsType>
{
	protected secret_key: string;

	constructor(env: ENVIRONMENT, client_id: string, secret_key: string) {
		if (env === ENVIRONMENT.PRODUCTION) {
			FedaPay.setEnvironment('live');
		} else {
			FedaPay.setEnvironment('sandbox');
		}

		if (secret_key === '') {
			throw new Error('Invalid secret key');
		}
		FedaPay.setApiKey(secret_key);
		this.secret_key = secret_key;
	}
	createPayInput(input: PaymentInput): OrangeMomeyCreateTransactionOpsType {
		return {} as OrangeMomeyCreateTransactionOpsType
	}
	async pay(
		user: UserDocument,
		payment_method: PAYMENT_METHOD,
		input: OrangeMomeyCreateTransactionOpsType
	): Promise<ReturnPayType> {
		try {
			const transaction = await Transaction.create({
				description: 'Description',
				amount: 2000,
				callback_url: 'http://mywebsite.com/callback',
				currency: {
					iso: 'XOF',
				},
				customer: {
					firstname: 'John',
					lastname: 'Doe',
					email: 'ernestpapyan0718@gmail.com',
				},
			});
			const token = await transaction.generateToken();
			console.log('token', token);
			return {
				status: PAYMGETGATEWAY_STATUS_TYPE.SUCCESS,
				checkout_url: "",
				status_url: "",
				txn_id: ""
			};
		} catch (e: any) {
			console.log('orangemoney error:', e);
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
}
