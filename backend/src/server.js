import express from "express";
import {ENV} from "./lib/env.js"

const app = express();

app.get("/", (req, resp)=>{
    resp.status(200).json({
        "msg":"success from backend"
    })
})

app.listen(ENV.PORT, ()=>{
    console.log(`Server in running on port ${ENV.PORT}`);
})