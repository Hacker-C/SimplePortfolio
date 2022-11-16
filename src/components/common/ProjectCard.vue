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
    class="block rounded-md social-item-bg-color px-4 py-3 my-4 flex font-[Cute] cursor-pointer decoration-none hover:op-90 transition-colors decoration-none" 
    :href="link"
    target="_blank"
  >
    <div>
      <h3 class="title-color text-md">{{ title }}</h3>
      <p class="text-color text-sm mt-2">{{ description }}</p>
    </div>
    <span class="flex-1"></span>
    <Icon 
      :icon="logo"
      width="47"
    />
  </a>
</template>
