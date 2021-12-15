import store from '@/store';
import { useAxios } from '@vueuse/integrations/useAxios';
import axios, { AxiosRequestConfig } from 'axios';
import { Notify } from 'vant';


// create an axios instance
const instance = axios.create({
  timeout: 5000,
});
  
  // request interceptor
  instance.interceptors.request.use(
    config => {
      // do something before request is sent
      // @ts-ignore
      const token = store.user.user?.token;
      if (token) {
        // let each request carry token
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
      }
      }
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
        Notify({ type: "danger", message: res.msg || "Error" });
        // 403: forbidden login; 412: Token expired;
        if (res.code === 412 || res.code === 403) {
        //   store.dispatch("user/logout");
        }
        return Promise.reject(res.msg || "Error");
      } else {
        return res;
      }
    },
    error => {
      console.log("err" + error); 
      Notify({ type: "danger", message: error.message || "Error" });
      return Promise.reject(error.message);
    }
  );


  
/**
 * reactive useFetchApi
 */

  export default function useAxiosApi(url: string, config: AxiosRequestConfig){
    return  useAxios(url,config, instance)
  }

