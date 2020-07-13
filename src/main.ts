import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery";
import VTooltip from "v-tooltip";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VTooltip);

new Vue({
  router,
  store,
  // tslint:disable-next-line:object-literal-sort-keys
  render: (h) => h(App),
}).$mount("#app");
