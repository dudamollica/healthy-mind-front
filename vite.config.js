import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createServer } from 'vite';
import dotenv from 'dotenv';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configuração do servidor Vite
  },
})
