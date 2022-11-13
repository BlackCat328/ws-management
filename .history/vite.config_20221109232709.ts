import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import styleImport, { A } from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
