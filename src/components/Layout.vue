<script setup lang="ts">
import Plum from '@/components/common/Plum.vue'
import Header from '@/components/Header.vue'
import Info from '@/components/Info.vue'
import Concact from '@/components/Contact.vue'
import Project from '@/components/Project.vue'
import Footer from '@/components/Footer.vue'
import isNight from '@/utils/theme'
import Theme from '@/components/Theme.vue'
</script>

<template>
  <Header />
  <div class="lg:px-[20%] md:px-[15%] pb-[5%] sm:px-[10%] xs:px-[5%] px-[5%]">
    <Theme>
      <Info />
      <Concact />
      <Project />
      <Footer />
      <Plum />
    </Theme>
  </div>
</template>

<style>

</style>
