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

const { items } = defineProps<{
  items: {
    text: string,
    icon: string,
    link?: string
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
  <h2 class="mt-8 mb-5 font-[Cute] title-color">
    <slot></slot>
  </h2>
  <ul class="flex list-none pl-3">
    <li
      v-for="({text, icon, link}, index) of items"
      :key="icon"
      class="flex flex-column flex-wrap w-12 justify-center h-15 font-[Cute]">
      <div class="w-8 h-8">
        <Icon
          :icon="icon"
          class="w-[100%] h-[100%] cursor-pointer"
          :class="theme"
          @click="toggle(index)"
          :style="currentIndex === index ? style : ''" />
      </div>

      <template v-if="currentIndex === index">
        <a v-if="link !== ''" :href="link" target="_blank" class="text-color text-[.9em] text-nowrap">
            {{ text }}
        </a>
        <span class="text-[.9em] text-color" v-else>
          {{ text }}
        </span>
      </template>
    </li>
  </ul>
</template>
