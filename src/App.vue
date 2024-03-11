
<style scoped>
</style>

<template>
  <div class="flex flex-col grow">
    <MenuBar></MenuBar>
    <div class="p-4 h-2 grow overflow-y-auto">
        <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">

import { reactive, provide } from 'vue';
import { CartItem } from './types'
import MenuBar from './components/MenuBar.vue'

const cartItems = reactive<CartItem[]>([])

provide('items', cartItems)

</script>
