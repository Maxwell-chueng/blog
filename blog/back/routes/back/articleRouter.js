const express = require("express");
const articleRouter = express.Router();
const articleController = require("../../controller/back/articleController");

articleRouter.get("/",articleController.getArticle);
articleRouter.post("/delete",articleController.deleteSomeOne);
articleRouter.post("/getImg",articleController.getImg);
articleRouter.post("/edit",articleController.edit);
articleRouter.post("/add",articleController.add);
module.exports = articleRouter;