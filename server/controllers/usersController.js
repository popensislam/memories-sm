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
  const {
    email,
    password,
    first_name,
    last_name,
    username,
    selectedFile,
    status,
    interestedIn,
    phone,
    country,
    city,
    website,
  } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    const existingUserByName = await UserModel.findOne({ username });

    if (existingUser || existingUserByName)
      return res.status(400).json({ message: "User already exists." });

    console.log(password);
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({
      email,
      password: hashedPassword,
      mainImage: selectedFile,
      first_name,
      last_name,
      username,
      status,
      interestedIn,
      phone,
      country,
      city,
      website,
    });
    const token = generateAccessToken(result);

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
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

export const getUserParams = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await UserModel.find({ username });
    res.status(200).json({ user: user[0] });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// USERS TO MAKE FRIENDS

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    const editUsers = await users.map((item) => {
      return {
        first_name: item.first_name || "",
        last_name: item.last_name || "",
        username: item.username || "",
        image: item.mainImage || "",
      };
    });
    res.status(200).json({ editUsers });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
