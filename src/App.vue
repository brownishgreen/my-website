<template>
  <div class="">
    <SiteHeader />
    <HeroBanner 
    bgImage="https://www.notion.so/images/page-cover/met_winslow_homer_maine_coast.jpg"
    emoji="🥛"
    title="Site of Yuan"
    subtitle="Where I write and collect moments"/>
    <HomePage />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroBanner from './components/HeroBanner.vue'
import HomePage from '/src/pages/HomePage.vue'

function handleNavigation(page: string) {
  console.log('Navigate to:', page)
}
</script>


<style scoped>

</style>
