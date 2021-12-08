import { Icon, Tabbar, TabbarItem } from 'vant';
import { defineComponent } from 'vue';
export default defineComponent({
    name:"CTabbar",
    setup(){
        return ()=>(
            <Tabbar route fixed style={{borderTop: "1px solid #ddd"}}>
                <TabbarItem to={{name:'Home'}} >
                    <Icon  name="wap-home-o" size="40" />
                </TabbarItem>
                <TabbarItem  to={{name:'ResourceList'}}>
                    <Icon  name="orders-o" size="40" />
                </TabbarItem>
                <TabbarItem  to={{name:'My'}}>
                    <Icon  name="user-o" size="40" />
                </TabbarItem>
            </Tabbar>
        )
    }
})
