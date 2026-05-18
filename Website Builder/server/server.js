require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const authRouter = require("./routers/auth.route");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS FIX
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Firebase popup fix
app.use((req, res, next) => {
  res.setHeader(
    "Cross-Origin-Opener-Policy",
    "same-origin-allow-popups"
  );
  next();
});

// Routes
app.use("/api/auth", authRouter);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Server
app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});