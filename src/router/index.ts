import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'home',
      component: HomeView
    },
    {
      path: "/scan/:id",
      name: "qr-redirect",
      component: () => import("@/views/QrRedirectView.vue"),
    },
    {
      path: "/class-info/:classNumber",
      name: "class-info",
      component: () => import("@/views/ClassInfoView.vue"),
    },
  ],
});

export default router;
