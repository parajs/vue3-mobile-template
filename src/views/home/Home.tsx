import { homeList } from '@/api';
import CHomeArticleItem from '@/components/CArticleItem';
import CHomeAudioItem from '@/components/CAudioItem';
import CPage from '@/components/CPage';
import CTabbar from '@/components/CTabbar';
import CHomeVideoItem from '@/components/CVideoItem';
import { NavBar } from 'vant';
import { defineComponent } from "vue";
import styles from "./home.module.css";
const { VITE_TITLE } = import.meta.env;

export default defineComponent({
   name: "Home",
   setup(){
    
      homeList({pageSize: 10,pageIndex:1})
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
                  <CHomeVideoItem class="mb-2" />
                  <CHomeArticleItem class="mb-2" />
                  <CHomeVideoItem class="mb-2"/>
                  <CHomeAudioItem class="mb-2" />
                  <CHomeVideoItem class="mb-2"/>
              </CPage>
       )
   }
})




