import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import {authRouter} from "./routes/auth.route.js";
import bodyParser from 'body-parser'

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB!')
}).catch((err) => {
    console.error(err)
})

const app = express();

// for parsing application/json
app.use(bodyParser.json());
app.use(cookieParser())

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/auth', authRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000!!')
})