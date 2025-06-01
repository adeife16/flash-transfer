import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_NETWORK } from '../../constants/chains';
import { IToken, TokenList } from '../../pages/Throughtpayment/constant';
import { AnyAction } from 'redux'
import { SET_TOKEN, SET_FEE_AMOUNT, SET_TOKEN_AMOUNT, SET_RECEIVE_CASH } from '../actions/index';
const initialState:PaymentState = {
    Token:TokenList[DEFAULT_NETWORK][0],
    TokenAmount:0,
    FeeAmount:0,
    ReceiveCash:null
}
export default function PaymentReducer (
    state = initialState,
    action:PaymentAction
) {
    switch(action.type){
        case SET_TOKEN:
            const token = action.data.Token;
            return {
                ...state,
                Token:token
            }
        case SET_FEE_AMOUNT:
            const fee = action.data.FeeAmount;
            return {
                ...state,
                FeeAmount:fee
            }
        
        case SET_TOKEN_AMOUNT:
            const tokenAmount = action.data.TokenAmount;
            return {
                ...state,
                FeeAmount:tokenAmount
            }
        case SET_RECEIVE_CASH:
            const Cash = action.data.ReceiveCash;
            return {
                ...state,
                ReceiveCash:Cash
            }
    }
    return state;    
}
