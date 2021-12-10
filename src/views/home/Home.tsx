import { api_index_list } from '@/api';
import CAvatar from '@/components/CAvatar';
import CPage from '@/components/CPage';
import CTabbar from '@/components/CTabbar';
import { Icon, Image, NavBar } from 'vant';
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
                  <VideoItem class="mb-2" />
                  <AudioItem class="mb-2" />
                  <VideoItem class="mb-2"/>
                  <ArticleItem class="mb-2" />
                  <VideoItem class="mb-2"/>
              </CPage>
       )
   }
})


/**
 * 视频项
 * @param props 
 */

const VideoItem = (props: AnyObject)=>(
   <div class={styles.videoItem}>
      <Image radius="6" width="100%" height="160" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg">
         <Icon class={styles.videoPlayItem} name="play" size="60" color="#fff" />
      </Image>
      <div  class="mt-2 text-truncate">
         这里是视频标题占位这里是视频标题占位里是视频标题占位
      </div>
      <div class="mt-2 flex">
         <CAvatar src="https://img.yzcdn.cn/vant/cat.jpeg" />
         <div class={styles.grayT}>
            <span class="ml-4">100</span><span class="ml-2">观看</span> <span class="ml-2 mr-2">|</span><span>2小时前</span>
         </div>
      </div>
     
   </div>
)


/**
 * 音频项
 * @param props 
 */
const  AudioItem = (props: AnyObject)=>{
   return (
       <div class={styles.audioItemBox}>
           <div class={styles.audioCover}>
                <Image radius="6" width="100%" height="inherit" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg">
                    <Icon class={styles.videoPlayItem} name="play" size="30" color="#fff" />
                </Image>
           </div>
           <div class="flexItem ml-3">
               <div class="text-truncate">这里是音频标题这里是音频标题这里</div>
               <div class="mt-2 flex">
                  <CAvatar src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  <div class={styles.grayT}>
                     <span class="ml-4">100</span><span class="ml-2">观看</span> <span class="ml-2 mr-2">|</span><span>2小时前</span>
                  </div>
               </div>
           </div>
       </div>
   )
}


/**
 * 文章项
 * @param props 
 */
 const  ArticleItem = (props: AnyObject)=>{
   return (
       <div class={styles.articleItemBox}>
          <div class="text-truncate">这里是音频标题这里是音频标题这里</div>
          <div class="flex mt-3">
            <div class={styles.articleCover}>
                  <Image radius="6" width="100%" height="inherit" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg">
                  </Image>
            </div>
            <div class="flexItem ml-3">
                  <div class="text-truncate">这里是音频标题这里是音频标题这里</div>
                  <div class="mt-2 flex">
                     <CAvatar src="https://img.yzcdn.cn/vant/cat.jpeg" />
                     <div class={styles.grayT}>
                        <span class="ml-4">100</span><span class="ml-2">观看</span> <span class="ml-2 mr-2">|</span><span>2小时前</span>
                     </div>
                  </div>
            </div>
          </div>
          
       </div>
   )
}
