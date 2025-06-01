/** @format */

import { BaseRepository } from './base.repository';
import { IPaymentRepository } from './interfaces/payment.interface';
import PaymentMethods, {
	PaymentMethodDocument,
} from '../../model/paymentMethod.model';
import PaymentCards, {
	PaymentCardDocument,
} from '../../model/paymentcards.model';
export class PaymentRepository
	extends BaseRepository<PaymentMethodDocument>
	implements IPaymentRepository<PaymentMethodDocument>
{
	constructor() {
		super(PaymentMethods);
	}
	async storePaymentCard(
		input: PaymentCardDocument
	): Promise<PaymentCardDocument> {
		return PaymentCards.create(input);
	}
	async updatePaymentCard(
		id: string,
		item: Partial<PaymentCardDocument>
	): Promise<PaymentCardDocument | null> {
		return PaymentCards.findByIdAndUpdate(id, item, { new: false }).exec();
	}
	async deletePaymentCard(id: string): Promise<boolean> {
		const result = await PaymentCards.findByIdAndDelete(id).exec();
		return !!result;
	}
}
