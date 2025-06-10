<script setup lang="ts">
// onMounted removed
import meta from "~/config.json" // Path updated
import { useHead } from "#imports" // Or rely on auto-import

defineOptions({
  name: "Info"
})

// Set document title using useHead for Nuxt 3
useHead({
  title: meta.profile.name
})
</script>

<template>
  <div class="mt-20 text-[#121314] dark:text-white ease_dura font-[Cute] font-400 ">
    <h1 class="sm:text-5xl text-4xl">{{ meta.greet }}</h1>
    <h2 class="sm:text-4xl text-3xl mt-4">
      I'm {{ meta.profile.name }}.
    </h2>
  </div>

  <div class="mt-4 list-none ">
    <ul>
      <li class="
            list-none font-[Cute] font-light
            text-2xl text-[#121314] dark:text-white ease_dura
          " v-for="text in meta.profile.desc" :key="text">
        {{ text }}
      </li>
    </ul>
  </div>
</template>
