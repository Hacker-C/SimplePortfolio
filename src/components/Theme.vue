<script setup lang="ts">
import isNight from '@/utils/theme'

const textColor = $computed(() => (isNight.value ? '#bbb' : '#121314'))
const titleColor = $computed(() => (isNight.value ? '#fff' : '#121314'))
const itemColor = $computed(() => isNight.value ? '#373738' : '#f5f6f7')

const baseColor = $computed(() => isNight.value ? '#373738' : '#f5f6f7')
const hoverColor = $computed(() => isNight.value ? '#4c4c4c' : '#eeeeee')
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
