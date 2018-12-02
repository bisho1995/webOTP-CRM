import { saveOTP } from "../model/otp/otp";
export default function(req, res) {
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
    company
  } = req.body;
  saveOTP(
    otp,
    first_name,
    middle_name,
    last_name,
    profile,
    birthday,
    phone,
    email,
    company
  )
    .then(data => {
      res.status(200).json({ status: "success", message: data });
    })
    .catch(err => res.status(401).json({ status: "error", message: err }));
}
