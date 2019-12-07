const db = require("../../tools/db");

module.exports = {
    async getArticleData({id}){
        let sql = `select a.*,i.* from article a inner join imgs i on (a.id = i.blog_id) where a.id = "${id}"`;
        return await db.q(sql);
    },
    async getCategory({id}){
        let sql = `select * from category where id = "${id}"`;
        return await db.q(sql);
    },
    async getLike({id}){
        let sql = `select * from article where id = "${id}"`;
        return await db.q(sql);
    },
    async addLike({id,love}){
        let sql = `update article set love = "${love}" where id = "${id}"`;
        return await db.q(sql);
    },
    async getBrowse({id}){
        let sql = `select * from article where id = "${id}"`;
        return await db.q(sql);       
    },
    async addBrowse({id,browse}){
        let sql = `update article set browse = "${browse}" where id = "${id}"`;
        return await db.q(sql);      
    }
}