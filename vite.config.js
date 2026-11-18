import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), viteSingleFile({ outputFileName: 'index.html' })],
  base: './',
  build: {
    assetsInlineLimit: 20_000_000,
    rollupOptions: { input: 'app.html' },
  },
});
