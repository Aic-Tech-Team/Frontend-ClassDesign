import { createRouter, createWebHistory } from "vue-router";
import QrRedirectView from "@/views/QrRedirectView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:id",
      name: "qr-redirect",
      component: QrRedirectView,
    },
    {
      path: "/class-info/:classNumber",
      name: "class-info",
      component: () => import("@/views/ClassInfoView.vue"),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
});

export default router;
