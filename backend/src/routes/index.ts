/** @format */

import { Express, Request, Response } from 'express';
import adminAuthMiddleware from '../middleware/adminAuth';
import {
	GetCities,
	GetDistricts,
} from '../controller/districtCities.controller';
import blockchainRoutes from './blockchain/index';
import affilliationRoutes from './affilliation/index';
import exchangeRoute from './exchange';
import decodeIdToken from '../middleware/affiliatorAuth';
import decodeIDTokenForCreate from '../middleware/createAffiliatorAuth';
import { CreateUserHandler as CreateAffiliatorHandler } from '../controller/affilliator.controller';
import { getCurrencyPrice } from '../controller/finance.controller';
import {
	ChangePassword,
	CreateUserHandler,
	LoginUser,
	UpdateUser,
	SessionUser,
	UploadFiles,
	SocialLogin,
	ContactusHandler,
	ForgotPassword,
	EmailVerify,
	UpdateUserWithWallet,
	WalletSignIn,
	GetNonceWithAddress,
	VerifyOtp,
	SendOtp,
	GetUsersByRole,
	generateNonceForSignUp,
	signUpWithWallet,
	addUserWallet,
	unbindUserWallet,
	Logout,
} from '../controller/user.controller';
import { kycNotification } from '../controller/affilliator.controller';
import {
	CreateBid,
	CreatePostHandler,
	DeletePostById,
	GetBids,
	GetListings,
	GetPostById,
	GetPosts,
	GetPostsByCategory,
	GetPostsByCategoryAndLocation,
	GetPostsByLocation,
	GetPostsByMinMaxLocation,
	GetPostsByPostUser,
	GetPostType,
	TextSearch,
	UpdateAdPromote,
	UpdatePostById,
	UpdatePostStatus,
} from '../controller/post.controller';

import {
	CreateLogsHandler,
	GetLogs,
	GetLogsById,
} from '../controller/logs.controller';

import {
	CreateNotificationHandler,
	GetNotificationById,
	GetNotifications,
} from '../controller/notification.controller';

import { CreateCategory, GetCategory } from '../controller/category.controller';
import {
	GetChatMessage,
	GetInboxMessage,
	SendMessage,
} from '../controller/message.controller';
import {
	CreateBanner,
	DeleteBanner,
	GetBanners,
	UpdateBanner,
} from '../controller/banner.controller';

import {
	createPostValidator,
	loginValidators,
	registerUserValidators,
	categoryValidator,
	favouriteValidator,
	membershipValidator,
	walletSignupValidators,
	walletLoginValidators,
	nonceValidators,
	createAffiliatorValidator,
	updateWalletvalidator,
} from '../validators/validators';
import {
	checkListings,
	CheckPostOwner,
	userAuthMiddleware,
	ValidateRequestBody,
} from '../middleware/index';
import { AddMembership, LoginAdmin } from '../controller/admin.controller';

export default function (app: Express) {
	// Test
	app.get('/', (req: Request, res: Response) => {
		res.sendStatus(200);
	});

	// Register user
	app.post(
		'/api/users',
		...registerUserValidators,
		ValidateRequestBody,
		CreateUserHandler
	);
	// Login user
	app.post(
		'/api/user-login',
		...loginValidators,
		ValidateRequestBody,
		LoginUser
	);
	// Email verification
	app.post('/api/email-verify', EmailVerify);
	// Session user
	app.get('/api/session', userAuthMiddleware, SessionUser);
	// Update user
	app.patch('/api/update-user', userAuthMiddleware, UpdateUser);
	// Contact us
	app.post('/api/contactus', ContactusHandler);
	// Forget password
	app.post('/api/forgot-password', ForgotPassword);
	// Change password
	app.post('/api/change-password', ChangePassword);
	// Get usersby Role
	app.post('/api/users-role', GetUsersByRole);
	// social login
	app.post('/api/social-login', SocialLogin);
	// Create logs
	app.post('/api/create-logs', CreateLogsHandler);
	// Get logs
	app.get('/api/get-logs', userAuthMiddleware, GetLogs);
	// Get logs by id
	app.get('/api/get-logs/:logsId', userAuthMiddleware, GetLogsById);
	// Create notifications
	app.post('/api/create-notifications', CreateNotificationHandler);
	// Get notifications
	app.get('/api/get-notifications', userAuthMiddleware, GetNotifications);
	// Get notifications by id
	app.get(
		'/api/get-notifications/:notifyId',
		userAuthMiddleware,
		GetNotificationById
	);
	//Send Otp
	app.post('/api/send-otp', SendOtp);
	//Verify Otp
	app.post('/api/verify-otp', VerifyOtp);

	// Add
	app.post(
		'/api/add-favourite',
		...favouriteValidator,
		ValidateRequestBody,
		userAuthMiddleware
	);

	// Kyc Modules
	//wallet sign up
	app.post(
		'/api/walletSignup',
		...walletSignupValidators,
		ValidateRequestBody,
		signUpWithWallet
	);
	//wallet sign in
	app.post(
		'/api/walletLogin',
		...walletLoginValidators,
		ValidateRequestBody,
		WalletSignIn
	);
	app.post('/api/logout', userAuthMiddleware, Logout);
	app.post('/api/generateNonce', generateNonceForSignUp);
	//get nonce
	app.post(
		'/api/nonce',
		...nonceValidators,
		ValidateRequestBody,
		GetNonceWithAddress
	);
	app.post('/api/kyc_notification', kycNotification);
	app.post(
		'/api/updateWallet',
		...updateWalletvalidator,
		ValidateRequestBody,
		userAuthMiddleware,
		addUserWallet
	);

	app.post(
		'/api/unBindWallet',
		...updateWalletvalidator,
		ValidateRequestBody,
		userAuthMiddleware,
		unbindUserWallet
	);
	app.post(
		'/api/createAffiliator',
		...createAffiliatorValidator,
		ValidateRequestBody,
		CreateAffiliatorHandler
	);
	app.get('/api/getCurrencyPrice', getCurrencyPrice);
	// app.use("/api/affiliator",decodeIdToken,affilliationRoutes);
	app.use('/api/exchange', exchangeRoute);
}
