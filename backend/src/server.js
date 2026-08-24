import express from "express";
import {ENV} from "./lib/env.js"
import { connectDB } from "./lib/db.js";

const app = express();

app.get("/", (req, resp)=>{
    resp.status(200).json({
        "msg":"success from backend"
    })
})

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log(`Server in running on port ${ENV.PORT}`);
        })
    } catch (error) {
        console.error("Error connecting to server", error);
    }
}

startServer()
