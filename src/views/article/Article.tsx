import paypal from "@/assets/paypal.png";
import { CResourceListArticleItem } from '@/components/CArticleItem';
import CAvatar from "@/components/CAvatar";
import CPage from "@/components/CPage";
import CTabbar from "@/components/CTabbar";
import { Button, Dialog, NavBar } from "vant";
import { defineComponent, ref } from "vue";
import styles from "./article.module.css";
export default defineComponent({
    name: "Article",
    setup(){
        const show = ref(false);
        const onClickLeft = ()=>{
            history.back();
        }

        const openDialog = ()=>{
            show.value = true;
        }

        return ()=>(
            <CPage>
                {
                    {  
                    header:()=>(
                        <NavBar onClick-left={onClickLeft}  left-arrow></NavBar>
                    ),
                    default: ()=>(
                       <>
                         <div class="pa-3">
                            <div class={`${styles.articleTitle} mb-3`}>
                                这里是文章标题占位这里是文章标题占位里是文章标题占位占位占位
                            </div>
                            <div class={styles.grayT}>
                                <span>100</span><span class="ml-2">观看</span> <span class="ml-2 mr-2">|</span><span>2小时前</span>
                            </div>
                         </div>
                         <div class={`${styles.grayBg} flex`}>
                             <div class="flexItem">
                                <CAvatar size="40" />
                                <span class="ml-3">
                                    作者昵称昵称
                                </span>
                             </div>
                             <Button plain type="primary"  size="small" >
                                关注
                             </Button>
                             <Button plain   size="small" >
                                取关
                             </Button>
                            
                         </div>
                         <div class={styles.content}>
                             <div class="mt-4">
                                作为一名资深加班狗纵然有着名义上的5x8小时工作制，但实际基本执行着7x12的标准。那么问题来了，
                                如此苦逼的日子除了快乐水还有哪些东西可以提升我的加班幸福感？
                             </div>
                             <div class={styles.mask} onClick={openDialog}>
                                付费$1.00，即可查看完整内容 &gt; 
                             </div>
                             <Dialog.Component confirm-button-text="确认支付" v-model={[show.value, 'show']}  title="支付" >
                                <div class="pa-3">
                                    <div>
                                        视频的标题视频的标题视频的标题视频的标题视频的标题
                                    </div>
                                    <h2 class="text-center">$ 1.0</h2>
                                    <div class="text-center">
                                        <img src={paypal} alt="" />
                                    </div>
                                </div>
                             </Dialog.Component>
                         </div>
                         <div>
                             <div class="pa-3">
                                <div  class={`${styles.articleTitle} mb-3`}>合集相关</div>
                                <div class={styles.collection}>合集名称合集名称合集名称合集名称合集名称</div>
                             </div>
                              <CResourceListArticleItem />
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

