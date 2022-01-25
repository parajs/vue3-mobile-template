import CPage from '@/components/CPage';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Detail',
  setup() {
    const ref1 = ref();
    const slots = {
      default: () => <div>A</div>,
      header: () => <div>B</div>,
      footer: () => <span>B</span>
    };

    return () => (
      <div>
        <CPage ref={ref1} v-slots={slots}></CPage>
      </div>

      // <RouterLink to="/">详情跳到首页</RouterLink>
    );
  }
});
