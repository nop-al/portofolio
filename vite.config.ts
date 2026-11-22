import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/portofolio', // pakai '/' kalau nama repo-nya username.github.io
  base: '/portofolio',
})  