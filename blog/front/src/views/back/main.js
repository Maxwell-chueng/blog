// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/back/index.js'
import "../../../static/css/reset.css"
import axios from "axios"
import qs from "qs"
import store from "../../store/back/back.js"
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

axios.defaults.baseURL = "http://120.76.245.251:8081";
Vue.prototype.axios = axios

axios.interceptors.request.use(config => {
  if (config.method === "post" && config.data.constructor !== FormData) {
    config.data = qs.stringify(config.data);
  }
  return config;
});

axios.interceptors.response.use(response => {
  return response;
});

import ElementUI from 'element-ui'
Vue.use(ElementUI)

/* eslint-disable no-new */
let vue = new Vue({
  el: '#back',
  router,
  store,
  components: { App },
  template: '<App/>'
})
