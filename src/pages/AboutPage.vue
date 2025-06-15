<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=7200"
    emoji="👽"
    title="About me and this website"
    subtitle=""
  />
  <main class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
    <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749997371/%E6%88%AA%E5%9C%96_2025-06-15_%E6%99%9A%E4%B8%8A10.22.15_c0qznx.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
        </figure>
      <h3 class="text-xl mt-3 mb-3 dark:text-white">關於我</h3>
      <a
          href="https://github.com/brownishgreen"
          target="_blank"
          class="mt-5 mb-5 inline-flex items-center text-sm hover:underline"
        >
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2.3c-3.2.7-3.8-1.5-3.8-1.5-.6-1.4-1.4-1.7-1.4-1.7-1.2-.8.1-.8.1-.8 1.3.1 2 .8 2 .8 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.4.1-2.8 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.4.2 2.5.1 2.8.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
            />
          </svg>
          GitHub brownishgreen – Overview
        </a>
      <p class="dark:text-white">
        Hi, 我是 Yuan 🙂<br />
        我於 2024/3 開始學習網頁全端開發，目前已經累積了一定數量的作品集，我的前後端技術皆以 JavaScript 為主，喜歡嘗試不同的框架和技術。此網站除了是個人作品集之外，它也是部落格和相簿。我想藉由這個不依賴社群平台的自由空間，主動掌握發布內容與呈現的方式。<br>
        我喜歡戶外游泳、閱讀、有樹的地方以及精簡生活，我希望盡可能擁有最少的物品。<br />
        <br />
        你可以透過這個網站，更了解我作為一個人類所重視的價值觀、我的生活、我的技術能力。<br>
        若你是招募人員或僱主，歡迎你雇用我。
      </p>
    </div>
  </main>
</template>

<script lang="ts" setup>
  import HeroBanner from '../components/HeroBanner.vue'
</script>
<style scoped class="scss">
  .content-container {
    width: 60%;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 100px;
  }
</style>
