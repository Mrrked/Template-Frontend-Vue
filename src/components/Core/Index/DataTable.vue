<script lang="ts" setup>
  import DataTable from 'primevue/datatable';
  import IconField from 'primevue/iconfield';
  import InputText from 'primevue/inputtext';
  import InputIcon from 'primevue/inputicon';
  import Column from 'primevue/column';
  import Button from 'primevue/button';
  import { FilterMatchMode } from '@primevue/core/api';
  import { ref } from 'vue';
  import { useMainStore } from '../../../store/useMainStore';
  import { storeToRefs } from 'pinia';
  import { Column as ColumnType } from '../../../store/types';

  defineProps<{
    activateCallback: Function
  }>()

  const mainStore = useMainStore()

  const {
    units_data,
    units_column,
  } = storeToRefs(mainStore)

  const { handleSelectUnit } = mainStore

  const frozenColumns = ['Action']

  const client_dt = ref();
  const selectedData = ref();
  const selectedColumns = ref<ColumnType[]>(units_column.value);

  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
</script>

<template>
  <div>
    <!-- MAIN DATATABLE -->
    <DataTable
      :value="units_data"
      v-model:filters="filters"
      v-model:selection="selectedData"
      ref="client_dt"
      stripedRows
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} to {last} of {totalRecords}"
      scrollable
      resizableColumns
    >
      <!-- HEADER -->
      <template #header>
        <div class="flex justify-between gap-3">
          <div class="text-xl font-bold">
            Query Results
          </div>
          <div class="flex gap-3">
            <IconField>
              <InputIcon>
                <i class="pi pi-search" />
              </InputIcon>
              <InputText v-model="filters['global'].value" placeholder="Search" />
            </IconField>
          </div>
        </div>
      </template>

      <!-- COLUMNS -->
      <template v-for="col of selectedColumns" :key="col.field">
        <Column
          :frozen="frozenColumns.includes(col.header)"
          :field="col.field"
          :header="col.header"
          :align-frozen="frozenColumns.includes(col.header) && 'right'"
          sortable
        >
          <template #body="slotProps">
            <span v-if="col.header === 'Action'">
              <Button
                @click="handleSelectUnit(slotProps.data, activateCallback)"
                label="Select Unit"
                icon="pi pi-arrow-right"
                iconPos="right"
                size="small"
              />
            </span>
            <span v-else>
              {{ slotProps.data[col.field] }}
            </span>
          </template>
        </Column>
      </template>

    </DataTable>
  </div>
</template>