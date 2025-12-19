import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-ibmetro': {
        target: 'https://horaoficial.ibmetro.gob.bo:9191',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-ibmetro/, '')
      }
    }
  }
})