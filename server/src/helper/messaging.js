import Nexmo from "nexmo";
import config from "config";
const nexmo = new Nexmo(
  {
    apiKey: config.get("nexmo.apiKey"),
    apiSecret: config.get("nexmo.apiSecret")
  },
  {
    debug: true
  }
);

function sendSms(text, to, from = "Kisan OTP") {
  nexmo.message.sendSms(from, to, text, response => {
    console.log(response);
  });
}
export { sendSms };
