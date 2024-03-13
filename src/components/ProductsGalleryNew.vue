<style scoped>
</style>
<template>

<div class="flex flex-col grow h-1">
    <div v-if="loading">
        LADE NOCH...
    </div>
    <div v-else class="flex flex-wrap gap-2">
        <AnimatedDiv v-for="(product, i) in data?.products" :key="product.id" :delayMs="Math.max(0, i - offset) * 100" :opacity="0" :scale="0" :durationMs="250">
            <ProductCard :product="product"></ProductCard>
        </AnimatedDiv>
    </div>
    <div class="flex m-2">
        <button @click="offset = offset + 4">Weitere laden</button>
    </div>
    <div class="min-h-2"> </div>
</div>

</template>
<script setup lang="ts">

import { computed, ref } from 'vue';
import { ProductResponse } from '../types';
import ProductCard from './ProductCard.vue';
import AnimatedDiv from './AnimatedDiv.vue';
import { useServerData } from '../composables/useServerData';

const offset = ref(0)
const url = computed(() => {
    return `https://dummyjson.com/products?limit=${offset.value+4}`
})

const { data, loading } = useServerData<ProductResponse>(url)

</script>

