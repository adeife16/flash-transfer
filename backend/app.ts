/** @format */

import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import config from './enviorments/default';
import log from './src/logger';
import connect from './src/config/connect';
import routes from './src/routes';

import morgan from 'morgan';
import cookieSession from 'cookie-session';
import { installEvents } from './src/services/blockchain/events';
import redisHandle from './src/utils/redis';
import RedisSession from './src/utils/session';
import cookieParser from 'cookie-parser';
import Cors from './src/utils/cors';
const { PORT } = config;

const app = express();
const corsWhiteList = ['http://localhost:3001'];

const cors = new Cors(app, corsWhiteList);
cors.initCors();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
redisHandle.init();
const redisSession = new RedisSession(redisHandle);

redisHandle.onConnect(() => {});
redisHandle.onError();

redisSession.initSession(app, 1000 * 60 * 60 * 24);
installEvents();
routes(app);

app.listen(PORT as number, async () => {
	log.info(`Server is running on port ${PORT}`);
	connect();
});
