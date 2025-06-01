import * as cron from 'node-cron';
import { provider,FlashContract } from '../../utils/crypto';
import { sendBnbFunc, sendTokenFuc } from './getEventFunc';
// hash map to map keys to jobs
const jobMap: Map<string, cron.ScheduledTask> = new Map();

export const setupCronJobMap = async (): Promise<void> => {
    const sendBNBJob:any = cron.schedule('1-59/5 * * * * *', async () => {
        try{
            const blockNumber = await provider.getBlockNumber();
            const initBlockNumber  =blockNumber-10;
            const events = await FlashContract.queryFilter(FlashContract.filters.sendBNBEvent(), initBlockNumber, blockNumber);
            if(events.length>0){
                for(const ev of events){
                    if(ev.args){
                        const from = ev.args.from;
                        const sendAmount = ev.args._amount;  //token amount
                        const _feeAmount = ev.args._feeAmount; // amount of usd price
                        await sendBnbFunc(from,sendAmount,_feeAmount,ev);
                        console.log(`${events.length} Send Bnb events found on contract ${FlashContract.address}`);
                    }
                }
               
            }
           
        }catch(e){
            console.log("SendBnbCronJob Err:",e);
        }
    },{scheduled:false}).start();
    const sendTokenJob:any = cron.schedule('3-59/5 * * * * *', async () => {
        try{
            const blockNumber = await provider.getBlockNumber();
            const initBlockNumber  =blockNumber-10;
            const events = await FlashContract.queryFilter(FlashContract.filters.sendTokenEvent(), initBlockNumber, blockNumber);
            if(events.length>0){
                for(const ev of events){
                    if(ev.args){
                        const from = ev.args.from;
                        const _tokenAddr = ev.args._tokenAddr;
                        const sendAmount = ev.args._amount;  //token amount
                        const feeAmount = ev.args._feeAmount; // amount of usd price
                        await sendTokenFuc(from,_tokenAddr,sendAmount,feeAmount,ev);
                        console.log(`${events.length} Send Token events found on contract ${FlashContract.address}`);
                    }
                }
            }
       
        }catch(e){
            console.log("SendBnbCronJob Err:",e);
        }
    },{scheduled:false}).start();
    const sendWholeBNBJob:any = cron.schedule('* 1 1-24/5 * * *', async () => {
        try{
            const blockNumber = await provider.getBlockNumber();
            const initBlockNumber  =process.env.FROM_BLOCK? parseInt(process.env.FROM_BLOCK): blockNumber;
            let allEvents:any = [];

            for(let i = initBlockNumber; i<blockNumber; i+=5000){
                const _startBlock = i;
                const _endBlock = Math.min(blockNumber, i + 4999);
                const events = await FlashContract.queryFilter(FlashContract.filters.sendBNBEvent(), _startBlock, _endBlock);
                allEvents = [...allEvents, ...events]
            }
            if(allEvents.length>0){
                for(const ev of allEvents){
                    if(ev.args){
                        const from = ev.args.from;
                        const sendAmount = ev.args._amount;  //token amount
                        const _feeAmount = ev.args._feeAmount; // amount of usd price
                        await sendBnbFunc(from,sendAmount,_feeAmount,ev);
                    }
                }
                console.log(`${allEvents.length} SendBNB events found on contract ${FlashContract.address}`);
            }
            
        }catch(e){
            console.log("SendWholeBnbCronJob Err:",e);
        }
    },{scheduled:false}).start();
    const sendWholeTokenJob:any = cron.schedule('* 3 1-24/5 * * *', async () => {

        try{
            const blockNumber = await provider.getBlockNumber();
            const initBlockNumber  =process.env.FROM_BLOCK? parseInt(process.env.FROM_BLOCK): blockNumber;
            let allEvents:any = [];

            for(let i = initBlockNumber; i<blockNumber; i+=5000){
                const _startBlock = i;
                const _endBlock = Math.min(blockNumber, i + 4999);
                const events = await FlashContract.queryFilter(FlashContract.filters.sendTokenEvent(), _startBlock, _endBlock);
                allEvents = [...allEvents, ...events]
            }
            if(allEvents.length>0){
                for(const ev of allEvents){
                    if(ev.args){
                        const from = ev.args.from;
                        const _tokenAddr = ev.args._tokenAddr;
                        const sendAmount = ev.args._amount;  //token amount
                        const feeAmount = ev.args._feeAmount; // amount of usd price
                        await sendTokenFuc(from,_tokenAddr,sendAmount,feeAmount,ev);
                    }
                }
            }
        }catch(e){
            console.log("SendWholeToken CronJob Err:",e);
        }
    },{scheduled:false}).start();
    
    jobMap.set("sendWholeBNBJob",sendWholeBNBJob);
    jobMap.set("sendWholeTokenJob",sendWholeTokenJob);    
    jobMap.set("sendBnbJob",sendBNBJob);
    jobMap.set("sendTokenJob",sendTokenJob);
}

const sleep = ()=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,2000)
    })
}

export const removeFromHashMap  = (key:string)=>{
    if(jobMap.has(key)){
        jobMap.delete(key);
    }
}