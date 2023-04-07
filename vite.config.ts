import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { presetWind } from 'unocss'

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    Unocss({
      presets: [
        presetWind()
      ],
      theme: {
        colors: {
          grayText: '#7a7a7b'
        }
      },
      shortcuts: [
        {
          hover_rotate: 'hover:avatar-rotate',
          ease_dura: 'ease-linear duration-300'
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
    extensions: ['.js', '.json', '.tsx']
  }
})
