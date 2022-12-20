<script setup lang="ts">
import { curInfo, curFont } from '@/utils/info'
</script>

<template>
  <div class="select-none mt-5">
    <img id="avatar" class="rounded-full w-20 b-1 b-[#ccc] hover_rotate" src="/avatar.jpg" alt="" />
  </div>
  <div class="title-color font-[Cute] font-400 ease_dura">
    <h1 class="text-4xl">Hello,</h1>
    <h2 class="text-3xl mt-4">
      I'm Murphy Chen.
    </h2>
  </div>

  <div class="mt-4">
    <ul class="text-color">
      <li
        class="list-none lh-10 text-lg font-extralight ease_dura"
        :class="`font-[${curFont}]`"
        v-for="item of curInfo">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
