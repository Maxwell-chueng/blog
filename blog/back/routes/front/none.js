const express = require("express");
const noneRouter = express.Router();
const noneController = require("../../controller/front/none");
noneRouter.get("/",noneController.getData);

module.exports = noneRouter;
