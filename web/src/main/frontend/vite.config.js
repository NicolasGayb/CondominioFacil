import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8082', // onde o Spring Boot roda
        changeOrigin: true,
        secure: false
      }
    }
  }
})