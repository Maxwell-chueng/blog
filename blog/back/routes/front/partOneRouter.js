const express = require("express");
const partOneRouter = express.Router();
const partOneController = require("../../controller/front/partOneController");

partOneRouter.post("/",partOneController.useCategoryGetData);

module.exports = partOneRouter;