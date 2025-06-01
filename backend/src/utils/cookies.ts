/** @format */

import crypto from 'crypto';

const COOKIE_SECRET = process.env.COOKIE_SECRET || '';
const IV_LENGTH = 16;

export function encryptCookie(value: string): string {
	const iv = crypto.randomBytes(IV_LENGTH);
	const cipher = crypto.createCipheriv(
		'aes-256-cbc',
		Buffer.from(COOKIE_SECRET),
		iv
	);
	const encrypted = Buffer.concat([iv, cipher.update(value), cipher.final()]);
	return encrypted.toString('hex');
}

export function decryptCookie(encryptedValue: string): string {
	const encryptedBuffer = Buffer.from(encryptedValue, 'hex');
	const iv = encryptedBuffer.slice(0, IV_LENGTH);
	const decipher = crypto.createDecipheriv(
		'aes-256-cbc',
		Buffer.from(COOKIE_SECRET),
		iv
	);
	const decrypted = Buffer.concat([
		decipher.update(encryptedBuffer.slice(IV_LENGTH)),
		decipher.final(),
	]);
	return decrypted.toString();
}

export function setEncryptedCookie(
	res: any,
	name: string,
	value: string
): void {
	const encryptedValue = encryptCookie(value);

	res.cookie(name, encryptedValue);
}

export function getDecryptedCookie(req: any, name: string): string | undefined {
	const cookie = req.cookie(name);

	if (cookie) {
		return decryptCookie(cookie);
	}
	return undefined;
}
export function makeCookieValue(value: Object): string {
	return JSON.stringify(value);
}
export function parseCookieValue(value: string): Object {
	return JSON.parse(value);
}
