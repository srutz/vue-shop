<template>
    <div class="flex flex-col grow">
        <h1>About My Vuew APP</h1>
        <p>lorum ipsum, lorem something, lorem one two three</P>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';


const route = useRoute()
console.table(route.meta)


</script>