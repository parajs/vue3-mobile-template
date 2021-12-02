import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
   name:'My',
   setup(){
       return ()=> (
        <RouterLink to="/detail">跳转到详情</RouterLink>
       )
   }
})