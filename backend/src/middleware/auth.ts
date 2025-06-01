/** @format */

import { Request, Response, NextFunction } from 'express';
import { decode } from '../utils/jwt.utils';
import log from '../logger';
import { findUserById } from '../services/user.service';
import { getCookie, getCookies } from '../utils/helper';

export default async function userAuthMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const token = getCookie(req, 'jwt');

		if (token == null) {
			return res.status(401).json({
				error: 'You are not authorized',
				statusCode: 0,
				statusDesc: 'You are not authorized',
			});
		}
		/* Validate token */
		const decoded = decode(token);

		const user = await findUserById(decoded?.decoded?._id as string);

		if (user !== null) {
			req.body.postedBy = decoded?.decoded?._id;
			req.session.user_id = decoded?.decoded?._id;
			next();
		} else {
			return res.status(400).json({
				error: 'You are not authorized',
				statusCode: 0,
				statusDesc: 'You are not authorized',
			});
		}
	} catch (error: any) {
		log.info(error);
		res.status(400).json({
			error: error.message,
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}
