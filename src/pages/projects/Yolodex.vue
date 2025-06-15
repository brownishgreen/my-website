<template>
  <HeroBanner
    bgImage="https://res.cloudinary.com/dube3xzga/image/upload/v1749953517/ChatGPT_Image_2025%E5%B9%B46%E6%9C%8815%E6%97%A5_%E4%B8%8A%E5%8D%8810_11_37_drqku2.png"
    emoji="📇"
    title="Yolodex"
    subtitle="A lightweight single-page CRM for managing contacts and their interactions. The split-panel UI lets you search, sort, create, edit, delete contacts and log calls / emails / meetings on a tidy timeline. Built with Vue 3, Vite and TypeScript, fully responsive."
  />
  <section
    class="about-container bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out"
  >
    <div class="max-w-3xl mx-auto px-6 py-12 items-start gap-8">
      <p class="mt-5 dark:text-white">
        靈感來自五零年代的 Rolodex 旋轉式名片架。
        Yolodex 是一款極簡 CRM，左側列表＋右側詳情同步更新，可為每位聯絡人新增「通話 / 信件 / 會議」等互動紀錄、你可以使用分類項目篩選出想要的清單並匯出。<br>
        RWD 設計，Vue 3、Vite、TypeScript 打造。<br>
        讓你透過一張張小卡片紀錄每段生命裡的美好情誼。
      </p>
      <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749885124/%E6%88%AA%E5%9C%96_2025-05-08_%E6%99%9A%E4%B8%8A10.40.17_xd7nn7.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              實際畫面
            </figcaption>
      </figure>
      <div>
        <p class="mt-5 dark:text-white">
        此專案已部署於 GitHub Page：
        </p>
        <a
          href="https://brownishgreen.github.io/yolodex-crm/"
          class="mt-3 flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-all transform hover:scale-105 duration-200 ease-in-out"
        >
          <span class="text-xl">🔗</span>
          <span class="text-sm">部署頁面瀏覽</span>
        </a>
        <a
          href="https://github.com/brownishgreen"
          target="_blank"
          class="mt-3 flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-all transform hover:scale-105 duration-200 ease-in-out"
        >
          <svg class="w-4 h-4 mr-2 text-zinc-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2.3c-3.2.7-3.8-1.5-3.8-1.5-.6-1.4-1.4-1.7-1.4-1.7-1.2-.8.1-.8.1-.8 1.3.1 2 .8 2 .8 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.4.1-2.8 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.4.2 2.5.1 2.8.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
            />
          </svg>
          GitHub Repository
        </a>
      </div>
        <h2 class="text-xl mt-3 mb-3 dark:text-white">
          Feature 功能與特色
        </h2>
        <p class="mt-5 dark:text-white">
          1. Live search by Name 搜尋聯絡人
      </p>
        <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749885122/%E6%88%AA%E5%9C%96_2025-05-08_%E6%99%9A%E4%B8%8A11.01.57_kg7pih.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              Live search by Name 搜尋聯絡人
            </figcaption>
        </figure>
        <p class="mt-5 dark:text-white">
          2. sort by Name/ Status/ Created Time  可選擇以名字、狀態、建立時間分類顯示清單
        </p>
        <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749954764/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8810.32.29_fmnnsj.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              sort by Name/ Status/ Created Time  可選擇以名字、狀態、建立時間分類顯示清單
            </figcaption>
        </figure>
        <p class="mt-5 dark:text-white">
          3. Add, Edit , Delete Contact 新增、編輯、刪除聯絡人並即時顯示
        </p>
        <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749954925/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8810.35.13_gi4jm8.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              Add, Edit , Delete Contact 新增、編輯、刪除聯絡人並即時顯示
            </figcaption>
        </figure>
        <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749885123/%E6%88%AA%E5%9C%96_2025-05-08_%E6%99%9A%E4%B8%8A11.01.24_llmuxk.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              新增 / 編輯聯絡人表單
            </figcaption>
        </figure>
        <p class="mt-5 dark:text-white">
          4. Add interaction. timeline updates instantly 新增互動紀錄並即時顯示於時間線上
        </p>
        <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749885121/%E6%88%AA%E5%9C%96_2025-05-08_%E6%99%9A%E4%B8%8A11.01.13_txduha.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              新增互動紀錄表單
            </figcaption>
        </figure>
        <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749885123/%E6%88%AA%E5%9C%96_2025-05-08_%E6%99%9A%E4%B8%8A11.15.55_rxvi3w.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              Add interaction. timeline updates instantly 新增互動紀錄並即時顯示於時間線上
            </figcaption>
        </figure>
        
        <p class="mt-5 dark:text-white">
          5. Export CSV file 可將搜尋/分類的聯絡人們匯出為 CSV 檔案
        </p>
        <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749885122/%E6%88%AA%E5%9C%96_2025-05-08_%E6%99%9A%E4%B8%8A11.01.57_kg7pih.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              篩選想要的資料後點擊匯出CSV按鈕
            </figcaption>
        </figure>
        <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749955104/%E6%88%AA%E5%9C%96_2025-06-15_%E4%B8%8A%E5%8D%8810.37.16_scq5ks.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              Export CSV file 可將搜尋/分類的聯絡人們匯出為 CSV 檔案
            </figcaption>
        </figure>
        <figure class="w-full md:w-full mt-5">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749885123/%E6%88%AA%E5%9C%96_2025-05-08_%E6%99%9A%E4%B8%8A11.02.54_h0epmy.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              匯出後的 CSV 檔案👆
            </figcaption>
        </figure>
        <h2 class="text-xl mt-3 mb-3 dark:text-white">
          RWD ( Mobile View)
    </h2>
    <div class="flex flex-col md:flex-row mt-5 justify-center items-start gap-6">
        <!-- photo1 with caption -->
        <figure class="w-full md:w-1/2">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749885121/%E6%88%AA%E5%9C%96_2025-05-08_%E6%99%9A%E4%B8%8A11.00.35_rmf4nc.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              手機瀏覽畫面
            </figcaption>
        </figure>
        
        <!-- photo2 with caption -->
        <figure class="w-full md:w-1/2">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749885124/%E6%88%AA%E5%9C%96_2025-05-08_%E6%99%9A%E4%B8%8A11.00.56_xkpbwb.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              點擊聯絡人後跳出詳細頁面
            </figcaption>
        </figure>
    </div>
    <div class="flex flex-col md:flex-row mt-5 justify-center items-start gap-6">
        <!-- photo1 with caption -->
        <figure class="w-full md:w-1/2">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749885120/%E6%88%AA%E5%9C%96_2025-05-08_%E6%99%9A%E4%B8%8A11.00.43_wzhprv.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              新增聯絡人表單
            </figcaption>
        </figure>
        
        <!-- photo2 with caption -->
        <figure class="w-full md:w-1/2">
            <img 
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1749885124/%E6%88%AA%E5%9C%96_2025-05-08_%E6%99%9A%E4%B8%8A11.01.05_cdnmuo.png" 
            alt="" 
            class="w-full rounded-md shadow-md object-cover" />
            <figcaption class="mt-2 text-xs text-gray-600 text-center">
              新增互動紀錄表單
            </figcaption>
        </figure>
    </div>
        <h2 class="text-xl mt-3 mb-3 dark:text-white">
          Tech Stack 技術棧
    </h2>
    <ul class="list-disc pl-6 space-y-2 text-gray-800 dark:text-white">
    <li>
      <span class="font-semibold">Vue 3</span>・Composition API +
      <code class="bg-gray-100 text-pink-600 px-1 rounded">&lt;script setup&gt;</code>
    </li>
    <li>
      <span class="font-semibold">TypeScript</span> 強型別模型
      (<code class="bg-gray-100 text-pink-600 px-1 rounded">types/contact.ts</code>)
    </li>
    <li>
      無後端：
      <span class="font-semibold">Reactive Array</span>
      暫存資料，重新整理即重置
    </li>
    <li>
      <span class="font-semibold">Vite</span> 開發環境
    </li>
    <li>
      <span class="font-semibold">SCSS Modules</span> + CSS Variable
    </li>
    <li>
      Use Font Awesome / Heroicons
    </li>
  </ul>

    </div>
    
  </section>
</template>

<script lang="ts" setup>
  import HeroBanner from '../../components/HeroBanner.vue';
</script>
