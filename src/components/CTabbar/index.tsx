import { useStore } from '@/store';
import { Icon, Tabbar, TabbarItem } from 'vant';
import { defineComponent, ref, watchEffect } from 'vue';
export default defineComponent({
  name: 'CTabbar',
  setup() {
    const tokenRef = ref('');
    const store = useStore();

    watchEffect(() => {
      tokenRef.value = store.state.user.token;
    });
    return () => (
      <Tabbar
        route
        safeAreaInsetBottom
        fixed={false}
        style={{ borderTop: '1px solid #ddd' }}
      >
        <TabbarItem to={{ name: 'Home' }}>
          <Icon name="wap-home-o" size="40" />
        </TabbarItem>
        <TabbarItem to={{ name: 'ResourceList' }}>
          <Icon name="orders-o" size="40" />
        </TabbarItem>
        <TabbarItem to={tokenRef.value ? { name: 'My' } : { name: 'Login' }}>
          <Icon name="user-o" size="40" />
        </TabbarItem>
      </Tabbar>
    );
  }
});
