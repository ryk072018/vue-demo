import { createApp } from "vue";

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.use(VueRouter);
Vue.use(Vuex);

import axios from "axios";
Vue.prototype.$axios = axios; // 全局使用 this.$axios.

import App from "./App.vue";

createApp(App).mount("#app");
