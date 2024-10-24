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
  import { useConfigStore } from '../../../store/useConfigStore';

  defineProps<{
    activateCallback: Function
  }>()

  type Column = {
    field: string,
    header: string,
  }

  const mainStore = useMainStore()
  const configStore = useConfigStore()

  const {
    clients_data,
    clients_column,
  } = storeToRefs(mainStore)

  const { handleSearchClientUnits } = mainStore


  const client_dt = ref();
  const selectedData = ref();
  const selectedColumns = ref<Column[]>(clients_column.value);

  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
</script>

<template>
  <!-- MAIN DATATABLE -->
  <DataTable
    :value="clients_data"
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
    class="w-full"
  >
    <!-- HEADER -->
    <template #header>
      <div class="flex justify-between gap-3">
        <div class="text-xl font-bold">
          Client Query Results
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
        :field="col.field"
        :header="col.header"
        sortable
      >
        <template #body="slotProps">
          <span v-if="col.header === 'Action'">
            <Button
              @click="handleSearchClientUnits(activateCallback, slotProps.data.CACCT)"
              label="Search Units"
              icon="pi pi-search"
              iconPos="right"
              size="small"
            />
          </span>
          <span v-else-if="col.header === 'Date of Birth'">
            {{ configStore.formatDate1(slotProps.data[col.field]) }}
          </span>
          <span v-else>
            {{ slotProps.data[col.field] }}
          </span>
        </template>
      </Column>
    </template>
  </DataTable>
</template>