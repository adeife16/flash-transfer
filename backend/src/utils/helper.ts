/** @format */

import { Request } from 'express';

export function generteRandomString(length: number): string {
	var result = '';
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
export function generateRandomNumber(length: number): string {
	var result = '';
	var firstCharactors = '123456789';
	var restCharactors = '0123456789';
	for (var i = 0; i < length; i++) {
		if (i === 0) {
			result += firstCharactors.charAt(
				Math.floor(Math.random() * firstCharactors.length)
			);
		} else {
			result += restCharactors.charAt(
				Math.floor(Math.random() * restCharactors.length)
			);
		}
	}
	return result;
}
export function validateMail(email: string) {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
}

export function getLastWeekDay(): Array<Date> {
	var curr = new Date(); // get current date
	var last = curr.getDate() - curr.getDay() - 1; // First day is the day of the month - the day of the week
	var first = last - 6; // last day is the first day + 6
	var startDate = new Date(curr.setDate(first));
	var endDate = new Date(curr.setDate(last));
	return [startDate, endDate];
}
export function getCurWeekDay(): Array<Date> {
	var curr = new Date(); // get current date
	var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
	var last = first + 6; // last day is the first day + 6
	var startDate = new Date(curr.setDate(first));
	var endDate = new Date(curr.setDate(last));
	return [startDate, endDate];
}
export function getLastMonth(): Array<Date> {
	var lastDate = new Date(); // current date
	lastDate.setDate(1); // going to 1st of the month
	lastDate.setHours(-1); // going to last hour before this date even started.
	var firstdayoflastmonth = new Date();
	firstdayoflastmonth.setDate(1);
	firstdayoflastmonth.setMonth(firstdayoflastmonth.getMonth() - 1);
	return [firstdayoflastmonth, lastDate];
}
export function getHalfDay(): Array<Date> {
	const curDate = new Date();
	if (Math.floor(curDate.getMonth() / 6) === 0) {
		var firstDate = new Date();
		firstDate.setMonth(0);
		firstDate.setDate(1);
		firstDate.setHours(0);
		var lastDate = new Date();
		lastDate.setMonth(6);
		lastDate.setDate(1);
		lastDate.setHours(-1);
		return [firstDate, lastDate];
	} else {
		var firstDate = new Date();
		firstDate.setMonth(6);
		firstDate.setDate(1);
		firstDate.setHours(0);
		var lastDate = new Date();
		lastDate.setMonth(12);
		lastDate.setDate(1);
		lastDate.setHours(-1);
		return [firstDate, lastDate];
	}
}

export function getCookie(request: Request, name: string): string | null {
	const cookies = getCookies(request);

	if (name in cookies) {
		return cookies[name];
	}

	return null;
}

export function getCookies(request: Request): { [key: string]: string } {
	const list = {} as { [key: string]: string };
	const cookieHeaders = request.headers?.cookie;
	if (!cookieHeaders) return list;

	cookieHeaders.split(`;`).forEach(function (cookie) {
		let [name, ...rest] = cookie.split(`=`);
		name = name?.trim();
		if (!name) return;
		const value = rest.join(`=`).trim();
		if (!value) return;
		list[name] = decodeURIComponent(value);
	});
	return list;
}
