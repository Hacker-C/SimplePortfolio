<script setup lang="ts">
import LinksShow from './common/LinksShow.vue'

const projects = [
  {
    text: 'I Dont Know JavaScript',
    link: 'https://idk-js.mphy.top'
  },
  {
    text: 'My Blog',
    link: 'https://blog.mphy.top'
  },
  {
    text: 'My Notes',
    link: 'https://docs.mphy.top'
  }
]

</script>

<template >
  <LinksShow :items="projects">
    <template #default>
      <h2>Writing</h2>
    </template>
  </LinksShow>
</template>