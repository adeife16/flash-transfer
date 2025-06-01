/** @format */

import { IBaseRepository } from './base.interface';
import { PaymentMethodDocument } from '../../../model/paymentMethod.model';
import { ReturnPayType } from '../../paymentgateway/gateway';
import { PAYMENT_METHOD } from '../../../business/price/exInfoManager';
export interface IFTNRepository<T> extends IBaseRepository<T> {
	deleteBenificiary(id: string): Promise<boolean>;
	payPayment(
		input: any,
		payment: PAYMENT_METHOD
	): Promise<ReturnPayType>;
}
