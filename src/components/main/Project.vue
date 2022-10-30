<script setup lang="ts">
import LinksShow from '../common/LinksShow.vue'

const projects = [
  {
    text: 'Mini Terminal',
    link: 'https://github.com/Hacker-C/vue3-terminal'
  },
  {
    text: 'Can you google',
    link: 'https://github.com/Hacker-C/vue3-terminal'
  },
  {
    text: 'My personal site',
    link: 'https://github.com/Hacker-C/mphy.me'
  }
]

</script>

<template >
  <LinksShow :items="projects">
    <template #default>
      <h2>Projects</h2>
    </template>
  </LinksShow>
</template>