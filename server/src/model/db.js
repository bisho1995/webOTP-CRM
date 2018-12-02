import mongoose from "mongoose";
import config from "config";
const connection = mongoose.createConnection(
  `mongodb://${config.get("database.username")}:${config.get(
    "database.password"
  )}@ds123584.mlab.com:23584/kisan-otp`,
  { useNewUrlParser: true }
);

connection.on("connected", () => {
  console.log("Conneted to database");
});

connection.on("error", err => {
  console.log(err);
});

process.on("SIGINT", () => {
  connection.close(() => {
    console.log("Closing database connection as applicaion is force closed");
    process.abort(0);
  });
});

module.exports = connection;
