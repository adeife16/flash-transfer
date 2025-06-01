import { BigNumber } from 'ethers';
import axios from 'axios';
import { ServiceType } from '../../utils/crypto';
import { addTransferActivity, getTransferActivity } from './modelServices/transferActivity.service';

export const sendBnbFunc = async (from:string,sendAmount:BigNumber,feeAmount:BigNumber,event:any)=>{
    try{
        const activity = await getTransferActivity(event.transactionHash);
    
        if(!activity){
            await addTransferActivity(from,"0x00",sendAmount,feeAmount,event.transactionHash);
        }
    }catch(e){
        console.error("SendBnbEvent Err:",e);
    }
}

export const sendTokenFuc = async (from:string,tokenAddr:string,sendAmount:BigNumber,feeAmount:BigNumber,event:any)=>{
    try{
        const activity = await getTransferActivity(event.transactionHash);
        if(!activity){
            await addTransferActivity(from,tokenAddr,sendAmount,feeAmount,event.transactionHash);
        }
    }catch(e){
        console.error("SendBnbEvent Err:",e);
    }
}