import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../About.vue"),
    },
    {
      path: "/work",
      name: "work",
      component: () => import("../Work.vue"),
    },
  ],
});

export default router;
