import CAvatar from '@/components/CAvatar';
import CPage from "@/components/CPage";
import CTabbar from "@/components/CTabbar";
import { NavBar, Tag } from "vant";
import { defineComponent } from "vue";
import styles from './followList.module.css';

export default defineComponent({
    name: "FollowList",
    setup(){
        const onClickLeft = ()=>{
            history.back();
        }

        return ()=>(
            <CPage>
                {
                    {  
                    header:()=>(
                        <NavBar onClick-left={onClickLeft}  left-arrow title="我的关注"></NavBar>
                    ),
                    default: ()=>(
                        <>
                            <div class={`${styles.followItem} border-bottom`}>
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
                            <div class={`${styles.followItem} border-bottom`}>
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

