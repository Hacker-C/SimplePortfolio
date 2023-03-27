<script setup lang="ts">
import meta from '@/config/config'
</script>

<template>
  <footer class="mt-5 flex items-center font-[Robot]">
    <span class="text-color">&copy; 2022-PRESENT {{ meta.profile.name }}</span>
    <span class="mx-2 text-color">|</span>
    <a :href="`${meta.source}`" target="_blank" class="text-color decoration-none">
      Source
    </a>
  </footer>
</template>