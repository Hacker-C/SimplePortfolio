<script setup lang="ts">
const info = [
  '目前就读于 NCU，专业计算机科学与技术，专注 Vue3/JS/TS。',
  '爱好跑步，打羽毛球，看剧，看电影，听音乐，读科幻小说。',
  '喜欢写写博客，对互联网充满热情，对编程和计算机技术永葆好奇心。'
]
</script>

<template>
  <div class="flex justify-center pl-5 pr-5">
    <ul class="text-color w-150">
      <li class="list-none lh-10 text-[1.3em] font-[KaiWen]" v-for="item of info">{{ item }}</li>
    </ul>
  </div>
</template>
