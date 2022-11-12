<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  title: string,
  description: string
  logo: string
  link: string
}>()
</script>

<template>
  <a 
    class="block rounded-md bg-gray-50 px-4 py-3 my-4 flex font-[Cute] cursor-pointer decoration-none hover:bg-[#f3f4f6] transition-colors decoration-none hover:bg-gray-100" 
    :href="link"
    target="_blank"
  >
    <div>
      <h3 class="text-md text-black text-gray-7 title-color">{{ title }}</h3>
      <p class="text-gray-text text-sm mt-2">{{ description }}</p>
    </div>
    <span class="flex-1"></span>
    <Icon 
      :icon="logo"
      width="47"
    />
  </a>
</template>
