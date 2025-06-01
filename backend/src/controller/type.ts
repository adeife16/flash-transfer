/** @format */

export enum Currencies {
	TOKEN = 'token',
	FIAT = 'fiat',
}
export enum EXCHANGE_TYPE {
	FIAT_FIAT = '0',
	FIAT_CRYPTO = '1',
	CRYPTO_FIAT = '2',
}
export enum CALCULATE_PRICE_INPUT_TYPE {
	TOKEN = '0',
	FIAT = '1',
}
export enum EXCHANGE_STEP {
	NO_INIT = 0,
	PRICE_STEP = 1,
	AMOUNT_STEP = 2,
	RECEIVERS_STEP = 3,
	BENEFICIARY_STEP = 4,
	PAY_WAY_STEP = 5,
	PAY_STEP = 6,
	REVIEW_STEP = 7,
	COMPLETE_STEP = 8,
}
