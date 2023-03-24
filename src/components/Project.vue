<script setup lang="ts">
import { Icon } from '@iconify/vue';
import ProjectCard from './common/ProjectCard.vue'

const projects = [
  {
    title: 'Mini Terminal',
    description: 'A mini terminal with simple commands',
    link: 'https://term.mphy.me',
    logo: 'twemoji:laptop',
    tags: ['vue', 'tailwindcss']
  },
  {
    title: 'React 60s View',
    description: '每天 60 秒读懂世界',
    link: 'https://60s.mphy.me',
    logo: 'twemoji:world-map',
    tags: ['react', 'deno']
  },
  {
    title: '100 React Apps',
    description: 'Try to finish 100 apps with React',
    link: 'https://100.mphy.me',
    logo: 'twemoji:rocket',
    tags: ['react', 'unocss']
  },
  {
    title: 'Can You Google',
    description: 'A toy app to tell you how to google',
    link: 'https://google.mphy.me',
    logo: 'twemoji:thinking-face',
    tags: ['vue', 'scss']
  },
  {
    title: 'Your Personal Site',
    description: 'A personal page',
    link: 'https://github.com/Hacker-C/mphy.me',
    logo: 'twemoji:man-technologist-medium-skin-tone',
    tags: ['vue', 'unocss']
  },
  {
    title: 'WZRY Nodejs Spider',
    description: '爬取王者荣耀官网英雄技能信息',
    link: 'https://github.com/Hacker-C/wzry-skill-spider',
    logo: 'twemoji:spider-web',
    tags: ['nodejs']
  }
]

</script>

<template>
  <div class="mt-5">
    <div class="flex">
      <h2 class="font-[Cute] mt-5 title-color text-3xl">Projects</h2>
      <span class="flex-1"></span>
      <a href="https://github.com/Hacker-C" target="_blank" class="decoration-none text-gray-7">
        <Icon icon="akar-icons:arrow-up-right" width="30" class="mt-5"/>
      </a>
    </div>
    <div class="flex flex-wrap justify-between">
      <ProjectCard
        v-for="item of projects"
        :title="item.title"
        :description="item.description"
        :link="item.link"
        :logo="item.logo"
        :tags="item.tags"
      />
    </div>
  </div>

</template>