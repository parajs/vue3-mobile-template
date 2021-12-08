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
      component: ()=> import("@/views/Login"),
    },
    {
      name: 'My',
      path:"/my",
      component: ()=> import("@/views/My"),
    },
    {
      name: 'ResourceList',
      path:"/resourceList",
      component: ()=> import("@/views/ResourceList"),
    },
    {
      name: 'Detail',
      path:"/detail",
      component: ()=> import("@/views/Detail"),
      meta: {
        keepAlive: true
      }
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