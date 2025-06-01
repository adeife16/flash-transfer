import { FlashContract, provider } from '../../utils/crypto';
import { sendBnbFunc, sendTokenFuc } from './getEventFunc';

export const installEvents = ()=>{
    const contract = FlashContract;
    
    contract.on("sendBNBEvent",async (from,_amount,_feeAmount)=>{
        const blockNumber = await provider.getBlockNumber();
        const events = await contract.queryFilter(contract.filters.sendBNBEvent(),(blockNumber-10));
        if(events.length>0){
            for (const ev of events) {
                console.log("bnb event:",events)
                if (ev.args) {
                    const from = ev.args.from;
                    const sendAmount = ev.args._amount;  //token amount
                    const _feeAmount = ev.args._feeAmount; // amount of usd price
                    await sendBnbFunc(from,sendAmount,_feeAmount,ev);
                }
            }
        }
    })

    contract.on("sendTokenEvent",async (from,tokenAddr,_amount,_feeAmount)=>{
        const blockNumber = await provider.getBlockNumber();
        const events = await contract.queryFilter(contract.filters.sendTokenEvent(),(blockNumber-10));
        if(events.length>0){
            for (const ev of events) {
                if (ev.args) {
                    const from = ev.args.from;
                    const _tokenAddr = ev.args._tokenAddr;
                    const sendAmount = ev.args._amount;  //token amount
                    const feeAmount = ev.args._feeAmount; // amount of usd price
                    await sendTokenFuc(from,_tokenAddr,sendAmount,feeAmount,ev);
                }
            }
        }
    })
}