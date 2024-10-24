<script setup lang="ts">
  import { useConfirm } from "primevue/useconfirm";
  import Button from 'primevue/button';
  import { useMainStore } from "../../../store/useMainStore";

  const props = defineProps<{
    activateCallback: Function
  }>()

  const confirm = useConfirm();
  const mainStore = useMainStore();

  const reset_action = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    confirm.require({
      target: target,
      message: 'Are you sure you want to reset the whole form?',
      header: 'Confirm Reset Form',
      icon: 'pi pi-exclamation-triangle',
      rejectProps: {
        label: 'Cancel',
        severity: 'secondary',
      },
      acceptProps: {
        label: 'Confirm'
      },
      accept: () => {
        mainStore.handleExecuteReset(props.activateCallback)
      },
      reject: () => {
      }
    });
  };
</script>


<template>
  <Button @click="reset_action($event)"
    raised
    type="button"
    label="RESET"
  />
</template>