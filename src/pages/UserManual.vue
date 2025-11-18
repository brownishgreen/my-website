<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1515696955266-4f67e13219e8?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    emoji="📖"
    title="User Manual"
    subtitle=""
  />
  <main class="min-h-screen transition-all duration-[1500ms] ease-in-out mb-20">
    <div
      class="transition-all duration-[1500ms] ease-in-out article-container glass-article"
    >
      <div
        class="glass-article text-gray-800 p-6 rounded-lg shadow-md text-sm leading-relaxed max-w-full"
      >
        <p class="mb-4"><strong>個人使用說明書的功能：</strong></p>
        <ol class="list-decimal list-inside space-y-1 mb-4">
          <li>對齊原則與底線</li>
          <li>減少非必要的試探、重複申述</li>
          <li>建立共識，達到互動效率</li>
        </ol>
        <p class="mb-4">感謝你閱讀這份使用說明，希望也能讀到你的使用說明書。</p>
        <p class="text-gray-500 text-xs">最後更新時間：2025/11/16</p>
      </div>
      <br />
      <h2 class="text-xl mt-3 mb-3">個人特質</h2>

      <h3 class="text-l mt-3 mb-3">My CliftonStrengths</h3>
      <p class="text-sm mt-1 mb-3">
        克利夫頓優勢是一項由 Don Clifton
        主導開發的人才評估工具，旨在幫助人們認識並發揮自身的天賦強項。這項測驗由他在擔任蓋洛普公司（Gallup,
        Inc.）董事長期間開發。<br /><br />以下是我於 2022 年 6 月時在 Gallup 測出的前五天賦。
      </p>

      <div class="flex flex-col md:flex-row mt-5 justify-center items-stretch gap-6">
        <!-- content -->
        <figure class="w-full md:w-1/2 p-4 bg-gray-50 dark:bg-gray-800 rounded-md shadow-md flex flex-col">
          <p class="text-m mt-1 mb-3">My Top 5 Strengths</p>
          <ul class="list-decimal list-inside space-y-4 text-sm flex-grow">
            <li>
              Intellection 思維<br />思考、內省，常在腦中盤旋問題與概念，獨處時能產出最多 insight
            </li>
            <li>
              Individualization 個別化<br />擅長洞察每個人獨特之處，重視差異，並傾向依個體特質調整互動方式
            </li>
            <li>Empathy 同理心<br />能精細感知他人情緒，會用適當距離理解與接住他人</li>
            <li>Input 收集<br />對資訊、觀點、資源具有高度好奇與收集慾，喜歡建立筆記與知識系統</li>
            <li>Focus 專注<br />能長時間投入一件事，排除干擾、建立目標並持續前進，不輕易分心</li>
          </ul>
        </figure>

        <!-- photo -->
        <figure class="w-full md:w-1/2 flex">
          <img
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1753626554/%E6%88%AA%E5%9C%96_2025-07-27_%E6%99%9A%E4%B8%8A10.26.50_tkhd5l.png"
            alt=""
            class="w-full rounded-md shadow-md object-cover"
          />
        </figure>
      </div>
      <br />
      <br />
      <ul class="list-disc list-inside space-y-1">
        <li>對新奇的事物有著好奇心</li>
        <li>珍視誠摯、深刻的對談</li>
        <li>想辦法規避瑣碎的小事，熱愛的事會沈迷其中（但或許也是別人眼裡的無聊小事）</li>
      </ul>
      <br />
      <h2 class="text-xl mt-3 mb-3">正在克服的弱項</h2>
      <ul class="list-disc list-inside space-y-1">
        <li>主動與珍視的人保持規律互動，維繫情誼</li>
        <li>保持更多的傾聽，思考，再輸出。</li>
      </ul>
      <br />
      <h2 class="text-xl mt-3 mb-3">自我覺察</h2>
      <ul class="list-disc list-inside space-y-1">
        <li>萬事萬物皆無常，永遠保持謙虛，一生持續學習</li>
        <li>心理健康和生理健康一樣重要</li>
        <li>責任永遠是自己的</li>
      </ul>
      <br />
      <h2 class="text-xl mt-3 mb-3">動機</h2>
      <ul class="list-disc list-inside space-y-1">
        <li>了解自己「為何而做一件事」更能激發我，反之會感到無力和混亂</li>
      </ul>
      <br />
      <h2 class="text-xl mt-3 mb-3">哲學</h2>
      <ul class="list-disc list-inside space-y-1">
        <li>
          不急著為人生大哉問給出答案（例：生命意義），太多問題是用模糊的詞彙堆疊起來的，看似重要，實則無解。
        </li>
        <li>快樂是短暫的，保持平靜 > 追求快樂</li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts" setup>
  import HeroBanner from '../components/HeroBanner.vue'
</script>
<style scoped class="scss">
  .article-container {
    width: 80%;
    max-width: 780px;
    margin: 0 auto;
    padding: 2rem;
    padding-bottom: 100px;
  }

  li {
    text-indent: -1.5em;
    padding-left: 1.5em;
  }
</style>
