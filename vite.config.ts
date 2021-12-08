import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from "path";
import { ConfigEnv, UserConfigExport } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import { viteVConsole } from 'vite-plugin-vconsole';
function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/

export default function ({ command } : ConfigEnv): UserConfigExport{
  console.log(command)
  return {
    server: {
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
      eslintPlugin(),
      viteVConsole({
        entry: path.resolve('src/main.ts'), // entry file
        localEnabled: command == 'serve', // dev environment
        enabled: command != 'serve', // build production
        config: {
          maxLogNumber: 1000,
          theme: 'dark'
        }
      }),
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
  }
}
