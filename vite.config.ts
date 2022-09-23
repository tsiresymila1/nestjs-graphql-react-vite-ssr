import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

defineConfig({
  publicDir: resolve(__dirname, 'client', 'public'),
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx'],
        ],
      },
      jsxRuntime: 'classic',
    }),
  ],
  build: {
    minify: false,
  },
  resolve: {
    alias: {
      // @ts-ignore
      '@': fileURLToPath(new URL('client', import.meta.url)), 
    },
  },
});
