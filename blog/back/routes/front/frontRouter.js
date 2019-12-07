var express = require('express');
var frontRouter = express.Router();
const carouselRouter = require("./carousel");
const headRouter = require("./headRouter");
const partOneRouter = require("./partOneRouter");
const articleDetailRouter = require("./articleDetailRouter");
const none = require("./none");
/* GET users listing. */
frontRouter.use('/carousel',carouselRouter);
frontRouter.use("/head", headRouter);
frontRouter.use("/partOne",partOneRouter);
frontRouter.use("/articleDetail",articleDetailRouter);
frontRouter.use("/",none);
module.exports = frontRouter;
