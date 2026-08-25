import express from "express";
import {ENV} from "./lib/env.js"
import { connectDB } from "./lib/db.js";
import cors from "cors";
import {serve} from "inngest/express";
import {inngest, functions} from "./lib/inngest.js"

const app = express();

// middleware
app.use(express.json());
// credentials:true means => server allows a browser to include cookies on req
app.use(cors({origin: ENV.CLIENT_URL, credentials:true}));

app.use("/api/inngest", serve({client:inngest, functions}))

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
