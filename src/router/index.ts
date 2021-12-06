import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path:"/",
    component: ()=> import("@/views/Home"),
    meta: {
      keepAlive: true
    }
  },
  {
    path:"/my",
    component: ()=> import("@/views/My"),
  },
  {
    path:"/detail",
    component: ()=> import("@/views/Detail"),
    meta: {
      keepAlive: true
    }
  },
  {
    path:"/login",
    component: ()=> import("@/views/Login.vue"),
  }
];
const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;