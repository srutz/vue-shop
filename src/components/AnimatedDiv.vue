<template>
    <div :style="computeStyles()" class="flex flex-col">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { StyleValue, onMounted, ref } from 'vue';

const props = defineProps<{
    delayMs: number,
    durationMs: number,
    opacity: number,
    scale: number,
}>()

const opacity = ref(props.opacity);
const scale = ref(props.scale);

onMounted(() => {
    setTimeout(() => {
        opacity.value = 1
        scale.value = 1
    }, 1)
})

const computeStyles = () => {
    const styles: StyleValue = {
        transition: "all " + props.durationMs + "ms ease-in-out",
        transitionDelay: props.delayMs + "ms",
        transform: "scale(" + scale.value + ")",
        opacity: opacity.value,
        position: "relative",        
    }
    return styles
}

</script>