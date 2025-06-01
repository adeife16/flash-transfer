/** @format */

import { Request, Response } from 'express';
import { isNull, lte, omit } from 'lodash';
import log from '../logger';
import { sign, decode } from '../utils/jwt.utils';
import {
	createUser,
	findUser,
	validatePassword,
	sendOtp,
	verifyOtp,
	getUsersbyRole,
	findUserById,
	findUserByEmail,
	emailVerify,
	updateUserDetails,
	addFavourite,
	getFavourites,
	changePassword,
	getUser,
	getUserWithWalletAddress,
	addAffiliator,
} from '../services/user.service';
import { IUser } from '../../types/config';
import { getMemberships } from '../services/admin.services';
import sendgrid from '../config/sendgrid';
import User, { UserDocument } from '../model/users.model';
import { Types } from 'mongoose';
import { validateMail, generteRandomString } from '../utils/helper';
import {
	getLevel,
	getPercentProgressLevel,
	checkSignMsg,
	generateMsgFromNonce,
} from '../utils/crypto';
import { pipeline } from 'stream';
import { getAffiliatorByCode } from '../services/affiliator.services';

const fs = require('fs').promises;

// Register user
export async function CreateUserHandler(req: Request, res: Response) {
	try {
		const { affiliatorCode } = req.body;
		const emailPresent = await findUser({ email: req.body.email });
		if (emailPresent) {
			return res.status(403).json({
				err: 'User already exists with this email address',
				statusCode: 2,
			});
		}
		const user = await createUser(req.body);
		const Affiliator = await getAffiliatorByCode(affiliatorCode);

		if (Affiliator) {
			const _id = Affiliator._id;
			user.affiliator = _id;
			user.save();
		}

		sendVerificationEmail(user);
		return res.send({
			data: omit(user.toJSON(), 'password'),
			statusCode: 1,
			statusDesc: 'signed up successfully.',
		});
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({
			statusCode: 0,
			statusDesc: 'error occurred while saving user details.',
		});
	}
}
// Contact us
export async function ContactusHandler(req: Request, res: Response) {
	try {
		const data: any = {
			fullName: req.body.fullName,
			email: req.body.email,
			phone: req.body.phone,
			subject: req.body.subject,
			message: req.body.message,
		};

		const user = await sendContactUsEmail(data);
		return res.status(200).json({
			statusCode: 1,
			statusDesc: 'Email Sent successfully.',
			data: 'Email Sent successfully',
		});
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({
			error: e.message as string,
			statusCode: 0,
			statusDesc: 'Email not sent !',
		});
	}
}
// Login user
export async function LoginUser(req: Request, res: Response) {
	try {
		const { email, password } = req.body;
		const user: Partial<IUser> = await validatePassword({ email, password });
		if (user.hasOwnProperty('error')) {
			return res.status(400).json({
				statusCode: 0,
				statusDesc: 'user with this email does not exist.',
				user,
			});
		} else {
			const token = sign({ _id: user._id });
			const result = Object.assign(user);
			const cookieOptions = {
				expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
				httpOnly: true,
			};

			res.cookie('jwt', token, cookieOptions);
			result.token = token;
			result.expires = cookieOptions;
			return res.status(200).json({
				data: result,
				statusCode: 1,
				statusDesc: 'signed in successfully.',
			});
		}
	} catch (e: any) {
		log.error(e);
		res.status(400).json({
			error: e.message as string,
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}
export async function Logout(req: Request, res: Response) {
	try {
		res.clearCookie('jwt');
		if (req.session?.user_id) req.session!.user_id = undefined;
		return res.status(200).json({ success: true });
	} catch (e: any) {
		log.error(e);
		res.status(400).json({
			error: e.message as string,
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}
// social login
export async function SocialLogin(req: Request, res: Response) {
	try {
		//     const decoded = await fireAdmin.auth().verifyIdToken(token);
		//     if (decoded) {
		//         console.log(decoded);
		//     return;
		// }
		const email = req.body.email;
		const user = await getUser(email);
		if (user == null) {
			const user = await createUser(req.body);
			sendVerificationEmail(user);
			const token = await sign({ _id: user._id });
			const result = Object.assign(user);
			const cookieOptions = {
				expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
				httpOnly: true,
			};
			res.cookie('jwt', token, cookieOptions);
			result.token = token;
			result.expires = cookieOptions;
			return res.status(200).json({
				data: result,
				token,
				cookieOptions,
				statusCode: 1,
				statusDesc: 'signed in successfully.',
			});
		} else {
			const token = await sign({ _id: user._id });
			const result = Object.assign(user);
			const cookieOptions = {
				expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
				httpOnly: true,
			};
			res.cookie('jwt', token, cookieOptions);
			result.token = token;
			result.expires = cookieOptions;
			return res.status(200).json({
				data: result,
				token,
				cookieOptions,
				statusCode: 1,
				statusDesc: 'signed in successfully.',
			});
		}
	} catch (e: any) {
		log.error(e);
		res.status(400).json({
			error: e.message as string,
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}
// Upload files
export async function UploadFiles(req: Request, res: Response) {
	try {
		// @ts-ignore: Unreachable code error
		const locations = req.files?.map((id: any) => {
			return id.location;
		});
		res.send({ data: locations });
	} catch (error: any) {
		log.error(error);
		res.status(400).json({ error: error.message ? error.message : 'error' });
	}
}
// Session
export async function SessionUser(req: Request, res: Response) {
	try {
		if (!req.session.user_id) {
			return res.status(401).json({
				statusCode: 0,
				statusDesc: 'You are not authorized',
				error: 'You are not authorized',
			});
		}
		/* Validate token */

		let user = await findUserById(req.session.user_id);

		const transferActivities = user?.transferActivities;
		let totalPoint: number = 0;
		transferActivities.forEach((element: any) => {
			totalPoint += element.feeAmount;
		});
		const level = getLevel(totalPoint * 1000);
		const levelPercent = getPercentProgressLevel(totalPoint * 1000);
		return res.status(200).json({
			data: user,
			level: level,
			levelPercent: levelPercent,
			statusCode: 1,
			statusDesc: 'Authorized.',
		});
	} catch (e: any) {
		log.error(e);
		res.status(400).json({
			error: e.message as string,
			statusCode: 0,
			statusDesc: 'Error !',
		});
	}
}
// get users by role
export async function GetUsersByRole(req: Request, res: Response) {
	try {
		const { role } = req.body;
		const users = await getUsersbyRole(role);
		return res
			.status(200)
			.json({ statusCode: 1, statusDesc: 'User', user: users });
	} catch (e: any) {
		log.error(e);
		res.status(400).json({
			error: e.message as string,
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}
// Update user
export async function UpdateUser(req: Request, res: Response) {
	try {
		const data = req.body;
		delete data.password;
		delete data.createdAt;
		delete data.updatedAt;

		const user = await updateUserDetails(data.postedBy, data);
		return res.send({
			user: user,
			statusCode: 1,
			statusDesc: 'User updated Sucessfully !',
		});
	} catch (error: any) {
		log.error(error);
		res.status(400).json({
			error: error.message as string,
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}
// Email verification
export async function EmailVerify(req: Request, res: Response) {
	try {
		const user = await emailVerify(req.body.userId);
		res.send({
			statusCode: 1,
			statusDesc: 'You are Successfully Verified.',
		});
	} catch (error: any) {
		log.error(error);
		res.status(400).json({
			error: error.message as string,
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}
// Change password
export async function ChangePassword(req: Request, res: Response) {
	try {
		const { password } = req.body;
		await changePassword(req.body.postedBy, password);
		res.send({
			statusCode: 1,
			statusDesc: 'Password updated successfully.',
			message: 'Password updated',
		});
	} catch (error: any) {
		log.error(error);
		res.status(400).json({
			error: error.message ? error.message : 'error',
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}
// Forgot password
export async function ForgotPassword(req: Request, res: Response) {
	try {
		const { email } = req.body;
		const user = await findUserByEmail(email);
		sendPasswordRecoveryEmail(user);
		res.send({
			statusCode: 1,
			statusDesc:
				'you would receive an email with a password recovery link, shortly.',
		});
	} catch (error: any) {
		log.error(error);
		res.status(400).json({
			error: error.message ? error.message : 'error',
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}
// Send Otp
export async function SendOtp(req: Request, res: Response) {
	const { userId, contact } = req.body;
	try {
		let db = await sendOtp(userId, contact);
		res.status(200).json(db);
	} catch (error) {
		console.log('creating otp error', error);
		res.status(400).json(error);
	}
}
// Verify Otp
export async function VerifyOtp(req: Request, res: Response) {
	try {
		const { userId, otp } = req.body;
		let db = await verifyOtp(userId, otp);
		res.status(200).json(db);
	} catch (error: any) {
		console.log('creating otp error', error);
		res.status(400).json({ error: error.message ? error.message : 'error' });
	}
}

// Web3 functions ==============================================================

export async function generateNonceForSignUp(req: Request, res: Response) {
	try {
		const nonce = generteRandomString(10);
		req.session.nonce = nonce;
		return res.status(200).json({
			status: true,
			msg: generateMsgFromNonce(nonce),
		});
	} catch (error: any) {
		log.error(error);

		res.status(400).json({
			error: error.message ? error.message : 'error',
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}
export async function signUpWithWallet(req: Request, res: Response) {
	try {
		const affiliatorCode = req.body.affiliatorCode ?? '';
		const Affiliator = await getAffiliatorByCode(affiliatorCode);

		const affiliatorId = Affiliator?._id ? Affiliator?._id : null;

		const signature = req.body.signature;
		const nonce = req.session.nonce;

		if (!nonce) {
			return res.status(400).json({
				status: false,
				msg: 'There is no nonce to verify',
			});
		}
		const public_address = await checkSignMsg(nonce.trim(), signature.trim());

		const ownerWallet = await getUserWithWalletAddress(public_address);
		if (ownerWallet) {
			return res.status(200).json({
				statusCode: 0,
				statusDesc: 'Account is existed already',
				status: false,
				msg: 'Account is existed already',
			});
		}
		const user_data = {
			pub_addr: public_address,
			affiliator: affiliatorId,
			nonce: nonce,
			isCreatedByWallet: true,
		};

		const users = await createUser(user_data as UserDocument);
		const token = sign({ _id: users._id });
		const result = Object.assign(users);
		const cookieOptions = {
			expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
			httpOnly: true,
		};
		res.cookie('jwt', token, cookieOptions);
		await users.generateNonce();
		return res.status(200).json({
			statusCode: 1,
			statusDesc: 'wallet SignUp succefully!',
			status: true,
			data: result,
			token: token,
			expires: cookieOptions,
		});
	} catch (error: any) {
		log.error(error);
		res.status(400).json({
			error: error.message ? error.message : 'error',
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}
export async function UpdateUserWithWallet(req: Request, res: Response) {
	try {
		const publicAddress = req.body.pub_addr;
		const affiliatorCode = req.body.affiliatorCode;
		delete req.body.affiliatorCode;
		const ownerWallet = await getUserWithWalletAddress(publicAddress);
		if (ownerWallet) {
			return res.status(200).json({
				statusCode: 0,
				statusDesc: 'you have loged in already.',
				status: false,
				msg: 'you have loged in already',
			});
		}
		const Affiliator = await getAffiliatorByCode(affiliatorCode);

		const users = await createUser(req.body);
		const affiliatorId = Affiliator?._id ? Affiliator?._id : null;
		// sendVerificationEmail(req.body)
		const updateUser = await users.updateWallet(publicAddress, affiliatorId);
		const updateNonce = await updateUser.generateNonce();
		return res.status(200).json({
			statusCode: 1,
			statusDesc: 'wallet upddate succefully!',
			status: true,
			nonce: updateNonce.nonce,
		});
	} catch (error: any) {
		log.error(error);

		res.status(400).json({
			error: error.message ? error.message : 'error',
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}

export async function WalletSignIn(req: Request, res: Response) {
	try {
		const publicAddress = req.body.pub_addr;
		const signature = req.body.signature;
		const users = await getUserWithWalletAddress(publicAddress);
		if (users == null) {
			return res.status(200).json({
				statusCode: 0,
				statusDesc: 'No user',
				status: false,
				msg: 'No user',
			});
		}
		if (users.verifyNonce(signature)) {
			const token = sign({ _id: users._id });
			const result = Object.assign(users);
			const cookieOptions = {
				expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
				httpOnly: true,
			};
			res.cookie('jwt', token, cookieOptions);

			await users.generateNonce();
			return res.status(200).json({
				statusCode: 1,
				statusDesc: 'wallet login succefully!',
				status: true,
				data: result,
				token: token,
				expires: cookieOptions,
			});
		} else {
			return res.status(200).json({
				statusCode: 0,
				statusDesc: 'No user',
				status: false,
				msg: 'No user',
			});
		}
	} catch (error: any) {
		log.error(error);
		res.status(400).json({
			error: error.message ? error.message : 'error',
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}

export async function GetNonceWithAddress(req: Request, res: Response) {
	try {
		const pubAddr = req.body.pub_addr;
		const users = await getUserWithWalletAddress(pubAddr);
		if (!users) {
			return res.status(200).json({
				statusCode: 0,
				statusDesc: 'No user',
				status: false,
				msg: 'No users',
			});
		}
		return res.status(200).json({ status: true, nonce: users.nonce });
	} catch (error: any) {
		log.error(error);
		res.status(400).json({
			error: error.message ? error.message : 'error',
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}

export async function addUserWallet(req: Request, res: Response) {
	try {
		const pubAddr = req.body.pub_addr;
		const signature = req.body.signature;

		const nonce = req.session.nonce;
		const user = await findUserById(req.session.user_id!);
		if (user?.isCreatedByWallet) {
			return res.status(200).json({
				statusCode: 0,
				statusDesc: "You can't change this address",
				status: false,
				msg: "You can't change this address",
			});
		}
		if (!nonce)
			return res.status(200).json({
				statusCode: 0,
				statusDesc: 'There is no nonce',
				status: false,
				msg: 'There is no nonce',
			});

		const public_address = await checkSignMsg(nonce.trim(), signature.trim());

		const users = await getUserWithWalletAddress(public_address);
		if (users) {
			return res.status(200).json({
				statusCode: 0,
				statusDesc: 'This address is existed already',
				status: false,
				msg: 'This address is existed already',
			});
		}

		if (pubAddr !== public_address) {
			return res.status(200).json({
				statusCode: 0,
				statusDesc: 'Something went wrong',
				status: false,
				msg: 'Something went wrong',
			});
		}

		await user?.updateWallet(public_address, null);
		return res.status(200).json({
			statusCode: 0,
			statusDesc: 'success',
			status: true,
			msg: 'success',
		});
	} catch (error: any) {
		log.error(error);
		res.status(400).json({
			error: error.message ? error.message : 'error',
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}

export async function unbindUserWallet(req: Request, res: Response) {
	try {
		const pubAddr = req.body.pub_addr;
		const signature = req.body.signature;

		const user = await findUserById(req.session.user_id!);
		const nonce = user?.nonce;
		if (user?.isCreatedByWallet) {
			return res.status(200).json({
				statusCode: 0,
				statusDesc: "You can't change this address",
				status: false,
				msg: "You can't change this address",
			});
		}
		if (!nonce)
			return res.status(200).json({
				statusCode: 0,
				statusDesc: 'There is no nonce',
				status: false,
				msg: 'There is no nonce',
			});

		if (!user.pub_addr) {
			return res.status(200).json({
				statusCode: 0,
				statusDesc: 'User has not wallet address',
				status: false,
				msg: 'User has not wallet address',
			});
		}

		const public_address = await checkSignMsg(nonce.trim(), signature.trim());

		if (user.pub_addr !== public_address) {
			return res.status(200).json({
				statusCode: 0,
				statusDesc: 'Please connect with connected wallet address',
				status: false,
				msg: 'Please connect with connected wallet address',
			});
		}

		await user?.updateWallet(null, null);
		return res.status(200).json({
			statusCode: 0,
			statusDesc: 'success',
			status: true,
			msg: 'success',
		});
	} catch (error: any) {
		log.error(error);
		res.status(400).json({
			error: error.message ? error.message : 'error',
			statusCode: 0,
			statusDesc: 'error occurred.',
		});
	}
}
// Email functions ==============================================================

function sendVerificationEmail(user: any) {
	const payload = {
		to: user.email, // Change to your recipient
		from: 'Contact@flash-technologies.org', // Change to your verified sender
		subject: 'Email Verification',
		html: `Dear User,<br>
    <br>
    Thank you for signing up !
    <br/>
    Please verify your Flash Transfer Account
    for the Flash account.&nbsp; Just click the link below.
    <br>
    <br>
    <a href="https://flashtss.web.app/verification/${user._id}" target="_blank">
    Verify your account
    </a>
    <br>
    <br>
    If you have any questions, contact us anytime at <a href="https://flashtss.web.app/contact">Contact us</a>.<br>
    <br>
    <br>
    Best,
    <br>
    The Flash transfer Team`,
	};

	sendgrid
		.send(payload)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error: any) => {
			console.error(error);
		});
}
function sendContactUsEmail(user: any) {
	const payload = {
		to: 'Contact@flash-technologies.org', // Change to your recipient
		from: 'Contact@flash-technologies.org', // Change to your verified sender
		subject: user.subject,
		text: 'User contact for query',
		html: `<p>Name: ${user.fullName}</p>
    <p>Email: ${user.email}</p>
    <p>phone: ${user.phone}</p>
    <p>Message: ${user.message}</p>`,
	};
	const sendContactEmail = sendgrid.send(payload);
	return sendContactEmail;
}
function sendPasswordRecoveryEmail(user: any) {
	const payload = {
		to: user.email, // Change to your recipient
		from: 'Contact@flash-technologies.org', // Change to your verified sender
		subject: 'Change Password Email - "',
		text: 'User contact for Password',
		html: `Dear User,<br>
    <br>
    Here's the link to change the password
for the Flash Transfer account.&nbsp; Just click the link below.
<br>
<br>
<a href="https://flashtss.web.app/resetpassword/${user._id}" target="_blank">
    Change your password
</a>
<br>
<br>
    If you have any questions, contact us anytime at <a href="https://flashtss.web.app/contact">Contact us</a>.<br>
    <br>
    Best, <br>
    The Flash Transfer Team`,
	};

	const sendForgetEmail = sendgrid.send(payload);
	return sendForgetEmail;
}
