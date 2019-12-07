const db = require("../../tools/db");

module.exports = {
    async postDoLogin({count,pwd}){
        let sql = `select * from admin where name = "${count}" and
        pwd = "${pwd}"`;
        return await db.q(sql);
    }
}