const articleModel = require("../../model/back/articleModel");
const fs = require("fs");
const path = require("path");
module.exports = {
    async getArticle(req, res) {
        let result = await articleModel.getArticle();
        res.send(result);
    },
    async deleteSomeOne(req, res) {
        let {
            id
        } = req.body;
        await articleModel.deleteSomeOneArticle({
            id
        });
        await articleModel.deleteSomeOneImg({id});
        res.send();
    },
    async getImg(req, res) {
        let {
            id
        } = req.body;
        let result = await articleModel.getImg({
            id
        });
        res.send(result);
    },
    async edit(req, res) {
        let {
            id,
            title,
            introduce,
            category_id,
            is_carousel,
            is_header,
            detail
        } = req.body;
        if (is_carousel == "true") {
            is_carousel = 1;
        } else if (is_carousel == "false") {
            is_carousel = -1;
        }
        if (is_header == "true") {
            is_header = 1;
        } else if (is_header == "false") {
            is_header = -1;
        }

        let myDate = new Date();
        let createtime = myDate.toLocaleString();

        let result = await articleModel.editArticle({
            id,
            title,
            introduce,
            category_id,
            is_carousel,
            detail,
            createtime,
            is_header
        });
        let files = req.files;
        for (let index in files) {
            let file = files[index];
            // 获取文件后缀
            let ext = path.extname(file.originalname);
            let newPathName = file.path + ext;
            // 要将已经保存到了uploads文件夹下的文件进行改名字
            fs.rename(file.path, newPathName, (error, data) => {});
            // 当名字修改好后，再来将这个图片的存放路径保存到数据库中
            let newFileName = file.filename + ext;
            newFileName = 'http://localhost:10086/' + newFileName;
            await articleModel.editImg({
                id,
                newFileName
            });
        }
        res.send();
    },
    async add(req, res) {
        let {
            title,
            introduce,
            category_id,
            is_carousel,
            detail,
            is_header
        } = req.body;
        if (is_carousel == "true") {
            is_carousel = 1;
        } else if (is_carousel == "false") {
            is_carousel = -1;
        }
        if (is_header == "true") {
            is_header = 1;
        } else if (is_header == "false") {
            is_header = -1;
        }

        let myDate = new Date();
        let createtime = myDate.toLocaleString();

        let result = await articleModel.addArticle({
            title,
            introduce,
            category_id,
            is_carousel,
            detail,
            createtime,
            is_header
        });
        let insertId = result.insertId;
        console.log(insertId)
        let files = req.files;
        for (let index in files) {
            let file = files[index];
            // 获取文件后缀
            let ext = path.extname(file.originalname);
            let newPathName = file.path + ext;
            // 要将已经保存到了uploads文件夹下的文件进行改名字
            fs.rename(file.path, newPathName, (error, data) => {});
            // 当名字修改好后，再来将这个图片的存放路径保存到数据库中
            let newFileName = file.filename + ext;
            newFileName = 'http://localhost:10086/' + newFileName;
            await articleModel.addImg({
                insertId,
                newFileName
            });
        }
        res.send();
    }
}