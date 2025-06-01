declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module 'redux-logger';
declare type Maybe<T> = T | null | undefined;
declare type UnKnown = any;

declare type IReceiveCash = {
    country:string;
    img:string;
    amount:number;
}

declare interface PaymentState {
    Token:IToken | null;    // token seleted
    TokenAmount:number; // amount of token that will change
    FeeAmount:number; // Fee amount
    ReceiveCash:IReceiveCash | null;
}
declare type PaymentAction = {
    type:string;
    data: PaymentState
}
declare type SetTokenAction = {
    type:string;
    data:IToken;
}
declare type DispatchType = (args: PaymentAction) => PaymentAction