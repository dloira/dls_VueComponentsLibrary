import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/#resolve-alias
const path = require('path');

// https://vitejs.dev/config/
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
      lib: {
          // This is the name of the package
          // (in package.json) and the name of the
          // global variable
          entry: path.resolve(__dirname, 'src/index.js'),
          name: 'dls_vue-components-library',
          fileName: (format) => `dls_vue-components-library.${format}.js`,
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['vue'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue',
          },
        },
      },
  },
  // This is required to use vue components
  // in the playground
  plugins: [vue()],
})