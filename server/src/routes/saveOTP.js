import { saveOTP } from "../model/otp/otp";
import { sendSms } from "../helper/messaging";
export default function(req, res) {
  console.log(req.body);
  console.log(req.body);
  const {
    otp,
    first_name,
    last_name,
    middle_name,
    profile,
    birthday,
    phone,
    email,
    company,
    msg
  } = req.body;
  sendSms(msg, phone);
  saveOTP(
    otp,
    first_name,
    middle_name,
    last_name,
    profile,
    birthday,
    phone,
    email,
    company,
    msg
  )
    .then(data => {
      res.status(200).json({ status: "success", message: data });
    })
    .catch(err => {
      console.log(err);
      res.status(401).json({ status: "error", message: err });
    });
}
