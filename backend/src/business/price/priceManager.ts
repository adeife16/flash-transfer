/** @format */

import { IPriceGetter } from './priceGetter';

export type PriceType = {
	token: number;
	currency: number;
};
export type PriceResponseType = {
	status: boolean;
	msg?: string;
	price?: PriceType;
};
export interface IPriceManager {
	getPrice(token: string, currency: string): Promise<PriceResponseType>;
	getFee(user_id: string): Promise<number>;
}

export class PriceManager implements IPriceManager {
	protected priceGetter: IPriceGetter;
	constructor(priceGetter: IPriceGetter) {
		this.priceGetter = priceGetter;
	}
	async getPrice(token: string, currency: string): Promise<PriceResponseType> {
		try {
			const result = await this.priceGetter.getPrice(
				token.toUpperCase(),
				currency.toUpperCase()
			);

			if (!result.status) return { status: false, msg: result.msg };
			return { status: true, price: { token: 1, currency: result.rate! } };
		} catch (e: any) {
			return {
				status: false,
				msg: e?.message,
			};
		}
	}
	async getFee(user_id: string | null): Promise<number> {
		return 0;
	}
}
