import { api_index_list } from '@/api';
import CPage from '@/components/CPage';
import CTabbar from '@/components/CTabbar';
import { defineComponent } from "vue";

export default defineComponent({
   name: "Home",
   setup(){
     
    const { data } = api_index_list();

       return ()=> (
           <>
              <CPage>
                  {{
                     footer: () => <CTabbar />,
                  }}
              </CPage>
           </>
       )
   }
})
