import CAudioItem from "@/components/CAudioItem";
import CPage from "@/components/CPage";
import CTabbar from "@/components/CTabbar";
import CVideoItem from "@/components/CVideoItem";
import { Icon, NavBar, Tab, Tabs } from "vant";
import { defineComponent } from "vue";
import CArticleItem from '../../components/CArticleItem/index';
import styles from "./resourceList.module.css";
const { VITE_TITLE } = import.meta.env;



export default defineComponent({
    name: "ResourceList",
    setup(){

        const navbarslots = {
            left: () =>( 
            <div class={styles.appTitle}>
               已购视频
            </div>
            ),
         }
      
        return ()=>(
            <CPage>
                {{  default:()=>(
                    <>
                        <NavBar  v-slots={navbarslots}></NavBar>
                        <Tabs swipeable color="var(--van-blue)">
                            <Tab title="视频" title-style="font-size:1.1rem">
                                <div class="flex pa-3">
                                    <div class="flexItem">
                                        总共（8）视频
                                    </div>
                                    <div class="flex">
                                        <Icon name="descending" size="30" color="var(--van-gray-6)" />
                                        <span class={styles.lastPer}>最近购买</span>
                                    </div>
                                </div>
                                <div>
                                    <CVideoItem class="mb-3" />
                                    <CVideoItem class="mb-3" />
                                    <CVideoItem class="mb-3" />
                                </div>
                            </Tab>
                            <Tab title="音频" title-style="font-size:1.1rem">
                                <div class="flex pa-3">
                                    <div class="flexItem">
                                        总共（8）音频
                                    </div>
                                    <div class="flex">
                                        <Icon name="descending" size="30" color="var(--van-gray-6)" />
                                        <span class={styles.lastPer}>最近购买</span>
                                    </div>
                                </div>
                                <div>
                                    <CAudioItem class="mb-3" />
                                    <CAudioItem class="mb-3" />
                                    <CAudioItem class="mb-3" />
                                </div>
                            </Tab>
                            <Tab title="文章" title-style="font-size:1.1rem">
                                <div class="flex pa-3">
                                    <div class="flexItem">
                                        总共（8）文章
                                    </div>
                                    <div class="flex">
                                        <Icon name="descending" size="30" color="var(--van-gray-6)" />
                                        <span class={styles.lastPer}>最近购买</span>
                                    </div>
                                </div>
                                <div>
                                    <CArticleItem class="mb-3" />
                                    <CArticleItem class="mb-3" />
                                    <CArticleItem class="mb-3" />
                                </div>
                            </Tab>
                        </Tabs>
                    </>
                    
                ),
                    footer: () => <CTabbar />,
                }}
            </CPage>
        )
    }
})

