// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: '/zillionsolution-vite/', // Your repo name here
  plugins: [react()],
});

