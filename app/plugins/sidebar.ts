import type { Component } from 'vue'
import { NuxtLink } from '#components'
import { h } from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'

export default defineNuxtPlugin((nuxtApp) => {
  const nuxtLink: Component = {
    name: 'CustomLink',
    props: ['item'],
    render() {
      return h(NuxtLink, this.$slots.default)
    },
    watch: {
      '$page.url': function () {
        this.onRouteChange()
      },
    },
    inject: ['onRouteChange'],
  }
  nuxtApp.vueApp.use(VueSidebarMenu)
  nuxtApp.vueApp.component('nuxt-sidebar-link', nuxtLink)
})
