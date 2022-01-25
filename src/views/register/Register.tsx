import { codeGet, readerRegister } from '@/api';
import CPage from '@/components/CPage';
import router from '@/router';
import { md5Encryption } from '@/utils';
import { Button, Field, Form, NavBar, Toast } from 'vant';
import { defineComponent, reactive, ref, watch } from 'vue';
import styles from './register.module.less';
export default defineComponent({
  name: 'Register',
  setup() {
    const onClickLeft = () => {
      history.back();
    };

    const form = reactive({
      code: '',
      email: '',
      password: ''
    });

    const isSending = ref(false);

    const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    const getVertifyCode = () => {
      if (!isSending.value) {
        if (form.email == '') {
          Toast('请输入邮箱账号');
          return;
        }

        if (reg.test(form.email)) {
          isSending.value = true;
          const { data, error, isFinished } = codeGet({
            email: form.email,
            type: 'register'
          });
          watch(isFinished, () => {
            isSending.value = false;
          });

          watch(error, () => {
            Toast(error.value);
          });

          watch(data, () => {
            Toast('邮件发送成功');
          });
        } else {
          Toast('邮箱账号不合法');
        }
      }
    };

    const validator = (v: string) => {
      return /\S{6,8}/.test(v);
    };

    const submitRef = ref(false);

    const onSubmit = (v: AnyObject) => {
      v.password = md5Encryption(v.password);
      submitRef.value = true;
      const { data, isFinished } = readerRegister(v);
      watch(data, () => {
        Toast('注册成功');
        router.push({ name: 'Login' });
      });

      watch(isFinished, () => {
        submitRef.value = false;
      });
    };

    return () => (
      <CPage>
        <NavBar
          leftText="返回登录"
          left-arrow
          onClick-left={onClickLeft}
        ></NavBar>
        <div class="pa-5">
          <div class="flex mt-6" style="color:var(--van-blue)">
            <div class={`${styles.accountLogin} flexItem`}>注 册</div>
          </div>
          <Form class="mt-8" onSubmit={onSubmit}>
            <Field
              rules={[
                { required: true, message: '请输入邮箱账号' },
                { pattern: reg, message: '邮箱账号不合法' }
              ]}
              name="email"
              class={styles.inputText}
              autocomplete="off"
              v-model={[form.email, ['trim']]}
              placeholder="请输入邮箱账号"
            />
            <div class={styles.getCode}>
              <Field
                rules={[{ required: true, message: '请输入验证码' }]}
                name="code"
                v-model={[form.code, ['trim']]}
                class={styles.inputText}
                autocomplete="off"
                placeholder="请输入验证码"
              />
              <div class={styles.getCodeBtn} onClick={getVertifyCode}>
                {isSending.value ? '发送验证码中' : '获取验证码'}
              </div>
            </div>
            <Field
              name="password"
              rules={[
                { required: true, message: '请输入密码' },
                {
                  validator: validator,
                  message: '密码6-18英文、数字、符号的组合'
                }
              ]}
              v-model={[form.password, ['trim']]}
              class={styles.inputText}
              type="password"
              autocomplete="off"
              placeholder="请输入密码6-18英文、数字、符号的组合"
            />
            <Button
              disabled={submitRef.value}
              native-type="submit"
              class="mt-6"
              type="primary"
              round
              block
            >
              注册
            </Button>
          </Form>
        </div>
      </CPage>
    );
  }
});
