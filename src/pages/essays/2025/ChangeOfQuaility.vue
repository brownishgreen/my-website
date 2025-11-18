<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1649626283645-b17fbbb6fb1b?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    emoji="🪔"
    title="質變"
    subtitle=""
  />
  <main class="transition-all duration-[1500ms] ease-in-out mb-20">
    <div class="article-container glass-article">
      <!-- article -->
      <p class="">
        質變是量變達到臨界點時發生的根本改變。<br />
        水在 99 度仍是水，在 100 度才化作蒸氣。<br />
        堅硬的岩石，經年累月被水滴磨蝕，才終於留下細微的紋路。<br />
        質變不是突然發生，需要醞釀一段特定的時間。<br />
      </p>
      <br />
      <h2 class="text-lg mt-3 mb-3">追求質變</h2>
      <p class="">
        人即然有品質，也會想追求質變。 人在追求質變時，要經歷反覆、笨拙、無數次停滯的瓶頸。<br />
        每個人是獨立的個體，有自己的時間線，不同於水或金屬，無法精準量化質變何時到來。<br />
        能做的只有不斷加熱、向前，或許不知不覺間，質變會悄然發生。<br />
        <br />
        在追求質變的道路上比喻： 我<u>知道</u>目的地、方位以及用什麼交通工具抵達。<br />
        （以下容我幻想自己持有駕照以及用一些隱喻的說法來表達心中的拉扯 😂）<br />
        在黑夜裡的公路上，車頭燈能照亮前方一小段路，即可前行。<br />
        然而在此情境下獨駕是危險又寂寞的。<br />
        這台中古車有年份了，會否拋錨？燃料足夠我撐到目的地嗎？<br />
        還要留意野生動物忽然跑出來，沒撞到牠的話…可以養牠嗎？<br />
      </p>
      <br />
      <h2 class="text-lg mt-3 mb-3">剛剛好是大智慧</h2>
      <p class="">
        最近在 Thai Alphabet 的最後一哩路，學到了低音字母 พ <br />
        書寫練習時，我喜歡上 พอ 這個單詞。<br />
        最合適翻譯在華語的意思是 「夠」（Enough）。<br /><br />
        พอ 加上一個 ดี (Good) 就是 พอดี：<br />
        「剛剛好」的意思，Perfectly / Good enough<br />
        <br />
        พอ 加上 ใจ (Heart) 是 พอใจ：<br />
        心，夠了，就是「滿意」。<br />
        例如：ผมพอใจกับงานนี้ 我對這份工作很滿意 😂<br /><br />
        附上 Banana Thai 的 พอ 教學：<br />
      </p>
      <br />
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/bZjxPjpFjkY?si=tji0SyTmXvsFK-bU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>
      </div>

      <br />
      <br />
      <p class="">
        回到質變，質變是量的累積到臨界點後的轉向。<br />
        人的質變無法知道那個臨界點在哪裡，所以使人焦慮。<br />
        在剛剛好的狀態下持續前行直到足夠的程度，質變就會自然發生。 🦔 🦔 🦔 <br />
        When action and consistency reach the balance of พอดี, change reveals itself. 🤞<br />
        畢竟急也成不了事，讓子彈再飛一下吧。
      </p>
    </div>
  </main>
</template>
<script setup lang="ts">
  import HeroBanner from '../../../components/HeroBanner.vue'
</script>

<style scoped lang="scss">
  .article-container {
    width: 80%;
    max-width: 780px;
    margin: 0 auto;
    padding: 2rem;
    padding-bottom: 100px;

    & .note {
      font-size: 0.7rem;
    }

    img {
      margin: 0 auto;
    }
  }

  .video-container {
    width: 100%;
    max-width: 780px;
    margin: 0 auto;
    aspect-ratio: 16 / 9;

    iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
</style>
