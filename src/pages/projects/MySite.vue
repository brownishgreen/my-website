<template>
  <HeroBanner
    bgImage="https://res.cloudinary.com/dube3xzga/image/upload/v1749478307/u8925513441_httpss.mj.runawhBTOCmg4M_tree_in_the_wood_--chaos_a6ca7f5c-100f-428d-9373-f1b3b154d6af_1_w5l5tm.png"
    emoji="🐻"
    title="Site of Yuan | 個人網站 [Vue] "
    subtitle=""
  />
  <section
    class="about-container bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out"
  >
    <div class="max-w-3xl mx-auto px-6 py-12 items-start gap-8">
      <p class="dark:text-white">
        在開始學習編程之後，我希望有一個自己的頁面可以代表我，不只是作品集，同時可以展示：
      </p>
      <ul class="list-disc pl-6 mt-5 dark:text-white">
        <li>技術成長紀錄與專案歷程</li>
        <li>自學筆記與工具心得</li>
        <li>對生活、工作與哲學的思考片段和影像</li>
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
        <li><strong>PostCSS + Autoprefixer</strong>：自動補齊瀏覽器前綴，提高 CSS 相容性</li>
        <li><strong>Sass</strong>：部分排版、樣式邏輯複用與更清晰的結構管理</li>
      </ul>
      <p class="mt-5 dark:text-white">
        接下來我預計將技術類筆記與文章陸續搬遷進網站，並搭配
        <strong>Shiki</strong> 做程式碼區塊的語法高亮處理。 Shiki 是一個基於 VS Code 語法主題的
        highlighter，渲染結果漂亮且支援多種語言，特別適合需要兼顧技術可讀性與美感的網站設計。
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import HeroBanner from '../../components/HeroBanner.vue'
</script>
