<script lang="ts" setup>
  import { useCoreDataStore } from '../../store/useCoreDataStore';
  import { onMounted } from 'vue'

  const coreDataStore = useCoreDataStore()

  onMounted(() => {
    coreDataStore.fetchData()
  })

</script>

<template>
  <div class="flex flex-col w-full gap-3 pt-4">
    Main Container
  </div>
</template>