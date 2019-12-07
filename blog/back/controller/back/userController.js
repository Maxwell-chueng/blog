const userModel = require("../../model/back/userModel");

module.exports = {
    async login(req,res){
        let {count,pwd} = req.body;
        let result = await userModel.postDoLogin({count,pwd});
        let data = {};
        if (result.length == 0) {
            data = {
                state: "-1",
                info: "登录失败"
            }
        } else {
            data = {
                state: "1",
                info: "登录成功"
            }
        }
        res.send(data);
    }
}