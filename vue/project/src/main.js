import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import VueAgile from 'vue-agile'
import VueScrollTo from 'vue-scrollto';
import {routes} from "./routes";

import './style.scss'

Vue.use(VueRouter);
Vue.use(VueAgile);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosiiton) {
    if (to.hash) {
      VueScrollTo.scrollTo(to.hash, 800);
      return {selector: to.hash}

    } else {
      return {x: 0, y: 0}
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
