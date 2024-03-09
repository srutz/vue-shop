<style scoped>
</style>
<template>

<div class="flex flex-col grow h-1">
    <div class="flex flex-wrap gap-2">
        <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
    </div>
    <div class="flex m-2">
        <button @click="onLoadMore">Weitere laden</button>
    </div>
    <div class="min-h-2"> </div>
</div>

</template>
<script setup lang="ts">

import { onMounted, reactive } from 'vue';
import { Product, ProductResponse } from '../types';
import ProductCard from './ProductCard.vue';

const products = reactive<Product[]>([])
let offset = 0

onMounted(() => {
    loadProducts()
})

const loadProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products?skip=${offset}`)
    const data = (await response.json()) as ProductResponse
    products.push(...data.products)
}

const onLoadMore = () => {
    offset += products.length
    loadProducts()
}


</script>

