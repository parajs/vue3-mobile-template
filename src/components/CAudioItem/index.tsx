
import { Icon, Image } from "vant"
import CAvatar from "../CAvatar"
import styles from "./index.module.css"

/**
 * 音频项
 * @param props 
 */
 const  CHomeAudioItem = (props: AnyObject)=>{
   return (
       <div class={styles.audioItemBox}>
           <div class={styles.audioCover}>
                <Image radius="6" width="100%" height="inherit" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg">
                    <Icon class={styles.videoPlayItem} name="play" size="30" color="#fff" />
                </Image>
           </div>
           <div class="flexItem ml-3">
               <div class="text-truncate">这里是音频标题这里是音频标题这里</div>
               <div class="mt-3 flex">
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
 * 已购页音频项
 * @param props 
 */
 const  CResourceListAudioItem = (props: AnyObject)=>{
    return (
        <div class={`${styles.audioItemBox} border-bottom`}>
            <div class={styles.audioCover}>
                 <Image radius="6" width="100%" height="inherit" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg">
                     <Icon class={styles.videoPlayItem} name="play" size="30" color="#fff" />
                 </Image>
            </div>
            <div class="flexItem ml-3">
                <div class="text-truncate">这里是音频标题这里是音频标题这里</div>
                <div class={`${styles.grayT} mt-3`}>
                   作者昵称<span class="ml-2 mr-2">|</span><span>2小时前</span>
                   </div>
            </div>
        </div>
    )
 }

 export { CResourceListAudioItem, CHomeAudioItem }

 export default CHomeAudioItem
 