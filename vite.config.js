import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Root base path for custom domain https://yooone.in/
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  server: {
    port: 5173,
    host: true
  }
});
