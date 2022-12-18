<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  title: string,
  description: string
  logo: string
  link: string
  tags: string[]
}>()
</script>

<template>
  <a 
    class="block rounded-md social-item-bg-color px-4 py-3 my-4 flex font-[Cute] cursor-pointer decoration-none op-90 transition-colors decoration-none ease-linear duration-200" 
    :href="link"
    target="_blank"
  >
    <div>
      <div class="flex items-center flex-wrap">
        <h3 class="title-color text-md mr-2">{{ title }}</h3>
        <div class="h-8 flex items-center">
          <span class="border-1 rounded text-sm h-4 leading-4 px-0.5 mr-2 title-color" v-for="tag of tags">{{ tag }}</span>
        </div>
      </div>
      <p class="text-color text-sm mt-2">{{ description }}</p>
    </div>
    <span class="flex-1"></span>
    <Icon 
      :icon="logo"
      width="47"
    />
  </a>
</template>
