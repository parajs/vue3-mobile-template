import CPage from "@/components/CPage";
import { Button, Field, Form, Icon, NavBar } from 'vant';
import { defineComponent } from "vue";
import styles from './forgetPwd.module.less';
export default defineComponent({
    name: 'ResetPwd',
    setup(){
        return ()=> (
            <CPage>
                <NavBar>
                    {{
                        left:()=>(
                            <>
                                <Icon name="arrow-left" color="var(--van-black)" />
                                <span class='ml-2'>返回登录</span>
                            </>
                        )
                    }}
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
                        <Button class="mt-6"type="primary" round block> 
                            下一步
                        </Button>
                    </Form>
                </div>
            </CPage>
        )
    }
})