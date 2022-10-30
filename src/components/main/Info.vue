<script setup lang="ts">
import { curInfo, curFont } from '@/utils/info'
</script>

<template>
  <div class="select-none mt-5">
    <img id="avatar" class="rounded-full w-20 b-1 b-[#ccc] hover_rotate" src="/avatar.jpg" alt="" />
  </div>
  <div class="title-color font-[Cute] font-400">
    <h1 class="text-13">Hello.</h1>
    <h2 class="text-7 mt-4">
      My name is Murphy Chen.
    </h2>
  </div>

  <span class="w-0 h-0 font-[Wenkai]"></span>
  <span class="w-0 h-0 font-[Cute]"></span>
  <div class="mt-4">
    <ul class="text-color">
      <li
        class="list-none lh-10 text-[1.3em] font-extralight"
        :class="`font-[${curFont}]`"
        v-for="item of curInfo">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
