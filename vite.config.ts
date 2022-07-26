import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  plugins: [preact()],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})
