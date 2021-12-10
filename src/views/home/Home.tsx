import { api_index_list } from '@/api';
import CArticleItem from '@/components/CArticleItem';
import CAudioItem from '@/components/CAudioItem';
import CPage from '@/components/CPage';
import CTabbar from '@/components/CTabbar';
import CVideoItem from '@/components/CVideoItem';
import { NavBar } from 'vant';
import { defineComponent } from "vue";
import styles from "./home.module.css";
const { VITE_TITLE } = import.meta.env;

export default defineComponent({
   name: "Home",
   setup(){
    const { data } = api_index_list();

    const slots = {
      footer: () => <CTabbar />
    };
    const navbarslots = {
      left: () =>( 
      <div class={styles.appTitle}>
         {VITE_TITLE}
      </div>
      ),
   }

       return ()=> (
              <CPage v-slots={slots} style="background:var(--van-gray-1)">
                  <NavBar  v-slots={navbarslots}></NavBar>
                  <CVideoItem class="mb-2" />
                  <CAudioItem class="mb-2" />
                  <CVideoItem class="mb-2"/>
                  <CArticleItem class="mb-2" />
                  <CVideoItem class="mb-2"/>
              </CPage>
       )
   }
})




