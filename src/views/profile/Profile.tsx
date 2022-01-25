import { userModify } from '@/api';
import CAvatar from '@/components/CAvatar';
import CPage from '@/components/CPage';
import CTabbar from '@/components/CTabbar';
import router from '@/router';
import { Button, Field, Form, NavBar } from 'vant';
import { computed, defineComponent, reactive, ref, unref, watch } from 'vue';
import { useStore } from 'vuex';
import styles from './profile.module.css';

export default defineComponent({
  name: 'Profile',
  setup() {
    const store = useStore();
    const user = unref(computed(() => store.state.user.user));
    const formR = reactive({
      nick_name: user.nick_name,
      user_intro: user.user_intro
    });

    const onClickLeft = () => {
      history.back();
    };

    const isSending = ref(false);

    const saveModifyInfo = () => {
      isSending.value = true;
      const { isFinished, data } = userModify(formR);
      watch(isFinished, () => {
        isSending.value = false;
      });

      watch(data, () => {
        isSending.value = false;
        router.push({ name: 'My' });
      });
    };

    return () => (
      <CPage>
        {{
          header: () => (
            <NavBar onClick-left={onClickLeft} left-arrow title="个人资料">
              {{
                right: () => (
                  <Button
                    disabled={isSending.value}
                    onClick={saveModifyInfo}
                    size="small"
                    type="primary"
                  >
                    完成
                  </Button>
                )
              }}
            </NavBar>
          ),
          default: () => (
            <>
              <div class={styles.profileItem}>
                <div class="flex mt-5" style="justify-content: center;">
                  <CAvatar size="100">更换</CAvatar>
                </div>
                <Form class="mt-8">
                  <Field
                    name="nick_name"
                    v-model={formR.nick_name}
                    rules={[{ required: true, message: '请输入昵称' }]}
                    label="昵称"
                    style="border:1px solid var(--van-gray-2)"
                    border
                    show-word-limit
                    placeholder="请输入昵称"
                    maxlength="20"
                  />
                  <Field
                    v-model={formR.user_intro}
                    rules={[{ required: true, message: '请输入个人介绍' }]}
                    name="user_intro"
                    class="mt-5"
                    style="border:1px solid var(--van-gray-2)"
                    border
                    label="个人介绍"
                    show-word-limit
                    autosize
                    type="textarea"
                    placeholder="请输入个人介绍"
                    maxlength="400"
                  />
                </Form>
              </div>
            </>
          ),
          footer: () => <CTabbar />
        }}
      </CPage>
    );
  }
});
