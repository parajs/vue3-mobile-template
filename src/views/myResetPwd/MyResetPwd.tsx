import CPage from "@/components/CPage";
import { Button, Field, Form, NavBar } from 'vant';
import { defineComponent } from "vue";
import styles from './myResetPwd.module.less';

export default defineComponent({
    name: 'MyResetPwd',
    setup(){
        const onClickLeft = ()=>{
            history.back();
        }

        return ()=> (
            <CPage>
                <NavBar  title="重置密码" onClick-left={onClickLeft}  left-arrow>
                    {/* {{
                        left:()=>(
                            <>
                                <Icon name="arrow-left" color="var(--van-black)" />
                                <span class='ml-2'>返回登录</span>
                            </>
                        )
                    }} */}
                </NavBar>
                <div class="pa-5">
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