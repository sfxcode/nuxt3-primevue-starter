import { ref } from 'vue'

export function usePrimeDataTable() {
  const tableData = ref([])

  const filters = ref({})
  const dataTableRef = ref()

  function exportCSV() {
    dataTableRef.value?.exportCSV()
  }

  return {
    tableData,
    filters,
    dataTableRef,
    exportCSV,
  }
}
