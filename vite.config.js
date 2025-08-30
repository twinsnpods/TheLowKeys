import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/TheLowKeys/',
  plugins: [react(), tailwindcss(),],
  server: {
    open: true,
    port: 3001,
  },
})
