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


const whiteList = ["Home", "Test", "My", "Detail"]; // no redirect whitelist

// 路由拦截
router.beforeEach(async(to, from, next) => {
   // set page title/
   document.title = getPageTitle(to.meta.title);

   // determine whether the user has logged in
   const hasToken = getCookie(process.env.VUE_APP_TOKEN);
   if (hasToken) {
     const hasGetUserInfo = store.getters.user.id;
     if (hasGetUserInfo) {
       next();
     } else {
       try {
         // get user info
         await store.dispatch("user/getuser");
         next();
       } catch (error) {
         // remove token and go to home
         await store.dispatch("user/reset");
       }
     }
   } else {
     // has no token
     if (whiteList.indexOf(to.name) !== -1) {
       // in the free login whitelist, go directly
       next();
     } else {
       // other pages that do not have permission to access are redirected to the login page.
       next(`/login?redirect=${to.fullPath}`);
     }
   }
});


export default router;