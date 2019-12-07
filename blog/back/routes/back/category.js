const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../../controller/back/categoryController");
 
categoryRouter.post("/",categoryController.getCategoryById);
categoryRouter.get("/getCategory",categoryController.getCategory);
categoryRouter.post("/delete",categoryController.deleteSomeOne);
categoryRouter.get("/edit",categoryController.editSomeOne);
categoryRouter.get("/add",categoryController.addCategory);
module.exports = categoryRouter;