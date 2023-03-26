<script setup lang="ts">
import { ref } from 'vue';
import meta from '../../config'
import ContactItem, { IContactItem } from './common/ContactItem.vue'

const items = meta.contacts as unknown as  IContactItem[]

let currentIndex = ref(-1)
const toggle = (index: number) => {
  if (currentIndex.value === index) {
    currentIndex.value = -1
  } else {
    currentIndex.value = index
  }
}
</script>

<template>
  <ul class="flex flex-wrap list-none mt-5">
    <li
      v-for="(item, index) of items"
      :key="item.icon"
      class="font-[Cute] mr-2 mt-2 h-10 relative"
    >
      <ContactItem :item="item" :currentIndex="currentIndex" :index="index" :onToggle="toggle"/>
    </li>
  </ul>
</template>
