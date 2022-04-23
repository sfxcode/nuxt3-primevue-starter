import {ref} from "vue";

export function useDataTable() {
    // @ts-ignore
    const tableData: Ref<any[]> = ref([]);

    const filters = ref({});
    const dataTableRef = ref<HTMLElement | null>(null)

    function exportCSV() {
        // @ts-ignore
        dataTableRef.value.exportCSV()
    }

    return {
        tableData, filters, dataTableRef, exportCSV
    }
}
