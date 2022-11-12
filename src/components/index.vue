<script setup lang="ts">
import Plum from '@/components/main/Plum.vue'
import Header from '@/components/header/Header.vue'
import Info from '@/components/main/Info.vue'
import Concact from '@/components/main/Contact.vue'
import Writing from '@/components/main/Writing.vue'
import Project from '@/components/main/Project.vue'
import Footer from '@/components/footer/Footer.vue'
import isNight from '@/utils/theme'

const textColor = $computed(() => (isNight.value ? '#bbb' : '121314'))
const titleColor = $computed(() => (isNight.value ? '#fff' : '#000'))
</script>

<template>
  <Header />
  <div class="lg:px-[20%] md:px-[15%] pb-[5%] sm:px-[10%] xs:px-[5%] px-[5%]">
    <Info />
    <Project />
    <Writing />
    <Concact />
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
