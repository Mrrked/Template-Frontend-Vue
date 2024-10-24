<script lang="ts" setup>
  import ProgressSpinner from 'primevue/progressspinner';
  import { inject, onMounted, Ref, ref } from 'vue';

  interface DialogData {
    label: string;
  }

  const dialogRef = inject<Ref<{ data: DialogData }> | null>("dialogRef", null);
  const label = ref<string>("");

  onMounted(() => {
    if (dialogRef && dialogRef.value) {
      label.value = dialogRef.value.data.label;
    }
  });
</script>


<template>
  <div class="flex flex-col items-center justify-center gap-3 p-1 text-xl font-semibold">
    {{ label ? label : 'Loading' }}
    <ProgressSpinner
      strokeWidth="3" fill="transparent"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
  </div>
</template>