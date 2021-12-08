import { api_subindex_list } from '@/api';
import CPage from '@/components/CPage';
import CTabbar from '@/components/CTabbar';
import { defineComponent } from 'vue';

export default defineComponent({
   name:'My',
   setup(){
   const { data } =  api_subindex_list({});
       return ()=> (
        <CPage>
        {{
           footer: () => <CTabbar />,
        }}
      </CPage>
        
       )
   }
})