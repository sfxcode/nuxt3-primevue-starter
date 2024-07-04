<script setup lang='ts'>
const config = useRuntimeConfig()
const { menu } = useNavigationMenu()

const collapsed = useState<boolean>('collapsed')
const isOnMobile = useState<boolean>('isOnMobile')

function onResize() {
  if (window.innerWidth <= 980) {
    collapsed.value = true
    isOnMobile.value = true
  }
  else {
    collapsed.value = false
    isOnMobile.value = false
  }
}

function onToggleCollapse() {

}

function onItemClick() {

}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
</script>

<template>
  <div class="">
    <sidebar-menu
      v-model:collapsed="collapsed"
      link-component-name="nuxt-sidebar-link"
      :menu="menu"
      :show-one-child="true"
      width="220px"
      @update:collapsed="onToggleCollapse"
      @item-click="onItemClick"
    >
      <template #header>
        <div v-if="!collapsed" class="flex">
          <img class="m-6 w-8" src="/primevue-logo.webp" alt="PrimeVue">
          <img class="m-6 w-8" src="/nuxt-logo.svg" alt="Nuxt">
        </div>
      </template>
      <template #footer>
        <div class="m-2 ml-5 text-color-[var(--p-primary-color)]">
          <span v-if="!collapsed">Version {{ config.public.APP_VERSION }}</span>
          <span v-if="collapsed">{{ config.public.APP_VERSION }}</span>
        </div>
      </template>
    </sidebar-menu>
    <div
      v-if="isOnMobile && !collapsed"
      class="sidebar-overlay"
      @click="collapsed = true"
    />
    <div id="workspace" :class="[{ collapsed }, { onmobile: isOnMobile }]">
      <AppTopbar />
      <div class="mt-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#workspace {
  padding-left: 220px;
  transition: 0.3s ease;
}

#workspace.collapsed {
  padding-left: 65px;
}

#workspace.onmobile {
  padding-left: 65px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
</style>
