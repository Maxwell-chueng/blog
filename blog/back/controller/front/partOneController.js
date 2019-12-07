const partOneModel = require("../../model/front/partOneModel");

module.exports = {
    async useCategoryGetData(req,res){
        let {name} = req.body;
        let result1 = await partOneModel.getCategoryId({name});
        let id = result1[0].id;
        let result2 = await partOneModel.useCategoryGetArticle({id});
         for(let i=0;i<result2.length;i++){
             let blog_id = result2[i].id;
             let result3 = await partOneModel.useIdGetImg({blog_id});
             result2[i].imgSrc = result3[0].img_src
         }
        res.send(result2);
    }
}