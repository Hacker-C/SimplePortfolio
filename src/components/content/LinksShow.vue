<script setup lang="ts">

defineProps<{
  items: {
    text: string,
    link: string
  }[]
}>()

</script>

<template >
  <div class="font-[Cute] mt-8 title-color">
    <slot></slot>
    <div>
      <ul class="text-[1.2em] text-color pl-1">
        <li v-for="{text, link} of items" class="ml-5 mt-3">
          <a class="a-link text-color" :href="link" target="_blank">
            {{text}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>