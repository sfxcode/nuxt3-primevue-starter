<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import type { ToastMessageOptions } from 'primevue/toast'

const toast = useToast()

function showMessage(severity: ToastMessageOptions['severity'], summary: string, detail: string) {
  toast.add({ severity, summary, detail, life: 3000 })
}
</script>

<template>
  <div class="card">
    <div class="card">
      <h2>PrimeVue Toast Demo</h2>

      <div class="grid grid-cols-4">
        <div>
          <Button label="Success" class="p-button-success" @click="showMessage('success', 'Success Message', 'Message Content')" />
        </div>
        <div>
          <Button label="Info" class="p-button-info" @click="showMessage('info', 'Info Message', 'Message Content')" />
        </div>
        <div>
          <Button label="Warn" class="p-button-warning" @click="showMessage('warn', 'Warn Message', 'Message Content')" />
        </div>
        <div>
          <Button label="Error" class="p-button-danger" @click="showMessage('error', 'Error Message', 'Message Content')" />
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
  </div>
</template>

<style scoped></style>
