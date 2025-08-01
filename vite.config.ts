import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

import { getWifiIPv4 } from './ip'

// https://vite.dev/config/
export default defineConfig({
  /* For communicating with my phone over a WiFi network */
  server: {
    host: getWifiIPv4() || '192.168.43.119',
    port: 5094,
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          /* Setup iconify custom element */
          isCustomElement: tag => ['iconify-icon'].includes(tag)
        }
      }
    }),
    vueDevTools(),
    tailwindcss(),,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  optimizeDeps: {
      esbuildOptions: {
          loader: {
              ".js": "jsx"
          }
      }
  },
})
