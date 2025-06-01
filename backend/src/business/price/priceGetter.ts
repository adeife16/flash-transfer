/** @format */
import axios from 'axios';

export interface IPriceGetter {
	getPrice(
		payTSyb: string,
		fiatCode: string,
		stableTSyb?: string
	): Promise<PriceResultType>;
}
export type PriceResultType = { status: boolean; msg?: string; rate?: number };
export type PriceTokenExchangeResultType = {
	status: boolean;
	msg?: string;
	price?: string;
};
export type TokenExchangeResponseType = Array<{
	symbol: string;
	price: string;
}>;
export type FiatResponseType = {
	code: string;
	message: string | null;
	messageDetail: string | null;
	data: Array<{
		pair: string;
		rate: string;
		symbol: string | null;
		imageUrl: string | null;
	}>;
};
export type FiatRateResultType = {
	status: boolean;
	msg?: string;
	price?: string;
};
export class BinancePriceGetter implements IPriceGetter {
	protected base_url: string;
	protected stableCoinSymb: string;
	constructor(base_url: string, stableCoin: string = 'USDT') {
		this.base_url = base_url;
		this.stableCoinSymb = stableCoin;
	}
	async getPrice(
		payTSyb: string,
		fiatCode: string,
		stableTSyb?: string
	): Promise<PriceResultType> {
		const stableCoin = stableTSyb
			? stableTSyb.toUpperCase()
			: this.stableCoinSymb.toUpperCase();
		const priceExchangeResult = await this.priceTokenExchange(
			payTSyb,
			stableCoin
		);
		if (!priceExchangeResult.status)
			return { status: false, msg: priceExchangeResult.msg };
		const stableCoinRate: number = parseFloat(priceExchangeResult.price!);

		if (fiatCode.toUpperCase() === 'USD') {
			return { status: true, rate: stableCoinRate };
		}

		const fiatExchangeResult = await this.fiatRate(
			'USD',
			fiatCode.toUpperCase()
		);
		if (!fiatExchangeResult.status)
			return { status: false, msg: fiatExchangeResult.msg };
		const fiatRate: number = parseFloat(fiatExchangeResult.price!);

		const rate = stableCoinRate / fiatRate;
		return { status: true, rate: rate };
	}
	async priceTokenExchange(
		tokenSybFrom: string,
		tokenSybTo: string
	): Promise<PriceTokenExchangeResultType> {
		const pairName = tokenSybFrom.toUpperCase() + tokenSybTo.toUpperCase();
		const url = this.base_url + '/api/v3/ticker/price';
		try {
			const response = await axios.get(url);
			const result: TokenExchangeResponseType = response.data;
			const pair = result.find((item) => {
				return item.symbol === pairName;
			});
			if (!pair) return { status: false, msg: 'There is no token Pair' };

			return { status: true, price: pair.price };
		} catch (e: any) {
			return {
				status: false,
				msg: e?.message,
			};
		}
	}

	async fiatRate(
		fiatFrom: string,
		fiatTo: string
	): Promise<FiatRateResultType> {
		const url = this.base_url + '/bapi/capital/v1/public/basedata/rates';
		const pairName = fiatFrom.toUpperCase() + '_' + fiatTo.toUpperCase();
		try {
			const response = await axios.get(url);
			const result: FiatResponseType = response.data;
			const pairList = result.data;
			const pair = pairList.find((item) => {
				return item.pair === pairName;
			});
			if (!pair) return { status: false, msg: 'There is no Pair' };
			return { status: true, price: pair.rate };
		} catch (e: any) {
			return {
				status: false,
				msg: e?.message,
			};
		}
	}
}
