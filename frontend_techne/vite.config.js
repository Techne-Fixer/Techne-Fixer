// frontend_techne/vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: '/Techne-Fixer/', // Simply always use this for production builds
  
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
   server: {
    host: true, // Listen on all addresses including LAN
    port: 5173, // Default Vite port
    strictPort: false,
    allowedHosts: [
      '.ngrok-free.app',
      '.ngrok-free.dev',
      '.ngrok.io',
      'localhost',
    ],
    // If you want to access via network
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    }
  },
  // Preview server config (for production preview)
  preview: {
    host: true,
    port: 4173,
    allowedHosts: [
      '.ngrok-free.app',
      '.ngrok-free.dev',
      '.ngrok.io',
      'localhost',
    ]
  }
})