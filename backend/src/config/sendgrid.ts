const sendgrid = require('@sendgrid/mail')
import config from "../../enviorments/default";

sendgrid.setApiKey(config.SENDGRID_KEY);
export default sendgrid;