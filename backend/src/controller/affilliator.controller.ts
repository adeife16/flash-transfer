/** @format */

import { Request, Response } from 'express';
import log from '../logger';
import { omit } from 'lodash';
import {
	createAffiliator,
	findAffiliator,
	findUserById,
	getAffiliator,
	updateUserDetails,
	getAffiliatorBySession,
} from '../services/affiliator.services';
import sendgrid from '../db/sendgrid';

import {
	generateRandomNumber,
	generteRandomString,
	getCurWeekDay,
	getHalfDay,
	getLastMonth,
	getLastWeekDay,
} from '../utils/helper';

import { AffiliatorDocument } from '../model/affiliator.model';
import { getAllTransferActivities } from '../services/blockchain/modelServices/transferActivity.service';
import {
	calculateNextRankProgress,
	findCommisionByLevelAndAbout,
	getAllCommisions,
} from '../services/commision.service';
import {
	getAllAffiliatorInfor,
	getAllTransactionCountforAffiliator,
	getAllTransactionInforForAffiliator,
	getEarndRecordBetweenDays,
	getLatestBalanceRecord,
	getRecordforCertainMonth,
	getTopAffiliatorInformation,
	getTotalEarnByMonth,
	getTransactionCountforMonth,
	addBalanceRecord,
	makeWithdrowTransaction,
	getTotalEarnBetween,
	getTotalEarnYear,
	getTopAffilatedUser,
	getBalanceForAffiliator,
} from '../services/affiliatorBalance.service';
import {
	createCryptoRecord,
	createBankRecord,
	createPaypalRecord,
	createWithdrowHis,
	findHistoryById,
	getWithdrowHistory,
	getLatestWithdrowHistory,
} from '../services/withdrowHis.services';
import { findCommisionById } from '../services/commision.service';
import { initSession } from '../utils/kyc';
import { checkAddress } from '../utils/crypto';
import { affiliatorAdmin } from '../config/firebase';
import { sendVerifyEmail, signUpwithEmailAndPassword } from '../utils/firebase';

import twilioClient from '../config/twillio';
import { AffiliatorBalanceDocument } from '../model/affiliatorBalance.model';
import { format } from 'date-and-time';
export async function updateProfile(req: Request, res: Response) {
	try {
		const { email, confirmEmail, firstName, lastName, userName, phone } =
			req.body;

		if (email !== confirmEmail) {
			return res
				.status(200)
				.json({ status: false, msg: 'please input correct email! ' });
		}
		console.log('req[currentUser].uid', req['currentUser'].uid);
		const updateduser = await affiliatorAdmin
			.auth()
			.updateUser(req['currentUser'].uid, {
				email: email,
			});

		const _user = await findUserById(req['currentUser']._doc._id.toString());
		if (_user) {
			_user.email = email;
			_user.firstName = firstName;
			_user.lastName = lastName;
			_user.userName = userName;
			_user.phone = phone;
			_user.save();
		}
		return res.status(200).json({ status: true, data: _user });
	} catch (e: any) {
		log.error(e);
		return res.status(400).json({ error: e.message as string });
	}
}
export async function updateProfileImg(req: Request, res: Response) {
	try {
		const { profileImg } = req.body;
		const _user = req['currentUser'];
		const user = await findUserById(_user._doc._id.toString());
		if (user) {
			user.profileImg = profileImg;
			user.save();
		}
		return res.status(200).json({ status: true, data: user });
	} catch (e: any) {
		log.error(e);
		return res.status(200).json({ error: e.message as string });
	}
}
// Register user
export async function GetUserHandler(req: Request, res: Response) {
	try {
		const _user = req['currentUser'];
		return res.status(200).json({ status: true, user: _user });
	} catch (e: any) {
		log.error(e);
		return res.status(200).json({ error: e.message as string });
	}
}
export async function CreateUserHandler(req: Request, res: Response) {
	try {
		const { email, firstName, lastName, password } = req.body;
		const record = await signUpwithEmailAndPassword(email, password);
		await sendVerifyEmail();
		const emailPresent = await findAffiliator({ email: email });
		if (!emailPresent) {
			const commision = await findCommisionByLevelAndAbout(
				'flash-transfer.com',
				1
			);
			if (commision) {
				const user = await createAffiliator({
					email: email,
					isVerified: false,
					affiliatorCode: generteRandomString(10),
					curLevel: commision._id,
					firstName: firstName,
					lastName: lastName,
				});
				return res
					.status(200)
					.json({ status: true, data: omit(user.toJSON()) });
			} else {
				return res
					.status(200)
					.json({ status: false, msg: 'There is no commision' });
			}
		}
		return res.send({ status: true, data: omit(emailPresent) });
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function getEarndOverview(req: Request, res: Response) {
	try {
		const _user = req['currentUser'];
		console.log('_users', _user);
		const lastWeek = getLastWeekDay();
		const lastMonth = getLastMonth();
		const halfYear = getHalfDay();
		const lastweekRecords = await getEarndRecordBetweenDays(
			_user._doc._id.toString(),
			lastWeek[0],
			lastWeek[1]
		);
		const lastMonthRecords = await getEarndRecordBetweenDays(
			_user._doc._id.toString(),
			lastMonth[0],
			lastMonth[1]
		);
		const halfYearRecords = await getEarndRecordBetweenDays(
			_user._doc._id.toString(),
			halfYear[0],
			halfYear[1]
		);
		const allTimeRecords = await getLatestBalanceRecord(
			_user._doc._id.toString()
		);

		const allTimeEarned = allTimeRecords ? allTimeRecords.totalEarned : 0;
		const weekEarned = calculateGetEarn(lastweekRecords);
		const monthEarned = calculateGetEarn(lastMonthRecords);
		const halfYearEarned = calculateGetEarn(halfYearRecords);
		return res.status(200).json({
			status: true,
			data: {
				week: weekEarned,
				month: monthEarned,
				half: halfYearEarned,
				all: allTimeEarned,
			},
		});
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function UpdateAffiliator(req: Request, res: Response) {
	try {
		const data = req.body;
		delete data.password;
		delete data.createdAt;
		delete data.updatedAt;
		const email = req['currentUser'].email;
		const emailUser = await getAffiliator(email);
		if (emailUser) {
			const user = await updateUserDetails(emailUser._id.toString(), data);
			return res.status(200).json({ status: true, user: user });
		} else {
			return res.status(200).json({ status: false, msg: 'There is no user' });
		}
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function getIncomeProgress(req: Request, res: Response) {
	try {
		const { isMonth } = req.body;
		const user = req['currentUser'];
		const affiliatorId = user._doc._id.toString();
		console.log('isMonth', isMonth);
		if (isMonth === 'true') {
			const curDate = new Date();

			const data = await getTotalEarnByMonth(
				affiliatorId,
				curDate.getFullYear()
			);
			const _result = adjustTotalEarnforGroupMonth(data);
			const result = calculateIncomeProgress(_result);
			return res.status(200).json({ status: true, data: result });
		} else {
			console.log('1112');
		}
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function getRewardPoint(req: Request, res: Response) {
	try {
		const _user = req['currentUser'];
		const balanceRecords = await getLatestBalanceRecord(
			_user._doc._id.toString()
		);
		const totalEarn = balanceRecords ? balanceRecords.totalEarned : 0;
		const percentNextRank = await calculateNextRankProgress(
			totalEarn * 100,
			'flash-transfer.com'
		);
		const nextrank = percentNextRank
			? percentNextRank
			: { percent: 0, range: 0, curLevel: 0 };
		return res.status(200).json({
			status: true,
			rankInfo: { ...nextrank, ...{ totalPoint: totalEarn * 100 } },
		});
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function GetAllUser(req: Request, res: Response) {
	try {
		const allusers = await getAllTransferActivities('63cabd43b556f777b0f8b14a');
		return res.status(200).json({ status: true, users: allusers });
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function getLatestTransaction(req: Request, res: Response) {
	try {
		const currentUser = req['currentUser'];
		// const {id} = req.body;
		const latestTransactions = await getAllTransactionInforForAffiliator(
			currentUser._doc._id.toString()
		);
		return res
			.status(200)
			.json({ status: true, lstTransactions: latestTransactions });
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function getTotalPoint(req: Request, res: Response) {
	try {
		const user = req['currentUser'];
		const totalPointRecord = await getLatestBalanceRecord(
			user._doc._id.toString()
		);
		const toalPoint = totalPointRecord ? totalPointRecord.totalEarned * 100 : 0;
		const toalTransaction = await getAllTransactionCountforAffiliator(
			user._doc._id.toString()
		);
		const totoalProfit = totalPointRecord ? totalPointRecord.totalEarned : 0;

		const curDate = new Date();
		const curFullYear = curDate.getFullYear();
		const curMonth = curDate.getMonth(); // is same with before month

		const lastMonthTransactionCounts = await getTransactionCountforMonth(
			user._doc._id.toString(),
			curFullYear,
			curMonth
		);
		const totalEarnRecordForLastMonth = await getRecordforCertainMonth(
			user._doc._id.toString(),
			curFullYear,
			curMonth
		);
		const lastMonthTotalProfit = totalEarnRecordForLastMonth
			? totalEarnRecordForLastMonth.totalEarned
			: 0;
		const lastMonthPoints = lastMonthTotalProfit * 100;

		const percentforTransaction = lastMonthTransactionCounts
			? (100 * (toalTransaction - lastMonthTransactionCounts)) /
			  lastMonthTransactionCounts
			: 100;
		const percentforPoint = lastMonthPoints
			? (100 * (toalPoint - lastMonthPoints)) / lastMonthPoints
			: 100;
		const percentforProfit = lastMonthTotalProfit
			? (100 * (totoalProfit - lastMonthTotalProfit)) / lastMonthTotalProfit
			: 100;
		return res.status(200).json({
			status: true,
			totalPoint: { cnt: toalPoint, percent: percentforPoint },
			totalTransactions: {
				cnt: toalTransaction,
				percent: percentforTransaction,
			},
			totalProfit: { cnt: totoalProfit, percent: percentforProfit },
		});
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function getBalance(req: Request, res: Response) {
	try {
		const user = req['currentUser'];
		const balanceRecord = await getBalanceForAffiliator(
			user?._doc?._id.toString()
		);
		const balance = balanceRecord.length ? balanceRecord[0].curBalance : 0;
		return res.status(200).json({ status: true, data: balance });
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function getTopRevenue(req: Request, res: Response) {
	try {
		const { method } = req.query;
		const data = await getTopAffiliatorInformation();
		if (data.length > 0) {
			const record = data[0];
			const topAffiliatorId = record._id;
			console.log('topAffiliator', topAffiliatorId);
			if (method === 'month') {
				const curDate = new Date();

				const data = await getTotalEarnByMonth(
					topAffiliatorId,
					curDate.getFullYear()
				);
				const _result = adjustTotalEarnforGroupMonth(data);

				return res.status(200).json({ status: true, data: _result });
			} else if (method === 'week') {
				const [from, to] = getCurWeekDay();
				const data = await getTotalEarnBetween(topAffiliatorId, from, to);
				const _result = adjusttotalEarnForGroupWeek(data);
				return res.status(200).json({ status: true, data: _result });
			} else {
				const curdate = new Date();
				const curYear = curdate.getFullYear();
				const recordCurYear = await getTotalEarnYear(topAffiliatorId, curYear);
				const recordPrevYear = await getTotalEarnYear(
					topAffiliatorId,
					curYear - 1
				);

				let result = {} as {
					[id: number]: number;
				};
				if (recordCurYear.length) {
					result[curYear] = recordCurYear[0].totalEarned.toFixed(3);
				} else {
					result[curYear] = 0;
				}
				if (recordPrevYear.length) {
					result[curYear - 1] = recordPrevYear[0].totalEarned.toFixed(3);
				} else {
					result[curYear - 1] = 0;
				}

				return res.status(200).json({ status: true, data: result });
			}
		} else {
			return res
				.status(200)
				.json({ status: false, msg: 'There is not top affiliator' });
		}
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}

export async function getTopAffiliators(req: Request, res: Response) {
	try {
		const data = await getTopAffiliatorInformation();
		return res.status(200).json({ status: true, data: data });
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function getRevenue(req: Request, res: Response) {
	try {
		const { method } = req.query;
		const user = req['currentUser'];
		const affiliatorId = user._doc._id.toString();

		if (method === 'month') {
			const curDate = new Date();

			const data = await getTotalEarnByMonth(
				affiliatorId,
				curDate.getFullYear()
			);
			const _result = adjustTotalEarnforGroupMonth(data);

			return res.status(200).json({ status: true, data: _result });
		} else if (method === 'week') {
			const [from, to] = getCurWeekDay();
			const data = await getTotalEarnBetween(affiliatorId, from, to);
			const _result = adjusttotalEarnForGroupWeek(data);
			return res.status(200).json({ status: true, data: _result });
		} else {
			const curdate = new Date();
			const curYear = curdate.getFullYear();
			const recordCurYear = await getTotalEarnYear(affiliatorId, curYear);
			const recordPrevYear = await getTotalEarnYear(affiliatorId, curYear - 1);

			let result = {} as {
				[id: number]: number;
			};
			if (recordCurYear.length) {
				result[curYear] = recordCurYear[0].totalEarned.toFixed(3);
			} else {
				result[curYear] = 0;
			}
			if (recordPrevYear.length) {
				result[curYear - 1] = recordPrevYear[0].totalEarned.toFixed(3);
			} else {
				result[curYear - 1] = 0;
			}

			return res.status(200).json({ status: true, data: result });
		}
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function widthdrowCrypto(req: Request, res: Response) {
	try {
		const { amount, crypto_address } = req.body;
		const user = req['currentUser'];

		if (checkAddress(crypto_address) && parseFloat(amount) > 0) {
			const inputData = await createCryptoRecord(
				user._doc._id.toString(),
				crypto_address,
				parseFloat(amount)
			);
			const { smsCode, id } = await createWithdrowHis(inputData);
			console.log('smscode:', smsCode);
			// await sendOTPToAffiliator(user?._doc?.phone,smsCode)
			return res.status(200).json({ status: true, id: id });
		} else {
			return res
				.status(200)
				.json({ status: false, msg: 'Please input valide params' });
		}
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function widthdrowBank(req: Request, res: Response) {
	try {
		const { bank_name, holder, iban, bic, amount } = req.body;
		const user = req['currentUser'];
		const inputData = await createBankRecord(
			user._doc._id.toString(),
			bank_name,
			holder,
			iban,
			bic,
			parseFloat(amount)
		);
		const { smsCode, id } = await createWithdrowHis(inputData);
		console.log('smscode:', smsCode);
		// await sendOTPToAffiliator(user?._doc?.phone,smsCode)
		return res.status(200).json({ status: true, id: id });
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function widthdrowPaypal(req: Request, res: Response) {
	try {
		const { paypal_email, amount } = req.body;
		const user = req['currentUser'];
		const inputData = await createPaypalRecord(
			user._doc._id.toString(),
			paypal_email,
			parseFloat(amount)
		);
		const { smsCode, id } = await createWithdrowHis(inputData);
		console.log('smscode:', smsCode);
		// await sendOTPToAffiliator(user?._doc?.phone,smsCode)
		return res.status(200).json({ status: true, id: id });
	} catch (e: any) {
		log.error(e);
		return res.status(400).json({ error: e.message as string });
	}
}
export async function checkSmsCodeForWithdrow(req: Request, res: Response) {
	try {
		const { smsCode, id } = req.body;
		const withdrowTrasaction = await findHistoryById(id);
		if (withdrowTrasaction) {
			if (
				withdrowTrasaction.smsCode &&
				smsCode === withdrowTrasaction.smsCode
			) {
				const updateAt = withdrowTrasaction.updatedAt.getTime();
				const now = new Date().getTime();
				const diff = now - updateAt;
				if (diff >= 5 * 60 * 1000) {
					return res
						.status(200)
						.json({ status: false, msg: 'It is more than 5 mins' });
				}
				withdrowTrasaction.smsIsVerify = true;
				await withdrowTrasaction.save();
				const balanceInput = {
					affiliatorId: withdrowTrasaction?.affiliator,
					isWithdrow: true,
					amount: withdrowTrasaction.amount,
				};
				const refId = withdrowTrasaction!._id.toString();
				await addBalanceRecord(
					balanceInput as AffiliatorBalanceDocument,
					refId,
					''
				);

				return res
					.status(200)
					.json({ status: true, transaction: withdrowTrasaction });
			} else {
				return res.status(200).json({
					status: false,
					msg: 'SMS code is wrong , please send it again!',
				});
			}
		} else {
			return res
				.status(200)
				.json({ status: false, msg: 'There is no transaction' });
		}
	} catch (e: any) {
		log.error(e);
		return res.status(400).json({ error: e.message as string });
	}
}
export async function resendSmsCodeForWithdrow(req: Request, res: Response) {
	try {
		const { id } = req.body;
		const withdrowTrasaction = await findHistoryById(id);
		if (withdrowTrasaction) {
			const smsCode = generateRandomNumber(6);
			console.log('smsCode:', smsCode);
			if (withdrowTrasaction?.smsIsVerify) {
				return res
					.status(200)
					.json({ status: false, msg: 'It is verified alerady' });
			} else {
				// await sendOTPToAffiliator("+19897102663",genereateNum)
				withdrowTrasaction.smsCode = smsCode;
				await withdrowTrasaction.save();
				return res.status(200).json({ status: true });
			}
		} else {
			return res
				.status(200)
				.json({ status: false, msg: 'There is no transaction' });
		}
	} catch (e: any) {
		log.error(e);
		return res.status(400).json({ error: e.message as string });
	}
}
export async function getBalanceHistory(req: Request, res: Response) {
	try {
		const _user = req['currentUser'];
		const records = await getWithdrowHistory(_user?._doc._id.toString());
		return res.status(200).json({ status: true, data: records });
	} catch (e: any) {
		log.error(e);
		return res.status(400).json({ error: e.message as string });
	}
}
export async function getLatestWidHistory(req: Request, res: Response) {
	try {
		const user = req['currentUser'];
		const records = await getLatestWithdrowHistory(user?._doc._id.toString());
		return res.status(200).json({ status: true, data: records });
	} catch (e: any) {
		log.error(e);
		return res.status(400).json({ error: e.message as string });
	}
}
// export async function verifyOTPForWithdrow(req: Request, res:Response){
//     try{
//         const {otpNum}= req.body;
//         const user = req["currentUser"];
//         const key = user._doc.email +":" + otpNum;
//         const withdrowVal =await redisHandle.get(key);
//         if(withdrowVal){
//             await createWithdrowHis(withdrowVal);
//             return res.status(200).json({status:true});
//         }else{
//             return res.status(200).json({status:false,msg:"There is no key"});
//         }
//     }catch(e:any){
//         log.error(e);
//         return res.status(400).json({error:e.message as string});
//     }
// }
export async function kycNotification(req: Request, res: Response) {
	try {
		console.log('request:::::', req.body);
		const { session_id, state, service, reason } = req.body;
		const user = await getAffiliatorBySession(session_id);
		if (user) {
			user.kycIsVerify = 1;
			user.save();
		}
		// request::::: {
		//       session_id: '9fe87e38-904447c5-037f365e-ee762334',
		//       state: 'VALIDATED',
		//       step_id: '3937820629478',
		//       service: 'PHONE',
		//       reason: ''
		//      }
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}

export async function checkKYCVerification(req: Request, res: Response) {
	try {
		const user = req['currentUser'];
		const kyc_session = user._doc.kycSession;
		if (kyc_session) {
			const result = !user._doc.kycIsVerify ? 'PENDING' : 'VERIFIED';
			if (result) {
				return res
					.status(200)
					.json({ status: true, session_id: kyc_session, verified: result });
			} else {
				return res
					.status(400)
					.json({ status: false, msg: 'There are some problem on synaps' });
			}
		} else {
			const result = await initSession();
			if (result) {
				const sessionId = result;
				await updateUserDetails(user._doc._id.toString(), {
					kycSession: sessionId,
				} as AffiliatorDocument);
				return res
					.status(200)
					.json({ status: true, verified: false, session_id: sessionId });
			} else {
				return res
					.status(200)
					.json({ status: false, msg: 'some bug on synaps' });
			}
		}
	} catch (e: any) {
		log.error(e);
		return res.status(400).json({ error: e.message as string });
	}
}
export async function getCommision(req: Request, res: Response) {
	try {
		const result = await getAllCommisions();
		return res.status(200).json({ status: true, data: result });
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function getTopAffilited(req: Request, res: Response) {
	try {
		const _user = req['currentUser'];
		const data = await getTopAffilatedUser(_user?._doc._id.toString());
		return res.status(200).json({ status: true, data: data });
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
}
export async function getRanking(req: Request, res: Response) {
	try {
		const _user = req['currentUser'];
		const rankRecord = await getAllAffiliatorInfor();
		let rank = 0;
		rankRecord.forEach((item: any, index: any) => {
			console.log('item:', _user._doc._id);
			if (item['_id'].toString() === _user._doc._id.toString()) {
				rank = index + 1;
			}
		});
		const topAffiliatorId = rankRecord[0]._id;
		const topAffiliator = await findUserById(topAffiliatorId);
		const curLevelRecord = await findCommisionById(
			topAffiliator?.curLevel.toString()
		);
		return res
			.status(200)
			.json({ status: true, rank: rank, record: curLevelRecord?.level });
	} catch (e: any) {
		log.error(e);
		return res.status(409).json({ error: e.message as string });
	}
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
function calculateGetEarn(records: any) {
	if (records) {
		if (records.length === 1) {
			return records[0].amount;
		} else {
			return (
				records[0].totalEarned - records[1].totalEarned + records[1].amount
			);
		}
	} else {
		return 0;
	}
}
function adjustTotalEarnforGroupMonth(records: any) {
	let result = [];
	for (let i = 1; i <= 12; i++) {
		result[i - 1] = 0;
	}
	for (const item of records) {
		result[item._id.month - 1] = item.totalEarned.toFixed(3);
	}
	return result;
}
function adjusttotalEarnForGroupWeek(records: any) {
	let result = {} as {
		[id: string]: number;
	};
	const [from, to] = getCurWeekDay();
	const tmpDate = from;
	for (let i = 1; i <= 7; i++) {
		const curDate = format(tmpDate, 'YYYY-MM-DD');
		const curResult = records.find((item: any) => item?._id === curDate);
		const tmpRes =
			curResult !== undefined ? curResult?.totalEarned.toFixed(3) : 0;
		result[format(tmpDate, 'DD/MM')] = tmpRes;
		tmpDate.setDate(tmpDate.getDate() + 1);
	}
	return result;
}
function calculateIncomeProgress(earnlist: Array<number>) {
	if (earnlist.length === 0) return [];
	let result = [];
	result[0] = 0;
	let tmp = earnlist[0];
	for (let i = 1; i < earnlist.length; i++) {
		tmp += earnlist[i];
		result[i] = tmp / (i + 1);
	}
	return result;
}
function sendOTPToAffiliator(phone: string, code: string) {
	return new Promise(async (resolve, reject) => {
		try {
			let response = await twilioClient.messages.create({
				from: '+12407711834',
				to: phone,
				body: 'Your Flash Transfer OTP Code is ' + code,
			});
			resolve({
				status: 'success',
				message: 'OTP sent',
			});
		} catch (error) {
			reject({ status: 'fail', message: error });
		}
	});
}
