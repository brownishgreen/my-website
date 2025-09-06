<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1619467416348-6a782839e95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    emoji="🧳"
    title="TapTour 踏旅｜旅遊探索評論網 [React / Node.js / MySQL]"
    subtitle=""
  />
  <section
    class="about-container bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out"
  >
    <div class="max-w-3xl mx-auto px-6 py-12 items-start gap-8">
      <p class="mb-5 mt-5 dark:text-white deploy-notice">
        由於 GCP/Vercel/Render 的使用費關係，目前專案已停止部署，請透過導覽影片瀏覽功能與畫面。
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GG404dTFyzw?si=XJMvRhqtEHxgkTWD"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div class="mt-5 bg-white p-6 rounded-md shadow-md text-gray-800 space-y-4">
        <ul class="list-disc list-inside space-y-2">
          <li>
            <strong>GitHub Repo</strong>
            <a
              href="https://github.com/Ryan5381/TapTour"
              class="text-blue-600 hover:underline"
              target="_blank"
            >
              https://github.com/Ryan5381/TapTour
            </a>
          </li>
          <li>
            <strong>專案簡報</strong>
            <a
              href="https://docs.google.com/presentation/d/1YX7NW4LxITBSiqlRFvTn0mqBNzchiYtrcynyFsfqB3s/edit?usp=sharing"
              class="text-blue-600 hover:underline"
              target="_blank"
            >
              點擊查閱
            </a>
          </li>
          <li>
            <strong>前端：</strong>Vercel
            <a
              href="https://tap-tour.vercel.app/"
              class="text-blue-600 hover:underline"
              target="_blank"
            >
              https://tap-tour.vercel.app/
            </a>
          </li>
          <li><strong>後端：</strong>Render</li>
          <li>
            <strong>API 文件：</strong>
            <a
              href="https://taptour-backend.yuanologue.com/api-docs/"
              class="text-blue-600 hover:underline"
              target="_blank"
            >
              https://taptour-backend.yuanologue.com/api-docs/
            </a>
          </li>
          <li><strong>資料庫：</strong>Cloud SQL</li>
          <li><strong>儲存空間：</strong>Cloud Storage</li>
          <li>
            <strong>測試資訊：</strong>
            <ul class="list-none pl-4 mt-1 space-y-2">
              <li>
                ◦ <strong>管理員</strong>
                <ul class="pl-4 list-disc list-inside">
                  <li><strong>帳號：</strong>admin@example.com</li>
                  <li><strong>密碼：</strong>12345678</li>
                </ul>
              </li>
              <li>
                ◦ <strong>使用者</strong>
                <ul class="pl-4 list-disc list-inside">
                  <li><strong>帳號：</strong>user@example.com</li>
                  <li><strong>密碼：</strong>12345678</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h2 class="text-xl mt-3 mb-3 dark:text-white">主題動機 / 功能發想</h2>
      <p class="mt-5 dark:text-white">
        TapTour 是一個專為自由行旅人設計的旅遊平台，我們參考了如 kkday、TripAdvisor
        等旅遊網站作為專案主題，核心理念是「以科技串聯在地體驗，讓每場旅行更有深度」。我們希望透過這個平台，讓旅行者可以：<br /><br />
        1. 搜尋旅遊活動、景點、商品<br />
        2. 能追蹤喜愛的活動、商品、旅者<br />
        3. 能在活動、商品底下留言，給予評論<br />
        4. 個人旅遊檔案，呈現自己追蹤的喜好項目<br />
        5. 一站式購物，訂購旅遊需要的票券、用品<br />
        6. 查閱過往訂單<br /><br />

        而作為管理者可以：<br /><br />

        1. 在管理員的管理後台編輯或刪除活動、景點、商品<br />
        2. 在管理員後台指派其他使用者為管理員<br />
        3. 新增活動、景點（使用 Google Maps API）、商品<br />
        4. 在前台頁面直接刪除特定留言<br />
      </p>
      <h2 class="text-xl mt-3 mb-3 dark:text-white">Tech Stack 技術棧</h2>
      <p class="mt-5 dark:text-white">
        - React <br />
        - [Vite](https://vitejs.dev/)<br />
        - [SCSS](https://sass-lang.com/) <br />
        - Node.js <br />
        - MySQL <br />
        - Swiper <br />
        - Swagger API<br />
      </p>
      <h2 class="text-xl mt-3 mb-3 dark:text-white">專案流程 / 資料庫設計圖</h2>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749959786/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.25.54_td7tss.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
      </figure>
      <h2 class="text-xl mt-3 mb-3 dark:text-white">網站架構圖</h2>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749959787/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.26.15_fngcrl.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center"></figcaption>
      </figure>
      <h2 class="text-xl mt-5 mb-3 dark:text-white">畫面</h2>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749959788/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.26.58_vunfsr.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">首頁</figcaption>
      </figure>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749959789/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.27.26_oeiwbx.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">活動總覽</figcaption>
      </figure>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749959781/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.28.02_fftcaj.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">個人踏旅檔案</figcaption>
      </figure>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749959781/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.28.44_rthk7q.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">管理員介面</figcaption>
      </figure>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749959782/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.29.12_tbfnmn.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">新增活動表單頁面</figcaption>
      </figure>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749959784/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.29.47_vnicov.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">訂單</figcaption>
      </figure>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749959783/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.30.06_zpbgvu.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">喜愛追蹤</figcaption>
      </figure>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749959783/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.30.27_scjj4s.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">用戶追蹤</figcaption>
      </figure>
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749959785/%E6%88%AA%E5%9C%96_2025-05-02_%E6%99%9A%E4%B8%8A10.30.54_phlqhe.png"
          alt=""
          class="w-full rounded-md shadow-md object-cover"
        />
        <figcaption class="mt-2 text-xs text-gray-600 text-center">
          Google API 應用 / 直接搜尋 Google Maps資訊並新增景點
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import HeroBanner from '../../components/HeroBanner.vue'
</script>

<style scoped>
  .deploy-notice{
    color: darkred;
}
</style>
