
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
      name: 'Home',
      path:"/",
      component: ()=> import("@/views/home/Home"),
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'Login',  
      path:"/login",
      component: ()=> import("@/views/login/Login"),
    },
    {
      name: 'ForgetPwd',  
      path:"/forgetPwd",
      component: ()=> import("@/views/forgetPwd/ForgetPwd"),
    },
    {
      name: 'ResetPwd',  
      path:"/resetPwd",
      component: ()=> import("@/views/resetPwd/ResetPwd"),
    },
    {
      name: 'My',
      path:"/my",
      component: ()=> import("@/views/my/My"),
    },
    {
      name: 'PersonalHome',
      path:"/personalHome",
      component: ()=> import("@/views/personalHome/PersonalHome"),
    },
    {
      name: 'ResourceList',
      path:"/resourceList",
      component: ()=> import("@/views/resourceList/ResourceList"),
    },
    {
      name: 'MsgList',
      path:"/msgList",
      component: ()=> import("@/views/msgList/MsgList"),
    },
    {
      name: 'FollowList',
      path:"/followList",
      component: ()=> import("@/views/followList/FollowList"),
    },
    {
      name: 'Profile',
      path:"/profile",
      component: ()=> import("@/views/profile/Profile"),
    },
    {
      name: 'Register',
      path:"/register",
      component: ()=> import("@/views/register/Register"),
    },
    {
      name: 'ModifyPwd',
      path:"/modifyPwd",
      component: ()=> import("@/views/modifyPwd/ModifyPwd"),
    },
    {
      name: 'MyResetPwd',
      path:"/myResetPwd",
      component: ()=> import("@/views/myResetPwd/MyResetPwd"),
    },
    {
      name: 'Detail',
      path:"/detail",
      component: ()=> import("@/views/Detail"),
      meta: {
        keepAlive: true
      }
    },
    
  ];


  export default routes