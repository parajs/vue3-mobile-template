import { useAxios } from '@vueuse/integrations/useAxios';
import axios, { AxiosRequestConfig } from 'axios';
import { Notify } from 'vant';


// create an axios instance
const instance = axios.create({
    baseURL: '/api', 
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
  });
  
  // request interceptor
  instance.interceptors.request.use(
    config => {
      // do something before request is sent
  
    //   if (store.getters.token) {
    //     // let each request carry token
    //     // ['token'] is a custom headers key
    //     // please modify it according to the actual situation
    //     config.headers["token"] = getCookie(process.env.VUE_APP_TOKEN);
    //   }
      return config;
    },
    error => {
      // do something with request error
      console.log(error); // for debug
      return Promise.reject(error);
    }
  );
  
  // response interceptor
  instance.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */
  
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      const res = response.data;
      console.log("res",res);
  
      // if the custom code is not 200, it is judged as an error.
      if (res.code !== 200) {
        Notify({ type: "danger", message: res.message || "Error" });
        // 403: forbidden login; 401: Token expired;
        if (res.code === 401 || res.code === 403) {
        //   store.dispatch("user/logout");
        }
        return Promise.reject(new Error(res.message || "Error"));
      } else {
        return res;
      }
    },
    error => {
      console.log("err" + error); 
      Notify({ type: "danger", message: error.message || "Error" });
      return Promise.reject(error);
    }
  );


  
/**
 * reactive useFetchApi
 */

  export default function useAxiosApi(url: string, config: AxiosRequestConfig){
    return  useAxios(url,config, instance)
  }

