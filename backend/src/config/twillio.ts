import twilio from "twilio";
import config from "../../enviorments/default";

const twilioClient = twilio(config.Twilio.AccountSid, config.Twilio.AuthToken);
export default twilioClient;