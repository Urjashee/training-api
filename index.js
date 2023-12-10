import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv'
import {authRouter} from "./routes/auth.route.js";
import bodyParser from 'body-parser';
import multer from 'multer';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB!!')
}).catch((err) => {
    console.error(err)
})

// const upload = multer();

const app = express();

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
// app.use(upload.array());
app.use(express.static('public'));

app.use('/api/auth', authRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})