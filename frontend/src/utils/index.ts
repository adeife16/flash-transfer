/* eslint-disable import/no-extraneous-dependencies */
import { getAddress } from '@ethersproject/address';
import { AddressZero } from '@ethersproject/constants';
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { ethers ,logger,Contract} from 'ethers';
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { formatFixed, parseFixed } from "@ethersproject/bignumber";
import { formatUnits, isAddress } from "ethers/lib/utils";

const names = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
]

export function hexEncode (str:string){
    var hex, i;

    var result = "";
    for (i=0; i<str.length; i++) {
        hex = str.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result
}

export function hexDecode (str:string){
    var j;
    var hexes = str.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
}
//sign message
export  function signMessage(library: Web3Provider,account:string,message:string):Promise<string>{
    const signer = getSigner(library,account);
    return signer.signMessage(message);
}
// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
    return library.getSigner(account).connectUnchecked();
}
  export const getshortWalletAddress = (account: string)=>{
    if(ethers.utils.isAddress(account)){
        return `${account.slice(0,6)}...${account.slice(-4)}`;
    }
    return account;
}
// account is optional
function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
    return account ? getSigner(library, account) : library;
  }
  export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
    if(!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parmeter '${address}'.`);
    }
    return new Contract(address,ABI,getProviderOrSigner(library, account) as any);
}
  export function formatUints(value:BigNumberish, uintName?: string | BigNumberish): string {
    if(typeof(uintName) === "string") {
        const index = names.indexOf(uintName);
        if(index !== -1 ) { uintName = 3 * index ;}
    }
    return formatFixed(value, (uintName != null) ? uintName : 18);
}
export function parseUints ( value: string, uintName?: BigNumberish) : BigNumber {
    if(typeof(value) !== "string") {
        logger.throwArgumentError("value must be a string", "value", value);
    }
    if(typeof(uintName)  === "string"){
        const index = names.indexOf(uintName);
        if (index !==-1) {uintName = 3 * index;}
    }
    return parseFixed( value, (uintName != null)? uintName:18);
}

export function formatEther(wei: BigNumberish): string {
    return formatUnits(wei,18)
}
export function parseEther(ether: string): BigNumber {
    return parseUints(ether,18);
}
export function createTopic(funName:string):string{
    return ethers.utils.id(funName);
}