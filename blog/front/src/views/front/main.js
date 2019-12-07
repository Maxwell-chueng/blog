// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/front/index.js'
import "../../../static/css/reset.css"
import "../../../static/css/lessFunction.less"
import axios from "axios"
import 'element-ui/lib/theme-chalk/index.css'
import qs from "qs"
import store from "../../store/front/front.js"
import animated from 'animate.css'
Vue.config.productionTip = false

Vue.use(animated);
Vue.prototype.axios = axios
Vue.config.productionTip = false

axios.defaults.baseURL = "http://120.76.245.251:8081";
axios.interceptors.request.use(config => {
  if (config.method === "post" && config.data.constructor !== FormData) {
    config.data = qs.stringify(config.data);
  }
  return config;
});

axios.interceptors.response.use(response => {
  // console.log(response)
  // vue.$store.dispatch("setLoadingByAct", { loading: false })
  return response;
});

import ElementUI from 'element-ui'
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
