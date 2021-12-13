import CPage from "@/components/CPage";
import CTabbar from "@/components/CTabbar";
import { NavBar } from "vant";
import { defineComponent } from "vue";
import styles from './msgList.module.css';


export default defineComponent({
    name: "MsgList",
    setup(){
        const onClickLeft = ()=>{
            history.back();
        }

        return ()=>(
            <CPage>
                {
                    {  
                    header:()=>(
                        <NavBar onClick-left={onClickLeft}  left-arrow title="消息" ></NavBar>
                    ),
                    default: ()=>(
                        <>
                            <div class={`${styles.msgItem} border-bottom`}>
                                <div class="flex" style="color:var(--van-gray-6)">
                                    <div class="flexItem">关注提醒</div>
                                    <div>1小时前</div>
                                </div>
                                <div class="mt-3">
                                  您关注的 作者昵称 有新的作品啦，前往查看
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

