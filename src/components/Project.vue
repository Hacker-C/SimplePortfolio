<script setup lang="ts">
import { curFont } from '@/utils/info';

const projects = [
  {
    text: 'Mini Terminal - by Vue3',
    link: 'https://github.com/Hacker-C/vue3-terminal'
  },
  {
    text: 'Can you google - by Vue3',
    link: 'https://github.com/Hacker-C/vue3-terminal'
  },
  {
    text: 'My personal site - by Vue3',
    link: 'https://github.com/Hacker-C/mphy.me'
  }
]

</script>

<template >
  <div class="font-[Cute] mt-6 title-color">
    <h2>Projects</h2>
    <div>
      <ul class="text-[1.2em] text-color">
        <li v-for="{text, link} of  projects" class="ml-5 mt-3">
          <a class="a-link text-color" :href="link" target="_blank">
            {{text}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>