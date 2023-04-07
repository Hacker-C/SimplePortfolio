<script setup lang="ts">
import meta from '@/config/config'
</script>

<template>
  <footer class="mt-5 flex items-center font-[Robot] dark:text-white text-black ease_dura">
    <span class="">&copy; 2022-PRESENT {{ meta.profile.name }}</span>
    <span class="mx-2 text-color">|</span>
    <a :href="`${meta.source}`" target="_blank" class="dark:text-white text-black ease_dura decoration-none">
      Source
    </a>
  </footer>
</template>