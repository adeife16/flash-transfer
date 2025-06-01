/** @format */

import mongoose, { Types } from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../../enviorments/default';
import { VerifySignMsg, hexEncode } from '../utils/crypto';
import { generteRandomString } from '../utils/helper';
import { DocumentDefinition } from 'mongoose';

import { TransferActivityDocument } from './transferActivity.model';
import { AffiliatorDocument } from './affiliator.model';
const Schema = mongoose.Schema;
export interface UserDocument extends mongoose.Document {
	_id?: Types.ObjectId;
	email?: string;
	name?: string;
	phone?: string;
	profileImg?: string;
	status?: string;
	isPhoneVerified?: boolean;
	otp?: string;
	password?: string;
	createdAt: Date;
	updatedAt: Date;
	membership?: string;
	pub_addr?: string | null;
	nonce?: string | null;
	transferActivities?: any;
	affiliator?: AffiliatorDocument['_id'];
	isCreatedByWallet?: boolean;
	comparePassword(candidatePassword: string): Promise<boolean>;
	verifyNonce(signature: string): boolean;
	generateNonce(): Promise<UserDocument>;
	updateWallet(
		pub_addr: string | null,
		affiliatorId: Types.ObjectId | null
	): Promise<UserDocument>;
}

const { SALT } = config;

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
		},
		phone: {
			type: String,
		},
		profileImg: {
			type: String,
		},
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		status: {
			type: String,
		},
		isPhoneVerified: {
			type: Boolean,
		},
		otp: {
			type: String,
		},
		presentAddress: {
			type: String,
		},
		permenantAddress: {
			type: String,
		},
		country: {
			type: String,
		},
		city: {
			type: String,
		},
		postalCode: {
			type: String,
		},
		dob: {
			type: String,
		},
		role: {
			type: String,
		},
		password: {
			type: String,
		},
		pub_addr: {
			type: String,
		},
		nonce: {
			type: String,
		},
		affiliator: {
			type: Schema.Types.ObjectId,
			ref: 'affiliators',
		},
		isCreatedByWallet: {
			type: Boolean,
		},
		transferActivities: [
			{ type: mongoose.Types.ObjectId, ref: 'transferActivities' },
		],
		membership: {
			type: mongoose.Types.ObjectId,
			ref: 'memberships',
			default: null,
		},
	},
	{ timestamps: true }
);
// For encrypting the password
UserSchema.pre('save', async function (next) {
	let user = this as UserDocument;

	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();

	const saltRound = parseInt(SALT);
	// Random additional data
	console.log('SALT:', SALT);
	const salt = await bcrypt.genSalt(saltRound);

	const hash = await bcrypt.hashSync(user.password!, salt);

	// Replace the password with the hash
	user.password = hash;

	return next();
});
// Used for logging in
UserSchema.methods.comparePassword = async function (
	candidatePassword: string
) {
	const user = this as UserDocument;

	return bcrypt.compare(candidatePassword, user.password!).catch((e) => false);
};
// used verify nonce;
UserSchema.methods.verifyNonce = function (signature: string) {
	const user = this as UserDocument;

	const msg = hexEncode(`I am signing my one-time nonce: ${user.nonce}`);

	if (user.pub_addr) {
		return VerifySignMsg(user.pub_addr!, '0x' + msg, signature);
	} else {
		return false;
	}
};
//used generate nonce random
UserSchema.methods.generateNonce = async function () {
	const user = this as UserDocument;
	user.nonce = generteRandomString(10);
	return new Promise((resolve: any, reject: any) => {
		user
			.save()
			.then((res: UserDocument) => {
				return resolve(res);
			})
			.catch((error: any) => {
				return reject(error);
			});
	});
};
UserSchema.methods.updateWallet = async function (
	pub_addr: string | null,
	affiliatorId: Types.ObjectId | null
) {
	const user = this as UserDocument;
	user.pub_addr = pub_addr;
	if (affiliatorId) user.affiliator = affiliatorId;
	return new Promise((resolve: any, reject: any) => {
		user
			.save()
			.then((res: UserDocument) => {
				return resolve(res);
			})
			.catch((error: any) => {
				return reject(error);
			});
	});
};
const User = mongoose.model<UserDocument>('user', UserSchema);

export default User;
