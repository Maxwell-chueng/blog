const express = require("express");
const headRouter = express.Router();
const headController = require("../../controller/front/headController");

headRouter.get("/", headController.getHeadData);

module.exports = headRouter;