<script setup lang='ts'>
import AdvertiseBox from '@/components/AdvertiseBox.vue'; </script>

<template>
  <div class="surface-0 text-center">
    <div class="mb-3 font-bold text-4xl">
      <span class="text-green-600">PrimeVue </span>
      <span class="text-blue-400"> & TypeScript</span>
      <span class="text-green-400"> & Nuxt 3</span>
    </div>
    <h2 class="text-2xl pb-6">
      Starter for Vue.js Development.
    </h2>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-2">
      <AdvertiseBox header="PrimeVue 3.12" icon="prime-check-circle" color="green-600">
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
      <AdvertiseBox header="Pinia Store 2" icon="prime-check-circle" color="blue-400">
        Replacement / Alternative for VUEX Store
      </AdvertiseBox>

      <AdvertiseBox header="Nuxt 3 (RC 1)" icon="prime-check-circle" color="green-400">
        Pages, Layouts, ...
      </AdvertiseBox>
      <AdvertiseBox header="Nitro" icon="prime-check-circle" color="green-400">
        Nuxt 3 Server Engine
      </AdvertiseBox>
      <AdvertiseBox header="Vitest" icon="prime-check-circle" color="blue-600">
        Testing with Vitest
      </AdvertiseBox>
      <AdvertiseBox header="Typescript 4.5" icon="prime-check-circle" color="blue-400">
        Typesafe by default
      </AdvertiseBox>

      <AdvertiseBox header="VueUse" icon="prime-check-circle" color="green-600">
        VueUse Head included
      </AdvertiseBox>
    </div>
  </div>
</template>

<style scoped></style>

