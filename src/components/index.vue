<script setup lang="ts">
import Plum from 'components/Plum.vue'
import Header from 'components/Header.vue'
import Info from 'components/Info.vue'
import Concact from 'components/Contact.vue'
import isNight from 'utils/storage'

const textColor = $computed(() => (isNight.value ? '#bbb' : '#555'))
const titleColor = $computed(() => (isNight.value ? '#fff' : '#000'))
</script>

<template>
  <Header />
  <Info />
  <Concact />
  <Plum />
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
