<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="card">
    <div class="col-12 mt-10 text-center">
      <img src="/nuxt-logo.svg" alt="Nuxt logo" class="mb-5" style="width:81px; height:60px;">
    </div>
    <main class="px-4 py-10 text-center text-8xl text-teal-700">
      <div>
        <p class="text-8xl text-red-600">
          <span class="i-codicon-error inline-block" />
        </p>
      </div>
    </main>
    <div style="alignment: center">
      <h1 class="text-center text-2xl text-5xl font-bold">
        Page not found ...
      </h1>
      <div class="col-12 mt-5 text-center">
        <Button icon="pi pi-arrow-left" label="Back to home" @click="router.push('/')" />
      </div>
    </div>
  </div>
</template>
