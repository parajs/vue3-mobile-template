import { defineComponent } from 'vue';
import './App.css';
import HelloWorld from './components/HelloWorld';

export default defineComponent({
  props: {
  },

  setup(props) {

    return () => (
      <>
        <img alt="Vue logo" src="@/assets/logo.png" />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      </>
    )
  }
})