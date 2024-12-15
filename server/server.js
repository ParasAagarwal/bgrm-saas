require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./configs/mongodb.js");
// const userRouter = require("./routes/UserRoutes.js");

// App Config
const PORT = process.env.PORT || 4700;
const app = express();
connectDB();

//Initialize Middlewares
app.use(express.json());
app.use(cors());

//API routes
app.get("/", (req, res) => res.send("API Working"));
// app.use("/api/user", userRouter);

app.listen(PORT, () => console.log("Server running on PORT " + PORT));
