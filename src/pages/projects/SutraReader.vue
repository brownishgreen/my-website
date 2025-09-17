<template>
  <HeroBanner
    bgImage="https://res.cloudinary.com/dube3xzga/image/upload/v1749956245/IMG_1187_d4ggrg.webp"
    emoji="📕"
    title="Diamond Sutra Reader 金剛經閱讀器"
    subtitle=""
  />
  <section
    class="about-container bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out"
  >
    <div class="max-w-3xl mx-auto px-6 py-12 items-start gap-8">
      <p class="mb-5 mt-5 dark:text-white">
        A web application for reciting and reflecting on the Diamond Sutra, designed to provide a
        verse-by-verse reading experience with interpretive notes and real-time reading
        progress.This project includes smooth animation effects, dark/light theme switching, and is
        built with Vue 3 and Vite. <br /><br />
        因為想要有一個邊誦讀一邊理解釋義的工具，所以開發了這個極簡的金剛經誦讀網頁應用程式，提供誦讀同時理解釋義的閱讀體驗，並且即時呈現閱讀進度。<br />
        此專案包含動畫特效、支援 RWD、閱讀深淺主題切換，使用 Vue 3、Vite 開發。
      </p>
      <div>
        <p class="mt-5 dark:text-white">此專案已部署於 GitHub Page：</p>
        <a
          href="https://brownishgreen.github.io/sutra-reader"
          class="mt-3 flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-all transform hover:scale-105 duration-200 ease-in-out"
          target="_blank"
        >
          <span class="text-sm">🔗</span>
          <span class="text-sm">部署頁面瀏覽</span>
        </a>
        <a
          href="https://github.com/brownishgreen/sutra-reader"
          target="_blank"
          class="mt-3 flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-all transform hover:scale-105 duration-200 ease-in-out"
        >
          <svg
            class="w-4 h-4 mr-2 text-zinc-900 dark:text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2.3c-3.2.7-3.8-1.5-3.8-1.5-.6-1.4-1.4-1.7-1.4-1.7-1.2-.8.1-.8.1-.8 1.3.1 2 .8 2 .8 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.4.1-2.8 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.4.2 2.5.1 2.8.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
            />
          </svg>
          <span class="text-sm">GitHub Repo</span>
        </a>
      </div>
      <div class="flex flex-col md:flex-row mt-5 justify-center items-start gap-6">
        <!-- photo1 with caption -->
        <figure class="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1750000215/%E6%88%AA%E5%9C%96_2025-06-15_%E6%99%9A%E4%B8%8A11.09.11_ytjln1.png"
            alt=""
            class="w-full rounded-md shadow-md object-cover"
          />
          <figcaption class="mt-2 text-xs text-gray-600 text-center">Bright mode view</figcaption>
        </figure>

        <!-- photo2 with caption -->
        <figure class="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1750000213/%E6%88%AA%E5%9C%96_2025-06-15_%E6%99%9A%E4%B8%8A11.09.55_vxkpk5.png"
            alt=""
            class="w-full rounded-md shadow-md object-cover"
          />
          <figcaption class="mt-2 text-xs text-gray-600 text-center">Dark mode view</figcaption>
        </figure>
      </div>
      <h2 class="text-xl mt-3 mb-3 dark:text-white">Feature 功能特色</h2>
      <p class="mt-5 dark:text-white">1.支援註解 tooltip 顯示，輔助理解經文內容</p>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749957142/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8811.12.10_s5i6w0.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">
          Annotation tooltips for enhanced comprehension of sutra content
        </figcaption>
      </figure>
      <p class="mt-5 dark:text-white">2. 支援 Light / Dark 模式切換（太陽 / 月亮圖示切換）</p>
      <p class="mt-5 dark:text-white">3. 使用 IntersectionObserver 每個章節依滑鼠滾動後柔和進場</p>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749956696/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.39.51_wixrxl.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">
          Supports Light / Dark mode toggle (sun/moon icon switching) <br />
          Smooth chapter entrance animation using IntersectionObserver on scroll
        </figcaption>
      </figure>
      <p class="mt-5 dark:text-white">4. 誦讀時即時計算進度，並顯示於 Footer 的進度條</p>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749956697/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.40.47_w1ewqb.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">
          Real-time reading progress tracking with a dynamic footer progress bar
        </figcaption>
      </figure>
      <p class="mt-5 dark:text-white">5. RWD 設計，手機與桌機皆可流暢使用</p>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749957441/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8811.17.02_ima8g7.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">
          Responsive Web Design for both desktop and mobile devices
        </figcaption>
      </figure>
      <p class="mt-5 dark:text-white">6. Vue Router 結構，支援 About / Contact 子頁面</p>
      <div class="flex flex-col md:flex-row mt-5 justify-center items-start gap-6">
        <!-- photo1 with caption -->
        <figure class="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749957793/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8811.22.12_ppscc9.png"
            alt=""
            class="w-full rounded-md shadow-md object-cover"
          />
          <figcaption class="mt-2 text-xs text-gray-600 text-center">
            Structured with Vue Router, including About subpage
          </figcaption>
        </figure>

        <!-- photo2 with caption -->
        <figure class="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749957792/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8811.22.26_fc86dr.png"
            alt=""
            class="w-full rounded-md shadow-md object-cover"
          />
          <figcaption class="mt-2 text-xs text-gray-600 text-center">
            Structured with Vue Router, including Contact subpages
          </figcaption>
        </figure>
      </div>
      <h2 class="text-xl mt-3 mb-3 dark:text-white">Tech Stack 技術棧</h2>
      <ul class="mt-5 dark:text-white">
        <li>
          - <span class="font-semibold">Vue 3</span>・Composition API +
          <code class="bg-gray-100 text-pink-600 px-1 rounded">&lt;script setup&gt;</code>
        </li>
        <li>
          -
          <span class="font-semibold">TypeScript</span>
        </li>
        <li>- <span class="font-semibold">Vite</span> 開發環境</li>
        <li>- <span class="font-semibold">SCSS Modules</span> + CSS Variable</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import HeroBanner from '../../components/HeroBanner.vue'
</script>
