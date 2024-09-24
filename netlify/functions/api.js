import "dotenv/config";
import express, { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import serverless from "serverless-http"

const api = express();

api.use(cors());
api.use(bodyParser.json());

const port = process.env.PORT || 3001;




const router = Router()


    api.listen(port, () => {
        console.log(`Server listening on ${port}`);
    });

    
    api.use("/api/", router)

    export const handler = serverless(api)