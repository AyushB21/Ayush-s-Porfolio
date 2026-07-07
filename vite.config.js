import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If deploying to GitHub Pages under a project path, set base to '/<repo>/'.
// For Vercel or a custom domain, keep base '/'.
export default defineConfig({
  base: process.env.DEPLOY_TARGET === 'gh-pages' ? '/portfolio/' : '/',
  plugins: [react()],
  build: {
    target: 'es2019',
    cssMinify: true,
  },
});
