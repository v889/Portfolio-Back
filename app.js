import express  from "express";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/contact.js";


export const app=express();
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api/v1/contact",router);
config(
    {
        path:"./data/config.env"
    }
)
