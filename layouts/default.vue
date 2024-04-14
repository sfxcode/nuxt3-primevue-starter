<script setup lang='ts'>
import { computed, ref, watch } from 'vue'

import AppMenu from '~/components/app/AppMenu.vue'

const { layoutConfig, layoutState, isSidebarActive } = useLayout()
const outsideClickListener = ref(null)
const themeStore = useThemeStore()
watch(isSidebarActive, (newVal) => {
  if (newVal)
    bindOutsideClickListener()
  else
    unbindOutsideClickListener()
})
const containerClass = computed(() => {
  return {
    'dark': themeStore.isDarkMode,
    'layout-overlay': layoutConfig.menuMode.value === 'overlay',
    'layout-static': layoutConfig.menuMode.value === 'static',
    'layout-static-inactive': layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === 'static',
    'layout-overlay-active': layoutState.overlayMenuActive.value,
    'layout-mobile-active': layoutState.staticMenuMobileActive.value,
    'p-input-filled': layoutConfig.inputStyle.value === 'filled',
    'p-ripple-disabled': !layoutConfig.ripple.value,
  }
})

function bindOutsideClickListener() {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event)) {
        layoutState.overlayMenuActive.value = false
        layoutState.staticMenuMobileActive.value = false
        layoutState.menuHoverActive.value = false
      }
    }

    document.addEventListener('click', outsideClickListener.value)
  }
}

function unbindOutsideClickListener() {
  if (outsideClickListener.value) {
    document.removeEventListener('click', outsideClickListener)
    outsideClickListener.value = null
  }
}

function isOutsideClicked(event) {
  const sidebarEl = document.querySelector('.layout-sidebar')
  const topbarEl = document.querySelector('.layout-menu-button')

  return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target))
}
</script>

<template>
  <div>
    <Link rel="stylesheet" :href="themeStore.link" />
    <div class="layout-wrapper" :class="containerClass">
      <app-topbar />
      <div class="layout-sidebar">
        <AppMenu />
      </div>
      <div class="layout-main-container">
        <div class="layout-main">
          <slot />
        </div>
        <app-footer />
      </div>
      <div class="layout-mask" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
