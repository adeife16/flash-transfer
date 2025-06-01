/** @format */

import { PaymentMethodDocument } from '../../model/paymentMethod.model';
import { UserDocument } from '../../model/users.model';
import { Request } from 'express';
import { PAYMENT_METHOD } from '../../business/price/exInfoManager';
export enum PAYMGETGATEWAY_STATUS_TYPE {
	SUCCESS = 'success',
	ERROR = 'error',
}
export type PaymentInput = {
	fromToken: string;
	toToken: string;
	amount: number;
}
export interface PayReturnType {
	status: PAYMGETGATEWAY_STATUS_TYPE;
	txn_id: string;
	checkout_url: string;
	status_url: string;
}
export interface ReturnPayType extends PayReturnType {
	[key: string]: any;
}
export interface IPaymentGateway<T> {
	pay(
		user: UserDocument,
		payment_method: PAYMENT_METHOD,
		input: T
	): Promise<ReturnPayType>;
	checkPayment(paymentMethod: PAYMENT_METHOD, req: Request): any;
	createPayInput(input: PaymentInput): T
}

//update
