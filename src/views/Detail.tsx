import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
    name: "Detail",
    setup(){
        return ()=>(
            <RouterLink to="/">详情跳到首页</RouterLink>
        )
    }
})