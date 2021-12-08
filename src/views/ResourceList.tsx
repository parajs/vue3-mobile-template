import CPage from "@/components/CPage";
import CTabbar from "@/components/CTabbar";
import { defineComponent } from "vue";

export default defineComponent({
    name: "ResourceList",
    setup(){
        return ()=>(
            <CPage>
                {{
                footer: () => <CTabbar />,
                }}
            </CPage>
        )
    }
})