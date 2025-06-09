<template>
  <HeroBanner
    bgImage="https://www.notion.so/images/page-cover/met_winslow_homer_maine_coast.jpg"
    emoji="🇭🇺"
    title="Budapest, Hungary 24"
    subtitle=" "
  />
  <main class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
      <span><strong>｜</strong>Just a photo dump for now :S too busy to write the full travel
        story.</span
      >
    </div>
  </main>
</template>

<script setup lang="ts">
  import HeroBanner from '../../components/HeroBanner.vue'
</script>

<style scoped class="scss">
.content-container {
    column-count: 1;
    column-gap: 1.5rem;
    width: 60%;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 100px;}
</style>
