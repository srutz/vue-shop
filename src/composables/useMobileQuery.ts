import { onMounted, onUnmounted, ref } from "vue"

export function useMobileQuery() {
    const threshold = 768
    const isMobile = ref(window.innerWidth < threshold)
    const l = () => {
        isMobile.value = window.innerWidth < threshold
    }
    onMounted(() => {
        window.addEventListener("resize", l)
    })
    onUnmounted(() => {
        window.removeEventListener("resize", l)
    })

    return isMobile
}

