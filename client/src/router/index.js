import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add-project",
    name: "add-project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddProject.vue")
  },
  {
    path: "/projects/:id",
    name: "project",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Project.vue"),
    props: true,
  },
  {
    path: "/projects/:id/edit",
    name: "project-edit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectEdit.vue"),
    props: true,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
