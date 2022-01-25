import CPage from '@/components/CPage';
import { ResetPwdForm } from '@/components/CPwd';
import { NavBar } from 'vant';
import { defineComponent } from 'vue';
import styles from './resetPwd.module.less';
export default defineComponent({
  name: 'ResetPwd',
  setup() {
    const onClickLeft = () => {
      history.back();
    };
    return () => (
      <CPage>
        <NavBar left-arrow onClick-left={onClickLeft}></NavBar>
        <div class="pa-5">
          <div class="flex mt-8" style="color:var(--van-blue)">
            <div class={styles.accountLogin}>重置密码</div>
          </div>
          <ResetPwdForm />
        </div>
      </CPage>
    );
  }
});
