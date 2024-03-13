<style scoped></style>

<template>
  <div class="flex flex-col grow">
    <MenuBar></MenuBar>
    <div class="p-4 h-2 grow overflow-y-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">

import { provide, watchEffect, ref } from 'vue'
import { CartItem } from './types'
import MenuBar from './components/MenuBar.vue'
import { useHotKeys } from './composables/useHotKeys';

const cartItems = ref<CartItem[]>([])

provide('items', cartItems)

const { keys, keyboardEvent } = useHotKeys()

watchEffect(() => {
  if (["k", "Control"].every(k => keys.value.has(k))) {
    console.log("You pressed k and Control")
    keyboardEvent.value?.preventDefault()
  }
})

</script>
