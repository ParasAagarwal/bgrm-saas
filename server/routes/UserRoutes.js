const express = require("express");
const { clerkWebhooks } = require("../controllers/UserController.js");

const userRouter = express.Router();

userRouter.post("/webhooks", clerkWebhooks);

module.exports = userRouter;
