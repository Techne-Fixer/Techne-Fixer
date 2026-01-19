// frontend_techne/vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  // --- ADD THIS BASE PROPERTY ---
  base: process.env.NODE_ENV === 'production'
    ? '/Techne-Fixer/' // This MUST match your GitHub repository name including leading and trailing slashes
    : '/',
  // --- END ADDITION ---

  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
