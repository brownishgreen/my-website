<template>
  <HeroBanner
    bgImage="https://res.cloudinary.com/dube3xzga/image/upload/v1749720921/IMG_0138_heki5o.jpg"
    emoji="🇹🇼"
    title="Taiwan Re:Love 25"
    subtitle="2025 失業期間的重新愛上台灣環島計畫 "
  />
  <main class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
      <h2 class="text-xl mt-3 mb-3 dark:text-white">Coming Soon 🏝️</h2>
    </div>
  </main>
</template>

<script setup lang="ts">
  import HeroBanner from '../../components/HeroBanner.vue'
</script>

<style scoped class="scss">
  .content-container {
    width: 80%;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  span {
    @media (max-width: 1536px) {
      font-size: 0.5rem;
    }
  }
</style>
