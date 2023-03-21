<script setup>
import AdvertiseBox from './AdvertiseBox.vue'
</script>

<template>
  <Story>
    <Variant title="Default">
      <AdvertiseBox header="Some PrimeVue Content" icon="prime-check-circle" color="blue">
        <div class="mb-4">
          PrimeVue Secondary Button
        </div>
        <Button label="Secondary" severity="secondary" rounded />
      </AdvertiseBox>
    </Variant>
  </Story>
</template>
