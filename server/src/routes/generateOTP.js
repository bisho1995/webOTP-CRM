import otpGenerator from "otp-generator";
export default function(req, res) {
  const otp = otpGenerator.generate(6, {
    upperCase: false,
    specialChars: false
  });
  res.json({ status: "success", otp });
}
