<template>
  <div class='card'>
    <h5>DataTable Example</h5>

    <DataTable :value='tableData' ref='dataTableRef' dataKey='name'
               v-model:filters='filters' :globalFilterFields="['name','code','inventoryStatus']"
               stripedRows
               :paginator='true' :rows='8'
               paginatorTemplate='CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
               :rowsPerPageOptions='[8,15,50]'
               currentPageReportTemplate='Showing {first} to {last} of {totalRecords}'>
      <template #header>
        <div class='datatable-header'>
          <div class="flex justify-between">
            <span class="text-xl">Products</span>
            <span class='p-input-icon-left'>
                                <i class='pi pi-search'/>
                                <InputText v-model="filters['global'].value" placeholder='Globale Suche'/>
              </span>
          </div>
        </div>
      </template>
      <template #empty>
        No Data Found.
      </template>
      <Column field='name' header='Name' :sortable='true'/>
      <Column field='code' header='Code' :sortable='true'/>
      <Column field='price' header='Price' :sortable='true'/>
      <Column field='inventoryStatus' header='Status' :sortable='true'/>
      <template #footer>
        <div class="flex justify-between">

          <span class="text-2xl">{{ tableData ? tableData.length : 0 }} Products</span>
          <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)"/>
        </div>
      </template>
      <template #paginatorRight>

      </template>
    </DataTable>
  </div>
</template>

<script setup lang='ts'>
import {FilterMatchMode} from 'primevue/api';
import {useDataTable} from "~/composables/primevue/dataTable";
import {useLogger} from "vue-logger-plugin";

const log = useLogger();
const {tableData, filters, dataTableRef, exportCSV} = useDataTable();

filters.value = {
  'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
  'name': {value: null, matchMode: FilterMatchMode.CONTAINS},
  'code': {value: null, matchMode: FilterMatchMode.CONTAINS},
  'inventoryStatus': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
};


const {data:products, refresh:refreshProducts } = await useAsyncData('products', () => $fetch('/data/products.json'), {server: false})

watch(products, (newProducts) => {
  log.debug("number of products loaded: " + newProducts.data.length)
  tableData.value = newProducts.data
})

onMounted(async () => {
  refreshProducts();
});


</script>

<style scoped></style>
