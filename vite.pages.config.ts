import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath} from 'node:url';
export default defineConfig({
  root:fileURLToPath(new URL('./pages',import.meta.url)),
  base:'/love-os/',
  publicDir:fileURLToPath(new URL('./public',import.meta.url)),
  plugins:[react()],
  resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},
  define:{'process.env.NEXT_PUBLIC_STATIC_MODE':JSON.stringify('true'),'process.env.NEXT_PUBLIC_BASE_PATH':JSON.stringify('/love-os/')},
  build:{outDir:fileURLToPath(new URL('./dist-pages',import.meta.url)),emptyOutDir:true},
});
