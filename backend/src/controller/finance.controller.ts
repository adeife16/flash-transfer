/** @format */

import { Request, Response } from 'express';
import CMC, { FiatListType } from '../utils/cmc';
import log from '../logger';
export async function getCurrencyPrice(req: Request, res: Response) {
	try {
		const fiat_symbol = req.body.symbol;
		const cmc = new CMC(true);
		const fiatResult = await cmc.fiatCurrencyList({
			include_metals: true,
			start: 1,
		});
		const fiatList = fiatResult.result.data;

		const fiat = fiatList.find(
			(item: FiatListType) => item.symbol === fiat_symbol
		);
		if (!fiat) {
			return res.status(200).json({ success: false, msg: 'There is no fiat' });
		}
		return res.status(200).json({ fiatResult });
	} catch (e: any) {
		log.error(e);
		return res.status(400).json({ error: e.message as string });
	}
}
