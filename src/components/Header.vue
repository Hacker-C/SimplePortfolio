<script setup lang="ts">
import { Icon } from '@iconify/vue'
import isNight from '@/utils/storage'

const icon = $computed(() => (isNight.value ? 'moon' : 'sun'))

const toggle = () => {
  isNight.value = !isNight.value
}
</script>

<template>
  <header class="text-center title-color">
    <div class="flex flex-row-reverse p-2 pr-3">
      <Icon
        class="cursor-pointer w-5 h-5"
        :icon="`charm:${icon}`"
        @click="toggle"
        :style="{ color: isNight ? '#fff' : '#000' }"
      />
    </div>
    <div class="select-none m-5">
      <img class="rounded-full w-25 b-1 b-[#ccc]" src="/avatar.jpg" alt="" />
    </div>
    <h1 class="m-2 title-color font-[cute] font-400 text-9">Hello, I'm MurphyChen.</h1>
  </header>
</template>
