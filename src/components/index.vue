<script setup lang="ts">
import Plum from 'components/Plum.vue'
import Header from 'components/Header.vue'
import Info from 'components/Info.vue'
import Concact from 'components/Contact.vue'
import Project from './Project.vue'
import isNight from '@/utils/theme'

const textColor = $computed(() => (isNight.value ? '#bbb' : '121314'))
const titleColor = $computed(() => (isNight.value ? '#fff' : '#000'))
</script>

<template>
  <Header />
  <div class="pl-[15%] pr-[15%] pb-[5%]">
    <Info />
    <Concact />
    <Project />
    <Plum />
  </div>
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
</style>
