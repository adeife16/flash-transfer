
import log from '../logger';
export const REDIS_CONFIG = {
    HOST: 'redis://127.0.0.1:6379'
};
import { createClient}  from "redis";
export type TypeRedisClient = ReturnType<typeof createClient>;

export class CRedis {
    redisClient:TypeRedisClient | undefined;
    constructor(){
        this.redisClient = undefined;
    }

     init(){
        try{
            this.redisClient = createClient({
                url:REDIS_CONFIG.HOST
            });
             this.redisClient.connect();
        }catch(e:any){
            console.log("redis error:",e);
            throw new Error("Redis connect error");
        }
    }
    onError(){
        this.redisClient?.on("error",(e:any)=>{
            console.log('redisClient error :' + e);
        })
    }
    onConnect(callback:any) {
        this.redisClient?.on('connect', () => {
            log.info('redisClient connect');
            callback();
        });
    }
    getRedisClient():TypeRedisClient {
        return this.redisClient!;
    }
    async initVaule(key: string, defaultValue: any): Promise<any> {
        try {
            const res = await this.redisClient?.get(key);

            if (res == undefined) {
                await this.redisClient?.set(key, JSON.stringify(defaultValue));
            } else {
                defaultValue = JSON.parse(res);
            }

            return defaultValue;
        } catch (e) {
            console.error('redis server error: ', e);
            return defaultValue;
        }
    }

    async get(key: string): Promise<any> {
        try {
            const res = await this.redisClient?.get(key);

            if (res == undefined) {
                return 0;
            } else {
                return JSON.parse(res);
            }
        } catch (e) {
            console.error('redis server error: ', e);
            return 0;
        }
    }

    async set(key: string, value: any) {
        try {
            await this.redisClient?.set(key, JSON.stringify(value));
            await this.redisClient?.expire(key,300)
        } catch (e) {
            console.error('redis server error: ', e);
        }
    }
}

const redisHandle = new CRedis();
export default redisHandle;