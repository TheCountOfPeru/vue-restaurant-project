import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: '/', component: () => import("./components/Home.vue") },
    { path: '/menu', component: () => import("./components/Menu.vue") },
    { path: '/gallery', component: () => import("./components/Gallery.vue") },
    { path: '/contact', component: () => import("./components/Contact.vue") },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
