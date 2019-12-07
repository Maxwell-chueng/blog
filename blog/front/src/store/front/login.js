import cookie from "js-cookie"

export default {
    state:{
        articleId:""
    },
    mutations:{
        setArticleCookie(state,params){
            state.articleId = params.obj;
            cookie.set('articleId',state.articleId);
        },
        getArticleId(state){
            state.articleId = cookie.get('articleId');
        }
    },
    actions:{
        setArticleCookie(ctx,params){
            ctx.commit("setArticleCookie",params);
        },
        getArticleId(ctx){
            ctx.commit("getArticleId");
        }
    },
    getters:{
        getArticleId(state){
            return state.articleId;
        }
    }
}