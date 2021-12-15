
import CPage from "@/components/CPage";
import router from "@/router";
import store from '@/store';
import { md5Encryption } from "@/utils";
import { Button, Field, Form, NavBar } from 'vant';
import { defineComponent, ref } from "vue";
import { RouterLink } from 'vue-router';
import styles from './login.module.less';
export default defineComponent({
    name:"Login",
    setup(){
        const username = ref('');
        const password = ref('');
        const isLoadingRef = ref(false);

        const onSubmit =  (values: AnyObject)=>{
           const pwd =  md5Encryption(values.password);
           values.password = pwd;

           store.dispatch("user/loginPassword",values).then(()=>{
             router.push({name:"Home"});
           })
          
        }
       
        return ()=> (
            <CPage>
                <NavBar leftText="欢迎来到 KuggaMeta"  left-arrow >
                    {/* {{
                        left:()=>(
                            <>
                                <Icon name="arrow-left" color="var(--van-black)" />
                                <span class='ml-2'>欢迎来到 KuggaMeta</span>
                            </>
                        )
                    }} */}
                </NavBar>
                <div class="pa-5">
                    <div class="flex mt-8" style="color:var(--van-blue)">
                        <div class={`${styles.accountLogin} flexItem`}>账号登录</div>
                        <RouterLink to={{name:'Register'}} >注册</RouterLink>
                    </div>
                    <Form class="mt-8" onSubmit={onSubmit}>
                        <Field 
                        class={styles.inputText}  
                        rules={[{ required: true, message: '请输入邮箱账号' }]} 
                        v-model={username.value} 
                        name="username"
                        placeholder="请输入邮箱账号" 
                        autocomplete="off" 
                        />
                        <Field 
                        class={styles.inputText} 
                        rules={[{ required: true, message: '请输入密码' }]}
                        v-model={password.value} 
                        name="password"
                        type='password' 
                        placeholder="请输入密码" 
                        autocomplete="off" 
                        />
                        <Button disabled={isLoadingRef.value} class="mt-6"type="primary" round block native-type="submit"> 
                            登录
                        </Button>
                    </Form>
                    <div class="mt-8 flex">
                        <div class="flexItem"></div>
                        <RouterLink to={{name:'ForgetPwd'}}>
                            忘记密码？
                        </RouterLink>
                    </div>
                </div>
            </CPage>
        )
    }
})