import express from "express";
import { RegUser, signInUser } from "../controllers/usersController";

const router = express.Router();

router.post("/auth", signInUser);
router.post("/reg", RegUser);

export default router;
