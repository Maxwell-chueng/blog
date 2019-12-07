import cookie from 'js-cookie'
export default {
     state:{
        login:false
     },
     mutations:{
       doLogin(state){
       	state.login = true;
        cookie.set('loginState',state.login,{expires:1});
       },
       getLogin(state){
       	state.login = cookie.get('loginState');
       },
       doLoginOut(state){
         state.login = false;
         cookie.remove('loginState');
       }
     },
     actions:{
        doLogin(ctx){
        	ctx.commit("doLogin");
        },
        getLogin(ctx){
            ctx.commit("getLogin");
        },
        doLoginOut(ctx){
          ctx.commit("doLoginOut");
        }
     },
     getters:{
         isLogin(state){
         	return state.login;
         }
     }
}