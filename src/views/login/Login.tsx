
import CPage from "@/components/CPage";
import { Button, Field, Form, Icon, NavBar } from 'vant';
import { defineComponent } from "vue";
import { RouterLink } from 'vue-router';
import styles from './login.module.less';
export default defineComponent({
    setup(){
        return ()=> (
            <CPage>
                <NavBar>
                    {{
                        left:()=>(
                            <>
                                <Icon name="arrow-left" color="var(--van-black)" />
                                <span class='ml-2'>欢迎来到 KuggaMeta</span>
                            </>
                        )
                    }}
                </NavBar>
                <div class="pa-5">
                    <div class="flex mt-8" style="color:var(--van-blue)">
                        <div class={`${styles.accountLogin} flexItem`}>账号登录</div>
                        <div>注册</div>
                    </div>
                    <Form class="mt-8">
                        <Field class={styles.inputText} placeholder="请输入邮箱账号" />
                        <Field class={styles.inputText} placeholder="请输入密码" />
                        <Button class="mt-6"type="primary" round block> 
                            登录
                        </Button>
                    </Form>
                    <div class="mt-8 flex">
                        <div class="flexItem"></div>
                        <RouterLink to="">
                            忘记密码？
                        </RouterLink>
                    </div>
                </div>
            </CPage>
        )
    }
})