const db = require("../../tools/db");

module.exports = {
    async getCategoryById({id}){
        let sql = `select * from category where id = "${id}"`;
        return await db.q(sql);
    },
    async getCategory(){
        let sql = `select * from  category order by id desc`;
        return await db.q(sql);
    },
    async deleteSomeOne({id}){
        let sql = `delete from category where id = "${id}"`;
        return await db.q(sql);
    },
    async editSomeOne({id,categoryName}){
        let sql = `update category set name = "${categoryName}" where id = "${id}"`;
        return await db.q(sql);
    },
    async addCategory({categoryName}){
        let sql = `insert into category (name) values("${categoryName}")`;
        return await db.q(sql);
    }
}