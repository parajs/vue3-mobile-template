import { loginPassword, userGet, userLogout } from "@/api";
import { mutateState } from "@/utils";
import { useCookies } from "@vueuse/integrations";
import { watch } from "vue";
import { Module } from "vuex";

const { VITE_TOKEN_KEY} = import.meta.env;
const token = useCookies().get(VITE_TOKEN_KEY as string);


interface StoreUser {
    token: string
    user: AnyObject;
}


const store: Module<StoreUser, unknown> = {
    namespaced: true,
    state() {
        return {
            token: token,
            user: {},
        }
    },
    mutations: {
        mutateState(state, payload){
            mutateState(state, payload)
        }
    },
    actions: {
        loginPassword(context, payload: AnyObject) {
            return new Promise((resolve, reject) => {
                const { data, error } =  loginPassword(payload);
                watch(data,()=>{
                    context.commit("mutateState", data.value);
                    useCookies().set(VITE_TOKEN_KEY as string, data.value.token,{maxAge:10*60*60*1000})
                    resolve(data.value);
                })

                watch(error,()=>{
                    reject(error.value);
                })
               
            })
        },
        userGet(context, payload: AnyObject) {
            return new Promise((resolve, reject) => {
                const { data, error } =  userGet(payload);
                watch(data,()=>{
                    context.commit("mutateState", data.value);
                    resolve(data.value);
                })

                watch(error,()=>{
                    reject(error.value);
                })
               
            })
        },
        userLogout(context, payload: AnyObject) {
            return new Promise((resolve, reject) => {
                const { data, error } =  userLogout(payload);
                watch(data,()=>{
                    useCookies().remove(VITE_TOKEN_KEY as string);
                    window.location.href="/";
                    // resolve(data.value);
                })

                watch(error,()=>{
                    reject(error.value);
                })
               
            })
        }
    }
}

export default store
