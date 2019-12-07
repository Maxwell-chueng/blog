const articleModel = require("../../model/front/articleDetailModel");

module.exports = {
    async getArticleData(req,res){
        let {id} = req.body;
        let result = await articleModel.getArticleData({id});
        res.send(result);
    },
    async getCategory(req,res){
        let {id} = req.body;
        let result = await articleModel.getCategory({id});
        res.send(result);
    },
    async addLike(req,res){
        let {id} = req.body;
        let love = await articleModel.getLike({id});
        love = love[0].love;
        love++;
        await articleModel.addLike({id,love});
        res.send();
    },
    async addBrowse(req,res){
        let {id} = req.body;
        let browse = await articleModel.getBrowse({id});
        browse = browse[0].browse; 
        browse++;
        await articleModel.addBrowse({id,browse});
        res.send();
    }
}