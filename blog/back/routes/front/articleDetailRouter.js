const express = require("express");
const articleRouter = express.Router();
const articleController = require("../../controller/front/articleDetailController");

articleRouter.post("/",articleController.getArticleData);
articleRouter.post("/getCategory",articleController.getCategory);
articleRouter.post("/addLike",articleController.addLike);
articleRouter.post("/addBrowse",articleController.addBrowse);
module.exports = articleRouter;