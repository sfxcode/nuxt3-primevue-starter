import type { ToastMessageOptions } from 'primevue/toast'
import { useToast } from '#imports'

export enum MessageSeverity {
  SUCCESS = 'success',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

export function useMessages() {
  const toast = useToast()

  function showMessage(severity: ToastMessageOptions['severity'], summary: string, detail: string, life: number = 3000) {
    toast.add({ severity, summary, detail, life })
  }

  function showSuccessMessage(summary: string, detail: string = summary, life: number = 3000) {
    showMessage(MessageSeverity.SUCCESS, summary, detail, life)
  }

  function showInfoMessage(summary: string, detail: string = summary, life: number = 3000) {
    showMessage(MessageSeverity.INFO, summary, detail, life)
  }

  function showWarnMessage(summary: string, detail: string = summary, life: number = 3000) {
    showMessage(MessageSeverity.WARN, summary, detail, life)
  }

  function showErrorMessage(summary: string, detail: string = summary, life: number = 3000) {
    showMessage(MessageSeverity.ERROR, summary, detail, life)
  }

  return { showSuccessMessage, showInfoMessage, showWarnMessage, showErrorMessage }
}
