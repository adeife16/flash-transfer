/** @format */

import { body } from 'express-validator';
export const priceValidators = [
	body('token').exists(),
	body('currency').exists(),
];
export const calculatePriceValidators = [
	body('token').exists(),
	body('currency').exists(),
	body('input_type').exists(),
	body('amount_token').exists(),
	body('amount_fiat').exists(),
	body('exchange_type').exists(),
];
export const beneficiaryValidators = [
	body('email').exists(),
	body('first_name').exists(),
	body('country').exists(),
	body('street_address').exists(),
	body('city').exists(),
	body('province').exists(),
	body('zip_postal').exists(),
	body('purpose').exists(),
	body('user_id').exists(),
];

export const pricePostValidators = [body('beneficiary').exists()];
export const selPaymentMethodValidators = [body('payment_way').exists()];
