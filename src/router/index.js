import Vue from "vue";
import VueRouter from "vue-router";
import loginPage from "@/views/loginPage.vue";
import homePage from "@/views/homePage.vue";
import notFound from "@/views/notFound.vue";
import unauthorized from "@/views/unauthorized.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: loginPage,
  },
  {
    path: "/home",
    name: "unauthorized",
    component: unauthorized,
  },

  {
    path: "*",
    name: "notFound",
    component: notFound,
  },

  {
    path: "/home",
    name: "home",
    component: homePage,
  },

  {
    path: "/",
    redirect: "/login",
  },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
