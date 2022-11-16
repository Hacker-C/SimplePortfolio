<script setup lang="ts">
import isNight from '@/utils/theme'

const textColor = $computed(() => (isNight.value ? '#bbb' : '#121314'))
const titleColor = $computed(() => (isNight.value ? '#fff' : '#000'))
const itemColor = $computed(() => isNight.value ? '#373738' : '#f9fafb')

const baseColor = $computed(() => isNight.value ? '#373738' : '#f9fafb')
const hoverColor = $computed(() => isNight.value ? '#4c4c4c' : '#f3f4f6')
</script>

<template>
  <slot></slot>
</template>

<style>
* {
  background-color: transparent;
}
.text-color {
  color: v-bind(textColor);
}
.title-color {
  color: v-bind(titleColor);
}
.item-bg-color {
  background: v-bind(itemColor);
}
.social-item-bg-color {
  background: v-bind(baseColor);
}
.social-item-bg-color:hover {
  background: v-bind(hoverColor);
}
</style>
