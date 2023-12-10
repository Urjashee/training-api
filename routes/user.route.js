import express from "express";
import {verifyToken} from "../middlewares/tokenHandler.js";
import {deleteUser, getUser, updateUser} from "../controllers/user.controller.js";

const router = express.Router();

router.get('', verifyToken, getUser)
router.post('/update', verifyToken, updateUser)
router.delete('/delete', verifyToken, deleteUser)

export { router as userRouter }