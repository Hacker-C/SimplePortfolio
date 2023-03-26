<script setup lang="ts">
import Plum from '@/components/common/Plum.vue'
import Info from '@/components/Info.vue'
import Concact from '@/components/Contact.vue'
import Project from '@/components/Project.vue'
import Footer from '@/components/Footer.vue'
import Theme from '@/components/Theme.vue'
</script>

<template>
  <div class="lg:px-[20%] md:px-[15%] pb-[5%] sm:px-[10%] xs:px-[5%] px-[15px] min-w-[300px]">
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
