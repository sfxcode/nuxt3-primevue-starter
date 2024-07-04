<script setup lang='ts'>
import { FilterMatchMode } from '@primevue/core/api'

const { tableData, filters, dataTableRef, exportCSV } = usePrimeDataTable()

filters.value = {
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  code: { value: null, matchMode: FilterMatchMode.CONTAINS },
  inventoryStatus: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
}

const dataStore = useDataStore()

onMounted(async () => {
  await dataStore.initData()
  tableData.value = dataStore.products
})
</script>

<template>
  <div class="card">
    <h2>DataTable Example</h2>
    <DataTable
      ref="dataTableRef"
      v-model:filters="filters"
      :value="tableData"
      data-key="name"
      :global-filter-fields="['name', 'code', 'inventoryStatus']"
      striped-rows
      :paginator="true"
      :rows="8"
      paginator-template="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rows-per-page-options="[8, 15, 50]"
      current-page-report-template="Showing {first} to {last} of {totalRecords}"
    >
      <template #header>
        <div class="datatable-header">
          <div class="flex justify-between">
            <span class="text-xl">Products</span>
            <IconField icon-position="left">
              <InputIcon class="pi pi-search" />
              <InputText v-model="filters.global.value" placeholder="Global Search" />
            </IconField>
          </div>
        </div>
      </template>
      <template #empty>
        No Data Found.
      </template>
      <Column field="name" header="Name" :sortable="true" />
      <Column field="code" header="Code" :sortable="true" />
      <Column field="price" header="Price" :sortable="true" />
      <Column field="inventoryStatus" header="Status" :sortable="true" />
      <template #footer>
        <div class="flex justify-between">
          <span class="text-2xl">{{ tableData ? tableData.length : 0 }} Products</span>
          <Button icon="pi pi-external-link" label="Export" @click="exportCSV" />
        </div>
      </template>
      <template #paginatorRight />
    </DataTable>
  </div>
</template>

<style scoped></style>
