<template>
  <HeroBanner
    bgImage="https://www.notion.so/images/page-cover/met_winslow_homer_maine_coast.jpg"
    emoji="🇨🇿"
    title="Český Krumlov, Česko 24"
    subtitle=" "
  />
  <main class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
      <span><strong>｜</strong>Just a photo dump for now :S too busy to write the full travel
        story.</span
      >
      <br>
      <br>
      <div class="grid gap-6">
  <figure
    v-for="(image, index) in tripImages"
    :key="index"
    class="flex flex-col items-center"
  >
    <img
      :src="image.url"
      :alt="image.alt"
      class="rounded-lg shadow-md object-cover"
    />
    <figcaption
      v-if="image.alt"
      class="text-sm text-zinc-500 dark:text-zinc-40 text-center"
    >
      {{ image.alt }}
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
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485268/933DDDD0-ECF0-4BA9-9965-584474505B93_1_201_a_qgj1lg.jpg',
    alt: '終於看到妹妹'
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485265/9F6A9932-CB09-45A1-8A60-CA502115C1AE_1_201_a_pao3qg.heic',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485264/DA7EC7DD-2C47-4474-82C1-42A011F14641_1_201_a_achwk8.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485262/BC4FDBA9-0ED1-43C9-A86A-A056DC4DDCC3_1_105_c_x5hw1k.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485262/307562A6-8C8B-4054-8497-5BD55DF11F59_1_201_a_akqayh.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485259/78BA0782-DC95-447D-B010-B9BD14D70652_1_201_a_drw3u2.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485255/53E5D715-CFAD-477E-9EC3-1868F7646F43_1_105_c_g705wh.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485251/5C23088F-9747-423B-8F00-1C7138304F52_1_105_c_vgtast.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485250/2D77CD8D-4DED-4631-9ECD-D5E94DEF7629_1_201_a_ewoovw.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485247/EED3F330-89AE-4243-8A89-7678BAA0962B_1_201_a_naoysj.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485245/D41643FA-BDBD-450C-B86C-FA81694F150C_1_201_a_ksfxub.jpg',
    alt: ''
  },
  {
    url: '',
    alt: ''
  },
  {
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },
]

</script>

<style scoped class="scss">
.content-container {
    width: 60%;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 100px;
  }
</style>