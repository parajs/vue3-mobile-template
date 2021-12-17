import CPage from "@/components/CPage";
import { ResetPwdForm } from "@/components/CPwd";
import { NavBar } from 'vant';
import { defineComponent } from "vue";

export default defineComponent({
    name: 'MyResetPwd',
    setup(){
        const onClickLeft = ()=>{
            history.back();
        }

        return ()=> (
            <CPage>
                <NavBar  title="重置密码" onClick-left={onClickLeft}  left-arrow></NavBar>
                <div class="pa-5">
                  <ResetPwdForm />
                </div>
            </CPage>
        )
    }
})