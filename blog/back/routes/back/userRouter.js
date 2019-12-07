const express = require('express');
const userRouter = express.Router();
const userController = require("../../controller/back/userController");
userRouter.post("/doLogin",userController.login);

module.exports = userRouter;