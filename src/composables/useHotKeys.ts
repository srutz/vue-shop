
import { onMounted, onUnmounted, ref } from 'vue';


/*
 * return a reactive set of currently pressed keys
 * also return a function to block the browsers default behavior for a key * 
 */

/* use like this:

watchEffect(() => {
  if (["k", "Control"].every(k => keys.value.has(k))) {
    console.log("You pressed k and Control")
    keyboardEvent.value?.preventDefault()
  }
})

*/

export function useHotKeys() {
    const keys = ref(new Set<string>())
    const keyboardEvent = ref<KeyboardEvent | null>(null)

    const handleDown = (event: KeyboardEvent) => {
        keyboardEvent.value = event
        keys.value.add(event.key)
    }
    const handleUp = (event: KeyboardEvent) => {
        keys.value.delete(event.key)
        keyboardEvent.value = null
    }

    onMounted(() => {
        window.addEventListener('keydown', handleDown)
        window.addEventListener('keyup', handleUp)
    })

    onUnmounted(() => {
        window.removeEventListener('keydown', handleDown);
        window.removeEventListener('keyup', handleUp);
    })
    return { keys, keyboardEvent }
}