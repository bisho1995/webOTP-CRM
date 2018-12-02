import { Router } from "express";
import saveOTP from "./routes/saveOTP";
import generateOTP from "./routes/generateOTP";
import retrieveOTPs from "./routes/retrieveOTPs";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "working" });
});
routes.post("/save-otp", saveOTP);
routes.get("/generate-otp", generateOTP);
routes.get("/retrieve-otps", retrieveOTPs);

export default routes;
