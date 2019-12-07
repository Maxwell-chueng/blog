module.exports = {
    async getData(req,res){
        let obj = {a:1111,b:2222};
        res.send(obj);
    }
}