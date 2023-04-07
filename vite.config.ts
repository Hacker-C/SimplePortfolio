import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    Unocss()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src/components'),
      hooks: resolve(__dirname, 'src/hooks'),
      styles: resolve(__dirname, 'src/styles'),
      utils: resolve(__dirname, 'src/utils')
    },
    extensions: ['.js', '.json', '.tsx']
  }
})
