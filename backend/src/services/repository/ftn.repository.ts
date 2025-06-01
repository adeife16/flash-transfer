/** @format */

import { BaseRepository } from './base.repository';
import { IFTNRepository } from './interfaces/ftn.interface';
import FTN, { FTNDocument } from '../../model/ftn.model';
import PaymentMethods, {
	PaymentMethodDocument,

} from '../../model/paymentMethod.model';
import { PAYMENT_METHOD } from '../../business/price/exInfoManager';
import { IPaymentGateway, PAYMGETGATEWAY_STATUS_TYPE, PaymentInput } from '../paymentgateway/gateway';
import { CoinPayment, CoinPaymentCreateTransactionOptType } from '../paymentgateway/coinpayment';
import { BianancePayment, CraeteBianncePaymentOrderType } from '../paymentgateway/bianancePayment';
import { ENVIRONMENT, OrangeMomeyCreateTransactionOpsType, OrangeMoney } from '../paymentgateway/orange';
import { ReturnPayType } from '../paymentgateway/gateway';
import { ExchangeInfo } from '../../business/price/exInfoManager';
import { BeneficiaryRepository } from '../../services/repository/beneficiary.repository';
import { BeneficiaryDocument } from '../../model/beneficiary.model';
import { v4 as uuidv4 } from 'uuid';
import { UserRepository } from './user.repository';
import { EXCHANGE_TYPE } from '../../controller/type';
import { Types } from 'mongoose';
import { IPaymentRepository } from './interfaces/payment.interface';
import { PaymentRepository } from './payment.repository';
export type ReturnProcessPaymentType = {
	status: PAYMGETGATEWAY_STATUS_TYPE,
	checkout_url: string;
	status_url: string;
}
export class FTNRepository
	extends BaseRepository<FTNDocument>
	implements IFTNRepository<FTNDocument>
{
	// payment: IPaymentRepository<PaymentMethodDocument>;
	constructor() {
		super(FTN);
		// this.payment = new PaymentRepository();
	}
	async deleteBenificiary(id: string): Promise<boolean> {
		return true;
	}
	async payPayment(
		input: PaymentInput,
		payment: PAYMENT_METHOD
	): Promise<ReturnPayType> {
		const gatewayInstance = this.createPaymentGateway(payment);
		if (!gatewayInstance) throw new Error('There is no payment gateway');
		const user: any = null;
		const paymentInput = gatewayInstance.createPayInput(input);
		return gatewayInstance.pay(user, payment, paymentInput);
	}
	createPaymentGateway(
		payment: PAYMENT_METHOD
	): IPaymentGateway<any> | null {
		let paymentGateway: IPaymentGateway<any> | null = null;
		switch (payment) {
			case PAYMENT_METHOD.WALLET:
				return new CoinPayment() as IPaymentGateway<CoinPaymentCreateTransactionOptType>;
			case PAYMENT_METHOD.BINANCE:
				return new BianancePayment() as IPaymentGateway<CraeteBianncePaymentOrderType>;
			case PAYMENT_METHOD.ORANGE:
				const secret_key = process.env.ORANGEMONEY_SECRET_KEY || '';
				return new OrangeMoney(
					ENVIRONMENT.DEVELOPMENT,
					'',
					secret_key
				) as IPaymentGateway<OrangeMomeyCreateTransactionOpsType>;
			default:
				return null;
		}
	}
	async getFTNInformationByFtNNumber(ftn_number: string) {
		const ftn_record = await this.model.find({ ftn_number: ftn_number });
		if (!ftn_record) {
			throw new Error("There is no ftn_record");
		}
		return ftn_record
	}
	generateFTNNumber(): string {
		return uuidv4();
	}
	async processPayment(user_id: string, exchangeInfomation: ExchangeInfo): Promise<ReturnProcessPaymentType> {
		const userRepositoryInstance = new UserRepository();
		const user = await userRepositoryInstance.findById(user_id);
		if (!user) {
			throw new Error('There is no user');
		}
		const beneficiary = exchangeInfomation.benificiary;
		const beneficiaryInstance = new BeneficiaryRepository();
		let beneficiary_inforamtion;
		let beneficiary_id;
		if (!beneficiary) {
			throw new Error('There is no beneficiary information');
		}
		if (beneficiary.id === '-1') {
			beneficiary_inforamtion = beneficiary.info;
			if (!beneficiary_inforamtion) {
				throw new Error('Invalid Beneficiary Information');
			}
			const beneficiary_record = await beneficiaryInstance.create(
				beneficiary_inforamtion as BeneficiaryDocument
			);
			beneficiary_id = beneficiary_record['_id'];
		} else if (beneficiary.id === '0') {
			beneficiary_id = '0';
		} else {
			const beneficiary_record = await beneficiaryInstance.findById(
				beneficiary.id
			);

			if (!beneficiary_record) {
				throw new Error('There is no beneficiary record');
			}
			beneficiary_id = beneficiary_record['_id'];
		}
		const ftn_number = this.generateFTNNumber();
		const priceInformation = exchangeInfomation.price!;
		const payment_method = exchangeInfomation.payment_method!;
		const fee = priceInformation.fee!;
		const _user_id = user['_id']!;
		const payMethod = payment_method.sender_method;  //payment method id
		const receiverMethod = payment_method.receiver_method; //payment method id
		const orange_money_method = payment_method.orange_delivered_method; //payment method id
		const rate = JSON.stringify(priceInformation.rate);
		const total_paid = priceInformation.total_pay;
		// check sent currency

		const exchange_type = priceInformation.exchange_type!;
		let sent_currency: string;
		let sent_amount: number;
		let withdraw_amount: number;
		let withdrow_currency: string;
		if (exchange_type === EXCHANGE_TYPE.CRYPTO_FIAT) {
			sent_currency = priceInformation.token_name!;
			sent_amount = priceInformation.amount_token!;
			withdraw_amount = priceInformation.amount_fiat!;
			withdrow_currency = priceInformation.currency_name!;
		} else {
			sent_currency = priceInformation.currency_name!;
			sent_amount = priceInformation.amount_fiat!;
			withdraw_amount = priceInformation.amount_token!;
			withdrow_currency = priceInformation.token_name!;
		}

		const paymentInput: PaymentInput = {
			fromToken: sent_currency,
			toToken: withdrow_currency,
			amount: sent_amount
		};
		const payInstance = await this.payPayment(paymentInput, payMethod);

		if (payInstance.status === PAYMGETGATEWAY_STATUS_TYPE.ERROR) {
			return {
				status: PAYMGETGATEWAY_STATUS_TYPE.ERROR,
				checkout_url: "",
				status_url: ""
			}
		}
		const ftnData: FTNDocument = {
			ftn_number,
			beneficiary: new Types.ObjectId(beneficiary_id!)!,
			pay_trx: payInstance.txn_id,
			fee: fee,
			user: _user_id,
			payMethod: payMethod,
			withdrawMethod: receiverMethod,
			sent_amount: sent_amount,
			sent_currency: sent_currency,
			withdraw_amount: withdraw_amount,
			withdraw_currnecy: withdrow_currency,
			total_paid,
			orange_money_method,
			rate
		} as FTNDocument

		const ftnRecord = await this.create(ftnData);
		if (!ftnRecord) {
			throw new Error("Error for create ftn record")
		}
		return {
			status: PAYMGETGATEWAY_STATUS_TYPE.SUCCESS,
			checkout_url: payInstance.checkout_url,
			status_url: payInstance.status_url
		}

	}
}
