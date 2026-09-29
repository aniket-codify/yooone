import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base path for GitHub Pages compatibility (works on any repo subpath or custom domain)
  base: './',
  server: {
    port: 5173,
    host: true
  }
});
