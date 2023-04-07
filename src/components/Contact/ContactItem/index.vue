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
  index?: number
  currentIndex?: number
  onToggle?: (val: number) => void
  onClick?: () => void
}

let { item, index, currentIndex, onToggle, onClick } = defineProps<ContactProps>()
const { text, icon, link, color, desc } = item

const iconBgColor = ref('')
const handleMouseOver = (val: string) => iconBgColor.value = val
const handleMouseLeave = (val: string) => iconBgColor.value = val
</script>

<template>
  <a
    class="block px-3 py-2 item-bg-color decoration-none flex justify-center items-center rounded-md cursor-pointer dark:text-white text-black dark:bg-[#373738] bg-[#f5f6f7] hover:text-white ease-linear duration-200"
    target="_blank"
    :href="link"
    :style="{ backgroundColor: iconBgColor}"
    @mouseover="() => handleMouseOver(color || '')" 
    @mouseleave="() => handleMouseLeave('')"
    @click="onToggle ? onToggle?.(index!) : onClick?.()"
  >
    <Icon :icon="icon" :width="icon.includes('skull') ? 19 : 22" />
    <span v-if="desc" class="ml-1 text-sm">{{ desc }}</span>
  </a>
  <template v-if="!link">
    <div v-show="index === currentIndex" class="text-sm dark:text-white text-black ease_dura mt-1 w-1 text-gray-text">
      {{ text }}
    </div>
  </template>
</template>
