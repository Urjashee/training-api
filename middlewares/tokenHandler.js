import fs from "fs";
import jwt from 'jsonwebtoken'
import {errorHandler} from "../helper/errorHandler.js";
var userData;
export const generateToken = (validUser) => {
    const privateKEY = fs.readFileSync('./private.key', 'utf8');
    return jwt.sign({
        id: validUser._id,
        email: validUser.email,
        username: validUser.username,
    }, privateKEY, {algorithm: 'RS256', allowInsecureKeySizes: true})
}

export const verifyToken = (req, res, next) => {
    const publicKEY = fs.readFileSync('./public.key', 'utf8');
    const token = req.cookies.access_token;
    if (!token) return next(errorHandler(401, 'Unauthorized'));

    jwt.verify(token, publicKEY, (err, user) => {
        if (err) return next(errorHandler(403, 'Forbidden'));
        req.user = user;
        userData = user
        next();
    });
};

export {userData}