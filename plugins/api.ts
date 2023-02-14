import { useKeycloak } from '@/stores/keycloak'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    const keycloakStore = useKeycloak()
    
    const defaultOpts = { baseURL: config.public.API_URL }

    const withAuth = (obj : any) => {
        if (!keycloakStore.isSet()) {
            return obj
        }

        if (!obj.headers) {
            obj.headers = {}
        }

        obj.headers = { 
            ...obj.headers,
            'Authorization': `Bearer ${keycloakStore.keycloak.token}`
        }

        return obj
    }

    return {
        provide: {
            api: {
                get: (url : string) => $fetch(url, withAuth({ ...defaultOpts })),
                post: (url : string, data : any) => $fetch(url, withAuth({
                    ...defaultOpts,
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: data,
                })),
                put: (url : string, data : any) => $fetch(url, withAuth({
                    ...defaultOpts,
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: data,
                })),
                delete: (url : string) => $fetch(url, withAuth({
                    ...defaultOpts,
                    method: 'DELETE',
                })),
                lazyFetch: (url : string) => useLazyFetch(url, withAuth({
                    ...defaultOpts,
                    key: typeof url === 'function' ? url() : url
                })),
                lazyFetchForm: (url : string, fields : any, callback : Function) => {
                    const res = useLazyFetch(url, withAuth(defaultOpts))

                    watch(res.data, (newData : any) => {
                        callback(fields.map((field : any) => {
                            field.value = newData[field.name]
                            return field
                        }))
                    })

                    return res
                },
                download: async (url : string, fileName : string) => {
                    const blob : Blob = await $fetch(url, withAuth({ ...defaultOpts, responseType: 'blob' }))
                    const link = document.createElement('a')
                    link.href = URL.createObjectURL(blob)
                    link.download = fileName
                    link.click()
                    URL.revokeObjectURL(link.href)
                }
            }
        }
    }
})