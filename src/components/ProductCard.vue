<style scoped>
</style>
<template>

<div class="w-80 border rounded overflow-hidden shadow-lg grow flex flex-col mb-8 cursor-pointer hover:bg-gray-100">
    <div class="flex justify-center">
        <img class="w-full" style="width: auto; height: 120px;" :src="product.thumbnail" :alt="product.title">
    </div>
    <div class="px-6 py-4 grow">
        <div class="font-bold text-xl mb-2">{{ product.title }}</div>
        <p class="text-gray-700 text-base">{{ product.description }}
        </p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <button>
        Buy Now
        </button>
    </div>
</div>


</template>
<script setup lang="ts">

import { defineProps, reactive } from 'vue';
import { Product } from '../types';

const props = defineProps<{
  product: Product
}>()

console.table(props.product)

const product = reactive<Product>(props.product)




</script>

