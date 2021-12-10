import CPage from "@/components/CPage";
import router from "@/router";
import { Button, Field, Form, NavBar } from 'vant';
import { defineComponent } from "vue";
import styles from './forgetPwd.module.less';
export default defineComponent({
    name: 'ForgetPwd',
    setup(){

        const navigatePage = () => {
            router.push({name:"ResetPwd"})
         }
         
        return ()=> (
            <CPage>
                <NavBar leftText="忘记密码"  left-arrow>
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
                    <Form class="mt-8">
                        <Field class={styles.inputText} placeholder="请输入邮箱账号" />
                        <div class={styles.getCode}>
                            <Field class={styles.inputText} placeholder="请输入验证码" />
                            <div class={styles.getCodeBtn}>获取验证码</div>
                        </div>
                        <Button class="mt-6"type="primary" round block onClick={()=>navigatePage()}> 
                            下一步
                        </Button>
                    </Form>
                </div>
            </CPage>
        )
    }
})