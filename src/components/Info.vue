<script setup lang="ts">
import { curInfo, curFont } from '@/utils/info'
</script>

<template>
  <div class="select-none m-5 text-center">
    <img id="avatar" class="rounded-full w-25 b-1 b-[#ccc] hover_rotate" src="/avatar.jpg" alt="" />
  </div>
  <h1 class="m-2 title-color font-[Cute] font-400 text-9 text-center">Hello, I'm MurphyChen.</h1>
  <div class="flex justify-center pl-5 pr-5">
    <ul class="text-color w-150">
      <li
        class="list-none lh-10 text-[1.3em] font-light"
        :class="`font-[${curFont}]`"
        v-for="item of curInfo">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
