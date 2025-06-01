/** @format */

import { Express } from 'express';
import cors from 'cors';
export default class Cors {
	app: Express;
	whiteList: Array<string>;

	constructor(app: Express, whiteList: Array<string>) {
		this.app = app;
		this.whiteList = whiteList;
	}
	public initCors() {
		const whiteList = this.whiteList;
		this.app.use(
			cors({
				origin: whiteList,
				methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
				credentials: true,
			})
		);

		this.app.use(function (req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', whiteList);
			res.setHeader(
				'Access-Control-Allow-Methods',
				'GET, POST, OPTIONS, PUT, PATCH, DELETE'
			);
			res.setHeader(
				'Access-Control-Allow-Headers',
				'X-Requested-With,content-type'
			);
			res.setHeader('Access-Control-Allow-Credentials', 'true');
			next();
		});
	}
}
