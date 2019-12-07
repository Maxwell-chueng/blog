const carouselModel = require("../../model/front/carouselModel");

module.exports = {
    async getCarousel(req,res){
        let result = await carouselModel.getCarousel();
        res.send(result);
    }
}