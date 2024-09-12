<script setup lang="ts">
const { showSuccessMessage, showInfoMessage, showWarnMessage, showErrorMessage } = useMessages()
const { confirmAction, confirmDelete } = useConfirmation()

const lastDeletedId = ref(0)

function doSomeAction() {
  // do something
}

function doSomeDeleteAction(idToDelete: number) {
  // do something
  lastDeletedId.value = idToDelete
}
</script>

<template>
  <div class="card">
    <h2>PrimeVue Toast Demo</h2>
    <div class="flex flex-row gap-4">
      <div>
        <Button label="Success" class="p-button-success" @click="showSuccessMessage('Success Message', 'Message Content')" />
      </div>
      <div>
        <Button label="Info" class="p-button-info" @click="showInfoMessage('Info Message', 'Message Content')" />
      </div>
      <div>
        <Button label="Warn" class="p-button-warning" @click="showWarnMessage('Warn Message', 'Message Content')" />
      </div>
      <div>
        <Button label="Error" class="p-button-danger" @click="showErrorMessage('Error Message', 'Message Content')" />
      </div>
    </div>
    <h2>Confirmation</h2>
    <div class="flex flex-row gap-4">
      <Button label="Trigger action with confirmation" class="p-button-info" @click="confirmAction(doSomeAction)" />
      <Button label="Trigger delete action with confirmation" class="p-button-danger" @click="confirmDelete(1, doSomeDeleteAction)" />
    </div>
    <h2>Messages</h2>
    <div class="flex flex-row gap-4 flex-wrap">
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
