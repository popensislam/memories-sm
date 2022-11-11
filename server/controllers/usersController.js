import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateAccessToken } from "../helper/authHelper.js";

import UserModel from "../models/userModel.js";

export const signInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });

    if (!existingUser) return res.status(404).json({ message: "User does not exist." });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

    const token = generateAccessToken(existingUser);

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const RegUser = async (req, res) => {
  const { email, password, firstName, lastName, image } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) return res.status(400).json({ message: "User already exists." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({
      email,
      password: hashedPassword,
      first_name: firstName,
      last_name: lastName,
      image,
    });
    const token = generateAccessToken(result);

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const GetUserData = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    try {
      const decodedData = await jwt.verify(token, process.env.TOKEN_KEY);
      const user = await UserModel.findById(decodedData.id);
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong." });
    }
  } else {
    res.status(400).json({ message: "Unauthorized" });
  }
};
