import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'css',
    rollupOptions: {
      plugins: [
        // ...otros complementos que estés utilizando
        minify(),
      ],
    },
  },
})
