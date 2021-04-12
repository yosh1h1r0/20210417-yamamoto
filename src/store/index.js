import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const routes = [
  {
    path: "/",
    name: "Home",

  },
  {
    path: "/about",
    name: "About",
  },
];

const router = new Vue({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
