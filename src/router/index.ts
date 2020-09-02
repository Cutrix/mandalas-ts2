import Home from "@/components/Home.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    // tslint:disable-next-line:object-literal-sort-keys
    component: Home,
  },
  {
    path: "/about",
    // tslint:disable-next-line:object-literal-sort-keys
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  // tslint:disable-next-line:object-literal-sort-keys
  base: process.env.BASE_URL,
  routes,
});

export default router;
