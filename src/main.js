import Vue from "vue";
import App from "./App.vue";
// 注册路由并通过router.beforeEach控制路由
import router from "./router";
import store from "@/core/services/store";
import api from "./core/utils/http";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.min.css";
import Cookies from 'js-cookie';

import httpApi from './core/utils/http/api'
import { getIFramePath, getIFrameUrl } from '@/core/utils/iframe';

// 跨域解决1）引入axios(封装版)
import axios from "./core/utils/http/axios.js";

import ApiService from "@/core/services/api.service";
import MockService from "@/core/mock/mock.service";
import { VERIFY_AUTH } from "@/core/services/store/auth.module";
import { RESET_LAYOUT_CONFIG } from "@/core/services/store/config.module";

Vue.config.productionTip = false;

// Global 3rd party plugins
import "bootstrap";
import "popper.js";
import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

// Vue 3rd party plugins
import i18n from "@/core/plugins/vue-i18n";
import vuetify from "@/core/plugins/vuetify";
import "@/core/plugins/portal-vue";
import "@/core/plugins/bootstrap-vue";
import "@/core/plugins/perfect-scrollbar";
import "@/core/plugins/highlight-js";
import "@/core/plugins/inline-svg";
import "@/core/plugins/apexcharts";
import "@/core/plugins/treeselect";
import "@/core/plugins/metronic";
import "@mdi/font/css/materialdesignicons.css";
import VueSweetalert2 from "@/core/plugins/vue-sweetalert2";

import 'perfect-scrollbar/css/perfect-scrollbar.css';

import JwtService from "@/core/services/jwtremake.service";

// API service init
ApiService.init();

// Remove this to disable mock API
MockService.init();

Vue.use(ElementUI); // 引入ElementUI
Vue.use(api); // 引入API模块

Vue.use(VueSweetalert2); // 引入插件

Vue.config.productionTip = false;

// axios不能直接使用use引入,只能每个需要发送请求的组件中即时引入.
// 跨域解决2）把axios挂载到Vue原型中，在Vue中每个组件都可以使用axios发送请求，不需每次都import一下axios了，直接使用$axios即可
Vue.prototype.$axios = axios;

// no redirect whitelist
const whiteList = ['/login', '/register',
  '/error/400', '/error/401', '/error/403', '/error/404', '/error/405',
  '/error/500', '/error/503'];

router.beforeEach((to, from, next) => {
  // Ensure we checked auth before each page load.
  Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);

  // reset config to initial state
  store.dispatch(RESET_LAYOUT_CONFIG);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

/*
 * 步骤上接/router/index.js中的1.2.3.
 * 4. 创建和挂载根实例
 *    记得要通过router配置参数注入路由，从而让整个应用都有路由功能。
 */
new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
// 现在，应用已经启动了！
