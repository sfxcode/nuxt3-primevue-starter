<script setup lang='ts'>
import { useThemeStore } from '@/stores'

const emit = defineEmits(['menuToggle'])

const themeStore = useThemeStore()
const op = ref<any>(null)

function toggle(event: any) {
  op.value.toggle(event)
}

function redirectToGithub(event: any) {
  window.open('https://github.com/sfxcode/nuxt3-primevue-starter', '_blank')
}

function onMenuToggle(event: any) {
  emit('menuToggle', event)
}
</script>

<template>
  <div class="layout-topbar">
    <NuxtLink to="/" class="layout-topbar-logo">
      <span>Nuxt3 PrimeVue Starter</span>
    </NuxtLink>
    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
      <i class="pi pi-bars" />
    </button>

    <button
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        toggleClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true,
      }"
      class="p-link layout-topbar-menu-button layout-topbar-button"
    >
      <i class="pi pi-ellipsis-v" />
    </button>

    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <button class="p-link layout-topbar-button" @click="toggle">
          <i class="pi pi-cog" />
          <span>Settings</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-user" />
          <span>Profile</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button" @click="redirectToGithub">
          <i class="pi pi-github" />
          <span>Github</span>
        </button>
      </li>
    </ul>
    <client-only>
      <OverlayPanel id="overlay_panel" ref="op" append-to="body" style="width: 200px">
        <div class="field-radiobutton">
          <RadioButton
            id="saga" v-model="themeStore.themeName" name="layoutColorMode" value="saga"
            @change="themeStore.setLight()"
          />
          <label>Light</label>
        </div>
        <div class="field-radiobutton">
          <RadioButton
            id="vela" v-model="themeStore.themeName" name="layoutColorMode" value="vela"
            @change="themeStore.setDim()"
          />
          <label>Dim</label>
        </div>
        <div class="field-radiobutton">
          <RadioButton
            id="arya" v-model="themeStore.themeName" name="layoutColorMode" value="arya"
            @change="themeStore.setDark()"
          />
          <label>Dark</label>
        </div>

        <h6>Primary Color</h6>
        <div class="flex">
          <div
            style="width:2rem;height:2rem;border-radius:6px" class="bg-blue-500 mr-3 cursor-pointer"
            @click="themeStore.setColor('blue')"
          />
          <div
            style="width:2rem;height:2rem;border-radius:6px" class="bg-green-500 mr-3 cursor-pointer"
            @click="themeStore.setColor('green')"
          />
          <div
            style="width:2rem;height:2rem;border-radius:6px" class="bg-yellow-300 mr-3 cursor-pointer"
            @click="themeStore.setColor('orange')"
          />
          <div
            style="width:2rem;height:2rem;border-radius:6px" class="bg-purple-500 cursor-pointer"
            @click="themeStore.setColor('purple')"
          />
        </div>
      </OverlayPanel>
    </client-only>
  </div>
</template>

<style scoped>
.hidden {
  display: none !important;
}

@media (min-width: 1024px) {
  .lg\:flex {
    display: flex !important;
  }
}
</style>
