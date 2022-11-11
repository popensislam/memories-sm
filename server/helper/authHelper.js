import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const generateAccessToken = (userId) => {
  const token = jwt.sign({ email: userId.email, id: userId._id }, process.env.TOKEN_KEY, {
    expiresIn: "5h",
  });
  return token;
};