import CPage from "@/components/CPage";
import { Button, Field, Form, Icon, NavBar } from 'vant';
import { defineComponent } from "vue";
import styles from './forgetPwd.module.less';
export default defineComponent({
    name: 'ForgetPwd',
    setup(){
        return ()=> (
            <CPage>
                <NavBar>
                    {{
                        left:()=>(
                            <>
                                <Icon name="arrow-left" color="var(--van-black)" />
                                <span class='ml-2'>重置密码</span>
                            </>
                        )
                    }}
                </NavBar>
                <div class="pa-5">
                    <div class="flex mt-8" style="color:var(--van-blue)">
                        <div class={styles.accountLogin}>忘记密码</div>
                    </div>
                    <Form class="mt-8">
                        <Field class={styles.inputText} placeholder="请输入密码" />
                        <Field class={styles.inputText} placeholder="请在此确认新密码" />
                        <Button class="mt-6" type="primary" round block> 
                            确认
                        </Button>
                    </Form>
                </div>
            </CPage>
        )
    }
})