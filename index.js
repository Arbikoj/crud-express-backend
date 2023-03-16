import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRoute from "./app/User/route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);


app.listen(5000,()=> console.log('Server up and running.. :)'));



