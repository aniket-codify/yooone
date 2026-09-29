import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Exact base path for https://aniket-codify.github.io/yooone/
  base: '/yooone/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  server: {
    port: 5173,
    host: true
  }
});
