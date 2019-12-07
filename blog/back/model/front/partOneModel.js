const db = require("../../tools/db");

module.exports = {
    async getCategoryId({name}){
        let sql = `select * from category where name = '${name}'`;
        return await db.q(sql);
    },
    async useCategoryGetArticle({id}){
        let sql = `select * from article where category_id = "${id}"`;
        return await db.q(sql);
    },
    async useIdGetImg({blog_id}){
        let sql = `select * from imgs where blog_id = "${blog_id}"`;
        return await db.q(sql);
    }
}