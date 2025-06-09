<template>
  <div class="">
    <SiteHeader />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
function handleNavigation(page: string) {
  console.log('Navigate to:', page)
}
</script>


<style scoped>

</style>
