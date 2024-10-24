<script lang="ts" setup>
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Button from 'primevue/button';
  import Dialog from 'primevue/dialog';
  import { FilterMatchMode } from '@primevue/core/api';
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useA_AmortStore } from '../../../store/useA_AmortStore';
  import { useConfigStore } from '../../../store/useConfigStore';
  import { Column as ColumnType } from '../../../store/types';

  const configStore = useConfigStore()
  const a_AmortStore = useA_AmortStore()

  const {
    sched_payments_idp_final_data,
    sched_payments_idp_column,
  } = storeToRefs(a_AmortStore)

  const {
  } = a_AmortStore;

  const sched_dt = ref();
  const selectedData = ref();
  const selectedColumns = ref<ColumnType[]>(sched_payments_idp_column.value);

  const dialogVisible = ref(false);

  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const exportCSV = () => {
    sched_dt.value.exportCSV();
  };

</script>

<template>
  <!-- MAIN DATATABLE -->
  <DataTable
    :value="sched_payments_idp_final_data"
    v-model:filters="filters"
    v-model:selection="selectedData"
    ref="sched_dt"
    stripedRows
    paginator
    :size="'small'"
    :rows="5"
    :rowsPerPageOptions="[5, 10, 20, 50]"
    tableStyle="min-width: 50rem"
    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{first} to {last} of {totalRecords}"
    scrollable
    resizableColumns
    class="w-full border border-y-[var(--p-primary-color)] border-x-transparent"
  >
    <!-- HEADER -->
    <template #header>
      <div class="grid grid-cols-2 gap-3">
        <div class="flex items-center text-xl font-bold">
          Schedule of Payments - Installment DP
        </div>
      </div>
    </template>

    <!-- COLUMNS -->
    <template v-for="col of selectedColumns" :key="col.field">
      <Column
        :field="col.field"
        :header="col.header"
        sortable
      >
        <template #body="slotProps">
          <div v-if="col.header === 'Due Date'" class="font-semibold">
            {{ configStore.formatDate2(slotProps.data[col.field]) }}
          </div>
          <div v-else>
            {{ slotProps.data[col.field] ? configStore.formatFloatNumber1(slotProps.data[col.field]) : '0.00' }}
          </div>
        </template>
      </Column>
    </template>

    <!-- FOOTER -->
    <template #paginatorstart>
      <Button @click="exportCSV" type="button" icon="pi pi-download" :size="'small'" text />
    </template>
    <template #paginatorend>
      <Button @click="dialogVisible = true"
        icon="pi pi-external-link"
        :size="'small'"
        type="button"
      />
    </template>
  </DataTable>

  <!-- DATATABLE IN A MODAL -->
  <Dialog v-model:visible="dialogVisible"
    header="Schedule of Payments - Installment DP"
    :style="{ width: '75vw' }"
    maximizable
    modal
    :contentStyle="{ height: '100%' }"
  >
    <DataTable
      :value="sched_payments_idp_final_data"
      v-model:filters="filters"
      v-model:selection="selectedData"
      ref="sched_dt"
      stripedRows
      paginator
      :size="'small'"
      :rows="15"
      :rowsPerPageOptions="[15, 30, 50]"
      tableStyle="min-width: 50rem"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} to {last} of {totalRecords}"
      scrollable
      resizableColumns
      class="w-full"
    >

      <!-- COLUMNS -->
      <template v-for="col of selectedColumns" :key="col.field">
        <Column
          :field="col.field"
          :header="col.header"
          sortable
        >
          <template #body="slotProps">
            <div v-if="col.header === 'Due Date'" class="font-semibold">
              {{ configStore.formatDate2(slotProps.data[col.field]) }}
            </div>
            <div v-else>
              {{ slotProps.data[col.field] ? configStore.formatFloatNumber1(slotProps.data[col.field]) : '0.00' }}
            </div>
          </template>
        </Column>
      </template>
    </DataTable>
  </Dialog>
</template>

<style scoped>
  .p-datatable, .p-datatable-header {
    --p-datatable-header-border-color: var(--p-primary-color);
    --p-datatable-header-color: var(--p-primary-color);
  }
</style>