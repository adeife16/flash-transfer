import axios from "axios";
export async function initSession(): Promise<string | null> {
    const result = await axios.post('https://individual-api.synaps.io/v3/session/init',{}, {
        headers: {
        'Content-Type': 'application/json',
         "Client-Id":process.env.SYNAPS_CLIENT_ID,
         "Api-Key":process.env.SYNAPS_API_KEY
        }
      }
    );
  
    if(result.status===200){
        return result.data.session_id;
    }else{
        return null;
    }
}
export async function GetSessionInfo(session_id:string):Promise<any>{
    const result = await axios.get('https://individual-api.synaps.io/v3/session/info', {
        headers: {
        'Content-Type': 'application/json',
         "Client-Id":process.env.SYNAPS_CLIENT_ID,
         "Api-Key":process.env.SYNAPS_API_KEY,
         "Session-Id":session_id
        }
      }
    );
    if(result.status === 200){
        return result.data.status;
    }else{
        return null;
    }
}