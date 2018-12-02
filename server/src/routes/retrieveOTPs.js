import { getOtps } from "../model/otp/otp";
export default function(req, res) {
  getOtps()
    .then(data => res.json({ status: "success", result: data }))
    .catch(err => {
      res.json({ status: "rrror", err });
    });
}
