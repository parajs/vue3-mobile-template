import CAvatar from '@/components/CAvatar';
import CPage from "@/components/CPage";
import CTabbar from "@/components/CTabbar";
import { NavBar, Tag } from "vant";
import { defineComponent } from "vue";
import styles from './followList.module.css';

export default defineComponent({
    name: "FollowList",
    setup(){
        return ()=>(
            <CPage>
                {
                    {  
                    header:()=>(
                        <NavBar  left-arrow title="我的关注"></NavBar>
                    ),
                    default: ()=>(
                        <>
                            <div class={styles.followItem}>
                                <div class="flex">
                                    <div class="flexItem">
                                        <CAvatar size="40" />
                                        <span class="ml-3">昵称昵称昵称</span>
                                    </div>
                                    <Tag size="large">
                                        已关注
                                    </Tag>
                                </div>
                            </div>
                            <div class={styles.followItem}>
                                <div class="flex">
                                    <div class="flexItem">
                                        <CAvatar size="40" />
                                        <span class="ml-3">昵称昵称昵称</span>
                                    </div>
                                    <Tag size="large">
                                        已关注
                                    </Tag>
                                </div>
                            </div>
                        </>
                    ),
                    footer: () => <CTabbar />,
                    }
                }
            </CPage>
        )
    }
})

