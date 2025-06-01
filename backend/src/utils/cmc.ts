/** @format */
import axios from 'axios';

export type CMCRequestType = {
	[key: string]: any;
};
export type QueoteCurrencyPayloadType = {
	id: number;
	slug?: string;
	symbol?: string;
	convert?: string;
	convert_id?: string;
	aux?: string;
	skip_invliad?: boolean;
};
export type FiatCurrencyListType = {
	start: number;
	limit?: number;
	sort?: string;
	include_metals?: boolean;
};
export type CurrencyMetadataQuerytype = {
	id: string;
	slug: string;
	aux: string;
};
export type PriceConversationQueryType = {
	amount: number;
	id: string;
	symbol: string;
	time?: string;
	convert: string;
	convert_id?: string;
};
export type CurrencyListQueryType = {
	listing_status?: string;
	start?: number;
	limit?: number;
	sort?: string;
	symbol?: string;
	aux?: string;
};

export type FiatListType = {
	id: number;
	name: string;
	sign: string;
	symbol: string;
};

export interface CMCResponse {
	result: {
		status: {
			timestamp: string;
			error_code: number;
			error_message: string | null;
			elapsed: number;
			credit_count: number;
			notice: string | null;
		};
		data: any;
	};
}

export interface FiatListResponse extends CMCResponse {
	data: Array<FiatListType>;
}
export default class CMCManager {
	protected is_development: boolean;
	protected key: string;
	protected cmc_url: string;

	constructor(devMode: boolean) {
		this.is_development = devMode;
		this.key = process.env.CMC_KEY || '';
		if (this.key === '') {
			throw new Error('api key is invalid');
		}
		if (devMode) {
			this.cmc_url = process.env.CMC_DEVELOPMENT_URL || '';
		} else {
			this.cmc_url = process.env.CMC_PRODUCTION_URL || '';
		}

		if (this.cmc_url === '') {
			throw new Error('CMC URL is invalid');
		}
	}

	cmcRequest(
		endpoint: string,
		payload: CMCRequestType | null
	): Promise<CMCResponse> {
		let response: any = null;
		return new Promise(async (resolve, reject) => {
			try {
				response = await axios.get(this.cmc_url + endpoint, {
					headers: {
						'X-CMC_PRO_API_KEY': this.key,
					},
					params: payload,
				});
			} catch (ex: any) {
				// error
				console.log(ex);
				reject(ex);
			}
			if (response) {
				const json = response.data;
				resolve(json);
			}
		});
	}

	getCurrencyList(payload: CurrencyListQueryType) {
		return this.cmcRequest('/v1/cryptocurrency/map', payload);
	}

	// get fiat currency list
	fiatCurrencyList(payload: FiatCurrencyListType | null) {
		return this.cmcRequest('/v1/fiat/map', payload);
	}

	// getCurrencyMetadata(payload: CurrencyMetadataQuerytype | null) {
	// 	return this.cmcRequest('/v1/exchange/info', payload);
	// }
	//get price pair
	// priceConversation(payload: PriceConversationQueryType) {
	// 	return this.cmcRequest('/v2/tools/price-conversion', payload);
	// }

	quoteCurrency(payload: QueoteCurrencyPayloadType | null) {
		return this.cmcRequest('/v2/cryptocurrency/quotes/latest', payload);
	}
}
