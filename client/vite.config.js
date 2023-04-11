import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'css',
    rollupOptions: {
      plugins: [
        // ...otros complementos que estés utilizando
        new CssMinimizerPlugin().minimize,
      ],
    },
  },
})