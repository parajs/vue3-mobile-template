import CHomeArticleItem from '@/components/CArticleItem';
import CHomeAudioItem from '@/components/CAudioItem';
import CAvatar from '@/components/CAvatar';
import CPage from "@/components/CPage";
import CHomeVideoItem from '@/components/CVideoItem';
import { Button, Icon, Tab, Tabs } from "vant";
import { defineComponent } from "vue";
import styles from "./personalHome.module.less";
export default defineComponent({
    name: "PersonalHome",
    setup(){
        const onClickLeft = ()=>{
            history.back();
        }

        return ()=>(
            <CPage>
                <div class={styles.headerBox}>
                   <div class={styles.arrow} onClick={onClickLeft}>
                        <Icon name="arrow-left" size="26" color="var(--van-white)" />
                   </div>
                   <div class={`${styles.headerInner} flex`}>
                       <div class="text-center mr-4">
                           <div>
                                <CAvatar size="80" />
                           </div>
                           <div class="mt-2">
                            <Button icon="plus" size="small" round type="primary">关注</Button>
                           </div>
                           
                       </div>
                       <div class="flexItem">
                           <div class={styles.username}>用户昵称</div>
                           <div class="text-truncate-2">个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介.</div>
                           <div class={styles.fans}>
                               粉丝:<span class="mr-4">100</span>
                               关注:<span>100</span>
                           </div>
                       </div>
                   </div>
                </div>

                <Tabs swipeable color="var(--van-blue)">
                   <Tab title="全部">
                    <CHomeVideoItem class="mb-2" />
                    <CHomeArticleItem class="mb-2" />
                    <CHomeVideoItem class="mb-2"/>
                    <CHomeAudioItem class="mb-2" />
                    <CHomeVideoItem class="mb-2"/>
                   </Tab>
                   <Tab title="视频">
                     <CHomeVideoItem class="mb-2" />
                   </Tab>
                   <Tab title="音频">
                    <CHomeAudioItem class="mb-2" />
                   </Tab>
                   <Tab title="文章">
                   <CHomeArticleItem class="mb-2" />
                   </Tab>
                </Tabs>
            </CPage>    
        )
    }
})