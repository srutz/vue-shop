<style scoped>
</style>
<template>

<div class="flex flex-col grow h-1">
    <div class="flex flex-wrap gap-2">
        <AnimatedDiv v-for="(product, i) in products" :key="product.id" :delayMs="Math.max(0, i - offset) * 100" :opacity="0" :scale="0" :durationMs="250">
            <ProductCard :product="product"></ProductCard>
        </AnimatedDiv>
    </div>
    <div class="flex m-2">
        <button v-if="products.length > 0" @click="onLoadMore">Weitere laden</button>
    </div>
    <div class="min-h-2"> </div>
</div>

</template>
<script setup lang="ts">

import { onMounted, reactive, ref } from 'vue';
import { Product, ProductResponse } from '../types';
import ProductCard from './ProductCard.vue';
import AnimatedDiv from './AnimatedDiv.vue';

const products = reactive<Product[]>([])
const offset = ref(0)

const loadProducts = async () => {
    const response = await 
fetch(`https://dummyjson.com/products?skip=${offset.value}&limit=4`)
    const data = (await response.json()) as ProductResponse
    products.push(...data.products)
}

onMounted(() => {
    loadProducts()
})

const onLoadMore = () => {
    offset.value += products.length
    loadProducts()
}


</script>

