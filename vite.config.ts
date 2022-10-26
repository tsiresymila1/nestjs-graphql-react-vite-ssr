import { defineConfig } from 'vite';
// import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react'; 
import { resolve } from 'path';

export default defineConfig({
  publicDir: resolve(__dirname, 'client', 'public'),
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx'],
        ],
      },
      jsxRuntime: "classic",
    }),
  ],
  build: {
    minify: true,
    emptyOutDir: false, 
  },
  ssr: {
    format: 'cjs',
  },
  legacy: {
    buildSsrCjsExternalHeuristics: true,
  },
});
