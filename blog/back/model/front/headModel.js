const db = require("../../tools/db");

module.exports = {
    async getHeadData(){
        let sql = `select * from article where is_header = "1"`;
        return await db.q(sql);
    }
}