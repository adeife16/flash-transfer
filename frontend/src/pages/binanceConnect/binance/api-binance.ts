import Axios from '../../../Services/axios';

// import fs from 'fs';
export const getBinanceUI = async () => {
	// const privKey = await readFileContent('../../../privBinance/rsa_pkcs8.pri');
	// const pubKey = await readFileContent('../../../privBinance/rsa_pkcs8.pub');
	// console.log('privateKey', privKey);
	// delete Axios.defaults.headers.common['authorization'];

	return Axios.get(
		'https://sandbox.bifinity.org/en/pre-connect?cryptoCurrency=BNB&merchantCode=flash_tech_test',
		{
			withCredentials: false,
		}
	);
};
async function sign(srcData: string, privateKey: CryptoKey): Promise<string> {
	const encoder = new TextEncoder();
	const data = encoder.encode(srcData);

	const signature = await window.crypto.subtle.sign(
		{
			name: 'RSASSA-PKCS1-v1_5',
			hash: 'SHA-256',
		},
		privateKey,
		data
	);

	const signatureBytes = new Uint8Array(signature);
	const base64Signature = btoa(String.fromCharCode(...signatureBytes));
	return base64Signature;
}

async function verify(
	srcData: string,
	publicKey: CryptoKey,
	sign: string
): Promise<boolean> {
	const encoder = new TextEncoder();
	const data = encoder.encode(srcData);

	const signatureBytes = new Uint8Array(
		atob(sign)
			.split('')
			.map((char) => char.charCodeAt(0))
	);
	const signature = new Uint8Array(signatureBytes);

	const result = await window.crypto.subtle.verify(
		{
			name: 'RSASSA-PKCS1-v1_5',
			hash: 'SHA-256',
		},
		publicKey,
		signature,
		data
	);

	return result;
}
// function readFileContent(path: string): string {
// 	const content = fs.readFileSync(path);
// 	return content.toString();
// }
