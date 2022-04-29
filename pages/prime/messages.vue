<script setup lang="ts">
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 })
}
const showInfo = () => {
  toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 })
}
const showWarn = () => {
  toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 })
}
const showError = () => {
  toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 })
}
</script>

<template>
  <div class="card">
    <h2>Toast Service</h2>

    <div class="grid grid-cols-4">
      <div>
        <Button label="Success" class="p-button-success" @click="showSuccess" />
      </div>
      <div>
        <Button label="Info" class="p-button-info" @click="showInfo" />
      </div>
      <div>
        <Button label="Warn" class="p-button-warning" @click="showWarn" />
      </div>
      <div>
        <Button label="Error" class="p-button-danger" @click="showError" />
      </div>
      <Toast />
    </div>
    <h2>Messages</h2>
    <Message severity="success">
      Success Message Content
    </Message>
    <Message severity="info">
      Info Message Content
    </Message>
    <Message severity="warn">
      Warning Message Content
    </Message>
    <Message severity="error">
      Error Message Content
    </Message>
  </div>
</template>

<style scoped></style>
