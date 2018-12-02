import Nexmo from "nexmo";
import config from "config";
const nexmo = new Nexmo({
  apiKey: config.get("nexmo.apiKey"),
  apiSecret: config.get("nexmo.apiSecret")
});

function sendSms(text, to, from = "Kisan OTP") {
  nexmo.message.sendSms(from, to, text);
}

export { sendSms };
