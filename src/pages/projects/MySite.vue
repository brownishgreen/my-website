<template>
  <HeroBanner
    bgImage="https://res.cloudinary.com/dube3xzga/image/upload/v1749478307/u8925513441_httpss.mj.runawhBTOCmg4M_tree_in_the_wood_--chaos_a6ca7f5c-100f-428d-9373-f1b3b154d6af_1_w5l5tm.png"
    emoji="🐻"
    title="Site of Yuan | 個人網站 [Vue] "
    subtitle=""
  />
  <section
    class="about-container article-container glass-article transition-all duration-[1500ms] ease-in-out mb-20"
  >
    <div class="max-w-3xl mx-auto px-6 py-12 items-start gap-8">
      <p class="dark:text-white">
        在開始學習編程後，我希望有一個頁面代表自己，不只是作品集，同時可以展示：
      </p>
      <ul class="list-disc pl-6 mt-5 dark:text-white">
        <li>技術成長與專案歷程</li>
        <li>編程自學筆記與工具心得</li>
        <li>對生活、工作與哲學的思考隨筆和影像</li>
      </ul>

      <p class="mt-5 dark:text-white">
        也由於學習筆記都在 Notion，很自然的使用 Notion Site 製作個人網站。起初看中幾個優點包含：
      </p>
      <ul class="list-disc pl-6 mt-5 dark:text-white">
        <li>快速記錄：打開頁面用 Markdown 很快就可以完成一篇筆記</li>
        <li>所見即所得：用滑鼠拖曳即可編排段落、圖片、代辦清單或資料庫</li>
        <li>跨平台同步：手機、平板與電腦版本一致，隨時可以補充想法</li>
        <li>整合性高：可以插入程式碼區塊、Figma、YouTube、Google Apps 等外部內容</li>
        <li>維護負擔低：不需要自己處理主機與部署，適合初學者快速上手</li>
        <li>設計簡潔：原生版型風格清爽，適合本就喜歡簡單風格的我</li>
      </ul>

      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1750560509/%E6%88%AA%E5%9C%96_2025-06-22_%E4%B8%8A%E5%8D%8810.47.50_fgbgnc.png"
          alt="使用 Notion Site 製作的網站"
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">
          使用 Notion Site 製作的網站
        </figcaption>
      </figure>

      <p class="mt-5 dark:text-white">
        當時來說，Notion
        是最無痛的起點，能夠迅速整理過去的學習紀錄，並對外展示我在不同領域的探索。不過在使用了一段時間的
        Notion Site 後，漸漸發現它雖然方便，卻有幾個無法忽略的限制：
      </p>
      <ul class="list-disc pl-6 mt-5 dark:text-white">
        <li>月費，長期使用成本不低</li>
        <li>客製化程度有限，無法完全掌握風格與互動體驗</li>
        <li>SEO、載入速度與資料管理彈性都受限於平台本身</li>
      </ul>

      <p class="mt-5 dark:text-white">
        於是我開始思考，既然我本來就有使用 Vue
        框架的學習計畫，何不就把這個網站當作實戰練習？這樣不僅能省下 Notion Site
        的月費，也能一步步實作出一個完全屬於自己的個人網站，從架構、設計到內容管理都親手打造。
      </p>
      <div class="flex flex-col md:flex-row mt-5 justify-center items-start gap-6">
        <!-- photo1 with caption -->
        <figure class="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1750560897/%E6%88%AA%E5%9C%96_2025-06-22_%E4%B8%8A%E5%8D%8810.48.58_axmvho.png"
            alt=""
            class="w-full rounded-md shadow-md object-cover"
          />
          <figcaption class="mt-2 text-xs text-gray-600 text-center">依照原本的頁面切版</figcaption>
        </figure>

        <!-- photo2 with caption -->
        <figure class="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1750560878/%E6%88%AA%E5%9C%96_2025-06-22_%E4%B8%8A%E5%8D%8810.49.39_zamna3.png"
            alt=""
            class="w-full rounded-md shadow-md object-cover"
          />
          <figcaption class="mt-2 text-xs text-gray-600 text-center">
            自己搭建可以加入切換明暗模式的功能 🌜
          </figcaption>
        </figure>
      </div>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1750560877/%E6%88%AA%E5%9C%96_2025-06-22_%E4%B8%8A%E5%8D%8810.53.20_ungza0.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">
          自己搭建的 Changlog 畫面精緻非常多!
        </figcaption>
      </figure>
      <br />
      <h2 class="text-xl mt-3 mb-3 dark:text-white">技術實踐與規劃</h2>
      <p class="mt-5 dark:text-white">個人網站目前使用的技術棧如下：</p>
      <ul class="list-disc pl-6 mt-4 dark:text-white">
        <li>
          <strong>Vue 3 + TypeScript</strong>：採用 Composition API
          進行組件開發，提高可維護性與擴展性
        </li>
        <li>
          <strong>Vite</strong>：超快的開發伺服器與建構工具，搭配
          <code class="text-sm font-mono bg-zinc-200 dark:bg-zinc-800 px-1 rounded">vue-tsc</code>
          進行型別檢查
        </li>
        <li><strong>Vue Router</strong>：處理多頁面與路由導向</li>
        <li><strong>Tailwind CSS</strong>：輕量的原子化 CSS 框架，快速打造簡約一致的風格</li>
        <li><strong>Prettier + ESLint</strong>：維持統一的程式碼風格與靜態檢查</li>
        <li><strong>Sass</strong>：部分排版、樣式邏輯複用與更清晰的結構管理</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import HeroBanner from '../../components/HeroBanner.vue'
</script>

<style scoped lang="scss">
  .article-container {
    width: 93%;
    max-width: 780px;
    margin: 0 auto;
    padding: 2rem;
    padding-bottom: 100px;
  }
</style>
