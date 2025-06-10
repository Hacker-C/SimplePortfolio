<script setup lang="ts">
import Plum from "~/components/Plum/index.vue"
import Info from "~/components/Info/index.vue"
import Concact from "~/components/Contact/index.vue" // Note: Original had "Concact", keeping as is for now.
import Project from "~/components/Project/index.vue"
import Footer from "~/components/Footer/index.vue"

defineOptions({
  name: "HomePage" // Renaming from Layout to HomePage for clarity
})
</script>

<template>
  <div class="lg:px-[20%] md:px-[15%] pb-[5%] sm:px-[10%] xs:px-[5%] px-[15px] min-w-[300px]">
    <Info />
    <Concact />
    <Project />
    <Footer />
    <Plum />
  </div>
</template>

<style>
/* Styles from src/layout/index.vue can be added here if any were present */
</style>
