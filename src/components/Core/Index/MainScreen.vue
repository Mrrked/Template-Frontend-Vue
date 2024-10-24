<script setup lang="ts">
  import Button from 'primevue/button';
  import { useMainStore } from "../../../store/useMainStore";
  import { storeToRefs } from 'pinia';
  import ScreenMAmort from '../Screens/ScreenMAmort.vue';
  import ScreenYLease from '../Screens/ScreenYLease.vue';
  import { onMounted } from 'vue';

  defineProps<{
    activateCallback: Function
  }>()

  const mainStore = useMainStore()

  const {
    config,
    selected_payment_type
   } = storeToRefs(mainStore)

  const {
    handleReturnInquiryForm,
    handleReturnUnitSelection,
  } = mainStore

  onMounted(() => {
    console.log();
  })

</script>

<template>
  <!-- HEADER -->
  <ScreenMAmort v-if="selected_payment_type?.value === 'A'" :activateCallback="activateCallback" />
  <ScreenYLease v-else-if="selected_payment_type?.value === 'Y'" :activateCallback="activateCallback" />
  <!-- ACTION -->
  <div v-if="config.selectedOption === 'By Project | Block | Lot'"
    class="flex justify-start w-full gap-3"
  >
    <Button @click="handleReturnInquiryForm(activateCallback)"
      raised
      type="button"
      label="BACK"
      icon="pi pi-arrow-left"
    />
  </div>
  <div v-else-if="config.selectedOption === 'By Client\'s Name'"
    class="flex justify-start w-full gap-3"
  >
    <Button @click="handleReturnUnitSelection(activateCallback)"
      raised
      type="button"
      label="BACK"
      icon="pi pi-arrow-left"
    />
  </div>
</template>