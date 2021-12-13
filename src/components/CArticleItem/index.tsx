
import { Image } from "vant";
import CAvatar from "../CAvatar";
import styles from "./index.module.css";

/**
 * 文章项
 * @param props 
 */
 const  CArticleItem = (props: AnyObject)=>{
    const {cover} = props;

    return (
        <div class={styles.articleItemBox}>
            {
                cover ? (
                    <>
                        <div class="flex">
                            <div class={styles.articleCover}>
                                <Image radius="6" width="100%" height="inherit" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg">
                                </Image>
                            </div>
                            <div class="flexItem ml-3">
                                <div class="text-truncate-2">这里是文章标题占位这里是文章标题占位这里是文章标</div>
                                <div class="mt-2 flex">
                                    <CAvatar src="https://img.yzcdn.cn/vant/cat.jpeg" />
                                    <div class={styles.grayT}>
                                        <span class="ml-4">100</span><span class="ml-2">观看</span> <span class="ml-2 mr-2">|</span><span>2小时前</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    
                ):(
                    <>
                      <div class="text-truncate">这里是文章标题占位这里是文章标题占位这里是文章标</div>
                      <div class="text-truncate-2 mt-2" style="color:var(--van-gray-6)">
                        部分文章内容部分文章内容部分文章内容部分文章内容部分文章内容部分文章内容部分文章内容部分文章内容.
                      </div>
                      <div class="mt-3 flex">
                            <CAvatar src="https://img.yzcdn.cn/vant/cat.jpeg" />
                            <div class={styles.grayT}>
                                <span class="ml-4">100</span><span class="ml-2">观看</span> <span class="ml-2 mr-2">|</span><span>2小时前</span>
                            </div>
                        </div>
                    </>
                )
            }
           
           
        </div>
    )
 }
 
 export default CArticleItem
 