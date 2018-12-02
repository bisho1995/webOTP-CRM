const host = "https://kisan-otp-service.herokuapp.com/";
export const environment = {
  production: true,
  routes: {
    saveOTP: `${host}save-otp`,
    generateOTP: `${host}generate-otp`,
    receiveOTPs: `${host}retrieve-otps`
  }
};
