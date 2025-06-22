<template>
  <HeroBanner
    bgImage="https://www.notion.so/images/page-cover/met_winslow_homer_maine_coast.jpg"
    emoji="💻"
    title="Coding Notes"
    subtitle=""
  />
  <main class="min-h-screen bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
      <ExternalLink v-for="note in codingNotes" :key="note.href" v-bind="note" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import HeroBanner from '../../components/HeroBanner.vue'
  import ExternalLink from '../../components/ExternalLink.vue'
  import codingNotes from '../../data/codingNotes.json'
</script>

<style scoped lang="scss">
  .content-container {
    column-count: 1;
    column-gap: 1.5rem;
    width: 60%;
    max-width: 780px;
    height: 50vh;
    margin: 0 auto;
    padding-bottom: 100px;

    // Prevent cards from being split across columns
    > * {
      break-inside: avoid;
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }
  }
</style>
