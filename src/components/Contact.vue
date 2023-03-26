<script setup lang="ts">
import meta from '../../config'
import SocialItem from './common/SocialItem.vue'

</script>

<template>
  <SocialItem :items="meta.contacts as any" />
</template>
