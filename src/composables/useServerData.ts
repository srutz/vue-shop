import { Ref, ref, toValue, watchEffect } from 'vue'

/*
 * loads json data from an url that is potentially reactive
 * the receiving component can use the returns ref and error directly
 * in its template
 * or sort-of wait for the result using watchEffect/watch if it needs to
 * programmatically react to the data
 */
export function useFetch<T>(url: string|Ref<string>, options?: RequestInit) {
    const data = ref<T|null>(null)
    const error = ref(null)
    /* depending on the url */
    watchEffect(async () => {
        const rawUrl = toValue(url)
        data.value = null
        error.value = null
        try {
            const response = await fetch(rawUrl, options)
            const json = await response.json()
            data.value = json
        } catch (err) {
            error.value = err as any
        }
    })
    return { data, error }
}