<template>
  <div class="transition-all duration-[1500ms] ease-in-out">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
  import SiteHeader from './components/SiteHeader.vue'
  import SiteFooter from './components/SiteFooter.vue'
</script>

<style scoped></style>
