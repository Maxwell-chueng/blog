import Vue from 'vue'
import Router from 'vue-router'
import home from '../../page/front/home.vue'
import js from "../../page/front/js.vue"
import node from "../../page/front/node.vue"
import myself from "../../page/front/myself.vue"
import jquery from "../../page/front/jquery.vue"
import myLog from "../../page/front/myLog.vue"
import news from "../../page/front/news.vue"
import myHome from "../../page/front/myHome.vue"
import articleDetail from "../../page/front/articleDetail.vue"
import about from "../../page/front/about.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect:"/myHome",
      children:[{
      	path:"js",
      	component:js
      },{
        path:"myHome",
        component:myHome
      },{
      	path:"node",
      	component:node
      },{
      	path:"myself",
      	component:myself
      },{
      	path:"jquery",
      	component:jquery
      },{
      	path:"myLog",
      	component:myLog
      },{
      	path:"news",
      	component:news
      },{
        path:"about",
        component:about
      }],
    },{
      path:"/articleDetail",
      name:"articleDetail",
      component:articleDetail
    }]
})
