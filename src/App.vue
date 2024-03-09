
<style scoped>
</style>

<template>
  <div class="flex flex-col grow">
    <MenuBar></MenuBar>
    <div class="p-4 h-2 grow overflow-y-auto">
      <h1 class="text-6xl text-center mb-8 box-content uppercase font-bold select-none">Products</h1>
      <ProductsGallery></ProductsGallery>
    </div>
  </div>
</template>

<script setup lang="ts">

import MenuBar from './components/MenuBar.vue'
import ProductsGallery from './components/ProductsGallery.vue';


</script>
