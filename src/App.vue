<script lang="ts" setup>
  import AppFooter from './components/Core/AppFooter.vue'
  import NavBar from './components/Core/NavBar.vue';
  import Toast from 'primevue/toast';
  import DynamicDialog from 'primevue/dynamicdialog';
  import ConfirmDialog from 'primevue/confirmdialog';

  import 'primeicons/primeicons.css'
  import { useRoute } from 'vue-router';
  import { useThemeStore } from './store/useThemeStore';

  const route = useRoute()
  const themeStore = useThemeStore()
</script>

<template>
  <!-- Confirm Dialog -->
  <ConfirmDialog></ConfirmDialog>
  <!-- TOAST -->
  <Toast />
  <!-- DynamicModal -->
  <DynamicDialog/>
  <!-- MAIN -->
  <main v-focustrap class="flex max-h-screen min-h-screen overflow-hidden ">
    <section v-if="route.meta.requiresAuth" class="flex flex-col w-full">
      <NavBar />
      <main class="flex flex-col flex-grow w-full overflow-auto">
        <section class="flex flex-col items-start justify-start flex-grow px-5 pb-5">
          <router-view/>
        </section>
        <AppFooter />
      </main>
    </section>
    <section v-else class="w-full">
      <router-view/>
    </section>
  </main>
</template>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  #app {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide arrows for Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>

<!--
    --p-stepper-step-title-color: var(--p-text-color);
    --p-stepper-step-number-border-color: var(--p-text-color);
    --p-stepper-step-number-color: var(--p-text-color);

-->

<style>

  .big-shadow {
    box-shadow: 0 0 15px gray;
  }

  .my-popover .p-popover-content {
    padding: 4px !important;
  }

  .my-popover::after, .my-popover::before {
    content: none !important;
  }

  @keyframes rgb-border {
    0% {
      color: rgb(255, 0, 0); /* Pure Bright Red */
      border-color: rgb(255, 0, 0);
      box-shadow: 0 0 10px rgba(255, 0, 0, 0.8); /* Red Glow */
    }
    20% {
      color: rgb(255, 50, 50); /* Bright Red with Slight Variation */
      border-color: rgb(255, 50, 50);
      box-shadow: 0 0 12px rgba(255, 50, 50, 0.8);
    }
    40% {
      color: rgb(255, 100, 100); /* Intense Light Red */
      border-color: rgb(255, 100, 100);
      box-shadow: 0 0 14px rgba(255, 100, 100, 0.8);
    }
    60% {
      color: rgb(255, 0, 0); /* Back to Pure Bright Red */
      border-color: rgb(255, 0, 0);
      box-shadow: 0 0 16px rgba(255, 0, 0, 0.8);
    }
    80% {
      color: rgb(200, 0, 0); /* Darker Red for Contrast */
      border-color: rgb(200, 0, 0);
      box-shadow: 0 0 18px rgba(200, 0, 0, 0.8);
    }
    100% {
      color: rgb(255, 0, 0); /* Pure Bright Red */
      border-color: rgb(255, 0, 0);
      box-shadow: 0 0 20px rgba(255, 0, 0, 1); /* Strong Red Glow */
    }
  }

  .animated-border {
    border-radius: 5px;
    animation: rgb-border 1.5s infinite; /* Faster animation loop */
    border-width: 2px;
    border-style: solid;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.8); /* Initial shadow */
  }
</style>