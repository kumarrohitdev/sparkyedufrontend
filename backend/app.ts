import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes/route";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5174'],
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
