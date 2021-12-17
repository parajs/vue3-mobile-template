
import { codeGet, passwordLookup } from "@/api";
import router from "@/router";
import { md5Encryption } from "@/utils";
import { Button, Field, Form, Toast } from 'vant';
import { reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import styles from './index.module.css';

/**
 * 验证码校验
 * @returns JSX.Element
 */
export function PwdFirstForm(){
    const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const form = reactive({
        code:"",
        email: "",
    })

    const onSubmit =  (values: AnyObject)=>{
      router.push({name:'ResetPwd',query: values})
    }

    const isSending = ref(false);

    const getVertifyCode = ()=>{
       if(!isSending.value){
           if(form.email == ""){
               Toast("请输入邮箱账号");
               return;
           }

           if(reg.test(form.email)){
               isSending.value = true;
               const { data, error, isFinished } =  codeGet({email: form.email,type: 'resetpwd'})
                watch(isFinished,()=>{
                   isSending.value = false;
                })

                watch(error,()=>{
                   Toast(error.value);
                })

                watch(data,()=>{
                   Toast("邮件发送成功");
                })

           } else {
               Toast("邮箱账号不合法");
           }
       }
     
   }

    return (
        <Form class="mt-8" onSubmit={onSubmit}>
            <Field 
            v-model={[form.email, ["trim"]]} 
            rules={[{ required: true, message: '请输入邮箱账号' },{ pattern: reg, message: '邮箱账号不合法' }]}  
            name="email"  
            class={styles.inputText} 
            placeholder="请输入邮箱账号" />
            <div class={styles.getCode}>
                <Field 
                name="code" 
                v-model={[form.code, ["trim"]]}  
                rules={[{ required: true, message: '请输入验证码' }]}  
                autocomplete="off" 
                class={styles.inputText} 
                placeholder="请输入验证码" />
                <div class={styles.getCodeBtn} onClick={getVertifyCode}>{isSending.value ? '发送验证码中'  : '获取验证码' }</div>
            </div>
            <Button native-type="submit" class="mt-6"type="primary" round block> 
                下一步
            </Button>
        </Form>
    )
}

/**
 * 重置密码
 * @returns JSX.Element
 */
export function ResetPwdForm(){
    const query = useRoute().query;
    const form = reactive({
        password:"",
        confirmPassword: "",
    })

    const submitRef = ref(false);

    const validator = (v: string)=> {
        return /\S{6,8}/.test(v)
    }

    const onSubmit = (v: AnyObject)=>{
        if(v.password != v.confirmPassword){
            Toast("确认密码不一致");
            return;
        }
        
        v.password = md5Encryption(v.password);
        delete v.confirmPassword;
        submitRef.value = true;
        v = {...v,...query};
        const { data, isFinished } = passwordLookup(v);
        watch(data,()=>{
            Toast("密码重置成功");
            router.push({name:'Login'});
         })

        watch(isFinished,()=>{
            submitRef.value = false;
        })
    }
    
    return (
        <Form class="mt-8" onSubmit={onSubmit}>
            <Field 
            name="password" 
            rules={[{ required: true, message: '请输入密码' },{ validator: validator, message: '密码6-18英文、数字、符号的组合' }]}  
            v-model={[form.password, ["trim"]]}  
            class={styles.inputText} 
            type='password' 
            autocomplete="off" 
            placeholder="请输入密码6-18英文、数字、符号的组合" />
            <Field 
            name="confirmPassword" 
            rules={[{ required: true, message: '确认新密码' },{ validator: validator, message: '密码6-18英文、数字、符号的组合' }]}  
            v-model={[form.confirmPassword, ["trim"]]}  
            class={styles.inputText} 
            type='password' 
            autocomplete="off" 
            placeholder="请在此确认新密码" />
            <Button disabled={submitRef.value} native-type="submit" class="mt-6" type="primary" round block> 
                确认
            </Button>
        </Form>
    )
}