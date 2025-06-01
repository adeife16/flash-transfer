/** @format */

import { body } from 'express-validator';

export const registerUserValidators = [
	body('email').exists(),
	body('password').exists(),
];

export const loginValidators = [
	body('email').exists(),
	body('password').exists(),
];
export const walletLoginValidators = [
	body('pub_addr').exists(),
	body('signature').exists(),
];
export const walletSignupValidators = [body('signature').exists()];
export const nonceValidators = [body('pub_addr').exists()];
export const createPostValidator = [
	body('title').exists(),
	body('description').exists(),
	body('postedBy').exists(),
	body('expiredAt').exists(),
	body('location').exists(),
];

export const categoryValidator = [
	body('categoryName').exists(),
	body('categoryImage').exists(),
];

export const favouriteValidator = [body('adId').exists()];

export const cryptoValidator = [
	body('crypto_address').exists(),
	body('amount').exists(),
];

export const bankValidator = [
	body('bank_name').exists(),
	body('holder').exists(),
	body('iban').exists(),
	body('bic').exists(),
	// body("toEmail").exists(),
	body('amount').exists(),
];

export const paypalValicator = [
	body('paypal_email').exists(),
	body('amount').exists(),
];

export const membershipValidator = [
	body('name').exists(),
	body('rupees').exists(),
	body('duration').exists(),
	body('categories').exists(),
	body('listings').exists(),
];
export const profileImgValidator = [body('profileImg').exists()];
export const profileValidator = [
	body('email').exists(),
	body('confirmEmail').exists(),
	body('firstName').exists(),
	body('lastName').exists(),
	body('userName').exists(),
	body('phone').exists(),
];
export const createAffiliatorValidator = [
	body('firstName').exists(),
	body('lastName').exists(),
	body('email').exists(),
	body('password').exists(),
];
export const verifyOTPForWithdrowValidator = [body('otpNum').exists()];
export const smsVerifyForWithdrowVaidator = [
	body('smsCode').exists(),
	body('id').exists(),
];
export const updateWalletvalidator = [
	body('signature').exists(),
	body('pub_addr').exists(),
];
export const smsResendWithdrowValidator = [body('id').exists()];
