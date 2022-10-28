<script setup lang="ts">

import ItemsShow from './common/ItemsShow.vue'

const contacts = [
  { icon: 'akar-icons:github-fill', text: 'Hacker-C', link: 'https://github.com/Hacker-C' },
  {
    icon: 'fa6-brands:square-twitter',
    text: 'MurphyChen',
    link: 'https://twitter.com/MurphyChen233'
  },
  { icon: 'ri:qq-line', text: '1507559148', link: '' },
  { icon: 'ri:wechat-2-line', text: 'CG1507559148', link: '' },
  {
    icon: 'ant-design:zhihu-circle-filled',
    text: 'MurphyChen',
    link: 'https://www.zhihu.com/people/mphyc'
  }
  // { icon: 'fluent:book-question-mark-24-filled', text: 'IDKJS', link: 'http://idk-js.mphy.top' },
  // { icon: 'bx:book-bookmark', text: 'Notebook', link: 'http://docs.mphy.top' },
  // { icon: 'ion:terminal', text: 'Terminal', link: 'http://term.mphy.me' }
]
</script>

<template>
  <ItemsShow :items="contacts">
    <template v-slot>Contacts</template>
  </ItemsShow>
</template>
