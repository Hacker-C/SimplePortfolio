<script setup lang="ts">
const info = [
  '目前就读于 NCU，专业计算机科学与技术，专注 Vue3/JS/TS。',
  '喜欢 星际穿越/夜魔侠/命运石之门/三体/许嵩/周杰伦。',
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
