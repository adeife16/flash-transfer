/** @format */

import session from 'express-session';
import redisStore from 'connect-redis';
import { CRedis, TypeRedisClient } from './redis';
import { Express } from 'express';

export default class RedisSession {
	protected redisClient: TypeRedisClient;
	protected secret: string;
	constructor(redisClient: CRedis) {
		this.redisClient = redisClient.getRedisClient();
		this.secret = process.env.SESSION_SECRET || '';
		if (this.secret === '') {
			throw new Error('Session secret key is invalid');
		}
	}
	initSession(app: Express, maxAge: number) {
		app.use(
			session({
				store: new redisStore({ client: this.redisClient }),
				secret: this.secret,
				resave: false,
				saveUninitialized: true,
				name: '__token',
				cookie: {
					maxAge: maxAge,
				},
			})
		);
	}
}
