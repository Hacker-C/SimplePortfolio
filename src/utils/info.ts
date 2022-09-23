import { useStorage, createSharedComposable } from '@vueuse/core'
import { ref } from 'vue'

const cnInfo = [
  '目前就读于 NCU，专业计算机科学与技术，专注 Vue3/JS/TS。',
  '喜欢 星际穿越/夜魔侠/命运石之门/三体/许嵩/周杰伦/毛不易。',
  '喜欢写写博客，对互联网充满热情，对编程和前端技术永葆好奇心。'
]
const enInfo = [
  'Currently studying at NCU(CN), majoring in Computer Science and Technology, focusing on Vue3 / JS / TS.',
  'Interested in Interstellar / Daredevil / Steins;Gate / Jay Chou / Vae / Mao Buyi.',
  'Like to write blogs, full of enthusiasm for the Internet, and always be curious about frontend develop.'
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
const curLang = ref(useSharedStorage('curLang', Lang.EN))

export const curInfo = $computed(() => (curLang.value === Lang.EN ? enInfo : cnInfo))

export const curFont = $computed(() => (curLang.value === Lang.EN ? Font.CUTE : Font.WENKAI))

export function setCurLang() {
  curLang.value = curLang.value === Lang.EN ? Lang.CN : Lang.EN
}
