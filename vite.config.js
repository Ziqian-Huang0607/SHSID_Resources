import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resources: resolve(__dirname, 'resources.html'),
        about: resolve(__dirname, 'about.html'),
        contribute: resolve(__dirname, 'contribute.html'),
      },
    },
  },
});