import { useConfirm } from '#imports'

export function useConfirmation() {
  const confirm = useConfirm()
  const { showSuccessMessage, showInfoMessage } = useMessages()

  // eslint-disable-next-line unused-imports/no-unused-vars
  function doNothing(id: any) {
  }

  function confirmDelete(idToDelete: any, acceptCallback: (id: any) => void, rejectCallback: (id: any) => void = doNothing) {
    confirm.require({
      message: 'Should this entry be deleted ?',
      header: 'Are you sure',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      acceptLabel: 'Delete',
      rejectClass: 'p-button-secondary p-button-outlined',
      acceptClass: 'p-button-danger',
      accept: () => {
        showSuccessMessage('Action confirmed', `Entry with ID ${idToDelete} was deleted`)
        acceptCallback(idToDelete)
      },
      reject: () => {
        showInfoMessage('Action cancelled', 'No changes are processed')
        rejectCallback(idToDelete)
      },
    })
  }

  function confirmAction(acceptCallback: () => void, acceptMessage: string = 'Action confirmed', acceptMessageDetail: string = acceptMessage, header: string = 'Attention', message: string = 'Should proceed with this action ?') {
    confirm.require({
      message,
      header,
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      acceptLabel: 'Accept',
      rejectClass: 'p-button-secondary p-button-outlined',
      acceptClass: 'p-button-success',
      accept: () => {
        acceptCallback()
        showInfoMessage(acceptMessage, acceptMessageDetail)
      },
      reject: () => {
        showInfoMessage('Action cancelled')
      },
    })
  }

  return { confirmDelete, confirmAction }
}
