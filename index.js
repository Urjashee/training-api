import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect("mongodb+srv://urjashee:urjashee@cluster0.erk21bp.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log('Connected to MongoDB!')
}).catch((err) => {
    console.error(err)
})

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!!')
})