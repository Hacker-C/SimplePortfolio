<script setup lang="ts">
import Plum from '@/components/common/Plum.vue'
import Header from '@/components/Header.vue'
import Info from '@/components/Info.vue'
import Concact from '@/components/Contact.vue'
import Project from '@/components/Project.vue'
import Footer from '@/components/Footer.vue'
import isNight from '@/utils/theme'

const textColor = $computed(() => (isNight.value ? '#bbb' : '121314'))
const titleColor = $computed(() => (isNight.value ? '#fff' : '#000'))
</script>

<template>
  <Header />
  <div class="lg:px-[20%] md:px-[15%] pb-[5%] sm:px-[10%] xs:px-[5%] px-[5%]">
    <Info />
    <Concact />
    <Project />
    <Footer />
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
