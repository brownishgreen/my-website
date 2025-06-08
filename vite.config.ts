import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // 如果使用 Vue
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
});