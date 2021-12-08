import { api_subindex_list } from '@/api';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
export default defineComponent({
   name:'My',
   setup(){
   const { data } =  api_subindex_list({});
       return ()=> (
         <>
          {
                data.value && (data.value as any).list.map((item: AnyObject)=>{
                  return (
                    <div>{item.title}</div>
                  )
                })
          }

                <RouterLink to="/detail">跳转到详情</RouterLink>
         </>  
        
       )
   }
})