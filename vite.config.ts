import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    Unocss({
      shortcuts: [
        {
          hover_rotate: 'hover:avatar-rotate'
        }
      ],
      rules: [
        [
          'avatar-rotate',
          {
            transform: 'rotate(666turn)',
            transition: 'all 60s cubic-bezier(0.34, 0, 0.84, 1) 1s'
          }
        ],
        [
          'text-nowrap',
          {
            'white-space': 'nowrap'
          }
        ]
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src/components'),
      hooks: resolve(__dirname, 'src/hooks'),
      styles: resolve(__dirname, 'src/styles'),
      utils: resolve(__dirname, 'src/utils')
    },
    extensions: ['.js', '.json', '.tsx'] // 使用路径别名时想要省略的后缀名
  }
})
