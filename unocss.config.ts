import { defineConfig } from 'unocss/vite'

import {
  presetWind,
  presetIcons,
  presetAttributify,
  presetUno,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons(),
    presetAttributify(),
    presetUno(),
  ],
  transformers: [
    transformerVariantGroup()
  ],
  theme: {
    colors: {
      grayText: '#7a7a7b'
    }
  },
  shortcuts: [
    {
      hover_rotate: 'hover:avatar-rotate',
      ease_dura: 'ease-linear duration-200'
    }
  ],
  rules: [
    ['text-nowrap', { 'white-space': 'nowrap' }]
  ]
})