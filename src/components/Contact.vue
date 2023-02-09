<script setup lang="ts">

import SocialItem from './common/SocialItem.vue'

const contacts = [
  { 
    icon: 'akar-icons:github-fill', 
    text: 'Hacker-C',
    link: 'https://github.com/Hacker-C',
    color: 'hover:bg-[#374151]' },
  {
    icon: 'akar-icons:twitter-fill',
    text: 'MurphyChen',
    link: 'https://twitter.com/MurphyChen233',
    color: 'hover:bg-[#00acee]'
  },
  {
    icon: 'simple-icons:stackoverflow',
    text: 'MurphyChen',
    link: 'https://stackoverflow.com/users/12974414/murphychen',
    color: 'hover:bg-[#f48225]'
  },
  {
    icon: 'bx:book-bookmark',
    text: 'blog',
    link: 'https://blog.mphy.top',
    color: 'hover:bg-[#3681e6]',
    desc: 'blog'
  },
  {
    icon: 'fa6-solid:book-skull',
    text: 'idkjs',
    link: 'https://idkjs.mphy.top/',
    color: 'hover:bg-[#009048]',
    desc: 'idkjs'
  },
  {
    icon: 'ant-design:zhihu-circle-filled',
    text: 'MurphyChen',
    link: 'https://www.zhihu.com/people/mphyc',
    color: 'hover:bg-[#056de8]'
  },
  {
    icon: 'ri:bilibili-fill',
    text: 'MurphyChen__',
    link: 'https://space.bilibili.com/434947088',
    color: 'hover:bg-[#fb7299]'
  },
  { 
    icon: 'ri:qq-line', 
    text: '1507559148', 
    color: 'hover:bg-[#3abcff]'
  },
  { 
    icon: 'ri:wechat-2-line', 
    text: 'CG1507559148', 
    color: 'hover:bg-[#07c160]'
  }
]
</script>

<template>
  <SocialItem :items="contacts" />
</template>
