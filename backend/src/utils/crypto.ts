/** @format */

const ethUtil = require('ethereumjs-util');
import { BigNumberish, ethers, utils } from 'ethers';
// const FlashContractAbi = require("../abi/flash_transfer_abi.json");
// const  OracleContractAbi = require("../abi/oracle_contract_abi.json");
import FlashContractAbi from '../abi/flash_transfer_abi.json';
import OracleContractAbi from '../abi/oracle_contract_abi.json';
export enum ServiceType {
	Cron = 'Cron',
	PastEvent = 'PastEvent',
	Contract = 'Contract',
}
export enum PriceUnit {
	Wei = 'wei',
	Eth = 'eth',
	Usd = 'usd',
}
export const priceUnits = {
	[PriceUnit.Wei]: 18,
	[PriceUnit.Eth]: 1,
	[PriceUnit.Usd]: 8,
};
export const levelBar = [30, 70, 150, 350, 500, 1200, 1600, 2000, 3000];

export function getLevel(point: number) {
	for (var i = 0; i < levelBar.length; i++) {
		if (point <= levelBar[i]) return i + 1;
		if (i === levelBar.length - 1) return 10;
	}
}
export function getPercentProgressLevel(point: number) {
	for (var i = 0; i < levelBar.length; i++) {
		if (point <= levelBar[i]) {
			if (i === 0) {
				return (100 * point) / levelBar[i];
			} else
				return (
					(100 * (point - levelBar[i - 1])) / (levelBar[i] - levelBar[i - 1])
				);
		}
		if (i === levelBar.length - 1) return 100;
	}
}

const NETWORK = process.env.NETWORK || 'testnet';

const FLASH_CONTRACT_ADDRESS: {
	[key: string]: string;
} = {
	mainnet: '',
	testnet: '0xE654754b3FdFfea7A197cf6fc82359f2f48814ab',
};

const ORACLE_CONTRACT_ADDRESS: {
	[key: string]: string;
} = {
	mainnet: '',
	testnet: '0xd1b0da85d5bf97259bdb5cca3df83624b34b6db6',
};

export const node_url: {
	[key: string]: {
		[key: string]: string;
	};
} = {
	testnet: {
		providerUrl: 'wss://data-seed-prebsc-2-s3.binance.org:8545',
		rpcUrl: 'https://bsc-testnet.publicnode.com',
	},
	mainnet: {
		providerUrl: 'wss://bsc-dataseed.binance.org/',
		rpcUrl: 'https://bsc-dataseed.binance.org/',
	},
};

export const provider = new ethers.providers.JsonRpcBatchProvider(
	node_url[NETWORK].rpcUrl
);
export const FlashContract = new ethers.Contract(
	FLASH_CONTRACT_ADDRESS[NETWORK],
	FlashContractAbi,
	provider
);
export const OracleContract = new ethers.Contract(
	ORACLE_CONTRACT_ADDRESS[NETWORK],
	OracleContractAbi,
	provider
);

export const getValueOfUnits = (value: BigNumberish, type: PriceUnit) => {
	return ethers.utils.formatUnits(value, priceUnits[type]);
};

export async function checkSignMsg(
	nonce: string,
	signature: string
): Promise<string> {
	const msg = generateMsgFromNonce(nonce);
	return utils.verifyMessage(msg, signature);
}
export async function VerifySignMsg(
	pub_addr: string,
	msg: string,
	signature: string
): Promise<boolean> {
	const address = await utils.verifyMessage(msg, signature);
	if (address.toLowerCase() === pub_addr.toLowerCase()) {
		return true;
	} else {
		return false;
	}
}
export function generateMsgFromNonce(nonce: string): string {
	const msg = hexEncode(`I am signing my one-time nonce: ${nonce}`);
	return '0x' + msg;
}
export function hexEncode(str: string) {
	var hex, i;

	var result = '';
	for (i = 0; i < str.length; i++) {
		hex = str.charCodeAt(i).toString(16);
		result += ('000' + hex).slice(-4);
	}

	return result;
}

export function hexDecode(str: string) {
	var j;
	var hexes = str.match(/.{1,4}/g) || [];
	var back = '';
	for (j = 0; j < hexes.length; j++) {
		back += String.fromCharCode(parseInt(hexes[j], 16));
	}

	return back;
}
export function checkAddress(str: string): boolean {
	return ethers.utils.isAddress(str);
}
