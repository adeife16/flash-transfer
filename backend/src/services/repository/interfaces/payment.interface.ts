/** @format */

import { PaymentCardDocument } from '../../../model/paymentcards.model';
import { IBaseRepository } from './base.interface';
export interface IPaymentRepository<T> extends IBaseRepository<T> {
	storePaymentCard(input: PaymentCardDocument): Promise<PaymentCardDocument>;
	updatePaymentCard(
		id: string,
		item: Partial<PaymentCardDocument>
	): Promise<PaymentCardDocument | null>;
	deletePaymentCard(id: string): Promise<boolean>;
}
