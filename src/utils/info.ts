import { useStorage, createSharedComposable } from '@vueuse/core'
import { ref } from 'vue'

const cnInfo = [
  '目前就读于南昌大学，专业计算机科学与技术，专注 Vite/React/Vue/JS/TS/。',
  '喜欢一切和科幻有关的事情，喜欢 星际穿越/夜魔侠/命运石之门/三体/许嵩/周杰伦/毛不易。',
  '喜欢写技术博客，对互联网充满热情，对编程和前端技术永葆好奇心。'
]
const enInfo = [
  'Studying at NCU(CN), majoring in CS, focusing on Vite / React / Vue / JS / TS.',
  'Interested in Sci-Fi / Movies / Reading / Music / Vae / Mao Buyi.',
  'Be full of enthusiasm for The Internet and Frontend technology.'
]

enum Lang {
  EN = 'en',
  CN = 'cn'
}

enum Font {
  CUTE = 'Cute',
  WENKAI = 'Wenkai'
}

const useSharedStorage = createSharedComposable(useStorage)
export const curLang = ref(useSharedStorage('curLang', Lang.EN))

export const curInfo = $computed(() => (curLang.value === Lang.EN ? enInfo : cnInfo))

export const curFont = $computed(() => (curLang.value === Lang.EN ? Font.CUTE : Font.WENKAI))

export function setCurLang() {
  curLang.value = curLang.value === Lang.EN ? Lang.CN : Lang.EN
}
