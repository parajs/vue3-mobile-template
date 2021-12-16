import { codeGet } from "@/api";
import CPage from "@/components/CPage";
import router from "@/router";
import { Button, Field, Form, NavBar, Toast } from 'vant';
import { defineComponent, reactive, ref, watch } from "vue";
import styles from './forgetPwd.module.less';
export default defineComponent({
    name: 'ForgetPwd',
    setup(){

        const navigatePage = () => {
            router.push({name:"ResetPwd"})
         }

         const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        
         const onClickLeft = ()=>{
             history.back();
         }
 
         
         const form = reactive({
             code:"",
             email: "",
         })

         const onSubmit =  (values: AnyObject)=>{
             debugger
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
         
        return ()=> (
            <CPage>
                <NavBar title="忘记密码"  left-arrow onClick-left={onClickLeft}>
                    {/* {{
                        left:()=>(
                            <>
                                <Icon name="arrow-left" color="var(--van-black)" />
                                <span class='ml-2'>重置密码</span>
                            </>
                        )
                    }} */}
                </NavBar>
                <div class="pa-5">
                    <div class="flex mt-8" style="color:var(--van-blue)">
                        <div class={styles.accountLogin}>忘记密码</div>
                    </div>
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
                </div>
            </CPage>
        )
    }
})