import express from "express";
import {signup, signin, signOut} from '../controllers/auth.controller.js'
import {verifyToken} from "../middlewares/tokenHandler.js";

const router = express.Router();

router.post('/signup', signup)
router.post('/sign-in', signin)
router.get('/sign-out', verifyToken, signOut)
export { router as authRouter }