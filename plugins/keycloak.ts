import Keycloak from 'keycloak-js'
// import keycloakConfig from '~/keycloak.json'

const keycloakConfig  = {
    realm: "webinar",
    clientId: 'blog-frontend',
    url: 'https://keycloak.nicedemo.de/',
  };

const keycloak = new Keycloak(keycloakConfig)

export default defineNuxtPlugin( (nuxtApp)  => {
    /* https://nuxt.com/docs/api/advanced/hooks */
    nuxtApp.hook('builder:generateApp', async (options : any) => {
        await keycloak.init({ onLoad: 'login-required', checkLoginIframe: false })
     })

    return {
        provide: {
            //keycloak,
        },
        async mounted() {
            //await keycloak.init({ onLoad: 'login-required', checkLoginIframe: false })
        }
    }
})
