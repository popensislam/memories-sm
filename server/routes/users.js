import express from "express";
import {
  GetUserData,
  getUserParams,
  getUsers,
  RegUser,
  reqeustFriend,
  signInUser,
} from "../controllers/usersController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/all", getUsers);
router.get("/user", auth, GetUserData);
router.get("/:username", getUserParams);

router.put("/add-friend", reqeustFriend);
router.post("/auth", signInUser);
router.post("/reg", RegUser);

export default router;
