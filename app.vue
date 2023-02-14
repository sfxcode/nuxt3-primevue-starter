<script setup>
import Keycloak from 'keycloak-js'
import { useKeycloak } from '@/stores/keycloak'

useHead({
    title: 'Nuxt 3 PrimeVue Starter',
})

const config = useRuntimeConfig()
const store = useKeycloak()

const state = reactive({
    loggedIn: false
})

if (config.keycloakDisabled) {
    state.loggedIn = true
} else {
    const initOptions = {
        url: config.public.KEYCLOAK_URL,
        realm: config.public.KEYCLOAK_REALM,
        clientId: config.public.KEYCLOAK_CLIENT_ID,
        clientSecret: config.public.KEYCLOAK_CLIENT_SECRET,
        onLoad: 'login-required'
    }

    const keycloak = new Keycloak(initOptions)
    
    keycloak
        .init({ onLoad: initOptions.onLoad })
        .then((auth) => {
            if (!auth) {
                window.location.reload()
            } else {
                store.setup(keycloak)
                state.loggedIn = true
            }
        })
}
</script>

<template>
    <div>
        <div v-if="state.loggedIn">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </div>
    </div>
</template>

<style lang='scss'>
@import 'App.scss';
</style>
