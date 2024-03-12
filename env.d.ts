
interface ImportMeta {
    readonly env: ImportMetaEnv
}

type ImportMetaEnv = {
    readonly VITE_APP_TITLE: string
    readonly VITE_API_URL: string
    readonly VITE_API_KEY: string
    readonly VITE_DEVELOPERMODE: boolean
}
