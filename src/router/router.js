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
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/dump/:id",
    name: "NotFound",
    component: () => import("../views/Dump.vue"),
  },
  {
    path: "/addons/mastaff",
    name: "MAStaff",
    component: () => import("../views/addons/MAStaff.vue"),
  }
  
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
