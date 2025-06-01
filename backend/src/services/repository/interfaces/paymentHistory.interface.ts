/** @format */

import { PaymentHistoryDocument } from '../../../model/coinPaymentHistory.model';
import { IBaseRepository } from './base.interface';
export interface IPaymentHistoryRepository<T> extends IBaseRepository<T> {
	storeHistory(input: any): Promise<PaymentHistoryDocument | null>;
}
