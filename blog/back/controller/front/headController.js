const headModel = require("../../model/front/headModel");

module.exports = {
    async getHeadData(req,res){
        let result = await headModel.getHeadData();
        res.send(result);
    }
} 