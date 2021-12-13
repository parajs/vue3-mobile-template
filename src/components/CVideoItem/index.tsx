
import { Icon, Image } from "vant"
import CAvatar from "../CAvatar"
import styles from "./index.module.css"
/**
 * 首页视频项
 * @param props 
 */

 const CHomeVideoItem = (props: AnyObject)=>(
    <div class={styles.videoItem}>
       <Image radius="6" width="100%" height="160" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg">
          <Icon class={styles.videoPlayItem} name="play" size="60" color="#fff" />
       </Image>
       <div  class="mt-2 text-truncate">
          这里是视频标题占位这里是视频标题占位里是视频标题占位
       </div>
       <div class="mt-3 flex">
          <CAvatar src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class={styles.grayT}>
             <span class="ml-4">100</span><span class="ml-2">观看</span> <span class="ml-2 mr-2">|</span><span>2小时前</span>
          </div>
       </div>
      
    </div>
 )

 /**
 * 已购页视频项
 * @param props 
 */

  const CResourceListVideoItem = (props: AnyObject)=>(
   <div class={`${styles.videoItem}  border-bottom`}>
      <div class="flex">
         <Image  width="150" height="80" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg"></Image>
         <div class="flexItem ml-2">
            <div  class="mt-2 text-truncate-2">
               这里是视频标题占位这里是视频标题占位里是视频标题占位
            </div>
            <div class={`${styles.grayT} mt-3`}>
                  作者昵称<span class="ml-2 mr-2">|</span><span>2小时前</span>
            </div>
      
         </div>
      </div>
    
     
   </div>
)

export { CResourceListVideoItem, CHomeVideoItem }

export default CHomeVideoItem
 