import Vue from 'vue'
import Router from 'vue-router'
import home from '../../page/back/home.vue'
import category from "../../page/back/category.vue"
import author from "../../page/back/author.vue"
import article from "../../page/back/article.vue"
import login from "../../page//back/login.vue"
Vue.use(Router)

export default new Router({
  routes: [{
      path:"/",
      redirect:"/home",
      name:"index"
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: "/home/article",
      children: [{
        path: "category",
        component: category
      }, {
        path: "author",
        component: author
      }, {
        path: "article",
        component: article
      }]
    },
    {
      path: "/login",
      name: "login",
      component: login
    }
  ]
})
