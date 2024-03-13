<template>
    <div class="flex flex-col grow">
        <h1>Cart</h1>

        <div v-if="cartStore.$state.items && cartStore.$state.items.length <= 0">
            Bitte erst einkaufen
        </div>
        <div v-else class="flex flex-col">
            <div v-for="(item) in cartStore.$state.items" :id="item.product.id.toString()"
                class="mx-auto bg-white shadow-lg rounded-lg overflow-hidden w-96">
                <div class="flex flex-col mb-8 mt-2">

                    <div class="flex items-center justify-between p-4">
                        <div class="flex items-center grow">
                            <img class="w-full" style="width: 64px; height: auto;" :src="item.product.thumbnail"
                                :alt="item.product.title">
                            <div class="ml-3">
                                <p class="text-sm font-semibold text-gray-700">{{ item.product.title }}</p>
                                <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
                            </div>
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-gray-700">
                                {{ (item.quantity * item.product.price).toFixed(2) }}</p>
                        </div>
                    </div>
                    <div class="flex items-center text-xs text-gray-500 gap-1 ml-4">
                        <button @click="inc(item, 1)"
                            class="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none">+</button>
                        <button @click="inc(item, -1)"
                            class="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none">-</button>
                    </div>

                </div>
            </div>
            <div class="flex items-center self-center p-4 border-t w-96 gap-4">
                <p class="text-sm font-bold text-gray-900">Total</p>
                <div class="grow"></div>
                <p class="text-sm font-bold text-gray-900">{{ getSumViaStore }}</p>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CartItem } from '../types';

import { useCartItems } from '../cartstore';

const cartStore = useCartItems()
console.dir(cartStore)
debugger

const inc = (item: CartItem, n: number) => {
    // pinia store
    cartStore.changeQuantity(n, item.product)
}



const getSumViaStore = computed(() => {
    const s = cartStore.$state.items?.reduce((acc, item) => acc + item.quantity * item.product.price, 0)
    return s?.toFixed(2)
})


</script>
