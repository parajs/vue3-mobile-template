import { defineComponent, KeepAlive, Suspense } from 'vue';
import { RouterView } from 'vue-router';
import './App.css';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <Suspense onFallback={()=><div> Loading...</div>}>
          <RouterView>
            {        
            // @ts-ignore
              ({ Component, route }) => {
                const { meta } = route;
                const isKeepAlive = meta && meta.keepAlive;
                return (
                  <>
                    <KeepAlive>
                        { isKeepAlive ? <Component is={meta.usePathKey ? route.path : undefined} />: null }
                    </KeepAlive>  
                    { !isKeepAlive ? <Component />: null }
                  </>
                )  
              }
            }
          </RouterView>
      </Suspense>     
    )
  }
})