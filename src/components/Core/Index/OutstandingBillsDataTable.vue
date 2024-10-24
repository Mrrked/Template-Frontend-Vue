<script lang="ts" setup>
  import DataTable, { DataTableRowSelectEvent, DataTableRowUnselectEvent } from 'primevue/datatable';
  import Column from 'primevue/column';
  import Button from 'primevue/button';
  import { FilterMatchMode } from '@primevue/core/api';
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useConfigStore } from '../../../store/useConfigStore';
  import { Column as ColumnType, LeaseBill } from '../../../store/types';
  import { useY_LeaseStore } from '../../../store/useY_LeaseStore';

  const configStore = useConfigStore()
  const y_LeaseStore = useY_LeaseStore()

  const {
    getTotalAmountSelectedBills,
    selectedBills,
    outstanding_bills_data,
    outstanding_bills_column,
  } = storeToRefs(y_LeaseStore)

  const bills_dt = ref();
  const selectedColumns = ref<ColumnType[]>(outstanding_bills_column.value);

  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const exportCSV = () => {
    bills_dt.value.exportCSV();
  };

  const rowStyle = (data: LeaseBill) => {
    if (!data.IS_SELECTABLE) {
      return { cursor: 'not-allowed', color: 'gray'};
    }
  };

  const onRowSelect = (event: DataTableRowSelectEvent) => {
    if (!event.data.IS_SELECTABLE) {
      // console.log('PREVENT SELECT #', event.index);
      event.originalEvent.preventDefault();
      selectedBills.value.pop()
      return;
    } else {
      // console.log('SELECT #', event.index);
    }
  };

  const onRowUnselect = (event: DataTableRowUnselectEvent) => {
    if (event.data.STATE === 1) {
      // console.log('UNSELECT #', event.index);

      event.originalEvent.preventDefault();

      selectedBills.value = selectedBills.value.filter((bill) => bill.INDEX < event.index)
      return;
    }
  }
</script>

<template>
  <!-- MAIN DATATABLE -->
  <DataTable
    :value="outstanding_bills_data"
    v-model:filters="filters"
    v-model:selection="selectedBills"
    selectionMode="multiple"
    ref="bills_dt"
    stripedRows
    paginator
    :size="'small'"
    :rows="10"
    :rowsPerPageOptions="[10, 20, 30, 50]"
    tableStyle="min-width: 50rem"
    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{first} to {last} of {totalRecords}"
    scrollable
    resizableColumns
    class="w-full border border-y-[var(--p-primary-color)] border-x-transparent"
    :rowStyle="rowStyle"
    @rowSelect="onRowSelect"
    @rowUnselect="onRowUnselect"
    dataKey="ID"
  >
    <!-- HEADER -->
    <template #header>
      <div class="flex items-center justify-between gap-4">
        <div class="text-xl font-bold">
          List of Billings
        </div>
        <div class="flex items-center justify-between gap-5 w-80 text-primary-light">
          <span class="text-base font-semibold ">
            Total Amount:
          </span>
          <span class="text-base font-semibold">
            {{ getTotalAmountSelectedBills ? configStore.formatFloatNumber1(getTotalAmountSelectedBills) : '0.00' }}
          </span>
          <Button @click="y_LeaseStore.handleEnterBilling"
            size="small"
            type="button"
          >
            ENTER
          </Button>
        </div>
      </div>
    </template>

    <!-- COLUMNS -->
    <template v-for="col of selectedColumns" :key="col.field">
      <Column
        :field="col.field"
        :header="col.header"
      >
        <template #body="slotProps">
          <div v-if="col.header === 'Bill Type'">
            <span
              class="pr-3 whitespace-pre"
              v-tooltip.right="{
                value: slotProps.data['BDESC'] ,
              }"
            >
              {{ slotProps.data[col.field] ? configStore.fillNumberWithZeroes(slotProps.data[col.field], 2) + '  /  ' + slotProps.data['BDESC'] : '-' }}
            </span>
          </div>
          <div v-else-if="['Billing Amount', 'Amount Due', 'VAT Sales', 'Zero-Rated', 'VAT Exempt', 'Govt. Tax', 'VAT', 'Withholding Tax', 'Total Amount Due'].includes(col.header)">
            {{ slotProps.data[col.field] ? configStore.formatFloatNumber1(slotProps.data[col.field]) : '-' }}
          </div>
          <div v-else-if="['Due Date'].includes(col.header)">
            {{ slotProps.data[col.field] ? configStore.formatDate2(slotProps.data[col.field]) : '-' }}
          </div>
          <div v-else-if="col.header === ''">
            <svg v-if="slotProps.data[col.field] === 1" class="w-6 h-6 text-primary-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
            </svg>
            <svg v-else-if="slotProps.data[col.field] === 0" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div v-else-if="col.header === ' '">
            <svg v-if="slotProps.data[col.field]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
            </svg>
          </div>
          <div v-else>
            {{ slotProps.data[col.field] || '-' }}
          </div>
        </template>
      </Column>
    </template>

    <!-- FOOTER -->
    <template #paginatorstart>
      <Button @click="exportCSV" type="button" icon="pi pi-download" :size="'small'" text />
    </template>
    <template #paginatorend>
    </template>
  </DataTable>
</template>

<style scoped>
  .p-datatable, .p-datatable-header {
    --p-datatable-header-border-color: var(--p-primary-color);
    --p-datatable-header-color: var(--p-primary-color);
  }
</style>
