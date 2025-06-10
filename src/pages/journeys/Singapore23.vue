<template>
  <HeroBanner
    bgImage="https://www.notion.so/images/page-cover/met_winslow_homer_maine_coast.jpg"
    emoji="🇸🇬"
    title="Singapura 23"
    subtitle=" "
  />
  <main class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
      <span
        ><strong>｜</strong>Just a photo dump for now :S too busy to write the full travel
        story.</span
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
          <figcaption v-if="image.alt" class="text-sm text-zinc-500 dark:text-zinc-40 text-center">
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
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
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
