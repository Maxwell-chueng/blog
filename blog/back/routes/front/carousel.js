const express = require("express");
const carouselRouter = express.Router();
const carouselController = require("../../controller/front/carouselController");
carouselRouter.get("/",carouselController.getCarousel);

module.exports = carouselRouter;