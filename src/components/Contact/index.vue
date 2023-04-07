<script setup lang="ts">
import { ref } from 'vue';
import meta from '@/config/config.json'
import ContactItem, { IContactItem } from './ContactItem/index.vue'
import { useDark, useToggle } from '@vueuse/core'
import { Icon } from '@iconify/vue';


const items = meta.contacts as unknown as IContactItem[]

let currentIndex = ref(-1)
const toggle = (index: number) => {
  if (currentIndex.value === index) {
    currentIndex.value = -1
  } else {
    currentIndex.value = index
  }
}

const isDark = useDark()

const handleClick = () => {
  const toggleDark = useToggle(isDark)
  toggleDark()
}
</script>

<template>
  <ul class="flex flex-wrap list-none mt-5">
    <li v-for="(item, index) of items" :key="item.icon" class="font-[Cute] mr-2 mt-2 h-10 relative">
      <ContactItem :item="item" :currentIndex="currentIndex" :index="index" :onToggle="toggle" />
    </li>
    <li class="font-[Cute] mr-2 mt-2 h-10 relative">
      <a class="contact_item ease_dura" @click="handleClick">
        <Icon v-if="isDark" icon="lucide:sun" :width="22" class="ease_dura" />
        <Icon v-else icon="lucide:moon" :width="22" class="ease_dura" />
      </a>
    </li>
  </ul>
</template>
