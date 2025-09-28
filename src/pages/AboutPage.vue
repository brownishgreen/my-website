<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1684682025585-1d77e17ec2f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    emoji="👽"
    title="About"
    subtitle=""
  />
  <main class="min-h-screen bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749997371/%E6%88%AA%E5%9C%96_2025-06-15_%E6%99%9A%E4%B8%8A10.22.15_c0qznx.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
      </figure>
      <br />
      <h3 class="text-xl mt-3 mb-3 dark:text-white">關於我</h3>
      <br />
      <p class="dark:text-white">
        你好，我是 Yuan。<br /><br />
        自 2024 年開始接觸網頁開發，主要使用 JavaScript，涵蓋前後端技術。<br /><br />
        這裡是我個人的空間，展示專案與學習筆記之餘也紀錄生活趣聞與里程碑。<br /><br />
        <a
          href="https://yuanologue.com/#/user-manual"
          class="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-all transform hover:scale-105 duration-200 ease-in-out"
        >
          <span class="text-xl">👉</span>
          <span class="text-sm">欲了解更多請參閱我的個人使用說明書</span>
        </a>
      </p>
      <div class="flex flex-wrap gap-4 w-full mt-5 mb-5">
        <!-- GitHub -->
        <a
          href="https://github.com/brownishgreen"
          target="_blank"
          class="inline-flex items-center text-sm text-zinc-700 dark:text-white hover:text-blue-500 font-medium hover:scale-105 duration-100 ease-in-out"
        >
          <svg class="w-4 h-4 mr-2 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2.3c-3.2.7-3.8-1.5-3.8-1.5-.6-1.4-1.4-1.7-1.4-1.7-1.2-.8.1-.8.1-.8 1.3.1 2 .8 2 .8 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.4.1-2.8 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.4.2 2.5.1 2.8.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
            />
          </svg>
          GitHub
        </a>

        <!-- Email -->
        <a
          href="mailto:jjjjjimyuan@gmail.com"
          class="inline-flex items-center text-sm text-zinc-700 dark:text-white hover:text-blue-500 font-medium hover:scale-105 duration-100 ease-in-out"
        >
          <svg class="w-4 h-4 mr-2 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"
            />
          </svg>
          Email
        </a>

        <!-- Signal -->
        <a
          href="https://signal.me/#eu/BVxNbJY2rH2NtJuloNGUsd7tb4GlF-OQGI4VMCv9loJHgHcs-wtKh602PRB5mIPL"
          target="_blank"
          class="inline-flex items-center text-sm text-zinc-700 dark:text-white hover:text-blue-500 font-medium hover:scale-105 duration-100 ease-in-out"
        >
          <svg class="w-4 h-4 mr-2 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 1.93.46 3.75 1.27 5.37L0 24l6.63-1.74A11.96 11.96 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0zM5.34 10.5a.66.66 0 1 1 1.32 0 .66.66 0 0 1-1.32 0zm2.66 0a.66.66 0 1 1 1.32 0 .66.66 0 0 1-1.32 0zm2.66 0a.66.66 0 1 1 1.32 0 .66.66 0 0 1-1.32 0z"
            />
          </svg>
          Text me on Signal
        </a>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
  import HeroBanner from '../components/HeroBanner.vue'
</script>
<style scoped class="scss">
  .content-container {
    width: 80%;
    max-width: 780px;
    margin: 0 auto;
  }
</style>
