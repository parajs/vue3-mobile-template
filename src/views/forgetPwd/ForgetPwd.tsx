import CPage from "@/components/CPage";
import { PwdFirstForm } from "@/components/CPwd";
import { NavBar } from 'vant';
import { defineComponent } from "vue";
import styles from './forgetPwd.module.less';
export default defineComponent({
    name: 'ForgetPwd',
    setup(){

         const onClickLeft = ()=>{
             history.back();
         }
 
        return ()=> (
            <CPage>
                <NavBar  left-arrow onClick-left={onClickLeft}>
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
                    <PwdFirstForm />
                </div>
            </CPage>
        )
    }
})