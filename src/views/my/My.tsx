import { api_subindex_list } from '@/api';
import CAvatar from '@/components/CAvatar';
import CPage from '@/components/CPage';
import CTabbar from '@/components/CTabbar';
import { Button, Col, Icon, Row } from 'vant';
import { defineComponent } from 'vue';
import styles from './my.module.less';
export default defineComponent({
   name:'My',
   setup(){
   const { data } =  api_subindex_list({});

   const slots = {
      footer: () => <CTabbar />
    };

       return ()=> (
        <CPage v-slots={slots}>
           <div class={styles.myHeader}>
               <div class={`${styles.userBox} flex`}>
                  <div class="flexItem">
                     <CAvatar size="60" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                     <span class="ml-3">用户昵称</span>
                  </div>
                  <div>
                     <Icon name="arrow" color="#fff" size="26"/>
                  </div>
               </div>
              <Row class={styles.threePart}>
                 <Col span="8">
                     <div class={styles.myCicle}>20</div>
                     <div>关注</div>
                 </Col>
                 <Col span="8">
                     <div class={styles.myCicle}>20</div>
                     <div>消息</div>
                 </Col>
                 <Col span="8">
                     <div class={styles.myCicle}>
                        <Icon name="records" size="20" />
                     </div>
                     <div>资料</div>
                 </Col>
              </Row>
           </div>

           <div class="pa-4" style="margin-top: 40px">
              <div class={styles.modifyPwd}>
                 <div class="flexItem">修改密码</div>
                 <Icon name='arrow' color='#ddd' />
              </div>
              <Button plain  type="default"   block>退出登录</Button>
           </div>
      </CPage>
        
       )
   }
})