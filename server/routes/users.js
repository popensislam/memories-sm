import express from "express";
import {
  GetUserData,
  getUserParams,
  RegUser,
  signInUser,
} from "../controllers/usersController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/user", auth, GetUserData);
router.get('/:username', getUserParams)

router.post("/auth", signInUser);
router.post("/reg", RegUser);


export default router;
