<template>
  <div class="">
    <SiteHeader />
    <HomePage />
    <AboutPage />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HomePage from '/src/pages/HomePage.vue'
import AboutPage from '/src/pages/AboutPage.vue'
function handleNavigation(page: string) {
  console.log('Navigate to:', page)
}
</script>


<style scoped>

</style>
