import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves the site from /pridepool/; locally it runs at /.
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/pridepool/' : '/',
  plugins: [react(), tailwindcss()],
}));
