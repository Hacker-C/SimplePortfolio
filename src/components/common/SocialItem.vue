<script setup lang="ts">
import { Icon } from '@iconify/vue'
import isNight from '@/utils/theme'

let theme = $computed(() =>
  isNight.value ? 'color-gray hover-color-white' : 'color-gray-500 hover-color-black'
)

let style = $computed(() => {
  return {
    color: isNight.value ? 'white' : 'black'
  }
})

defineProps<{
  items: {
    text: string,
    icon: string,
    link?: string,
    color?: string
    desc?: string
  }[]
}>()

let currentIndex = $ref(-1)
const toggle = (index: number) => {
  if (currentIndex === index) {
    currentIndex = -1
  } else {
    currentIndex = index
  }
}
</script>

<template>
  <ul class="flex flex-wrap list-none mt-5">
    <li
      v-for="({text, icon, link, color, desc}, index) of items"
      :key="icon"
      class="font-[Cute] mr-2 mt-2 h-10 relative"
    >
      <a 
        class="block px-3 py-2 item-bg-color decoration-none flex justify-center items-center rounded-md cursor-pointer text-color hover:text-white ease-linear duration-200"
        :class="color"
        :href="link"
        target="_blank"
        @click="toggle(index)"
      >
        <Icon
          :icon="icon"
          :width="icon.includes('skull') ? 19 : 22"
        />
        <span v-if="desc" class="ml-1 text-sm">{{ desc }}</span>
      </a>
      <template v-if="!link">
        <div v-show="index === currentIndex" class="text-sm mt-1 w-1 text-gray-text">
          {{text}}
        </div>
      </template>
     
    </li>
  </ul>
</template>
