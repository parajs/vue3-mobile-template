import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from "path";
import { defineConfig } from 'vite';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://api.beehub.paradeum.com',
        changeOrigin: true,
        rewrite: (path) => {
          console.log(path)
          return  path.replace(/^\/api/, '')
        }
      },
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        VantResolve()
      ],
    }),
  ],
  resolve:{
    alias: {
      '@': resolve('./src'),
    }
  }
})
