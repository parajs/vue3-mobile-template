
import CPage from "@/components/CPage";
import { Button, Field, Form, NavBar } from 'vant';
import { defineComponent } from "vue";
import styles from './register.module.less';
export default defineComponent({
    name:"Register",
    setup(){
        return ()=> (
            <CPage>
                <NavBar leftText="返回登录"  left-arrow>
                </NavBar>
                <div class="pa-5">
                    <div class="flex mt-6" style="color:var(--van-blue)">
                        <div class={`${styles.accountLogin} flexItem`}>注 册</div>
                    </div>
                    <Form class="mt-8">
                        <Field class={styles.inputText} placeholder="请输入邮箱账号" />
                        <div class={styles.getCode}>
                            <Field class={styles.inputText} placeholder="请输入验证码" />
                            <div class={styles.getCodeBtn}>获取验证码</div>
                        </div>
                        <Field class={styles.inputText} type='password' placeholder="请输入密码6-18英文、数字、符号的组合" />
                        <Button class="mt-6"type="primary" round block> 
                            注册
                        </Button>
                    </Form>
                </div>
            </CPage>
        )
    }
})