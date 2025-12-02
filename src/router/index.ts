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
      path: "/places/:placeType/:placeNumber",
      name: "places",
      component: () => import("@/views/PlacesInfoView.vue"),
    },
  ],
});

export default router;
