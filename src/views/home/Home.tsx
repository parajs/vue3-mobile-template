import { homeList } from '@/api';
import CHomeArticleItem from '@/components/CArticleItem';
import CHomeAudioItem from '@/components/CAudioItem';
import CPage from '@/components/CPage';
import CTabbar from '@/components/CTabbar';
import CHomeVideoItem from '@/components/CVideoItem';
import router from '@/router';
import { NavBar } from 'vant';
import { defineComponent } from 'vue';
import styles from './home.module.css';
const { VITE_TITLE } = import.meta.env;

export default defineComponent({
  name: 'Home',
  setup() {
    homeList({ pageSize: 10, pageIndex: 1 });
    const slots = {
      footer: () => <CTabbar />
    };

    const navigatePage = (type: string) => {
      if (type === 'article') {
        router.push({
          name: 'Article'
        });
      }

      if (type === 'video') {
        router.push({
          name: 'Video'
        });
      }
    };

    const navbarslots = {
      left: () => <div class={styles.appTitle}>{VITE_TITLE}</div>
    };

    return () => (
      <CPage v-slots={slots} style="background:var(--van-gray-1)">
        <NavBar v-slots={navbarslots}></NavBar>
        <CHomeVideoItem onClick={() => navigatePage('video')} class="mb-2" />
        <CHomeArticleItem
          onClick={() => navigatePage('article')}
          class="mb-2"
        />
        <CHomeVideoItem class="mb-2" />
        <CHomeAudioItem class="mb-2" />
        <CHomeVideoItem class="mb-2" />
      </CPage>
    );
  }
});
