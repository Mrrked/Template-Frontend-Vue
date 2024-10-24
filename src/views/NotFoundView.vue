<script lang="ts" setup>
</script>

<template>
  <div class="flex flex-col items-center justify-center flex-1 w-full min-h-screen gap-3 ">
    <h1 class="font-semibold text-9xl">
      404
    </h1>
    <h2 class="text-5xl font-semibold">
      Page Not Found
    </h2>
    <p class="my-5 text-xl">
      Sorry, the page you are looking for does not exist.
    </p>
    <router-link
      to="/"
      class="px-5 py-2 tracking-wider font-semibold border-[2px] border-primary-color text-primary-color  rounded-sm hover:scale-105 focus:scale-105"
    >
      BACK TO MAIN PAGE
    </router-link>
  </div>
</template>