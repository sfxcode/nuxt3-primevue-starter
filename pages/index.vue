<script setup lang='ts'>
import AdvertiseBox from '@/components/AdvertiseBox.vue'
const { $api } = useNuxtApp()

const testButtonClick = async () => {
    const {data: testApiCallResult} = await $api.get(`/testCall/${123}`)
}

</script>

<template>
  <div class="surface-0 text-center">
    <div class="mb-3 font-bold text-4xl">
      <span class="text-green-600">PrimeVue </span>
      <span class="text-blue-400"> & TypeScript</span>
      <span class="text-green-400"> & Nuxt 3</span>
    </div>
    <Button class="p-button-rounded p-button-xl" @click="testButtonClick">
          <i class="pi pi-cog" />
          <span>Test Api Call</span>
        </Button>
       <h1>Result: {{  testApiCallResult }}</h1> 

       <AdvertiseBox header="" icon="prime-check-circle" color="green-600">
      </AdvertiseBox>
       
    <h2 class="text-2xl pb-6">
      Starter for Vue.js Development with Nuxt 3.
    </h2>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-2">
      <AdvertiseBox header="PrimeVue (3.19)" icon="prime-check-circle" color="green-600">
        Excellent Component Library for VUE
      </AdvertiseBox>
      <AdvertiseBox header="PrimeVue Theme & Layout" icon="prime-check-circle" color="green-600">
        Free Sakai theme
      </AdvertiseBox>
      <AdvertiseBox header="UnoCSS" icon="prime-check-circle" color="green-600">
        UnoCSS for rapid styling
      </AdvertiseBox>
      <AdvertiseBox header="VUE 3.2" icon="prime-check-circle" color="green-600">
        Composition Api
      </AdvertiseBox>
      <AdvertiseBox header="Script Setup" icon="prime-check-circle" color="green-600">
        Reduce a lot of boilerplate code
      </AdvertiseBox>
      <AdvertiseBox header="Typescript 4.9" icon="prime-check-circle" color="blue-400">
        Typesafe by default
      </AdvertiseBox>

      <AdvertiseBox header="Nuxt 3.0" icon="prime-check-circle" color="green-400">
        Pages, Layouts, ...
      </AdvertiseBox>
      <AdvertiseBox header="Nuxt Content (2.2)" icon="prime-check-circle" color="green-400">
        Markdown, YML, CSV or JSON and MDC Syntax
      </AdvertiseBox>
      <AdvertiseBox header="VueUse" icon="prime-check-circle" color="green-600">
        VueUse included
      </AdvertiseBox>
      <AdvertiseBox header="Pinia Store 2" icon="prime-check-circle" color="blue-400">
        Replacement / Alternative for VUEX Store
      </AdvertiseBox>
      <AdvertiseBox header="Nitro" icon="prime-check-circle" color="green-400">
        Nuxt 3 Server Engine
      </AdvertiseBox>
      <AdvertiseBox header="Vitest" icon="prime-check-circle" color="blue-600">
        Testing with Vitest
      </AdvertiseBox>
      <AdvertiseBox header="Histoire" icon="prime-check-circle" color="green-600">
        Interactive Component Playgrounds
      </AdvertiseBox>
    </div>
  </div>
</template>

<style scoped></style>

