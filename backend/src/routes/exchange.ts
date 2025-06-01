/** @format */

import { Router } from 'express';
import {
	getPrice,
	testModel,
	testReceipt,
	storeBeneficiary,
	getBeneficiaries,
	postSelectBeneficiary,
	caluclatePrice,
	binanceNotification,
	testOrangeMoney,
	getFTNInformation
} from '../controller/exchange.controller';
import {
	priceValidators,
	beneficiaryValidators,
	pricePostValidators,
	calculatePriceValidators,
} from '../validators/exchange';
import { ValidateRequestBody } from '../middleware/index';
const router = Router();
router.get('/price', ...priceValidators, ValidateRequestBody, getPrice);
router.get(
	'/cal_price',
	...calculatePriceValidators,
	ValidateRequestBody,
	caluclatePrice
);
router.post('/test', testModel);
router.post('/testRecepit', testReceipt);
router.post(
	'/storeBeneficiary',
	...beneficiaryValidators,
	ValidateRequestBody,
	storeBeneficiary
); //store beneficiary information
router.get('/beneficiaries', getBeneficiaries);
router.post(
	'/selectBeneficiary',
	...pricePostValidators,
	ValidateRequestBody,
	postSelectBeneficiary
);

router.get('/ftn_information', getFTNInformation)
router.post('/testOrange', testOrangeMoney);
router.post('/binance_notification', binanceNotification);

export default router;
