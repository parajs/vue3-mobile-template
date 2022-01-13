import { useEventListener, useWindowSize } from "@vueuse/core";
import { defineComponent, nextTick, onMounted, ref } from 'vue';
import "./index.css";

interface CPageOptions {
    hideHeaderPlaceholder?: boolean;
    hideFooterPlaceholder?: boolean;
}
export default defineComponent<CPageOptions>({
    name:'CPage',
    setup(props,{slots,attrs}){
        const  {hideHeaderPlaceholder,hideFooterPlaceholder } = attrs;
        const header = ref();
        const main = ref();
        const footer = ref();
        const headerh = ref(0);
        const footerh = ref(0);
        const { height } = useWindowSize();
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
            <div class="page-container" style={{minHeight: height.value + 'px'}}>
                {
                    slots.header ? (  
                    <header
                        ref={header}
                        class="page-header"
                        >
                             {slots.header?.()}
                        </header>
                    ): null
                }

                {
                    slots.header && !hideHeaderPlaceholder ? <div style={{'height':headerh.value+'px'}}></div> : null
                }
                
                <main ref={main} class="page-main">
                    {slots.default?.()}
                </main>


                {
                    slots.footer && !hideFooterPlaceholder ? <div style={{'height':footerh.value+'px'}}></div> : null
                }

                {
                    slots.footer ? (
                        <footer
                        ref={footer}
                        class="page-footer"
                        >
                         {slots.footer?.()}
                        </footer>
                    ) :null
                }
               
            </div>
        )
    }
})