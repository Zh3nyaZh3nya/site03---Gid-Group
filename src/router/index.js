import { createRouter, createWebHistory } from "vue-router";
import GGMainPages from "@/views/mainPages/GG-MainPages";

const routes = [
  {
    path: "/",
    name: "main-pages",
    component: GGMainPages,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
