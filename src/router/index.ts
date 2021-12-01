import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path:"/",
    component: ()=> import("@/views/home")
  },
  {
    path:"/home",
    component: ()=> import("@/views/home")
  }
];
const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;