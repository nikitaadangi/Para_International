import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace "nikitaadangi" and "Para_International" with your actual GitHub username and repo name
export default defineConfig({
  base: '/Para_International/',
  plugins: [react()],
});
