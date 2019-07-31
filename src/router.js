import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/user/login"
    },
    {
      path: "/user/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "user" */ "./views/User/Login")
    },
    {
      path: "/form/basic-form",
      name: "basicform",
      meta: { title: "基础表单" },
      component: () =>
        import(/* webpackChunkName: "form" */ "./views/Form/BasicForm")
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
