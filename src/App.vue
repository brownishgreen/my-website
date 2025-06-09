<template>
  <div class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <SiteHeader />
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import SiteHeader from './components/SiteHeader.vue'
</script>

<style scoped></style>
