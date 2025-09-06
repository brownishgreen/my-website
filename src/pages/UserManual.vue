<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1515696955266-4f67e13219e8?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    emoji="📖"
    title="User Manual"
    subtitle=""
  />
  <main class="min-h-screen bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
      <div
        class="bg-amber-50 dark:bg-gray-800 text-gray-800 p-6 rounded-lg shadow-md text-sm leading-relaxed max-w-full"
      >
        <p class="mb-4 dark:text-white"><strong>個人使用說明書的功能：</strong></p>
        <ol class="list-decimal list-inside space-y-1 mb-4 dark:text-white">
          <li>對齊原則與底線</li>
          <li>減少非必要的試探、重複申述</li>
          <li>建立共識，達到互動效率</li>
        </ol>
        <p class="mb-4 dark:text-white">
          感謝你閱讀這份使用說明，希望也能讀到你的使用說明書。
        </p>
        <p class="text-gray-500 text-xs">最後更新時間：2025/08/20</p>
      </div>
      <br />
      <h2 class="text-xl mt-3 mb-3 dark:text-white">♟️ 更新此刻，我正在投入的事情</h2>
      <ul class="list-disc list-inside space-y-1 dark:text-white">
        <li>學習如何休息</li>
        <li>複習與整理網頁開發的知識</li>
        <li>完成泰語拼字學習，以能閱讀泰語版小王子為階段目標</li>
        <figure class="w-full md:w-full mt-5">
          <img
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1753633906/IMG_4719_ddsjat.jpg"
            alt=""
            class="w-1/2 rounded-md shadow-md object-cover"
          />
        </figure>
      </ul>
      <br /><br />
      <h2 class="text-xl mt-3 mb-3 dark:text-white">👽 個人特質</h2>

      <h3 class="text-l mt-3 mb-3 dark:text-white">My CliftonStrengths</h3>
      <p class="text-sm mt-1 mb-3 dark:text-white">
        克利夫頓優勢是一項由 Don Clifton
        主導開發的人才評估工具，旨在幫助人們認識並發揮自身的天賦強項。這項測驗由他在擔任蓋洛普公司（Gallup,
        Inc.）董事長期間開發。<br /><br />以下是我於 2022 年 6 月時在 Gallup 測出的前五天賦。
      </p>

      <div class="flex flex-col md:flex-row mt-5 justify-center items-start gap-6">
        <!-- content -->
        <figure class="w-full md:w-1/2 p-4 bg-gray-50 dark:bg-gray-800 rounded-md shadow-md">
          <br />
          <p class="text-m mt-1 mb-3 dark:text-white">My Top 5 Strengths</p>
          <ul class="list-decimal list-inside space-y-4 text-sm dark:text-white">
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
          <br /><br />
        </figure>

        <!-- photo -->
        <figure class="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dube3xzga/image/upload/v1753626554/%E6%88%AA%E5%9C%96_2025-07-27_%E6%99%9A%E4%B8%8A10.26.50_tkhd5l.png"
            alt=""
            class="w-full rounded-md shadow-md object-cover"
          />
        </figure>
      </div>

      <br />
      <p class="text-l mt-3 mb-3 dark:text-white">更多</p>
      <ul class="list-disc list-inside space-y-1 dark:text-white">
        <li>對人有天然的好奇心，喜歡觀察人</li>
        <li>具有同理心，能理解他人情緒，但不容易被情緒帶走，也不認為「安慰」是必要的應對方式</li>
        <li>比起表面寒暄，更珍惜真誠又深刻的對談</li>
        <li>朋友非常少，也多不起來。偏好慢熟深交，關係一旦認定，真誠長久</li>
        <li>能長時間沉浸在自己設定的目標中，自我驅動</li>
        <li>對瑣碎的小事無興致，熱愛的主題會全神貫注（但或許也是別人眼裡的無聊小事）</li>
        <li>生活上的小決策儘量簡單快速或不做決策，重大決策需要花時間搜集資料並審慎規劃</li>
      </ul>
      <br /><br />
      <h2 class="text-xl mt-3 mb-3 dark:text-white">💻 工作中的我</h2>
      <ul class="list-disc list-inside space-y-1 dark:text-white">
        <li>比私底下的我更開朗，工作是我社交能量的主要出口</li>
        <li>認為事情一定有更好的方式、工具可以讓它更有效率，持續並主動優化</li>
        <li>自知不是天才型的頂級人才，開局或許稍嫌遲緩，技能點起來（上手）後挺凱瑞的</li>
        <li>自己的任務完成後樂於主動協助團隊其他成員。</li>
        <li>不擺架子個性好，均衡團隊裡一顆正向的螺絲釘、一罐溫暖的潤滑劑</li>
        <li>專注、深度導向，不喜浮於表面或無意義的忙碌 / 會議</li>
        <li>交代任務時明確告訴我你的需求，並制定階段性對頻會議，但過程不干涉，我會表現得比較好</li>
        <li>重視專心時間，喜歡非同步溝通，喜歡思緒不會突然被打斷</li>
        <li>工作時多數時間是很快樂的，把我放到哪個位子我都能自己找到成就感</li>
        <li>習慣把事情記下來整理、歸檔，建構日後可回顧 / 搜尋的系統</li>
        <li>習慣從整理桌面開始進入狀態，當你看到我在擦桌子，就是準備幹大事</li>
      </ul>
      <br />
      <br />
      <h2 class="text-xl mt-3 mb-3 dark:text-white dark:text-white">🌱 正在克服的弱項</h2>
      <ul class="list-disc list-inside space-y-1 dark:text-white">
        <li>正在練習主動與珍視的人保持規律互動，維繫情誼</li>
        <li>
          傾向根據生活經驗快速判斷他人，正在學習更開放觀察
        </li>
        <li>永遠保持更多的傾聽，思考，再輸出。</li>
      </ul>
      <br />
      <br />
      <h2 class="text-xl mt-3 mb-3 dark:text-white">🪔 自我覺察</h2>
      <ul class="list-disc list-inside space-y-1 dark:text-white">
        <li>永遠保持謙虛，終其一生持續學習。因為世界是無常的、隨時都在變化的</li>
        <li>心理健康和生理健康一樣重要</li>
        <li>遇到挫折時先內觀，不把責任推向他人或環境</li>
      </ul>
      <br />
      <br />
      <h2 class="text-xl mt-3 mb-3 dark:text-white">🔥 動機</h2>
      <ul class="list-disc list-inside space-y-1 dark:text-white">
        <li>為了某個明確方向長期持續投入的過程，讓我感到充實而平靜</li>
        <li>了解自己為何而做每一件事更能激發我，反之會感到無力和混亂</li>
        <li>他人因為我的存在、方式、或我做過的事而感到有所收穫，比直接稱讚我更有重量。</li>
      </ul>
      <br />
      <h2 class="text-xl mt-3 mb-3 dark:text-white">💬 溝通</h2>
      <ul class="list-disc list-inside space-y-1 dark:text-white">
        <li>傾向用理性清楚的語言傳達情緒與觀點，避免情緒綁架或過度渲染</li>
        <li>重視對話的「本質」，不追求講話多，而是講得剛剛好且有意義</li>
        <li>不喜歡拐彎抹角和試探，語言講求乾淨、誠實、無攻擊性的直接</li>
        <li>說服我之前，你需要弄清楚你想說服我什麼；反之亦然，我也會弄清楚我想說服你什麼。</li>
        <li>面對衝突時，不急於回應，不與憤怒或混亂的人爭論，寧可拉開距離</li>
      </ul>
      <br />
      <!-- <h2 class="text-xl mt-3 mb-3 dark:text-white">👓 哲學</h2>
      <ul class="list-disc list-inside space-y-1 dark:text-white">
        <li>
          不急著為人生大哉問給出答案（例：生命意義），太多問題是用模糊的詞彙堆疊起來的，看似重要，實則無解。
        </li>
        <li>
          事實本身是中性的，情緒則是人類主觀經驗的映射，也應該是中性的。兩者都值得觀察，但不必過度著墨
        </li> -->
        <!-- <li>
          不會被「一定要有目標」的說法綁架，有時清醒的存在就已足夠，很多人一生做不到清醒的存在著
        </li> -->
        <!-- <li>快樂是短暫的，保持平靜比追求快樂重要多了</li> -->
      <!-- </ul>
      <br /> -->
      <!-- <h2 class="text-xl mt-3 mb-3 dark:text-white">🦦 關係</h2>
      <ul class="list-disc list-inside space-y-1 dark:text-white">
        <li>會走心的類型 1.強者 2.靈魂純善</li>
        <li>暗戀是浪漫的，暗戀是我的個人行為，與對方無關</li>
        <li>若要走入一段關係，非得是靈魂能夠對話、精神可以共鳴，並肩作戰對抗世界的隊友</li>
        <li>透過養狗，本人規律分泌 Oxytocin，因此感情不是剛需，也不是情緒補給</li>
      </ul> -->
      <br />
      <br />
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
    padding-bottom: 100px;
  }

  li {
    text-indent: -1.5em;
    padding-left: 1.5em;
  }
</style>
