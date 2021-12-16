import { passwordLookup } from "@/api";
import CPage from "@/components/CPage";
import router from "@/router";
import { md5Encryption } from "@/utils";
import { Button, Field, Form, NavBar, Toast } from 'vant';
import { defineComponent, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import styles from './resetPwd.module.less';
export default defineComponent({
    name: 'ResetPwd',
    setup(){
        const query = useRoute().query;
        const form = reactive({
            password:"",
            confirmPassword: "",
        })

        const submitRef = ref(false);

        const onClickLeft = ()=>{
            history.back();
        }

        const validator = (v: string)=> {
            return /\S{6,8}/.test(v)
        }

        
        const validatorDiff = (v: string)=> {
            return form.password != form.confirmPassword;
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

        return ()=> (
            <CPage>
                <NavBar  title="重置密码" left-arrow onClick-left={onClickLeft}></NavBar>
                <div class="pa-5">
                    <div class="flex mt-8" style="color:var(--van-blue)">
                        <div class={styles.accountLogin}>重置密码</div>
                    </div>
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
                </div>
               
            </CPage>
        )
    }
})