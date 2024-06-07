import path from "node:path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from "dotenv"
 
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define:{
    'process.env': process.env
  },
  server: {
    host: process.env.FRONTEND_URL,
    port: parseInt(process.env.FRONTEND_URL_PORT || "5173")
  }
})
