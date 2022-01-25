import CPage from '@/components/CPage';
import { PwdFirstForm } from '@/components/CPwd';
import { NavBar } from 'vant';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ForgetPwd',
  setup() {
    const onClickLeft = () => {
      history.back();
    };
    return () => (
      <CPage>
        <NavBar title="修改密码" left-arrow onClick-left={onClickLeft}></NavBar>
        <div class="pa-5">
          <PwdFirstForm />
        </div>
      </CPage>
    );
  }
});
