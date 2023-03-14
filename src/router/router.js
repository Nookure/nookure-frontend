import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/addons/mastaff",
    name: "MAStaff",
    component: () => import("../views/addons/MAStaff.vue"),
  },
  {
    path: "/dump/:id",
    name: "Dump",
    component: () => import("../views/Dump.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },

];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
