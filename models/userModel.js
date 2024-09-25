const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNo: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Please enter a valid 10-digit mobile number"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    skills: {
      type: [String],
      default: [],
    },
    pursuingYear: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4],
    },
    division: {
      type: String,
      required: true,
      trim: true,
    },
    rollNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(plm);
const User = mongoose.model("User", userSchema);
module.exports = User;
