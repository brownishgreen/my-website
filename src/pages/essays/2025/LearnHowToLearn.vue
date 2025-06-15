<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    emoji="👓"
    title="learn how to learn"
    subtitle="🗓️ 2025/01/12"
  />
  <main class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div class="article-container">
      <div class="flex flex-row gap-6 items-start"></div>
      <h2 class="text-md mt-3 mb-3 dark:text-white">
        <strong>|</strong> 此篇文章整理了我在 2024 的這一年學習如何學習的過程
      </h2>
      <p class="dark:text-white">
        在 2023 年底決定放下年齡做個無懼的少年，立了 3 個學習的 flag：<br />
        <br />
        1.探索一項技能：我挑戰的是學習編程<br />
        2.學習一門全新的語言：泰語<br />
        3.游泳，克服 32 年來的恐懼 & 培養一項不會太痛苦且在死前都可以做的運動<br />
        <br />
        經歷一整年琢磨並成功學會、持續學習以上三件事情後，將關於學習的一切紀錄下來。
      </p>
      <br />
      <img
        src="https://images.unsplash.com/photo-1651796699697-d04554725195?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="confused"
        class="mt-5"
      />
      <br />
      <p class="dark:text-white">
        過去我是被動的學習者，知識與工作技能皆來自學校教育、工作要求而習得，沒有什麼目的、不太知道自己的喜好更別提志業，被社會洪流推擠著前進，Miserable。
      </p>
      <br />
      <h2 class="text-xl mt-3 mb-3 dark:text-white">探索自己屬於何種學習者</h2>
      <p class="dark:text-white">
        初探編程時，ALPHA Camp
        引導我的第一件事情是：認識自己屬於什麼樣學習者。在學習的過程中，每個人都有獨特的吸收、理解與應用知識的方式，認識自己的學習類型不僅能提升學習效率，更能在學不動了的時候，讓自己能以低能量但持續的方式學習。
        學習類型大致分為四類：<br />
        <br />
        1. 視覺型的學習者善於透過圖片、圖表等視覺化資訊理解概念<br />
        2. 聽覺型依賴聲音、討論或聆聽來記憶<br />
        3. 讀寫型偏好文字資料，如筆記和文章<br />
        4. 動覺型則透過實作、動手操作來學得更快。<br />
        <br />
        類型並非絕對，經過一年的學習後我了解到各個項目可以應用不同的學習方式去刺激大腦學習。有意識地透過觀察學習過程、結果、反芻、再嘗試，直到找出何種方式在項目上能夠讓自己最專注、記憶最深刻，教如何學習的書籍通常會從腦神經科學的角度分享，有興趣的話可以再往深探究。<br />
        <br />
        認識自己的學習者特質是非常重要的，以我自己來說，在複雜的編程學習中，我初期仰賴圖解（例如畫出MVC架構、OAuth
        流程），和不斷重複的試錯來提升理解和加深記憶，在中後期，我則偏好讀文件、把實作流程整理筆記。<br />
        <br />
        學習泰語口說的時候，因為初期學習發音、對話，在學習泰語的拼字前，講義裡皆是音標，更多是仰賴音檔跟著複誦來提升記憶，我的泰語老師，德老師也說講義非必須，但一定要聽、要開口複誦。<br />
        <br />
        學習游泳方面，真的挺嚇人的！我記得抵達游泳池聞到泳池味時，可以感覺到身體很排斥，但是答應自己的事情真的想要完成，付出金錢或許也是克服恐懼的原因之一。<br />
        但最讓人意外的，幫助我學會的關鍵是小紅書和 YouTube 上的影片 😂
        在學習游泳的最後幾期我遲遲無法學會自由式（雖然我當初立 flag
        🚩時，目標是學會一式就已經是菩薩垂憐，但我較真了），總之我的划手與腳的律動不足以讓我在水裡持續前進，最後是藉著網路上泳者的影片，大約是視覺、聽覺連合大腦與肌肉的連結後終於學會了自由式。<br />
        <br />
        在最後 1 週教練問我有沒有練習時，我說有看小紅書上的影片 😳。
      </p>
      <br />
      <h2 class="text-xl mt-3 mb-3 dark:text-white">Environment, Environment, Environment.</h2>
      <p class="dark:text-white">
        如何學習的書籍裡，會提到環境的重要性，過去所處的環境形塑了我，遺憾的是這個環境沒能使我成為理想的樣子，那麼就可以嘗試更換、打造一個新的環境。
      </p>
      <br />
      <h2 class="text-lg mt-3 mb-3 dark:text-white">Hardware ⚙️</h2>
      <p class="dark:text-white">
        適當的環境可以提升專注力，讓自己享受在當下的狀態，反之如果處在一個容易分心、吵雜、不舒服的環境，會不斷的消耗我們的認知資源，使學習變得吃力，所以打造一個能夠獨自深度學習的空間很重要。<br />
        <br />
        1. 每週清理空間<br />

        僅保留必要物品，減少雜物帶來的視覺干擾，營造清爽的學習空間，桌上只會出現必需品，避免注意力分散。<br />
        <br />
        2. 培養身體固定模式<br />
        為學習劃定專屬區域和時間，比任何人都早起你就可以享受無人打擾的品質時間，讓身體與心智在進入此空間/時間段時自動進入學習模式。
        <br />
        <br />
        3. 光線與空氣品質 自然光與乾淨的空氣能提高注意力，避免疲勞感。 <br /><br />4.
        減少數位干擾<br />
        將手機、社交媒體通知關閉，讓大腦專注於輸入與思考。 <br /><br />5.一個行前的固定行為<br />
        在學習開始前簡單的、固定的行為，可以使心態迅速進入狀態。<br />我超級有效的行為是先打坐 5-10
        分鐘，播放特定的 BGM Playlist 、用濕紙巾擦拭桌面與螢幕、鍵盤、滑鼠再開始。<br />
        <br />
      </p>
      <h2 class="text-lg mt-3 mb-3 dark:text-white">Software 👥</h2>
      <p class="dark:text-white">
        環境也包含了你身邊的人，如果你身邊都是喜歡學習、談方法、有目標的人，你耳濡目染會將這些體現於生活中。<br />
        通知你的家人，你要有所改變，請他們遵守一些你定下規矩。比方說我妹沒還跟我住在一起時，約好下班回到家如果我沒有開門或是看到我在房間裡請不要跟我說話，或是先傳訊息給我，我專心時間過後回覆，這是應用馬斯克也推薦的非同步溝通
        （ Asynchronous Communication）。<br />
        <br />
        <a
          href="https://strategicleaders.com/elon-musk-work-ethic-10-secrets-for-insane-success/?utm_source=chatgpt.com"
          class="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-all transform hover:scale-105 duration-200 ease-in-out"
          target="_blank"
        >
          <span class="text-xl">🐎</span>
          <span class="text-sm">延伸閱讀：Elon Musk Work Ethic: 10 Secrets for Insane Success</span>
        </a>
      </p>
      <br />
      <h2 class="text-lg mt-3 mb-3 dark:text-white">Progressive Overload 🏋️</h2>
      <p class="dark:text-white">
        Progressive
        Overload（漸進式超負荷）是健身的核心原則，意思是為了讓肌肉成長，你要持續地、漸進地增加負荷，增加重量、次數、密度或縮短組間休息。套用到學習這件事上，專注力跟學習力也是神經跟肌肉在幹活。
      </p>
      <br />
      <h2 class="text-md mt-3 mb-3 dark:text-white">
        <strong>|</strong> 為了讓大腦成長，你要持續地、漸進地挑戰它。
      </h2>
      <br />
      <p class="dark:text-white">
        1. 從可以應付的開始，再慢慢增加難度<br />
        就像深蹲從空槓開始，學習可以從簡單的教材、入門專案開始，慢慢加入更多挑戰，例如更嚴格的時間限制、更少的提示（意味著更多的思考）。<br /><br />
        2. 每次只加一點點壓力<br />
        不要一次學太多、太難，否則就像硬舉太重會受傷。<br /><br />
        3. 記錄與追蹤進度<br />
        有時候一忙起來忘記上次的進度，又或許會再花時間回溯。<br />
        <br />
        4. 混合訓練法（交叉刺激）<br />
        書、寫筆記、講給別人聽、實作一個 side project 等，刺激更全面。<br />
        <br />
        5. 設計出「有點難，但還能完成」的任務<br />
        神馳（flow）最適區域 = 有點挑戰 + 有點信心。
      </p>
      <h2 class="text-xl mt-3 mb-3 dark:text-white">結語</h2>
      <p class="dark:text-white">
        現在，我對「學習」這件事的理解已有了全然不同的體悟，只要身處合適的環境，選擇正確的方法，持續夠久的時間，再經歷反覆的練習，世上沒有任何一件事是人類這種神奇生物無法掌握的。<br />
        <br />
        與此同時，我也越來越清晰地意識到要留心自己是否真心熱愛當下所學的事物，學東西、體驗生活就是要自在、要沒有壓力，因為儘管人生落幕後我們無法帶走任何物質，但透過熱愛的學習所培養出的技能，將滋養我的靈魂，伴隨著我跨越生命的界線，邁向下一段旅程
        👻
      </p>
    </div>
  </main>
</template>
<script setup lang="ts">
  import HeroBanner from '../../../components/HeroBanner.vue'
</script>

<style scoped lang="scss">
  .article-container {
    width: 60%;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 100px;

    & .note {
      font-size: 0.7rem;
    }

    img {
      margin: 0 auto;
    }
  }
</style>
