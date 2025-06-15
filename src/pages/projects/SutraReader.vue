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
        A web application for reciting and reflecting on the Diamond Sutra, designed to provide a verse-by-verse reading experience with interpretive notes and real-time reading progress.This project includes smooth animation effects, dark/light theme switching, and is built with Vue 3 and Vite. <br><br>
        因為想要有一個邊誦讀一邊理解釋義的工具，所以開發了這個極簡的金剛經誦讀網頁應用程式，提供誦讀同時理解釋義的閱讀體驗，並且即時呈現閱讀進度。<br>
        此專案包含動畫特效、支援 RWD、閱讀深淺主題切換，使用 Vue 3、Vite 開發。
      </p>
      <div class="flex flex-col md:flex-row mt-5 justify-center items-start gap-6">
        <!-- photo1 with caption -->
        <figure class="w-full md:w-1/2">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749956543/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8811.02.00_z0vuud.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
                Bright mode view
            </figcaption>
        </figure>
        
        <!-- photo2 with caption -->
        <figure class="w-full md:w-1/2">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749956853/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8811.07.12_kiczls.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
                Dark mode view
            </figcaption>
        </figure>
    </div>
    <h2 class="text-xl mt-3 mb-3 dark:text-white">
          Feature 功能特色
    </h2>
    <p class="mt-5 dark:text-white">
      1.支援註解 tooltip 顯示，輔助理解經文內容
    </p>
    <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749957142/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8811.12.10_s5i6w0.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              Annotation tooltips for enhanced comprehension of sutra content
            </figcaption>
    </figure>
    <p class="mt-5 dark:text-white">
      2. 支援 Light / Dark 模式切換（太陽 / 月亮圖示切換）
    </p>
    <p class="mt-5 dark:text-white">
      3. 使用 IntersectionObserver 每個章節依滑鼠滾動後柔和進場
    </p>
    <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749956696/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.39.51_wixrxl.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              Supports Light / Dark mode toggle (sun/moon icon switching) <br>
              Smooth chapter entrance animation using IntersectionObserver on scroll
            </figcaption>
    </figure>
    <p class="mt-5 dark:text-white">
      4. 誦讀時即時計算進度，並顯示於 Footer 的進度條
    </p>
    <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749956697/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.40.47_w1ewqb.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              Real-time reading progress tracking with a dynamic footer progress bar
            </figcaption>
    </figure>
    <p class="mt-5 dark:text-white">
      5. RWD 設計，手機與桌機皆可流暢使用
    </p>
    <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749957441/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8811.17.02_ima8g7.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              Responsive Web Design for both desktop and mobile devices
            </figcaption>
    </figure>
    <p class="mt-5 dark:text-white">
      6. Vue Router 結構，支援 About / Contact 子頁面
    </p>
    <div class="flex flex-col md:flex-row mt-5 justify-center items-start gap-6">
        <!-- photo1 with caption -->
        <figure class="w-full md:w-1/2">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749957793/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8811.22.12_ppscc9.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              Structured with Vue Router, including About subpage
            </figcaption>
        </figure>
        
        <!-- photo2 with caption -->
        <figure class="w-full md:w-1/2">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749957792/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8811.22.26_fc86dr.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              Structured with Vue Router, including Contact subpages
            </figcaption>
        </figure>
    </div>
    <h2 class="text-xl mt-3 mb-3 dark:text-white">
      Tech Stack 技術棧
    </h2>
    <ul>
    <li>- Vue 3</li>
    <li>- Vite</li>
    <li>- SCSS</li>
  </ul>
    




    </div>
  </section>
</template>

<script lang="ts" setup>
  import HeroBanner from '../../components/HeroBanner.vue';
</script>
