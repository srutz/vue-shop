<template>
    <div class="border rounded overflow-hidden shadow-lg grow flex flex-col m-8 cursor-pointer hover:bg-gray-100">
        <div class="flex justify-center mt-4">
            <img class="w-full" style="width: auto; height: 300px; object-fit: cover;" :src="product?.images[currentImage]" :alt="product?.title">
        </div>
        <div class="px-6 py-4 grow">
            <div class="font-bold text-xl mb-2">{{ product?.title }}</div>
            <p class="text-gray-700 text-base">{{ product?.description }}
            </p>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Product } from '../types';

const route = useRoute()

const idS = route.params.id
const id = Number.parseInt(idS.toString())
console.log("id=" + id + ": " + id.constructor.name)

const product = ref<Product>()
const currentImage = ref(0)

onMounted(async () => {
    const response = await fetch("https://dummyjson.com/products/" + id)
    const data = await response.json() as Product
    product.value = data    
})


</script>
