<script setup lang='ts'>
import { useCounter } from '#imports'

const count = useCounter()
</script>

<template>
  <div class="card">
    <h2>Server API Usage</h2>
    <PageView />
    <h2>Counter (useState)</h2>

    <div class="grid grid-cols-3 mt-8 w-80">
      <Button icon="pi pi-plus" class="p-button-rounded p-button-info" @click="count.inc()" />
      <span class="text-4xl">{{ count.count }}</span>
      <Button icon="pi pi-minus" class="p-button-rounded p-button-success" @click="count.dec()" />
    </div>
  </div>
</template>

<style scoped></style>
