import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        tugas29_1: "tugas29-1.html",
        tugas29_2: "tugas29-2.html",
        tugas29_3: "tugas29-3.html",
        tugas29_4: "tugas29-4.html",
        tugas29_5: "tugas29-5.html",
        tugas29_6: "tugas29-6.html"
      }
    }
  }
})
