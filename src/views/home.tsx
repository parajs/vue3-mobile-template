import { api_index_list } from '@/api';
import { Button } from 'vant';
import { defineComponent, onActivated, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

export default defineComponent({
   name: "Home",
   setup(){
      console.log('useRoute',useRoute());
      console.log('useRouter',useRouter());
      const router = useRouter();
      const clickButton = () => {
        router.push('/my');
      }

      const msg = ref('更新组件')

      const updateComp = ()=>{
          msg.value = "已更新组件"
      }

      onActivated(()=>{
            console.log('onActivated');
      })

      onMounted(()=>{
        console.log('onMounted');
      })

      onDeactivated(()=>{
        console.log('onDeactivated');
      })

      onUnmounted(()=>{
        console.log('onUnmounted');
      })

      onUpdated(()=>{
        console.log('onUpdated');
      })

     onBeforeUpdate(()=>{
        console.log('onBeforeUpdate');
     })
     
     onErrorCaptured(()=>{
        console.log('onErrorCaptured');
     })

    // 开发环境使用
     onRenderTracked((e)=>{
        console.log('onRenderTracked',e);
     })

      // 开发环境使用
     onRenderTriggered((e)=>{
        console.log('onRenderTriggered',e);
     })
     
    const { data } = api_index_list();
       return ()=> (
           <>
                {
                data.value && (data.value as any).list.map((item: AnyObject)=>{
                  return (
                    <div>{item.title}</div>
                  )
                })
                }
                <div>{msg.value}</div>
                <RouterLink to="/my">跳转到我的</RouterLink>
                <Button onClick={ clickButton }>跳转到我的</Button>
                <Button onClick={ updateComp }>更新组件</Button>
           </>
        
       )
   }
})