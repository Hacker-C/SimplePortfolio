<script setup lang="ts">
import { Icon } from '@iconify/vue'
import isNight from '@/utils/theme'

const icon = $computed(() => (isNight.value ? 'moon' : 'sun'))

const toggle = () => {
  isNight.value = !isNight.value
}
</script>

<template>
  <header class="text-center title-color fixed top-0 w-[100%]">
    <div class="flex p-2">
      <div class="flex-1"></div>
      <Icon
        class="cursor-pointer w-5 h-5"
        :icon="`charm:${icon}`"
        @click="toggle"
        :style="{ color: isNight ? '#fff' : '#000' }" />
    </div>
  </header>
</template>
