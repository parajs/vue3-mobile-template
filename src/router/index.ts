import store from '@/store';
import { useTitle } from '@vueuse/core';
import { useCookies } from '@vueuse/integrations/useCookies';
import { createRouter, createWebHistory, Router } from 'vue-router';
import routes from './routes';

const { VITE_TOKEN_KEY, VITE_TITLE} = import.meta.env;


const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes
});

// authList
const authList: Array<string> = ['My','MsgList','FollowList','Profile','ModifyPwd','MyResetPwd']; 

router.beforeEach(async(to, from, next) => {
  // set title
   useTitle( to.meta?.title as string || VITE_TITLE as string);
   // determine whether the user has logged in
   const hasToken = useCookies().get(VITE_TOKEN_KEY as string);
   if (hasToken) {
     // 已登录后访问登录页，重定向首页
     to.name == 'Login' ?  next("/"): null;
     const hasUserInfo = store.state.user.user.id;
     if (hasUserInfo) {
      next();
     } else {
       try {
         // get user info
         await store.dispatch("user/userGet");
         next();
       } catch (error) {
         // remove token and go to home
         await store.dispatch("user/userLogout");
       }
     }
   } else {
     // has no token
     if (authList.indexOf(to.name as string) == -1) {
       //public page  go directly
       next();
     } else {
       // other pages that do not have permission to access are redirected to the login page.
       next({name:'Login',query:{redirect: to.fullPath}});
     }
   }
});




export default router;