import express from "express";
import "./model/db";
import path from "path";
import cors from "cors";
import logger from "morgan";
import bodyParser from "body-parser";
import routes from "./routes";

const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(
  logger("dev", {
    skip: () => app.get("env") === "test"
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/", routes);

app.all("**", (req, res) => {
  res.json({ status: "error", message: "The requested route is not found" });
});

export default app;
