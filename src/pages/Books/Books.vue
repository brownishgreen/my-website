<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=7200"
    emoji="📚"
    title="Books"
    subtitle="Book I have read"
  />
  <main class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
    <br>
        <blockquote
          class="italic text-lg mb-6 border-l-4 pl-4 border-zinc-300 dark:border-zinc-700"
        >
          Read the Best 100 Books Over and Over Again.
          <span class="block text-sm mt-2 text-zinc-500">—— Naval Ravikant</span>
        </blockquote>
        <p class="mt-5 dark:text-white">
          這個頁面收錄的是我認為值得反覆閱讀的書單。它們在我人生某個階段提供了關鍵的啟發與支撐。
        </p>
        <p class="mt-5 dark:text-white">
          有些書讓我調整了看世界的角度，有些則幫助我活得更清醒。也有些書在我迷惘時，像盞燈領著我前行。
        </p>
        <p class="mt-5 dark:text-white">
          我會持續在這裡紀錄篩選過的書籍。
        </p>
    </div>
  </main>
</template>

<script lang="ts" setup>
  import HeroBanner from '../../components/HeroBanner.vue'
</script>
<style scoped class="scss">
  .content-container {
    width: 60%;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 100px;
  }
</style>
