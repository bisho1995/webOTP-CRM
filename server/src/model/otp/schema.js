import connection from "../db";
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  otp: {
    type: String,
    required: true
  },
  datatime: {
    type: String,
    default: Date.now()
  },
  msg: {
    type: String
  },
  verified: {
    type: Boolean,
    default: false
  },
  expired: {
    type: Boolean,
    default: false
  },
  profile: {
    first_name: {
      type: String,
      default: "--/--"
    },
    middle_name: {
      type: String,
      default: "--/--"
    },
    last_name: {
      type: String,
      default: "--/--"
    },
    company: {
      type: String,
      default: "--/--"
    },
    profile: {
      type: String,
      default: ""
    },
    birthday: {
      type: String,
      default: "--/--"
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      default: "--/--"
    }
  }
});

const model = connection.model("otp", schema);
export default model;
