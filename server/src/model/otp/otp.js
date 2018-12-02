import model from "./schema";

function saveOTP(
  otp,
  first_name,
  middle_name,
  last_name,
  profile,
  birthday,
  phone,
  email,
  company
) {
  return new Promise((resolve, reject) => {
    const instance = new model({
      otp: otp,
      profile: {
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        profile: profile,
        birthday: birthday,
        phone: phone,
        email: email,
        company: company
      }
    });
    instance.save((err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

function getOtps() {
  return new Promise((resolve, reject) => {
    model.find({}, (err, docs) => {
      if (err) reject(err);
      else resolve(docs);
    });
  });
}

export default undefined;
export { saveOTP, getOtps };
