import { Ref, ref, toValue, watchEffect } from 'vue'

/*
 * loads json data from an url that is potentially reactive
 * the receiving component can use the returns ref and error directly
 * in its template
 * or sort-of wait for the result using watchEffect/watch if it needs to
 * programmatically react to the data
 */
export function useServerData<T>(url: string|Ref<string>, 
        options?: RequestInit) {
    const data = ref<T|null>(null)
    const error = ref(null)
    const loading = ref(false)

    /* depending on the url */
    watchEffect(async () => {
        const rawUrl = toValue(url)
        error.value = null
        let loadingHelper = true
        /* delay the loading indicator */
        setTimeout(() => {
            if (loadingHelper) {
                loading.value = true
            }
        }, 200)
        try {
            const response = await fetch(rawUrl, options)
            const json = await response.json()
            //await new Promise((resolve) => setTimeout(resolve, 1000))  // artificial delay
            data.value = json
        } catch (err) {
            data.value = null
            error.value = err as any
        } finally {
            loading.value = false
            loadingHelper = false
        }
    })
    return { data, error, loading }
}