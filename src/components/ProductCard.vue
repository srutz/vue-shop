<style scoped>
</style>
<template>

<div class="w-80 border rounded overflow-hidden shadow-lg grow flex flex-col mb-8 cursor-pointer hover:bg-gray-100">
    <router-link :to="`/product/${product.id}`" class="grow">
        <div class="flex justify-center">
            <img class="w-full" style="width: auto; height: 120px;" :src="product.thumbnail" :alt="product.title">
        </div>
        <div class="px-6 py-4 grow">
            <div class="font-bold text-xl mb-2">{{ product.title }}</div>
            <p class="text-gray-700 text-base">{{ product.description }}
            </p>
        </div>
    </router-link>
    <div class="px-6 pt-4 pb-2">
        <button @click="onBuy">
        Buy Now
        </button>
    </div>
</div>


</template>
<script setup lang="ts">

import { defineProps, inject, reactive } from 'vue';
import { Product } from '../types';
import { CartItem } from '../types';

const props = defineProps<{
  product: Product
}>()

const product = reactive<Product>(props.product)

// mini cart
const cartItems = inject<CartItem[]>('items') || [];
const onBuy = () => {
    const item = cartItems.find((item) => item.product.id === product.id)
    if (item) {
        item.quantity += 1
    } else {
        cartItems.push({ product: product, quantity: 1 })
    }
}




</script>

