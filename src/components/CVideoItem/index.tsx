
import { Icon, Image } from "vant"
import CAvatar from "../CAvatar"
import styles from "./index.module.css"
/**
 * 视频项
 * @param props 
 */

 const CVideoItem = (props: AnyObject)=>(
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

 export default CVideoItem
 