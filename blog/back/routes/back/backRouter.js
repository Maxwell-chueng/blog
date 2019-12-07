var express = require('express');
var backRouter = express.Router();
const userRouter = require("./userRouter");
const articleRouter = require("./articleRouter");
const categoryRouter = require("./category");
backRouter.use("/user",userRouter);
backRouter.use("/article",articleRouter);
backRouter.use("/category",categoryRouter);
module.exports = backRouter;
