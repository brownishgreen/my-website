<template>
  <HeroBanner
    bgImage="https://res.cloudinary.com/dube3xzga/image/upload/v1749722174/photo-1629829061910-bf195878e4e4_yfr4gj.avif"
    emoji="☕️"
    title="Random 16"
    subtitle=""
  />
  <main class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
      <br />
      <br />
      <div class="grid gap-6">
        <figure
          v-for="(image, index) in tripImages"
          :key="index"
          class="flex flex-col items-center"
        >
          <img :src="image.url" :alt="image.alt" class="rounded-lg shadow-md object-cover" />
          <video
            v-if="image.videoURL"
            :src="image.videoURL"
            controls
            class="rounded-lg shadow-md object-cover w-4/5 mt-4"
          ></video>
          <figcaption
            v-if="image.figcaption"
            class="text-sm text-zinc-500 mt-2 dark:text-zinc-40 text-center"
          >
            {{ image.figcaption }}
          </figcaption>
        </figure>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import HeroBanner from '../../components/HeroBanner.vue'

  const tripImages = [
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720922/IMG_0108_arkvb5.jpg',
      videoURL: '',
      alt: '202503｜陽明山',
      figcaption: '202503｜陽明山',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720921/IMG_0138_heki5o.jpg',
      videoURL: '',
      alt: '202503｜陽明山',
      figcaption: '202503｜陽明山',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720929/IMG_0116_jafc26.jpg',
      videoURL: '',
      alt: '202503｜夢幻湖',
      figcaption: '202503｜夢幻湖',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720897/IMG_0128_u8mfeq.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720900/IMG_0158_fxgdzz.jpg',
      videoURL: '',
      alt: '',
      figcaption: '202503｜嘉明的味道',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720896/IMG_0151_jeynu8.jpg',
      videoURL: '',
      alt: '202503｜陽明山',
      figcaption: '2025/3月份的陽明山',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720905/IMG_0891_rmsxrg.jpg',
      videoURL: '',
      alt: '2025/4 眺望嘉南平原和哲均泡腳腳',
      figcaption: '2025/4 眺望嘉南平原和哲均泡腳腳',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720923/IMG_0909_w0pxvb.jpg',
      videoURL: '',
      alt: '',
      figcaption: '202504｜宜蘭｜猴洞坑瀑布',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720902/IMG_0937_iqgayu.jpg',
      videoURL: '',
      alt: '',
      figcaption: '定邦咖啡的哈密瓜拿鐵',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720895/IMG_0954_hs46nz.jpg',
      videoURL: '',
      alt: '',
      figcaption: '強妮也失業過，一些文件她懂的',
    },
    // {
    //   url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720928/IMG_0953_msnr7t.jpg',
    //   videoURL: '',
    //   alt: '',
    //   figcaption: '',
    // },
    // {
    //   url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720915/IMG_0243_cldkyf.jpg',
    //   videoURL: '',
    //   alt: '',
    //   figcaption: '我將我的 butthole collection 分享我的同事但她不讀不回',
    // },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749720890/dbb96aee-34d4-4688-856b-33ced8af4bad_ka6see.png',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
  ]
</script>

<style scoped class="scss">
  .content-container {
    width: 80%;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  span {
    @media (max-width: 1536px) {
      font-size: 0.5rem;
    }
  }
</style>
