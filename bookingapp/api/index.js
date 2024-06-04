import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";

import authRoute from "./router/auth.js";
import usersRoute from "./router/users.js"
import hotelsRoute from "./router/hotels.js"
import roomsRoute from "./router/rooms.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB.");
    } catch (error) {
        throw error
    }
};

// Mongoose connection 
mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB.");
});
mongoose.connection.on("connected", () => {
    console.log("Connected from MongoDB.");
});

// Middlewares
app.use(cookieParser());
app.use(express.json());

app.get("/api/healthcheck", (req, res) => {
    res.sendStatus(200);
});

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMsg = err.message || "something went wrong!";
    return res.status(500).json({
        success: false,
        status: errorStatus,
        message: errorMsg,
        stack: err.stack
    });
})

app.listen(8800, () => {
    connect();
    console.log("Connected to backend!");
});