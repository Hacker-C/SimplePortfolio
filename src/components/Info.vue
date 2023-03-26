<script setup lang="ts">
import { onMounted } from 'vue';
import meta from '../../config'
onMounted(() => {
  document.title = meta.profile.name
})
</script>

<template>
  <div class="mt-20 title-color font-[Cute] font-400 ease_dura">
    <h1 class="sm:text-5xl text-4xl">{{ meta.greet }}</h1>
    <h2 class="sm:text-4xl text-3xl mt-4">
      I'm {{ meta.profile.name }}.
    </h2>
  </div>

  <div class="mt-4 list-none ease_dura">
    <ul>
      <li class="
            list-none font-[Cute] font-light
            text-2xl title-color
          " v-for="text in meta.profile.desc">
        {{ text }}
      </li>
    </ul>
  </div>
</template>
