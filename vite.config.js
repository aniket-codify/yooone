import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub repository is yooone (https://aniket-codify.github.io/yooone/)
  base: '/yooone/',
  server: {
    port: 5173,
    host: true
  }
});
