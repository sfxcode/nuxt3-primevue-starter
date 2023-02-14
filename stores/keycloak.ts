import { defineStore } from 'pinia'

export const useKeycloak = defineStore('keycloak', () => {
    const keycloak = ref(null)
    let userProfile = ref<any>(null);

    function setup(kc: any) {
        keycloak.value = kc

        kc.loadUserInfo().then((profile : any) => {
            userProfile.value = profile
        }).catch(function () {
            alert('Failed to load user profile');
        });
    }

    function isSet() {
        return keycloak.value != null
    }

    return { keycloak, setup, isSet, userProfile }
})
