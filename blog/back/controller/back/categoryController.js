const categoryModel = require("../../model/back/categoryModel");

module.exports = {
    async getCategoryById(req,res){
        let {id} = req.body;
        let result = await categoryModel.getCategoryById({id});
        res.send(result);
    },
    async getCategory(req,res){ 
        let result = await categoryModel.getCategory();
        res.send(result);
    },
    async deleteSomeOne(req,res){
        let {id} = req.body;
        let result = await categoryModel.deleteSomeOne({id});
        res.send();
    },
    async editSomeOne(req,res){
        let {id,categoryName} = req.query;
        let result = await categoryModel.editSomeOne({id,categoryName});
        res.send();
    },
    async addCategory(req,res){
        let {categoryName} = req.query;
        let result = await categoryModel.addCategory({categoryName});
        res.send();
    }
}