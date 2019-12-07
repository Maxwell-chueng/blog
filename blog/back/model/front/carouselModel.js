const db = require("../../tools/db");

module.exports = {
    async getCarousel(){
        let sql = `select a.*,i.* from article a inner join imgs i on (a.id = i.blog_id) where is_carousel = "1"`;
        return await db.q(sql);
    }
}