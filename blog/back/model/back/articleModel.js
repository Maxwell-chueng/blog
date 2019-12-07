const db = require('../../tools/db');
module.exports = {
    async getArticle() {
        let sql = `select * from article order by id desc`;
        return db.q(sql);
    },
    async deleteSomeOneArticle({
        id
    }) {
        let sql = `delete from article where id = '${id}'`;
        return await db.q(sql);
    },
    async deleteSomeOneImg({
        id
    }) {
        let sql = `delete from imgs where blog_id = '${id}'`;
        return await db.q(sql);
    },
    async getImg({
        id
    }) {
        let sql = `select * from imgs where blog_id = '${id}'`;
        return await db.q(sql);
    },
    async editArticle({
        id,
        title,
        introduce,
        category_id,
        is_carousel,
        detail,
        createtime,
        is_header
    }) {
        let sql = `update article set title = '${title}',introduce = '${introduce}',category_id = '${category_id}',is_carousel = '${is_carousel}', is_header = '${is_header}',
        detail = '${detail}' , createtime = '${createtime}' where id = '${id}'`;
        return await db.q(sql);
    },
    async editImg({
        id,
        newFileName
    }) {
        let sql = `update imgs set img_src = '${newFileName}' where blog_id = '${id}'`;
        return await db.q(sql);
    },
    async addArticle({
        id,
        title,
        introduce,
        category_id,
        is_carousel,
        detail,
        createtime,
        is_header
    }) {
        let sql = `insert into article (title,introduce,category_id,is_carousel,detail,createtime,is_header) values('${title}','${introduce}','${category_id}','${is_carousel}','${detail}','${createtime}','${is_header}')`;
        return await db.q(sql);
    },
    async addImg({
        insertId,
        newFileName
    }) {
        let sql = `insert into imgs (img_src,blog_id) values('${newFileName}','${insertId}')`;
        return await db.q(sql);
    }

}