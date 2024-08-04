<script setup lang="ts">
function redirectToGithub() {
  window.open('https://github.com/sfxcode/nuxt3-primevue-starter', '_blank')
}
</script>

<template>
  <nav>
    <Toolbar>
      <template #start />

      <template #end>
        <AppColorMode class="ml-6 mr-2" />
        <Button icon="pi pi-github" class="mr-2" @click="redirectToGithub" />
        <Button icon="pi pi-sign-out" severity="danger" />
      </template>
    </Toolbar>
  </nav>
</template>

<style scoped lang="scss">

</style>
