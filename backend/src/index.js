import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const app= express();

const PORT= process.env.PORT;

app.use(express.json());   //extract data out of body
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use(
    cors({
       origin: "http://localhost:5174",
       credentials: true,
})
);

app.listen(PORT, () => {
    console.log("server is running on PORT"+ PORT);
    connectDB();
});
