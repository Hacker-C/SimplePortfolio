<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

export interface IContactItem {
    icon: string
    text?: string
    link?: string
    color?: string
    desc?: string
  }

export interface ContactProps {
  item: IContactItem
  index: number
  currentIndex: number
  onToggle: (val: number) => void
}

let { item, index, currentIndex, onToggle } = defineProps<ContactProps>()
const { text, icon, link, color, desc } = item

const toggle = () => {
  if (currentIndex === index) {
    currentIndex = -1
  } else {
    currentIndex = index
  }
}

const iconBgColor = ref('')
const handleMouseOver = (val: string) => iconBgColor.value = val
const handleMouseLeave = (val: string) => iconBgColor.value = val
</script>

<template>
  <a
    class="block px-3 py-2 item-bg-color decoration-none flex justify-center items-center rounded-md cursor-pointer title-color ease-linear hover:text-white duration-200"
    target="_blank"
    :href="link"
    :style="{ backgroundColor: iconBgColor }"
    @mouseover="() => handleMouseOver(color || '')" 
    @mouseleave="() => handleMouseLeave('')"
    @click="() => onToggle(index)"
  >
    <Icon :icon="icon" :width="icon.includes('skull') ? 19 : 22" />
    <span v-if="desc" class="ml-1 text-sm">{{ desc }}</span>
  </a>
  <template v-if="!link">
    <div v-show="index === currentIndex" class="text-sm mt-1 w-1 text-gray-text">
      {{ text }}
    </div>
  </template>
</template>
