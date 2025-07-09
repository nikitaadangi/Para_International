import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace "nikitaadangi" and "Para_International" with your actual GitHub username and repo name
export default defineConfig({
  base: '/Para_International/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: { name?: string }) => {
          const name = assetInfo.name || '';
          if (name.endsWith('.png') || name.endsWith('.jpg') || name.endsWith('.jpeg')) {
            return 'images/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});
