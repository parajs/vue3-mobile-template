import { useEventListener } from "@vueuse/core";
import { defineComponent, nextTick, onMounted, ref } from 'vue';
import "./index.css";
export default defineComponent({
    name:'CPage',
    setup(props,{slots}){
        const header = ref();
        const main = ref();
        const footer = ref();
        const headerh = ref(0);
        const footerh = ref(0);
        const ev =  window.onorientationchange ? "orientationchange" :"resize";

        const setHeaderHeight = ()=>{
            nextTick(()=>{
                 headerh.value = header.value?.offsetHeight || 0;
             })
        }

        
        const setFooterHeight = ()=>{
            nextTick(()=>{
                footerh.value = footer.value?.offsetHeight || 0;
             })
        }


        const initPageLayout = ()=>{
            slots.footer ? setFooterHeight() : null;
            slots.header ? setHeaderHeight() : null;
        }

        onMounted(()=>{
            initPageLayout();
        })

        useEventListener(window,ev,()=>{
            initPageLayout();
        })

        return ()=> (
            <div>
                {
                    slots.header ? (  
                    <header
                        ref={header}
                        class="page-header safe-area-inset-top"
                        >
                             {slots.header?.()}
                        </header>
                    ): null
                }

                {
                    slots.header ? <div style={{'height':headerh.value+'px'}}></div> : null
                }
                
                <main ref={main} class="page-main">
                    {slots.default?.()}
                </main>


                {
                    slots.footer ? <div style={{'height':footerh.value+'px'}}></div> : null
                }

                {
                    slots.footer ? (
                        <footer
                        ref={footer}
                        class="page-footer safe-area-inset-bottom"
                        >
                         {slots.footer?.()}
                        </footer>
                    ) :null
                }
               
            </div>
        )
    }
})