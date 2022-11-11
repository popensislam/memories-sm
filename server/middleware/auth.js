import jwt from "jsonwebtoken";
import { generateAccessToken } from "../helper/authHelper.js";
import UserModel from "../models/userModel.js";

const auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (typeof token !== 'string') return res.status(400).json({ message: "Token was not sent!" });

  try {
    let decodedData = jwt.verify(token, process.env.TOKEN_KEY);
    req.userId = decodedData?.id;
    return next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      const decodeId = await jwt.decode(token);
      const user = await UserModel.findOne({ email: decodeId.email });
      const newToken = await generateAccessToken(user);
      res.status(401).json({ message: "Invalid token!", newToken });
    }
  }
};

export default auth;
