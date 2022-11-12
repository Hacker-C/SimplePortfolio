<script setup lang="ts">
import { Icon } from '@iconify/vue';
import ProjectCard from './common/ProjectCard.vue'

const projects = [
  {
    title: 'Mini Terminal',
    description: 'A mini terminal with simple commands by Vue3',
    link: 'https://github.com/Hacker-C/vue3-terminal',
    logo: 'twemoji:laptop'
  },
  {
    title: 'Can you google',
    description: 'A toy app to tell you how to google',
    link: 'https://github.com/Hacker-C/can-you-google',
    logo: 'twemoji:thinking-face'

  },
  {
    title: 'My personal site',
    description: 'A personal site built by vue3',
    link: 'https://github.com/Hacker-C/mphy.me',
    logo: 'twemoji:man-technologist-medium-skin-tone'
  }
]

</script>

<template>
  <div class="mt-5">
    <div class="flex">
      <h2 class="font-[Cute] my-5 title-color">Projects</h2>
      <span class="flex-1"></span>
      <a href="https://github.com/Hacker-C" target="_blank" class="decoration-none text-gray-7">
        <Icon icon="akar-icons:arrow-up-right" width="30" class="mt-5"/>
      </a>
    </div>
    <div>
      <ProjectCard
        v-for="item of projects"
        :title="item.title"
        :description="item.description"
        :link="item.link"
        :logo="item.logo"
      />
    </div>
  </div>

</template>