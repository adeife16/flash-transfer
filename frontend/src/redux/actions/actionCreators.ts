import { SET_TOKEN, SET_TOKEN_AMOUNT, SET_FEE_AMOUNT, SET_RECEIVE_CASH } from './index';
import { getTokenByTokenName, IToken } from '../../pages/Throughtpayment/constant';

export function setToken(tokenName:string,chainId:number){
    const token=getTokenByTokenName(tokenName,chainId);
    const action:PaymentAction = {
        type:SET_TOKEN,
        data:{
            Token:token,
            TokenAmount:0,
            FeeAmount:0,
            ReceiveCash:null
        }
    }
    return dispatchFunc(action)
}
export function setTokenAmount(tokenAmount:number){
    const action:PaymentAction = {
        type:SET_TOKEN_AMOUNT,
        data:{
            Token:null,
            TokenAmount:tokenAmount,
            FeeAmount:0,
            ReceiveCash:null
        }
    }
    return dispatchFunc(action)
}
export function setFeeAction (feeAmount:number){
    const action:PaymentAction = {
        type:SET_FEE_AMOUNT,
        data:{
            Token:null,
            TokenAmount:0,
            FeeAmount:feeAmount,
            ReceiveCash:null
        }
    }
    return dispatchFunc(action)
}
export function setReceiveCash (country:string,amount:number,img:string){
    const action:PaymentAction = {
        type:SET_RECEIVE_CASH,
        data:{
            Token:null,
            TokenAmount:0,
            FeeAmount:0,
            ReceiveCash:{
                country:country,
                amount:amount,
                img:img
            }
        }
    }
    return dispatchFunc(action)
}
export function dispatchFunc(action:PaymentAction){
    return (dispatch:DispatchType)=>{
        dispatch(action)
    }
}
