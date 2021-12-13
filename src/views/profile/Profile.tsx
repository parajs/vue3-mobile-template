import CAvatar from '@/components/CAvatar';
import CPage from "@/components/CPage";
import CTabbar from "@/components/CTabbar";
import { Button, Field, Form, NavBar } from "vant";
import { defineComponent } from "vue";
import styles from './profile.module.css';


export default defineComponent({
    name: "Profile",
    setup(){
        const onClickLeft = ()=>{
            history.back();
        }
         

        return ()=>(
            <CPage>
                {
                    {  
                    header:()=>(
                        <NavBar onClick-left={onClickLeft} left-arrow title="个人资料">
                            {{
                                right:()=>(
                                    <Button size="small" type="primary">完成</Button>
                                )
                            }}
                        </NavBar>
                    ),
                    default: ()=>(
                        <>
                            <div class={styles.profileItem}>
                                <div class="flex mt-5" style="justify-content: center;">
                                    <CAvatar size="100" >
                                         更换
                                    </CAvatar>
                                </div>
                                <Form class="mt-8">
                                    <Field label="昵称" style="border:1px solid var(--van-gray-2)" border show-word-limit placeholder="请输入昵称" maxlength="20"/>
                                    <Field class="mt-5" style="border:1px solid var(--van-gray-2)" border label="个人介绍" show-word-limit autosize  type='textarea' placeholder="请输入个人介绍" maxlength="400" />
                                </Form>
                                
                            </div>
                        </>
                    ),
                    footer: () => <CTabbar />,
                    }
                }
            </CPage>
        )
    }
})

