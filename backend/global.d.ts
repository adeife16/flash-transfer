/** @format */

declare module 'ethereumjs-util';
type TokenRateType = {
	step: EXCHANGE_STEP;
	exchange_type: EXCHANGE_TYPE | null;
	rate?: {
		token: number;
		currency: number;
	};
	fee?: number;
	amount_token?: number;
	amount_fiat?: number;
	total_pay: number;
	receipt_amount: number;
};
declare namespace Express {
	export interface Request {
		currentUser?: any;
		decodeToken?: any;
		session: {
			nonce?: string;
			user_id?: string;
			exchange_info?: TokenRateType;
		};
		headers: {
			'affiliator-code'?: string;
		};
	}
}
