
import BUSDlogo from "../../assests/Logo/BUSDlogo.svg";
import mu1 from "../../assests/Images/mu1.svg";
import mu2 from "../../assests/Images/mu2.svg";
import mu3 from "../../assests/Images/mu3.svg";
import mu4 from "../../assests/Images/mu4.svg";
import mu5 from "../../assests/Images/mu5.svg";
import mu6 from "../../assests/Images/mu6.svg";
import mu7 from "../../assests/Images/mu7.svg";
import mu8 from "../../assests/Images/mu8.svg";
import mu9 from "../../assests/Images/mu9.svg";
import mu10 from "../../assests/Images/mu10.svg";
import mu11 from "../../assests/Images/mu11.svg";
import { ALL_SUPPORTED_CHAIN_IDS, DEFAULT_NETWORK, SupportedChainId } from '../../constants/chains';

export type IToken = {
    img:string;
    value:string;
    address:string;
    network:string;
}
export type ITokenTypes = {
    [key in SupportedChainId] : Array<IToken>
} 
export const TokenTypeTest:Array<IToken> = [
    {img:BUSDlogo,value:"BUSD",address:process.env.REACT_APP_TOKEN_BUSD_TEST || "",network:"Binance"},
    // {img:mu1,value:"FLASH",address:process.env.REACT_APP_TOKEN_FLASH_TEST ||""},
    {img:mu2,value:"BNB",address:"0x00",network:"Binance"},
    // {img:mu3,value:"MATIC",address:process.env.REACT_APP_TOKEN_MATIC_TEST ||""},
    {img:mu4,value:"USDT",address:process.env.REACT_APP_TOKEN_USDT_TEST ||"",network:"Ethereum"},
    {img:mu5,value:"DAI",address:process.env.REACT_APP_TOKEN_DAI_TEST ||"",network:"Ethereum"},
    {img:mu6,value:"ETHEREUM",address:process.env.REACT_APP_TOKEN_ETHEREUM_TEST ||"",network:"Ethereum"},
    // {img:mu7,value:"PAX GOLD",address:process.env.REACT_APP_TOKEN_PAXGOLD_TEST ||""},
    // {img:mu8,value:"BITCOIN",address:process.env.REACT_APP_TOKEN_BITCOIN_TEST ||""},
    // {img:mu9,value:"LUNC",address:process.env.REACT_APP_TOKEN_LUNC_TEST ||""},
    // {img:mu10,value:"SHIBA INU",address:process.env.REACT_APP_TOKEN_SHIBAINU_TEST ||""},
    // {img:mu11,value:"DOGECOIN",address:process.env.REACT_APP_TOKEN_DOGECOIN_TEST ||""},
]
export const TokenTypeMain:Array<IToken>=[
    {img:BUSDlogo,value:"BUSD",address:process.env.REACT_APP_TOKEN_BUSD_MAIN || "",network:"Binance"},
    {img:mu1,value:"FLASH",address:process.env.REACT_APP_TOKEN_BUSD_MAIN ||"",network:"NxChain"},
    {img:mu2,value:"BNB",address:"0x00",network:"Binance"},
    {img:mu3,value:"MATIC",address:process.env.REACT_APP_TOKEN_BUSD_MAIN ||"",network:"Polygon"},
    {img:mu4,value:"USDT",address:process.env.REACT_APP_TOKEN_BUSD_MAIN ||"",network:"Ethereum"},
    {img:mu5,value:"DAI",address:process.env.REACT_APP_TOKEN_BUSD_MAIN ||"",network:"Ethereum"},
    {img:mu6,value:"ETHEREUM",address:process.env.REACT_APP_TOKEN_BUSD_MAIN ||"",network:"Ethereum"},
    {img:mu7,value:"PAX GOLD",address:process.env.REACT_APP_TOKEN_BUSD_MAIN ||"",network:"Ethereum"},
    {img:mu8,value:"BITCOIN",address:process.env.REACT_APP_TOKEN_BUSD_MAIN ||"",network:"Bitcoin"},
    {img:mu9,value:"LUNC",address:process.env.REACT_APP_TOKEN_BUSD_MAIN ||"",network:"LUNC"},
    {img:mu10,value:"SHIBA INU",address:process.env.REACT_APP_TOKEN_BUSD_MAIN ||"",network:"Ethereum"},
    {img:mu11,value:"DOGECOIN",address:process.env.REACT_APP_TOKEN_BUSD_MAIN ||"",network:"fork of Litecoin"},
]
export const curTokenAddress  = (tokenName:string,chainId:SupportedChainId)=>{
    if(chainId && tokenName !== ""){
        const Token=TokenList[chainId || DEFAULT_NETWORK].filter((item:IToken)=>{
            return item.value === tokenName
        });
        return Token[0]?.address
    }else{
        return ""
    }
}

export const getTokenByTokenName = (tokenName:string, chainId:SupportedChainId):IToken | null=>{
    if(chainId && tokenName !== ""){
        const Token = TokenList[chainId || DEFAULT_NETWORK].filter((item:IToken)=>{
            return item.value === tokenName
        });
        return Token[0];
    }else{
        return null 
    }
}
export const curTokenName  = (address:string,chainId:SupportedChainId)=>{
    console.log("chaind",address,chainId)
    if(chainId && address !== ""){
        const Token=TokenList[chainId || DEFAULT_NETWORK].filter((item:IToken)=>{
            return item.address === address
        });
        return Token[0]?.value
    }else{
        return ""
    }
}
export const tokenNetwork  = (tokenName:string,chainId:SupportedChainId)=>{
    if(chainId && tokenName !== ""){
        const Token=TokenList[chainId || DEFAULT_NETWORK].filter((item:IToken)=>{
            return item.value === tokenName
        });
        return Token[0]?.network
    }else{
        return ""
    }
}
export const WBNB:{ [chainId:number] : string} ={
    [SupportedChainId.MAINNET]:"",
    [SupportedChainId.TESTNET]:"0xae13d989dac2f0debff460ac112a837c89baa7cd"
}
export const TokenList:ITokenTypes = {
[SupportedChainId.MAINNET]:TokenTypeMain,
[SupportedChainId.TESTNET]:TokenTypeTest
}