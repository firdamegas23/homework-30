import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        tugas29_1: "tugas29-1.html",
        tugas29_2: "tugas29-2.html"
      }
    }
  }
})
