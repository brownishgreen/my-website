<template>
  <HeroBanner
    bgImage="https://www.notion.so/images/page-cover/met_winslow_homer_maine_coast.jpg"
    emoji="🥛"
    title="Site of Yuan"
    subtitle="Where I write and collect moments."
  />
  <main class="min-h-screen bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
      <ContentColumn
        v-for="(section, index) in sections"
        :key="index"
        :imageSrc="section.imageSrc"
        :articleTitle="section.articleTitle"
        :items="section.items"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
  import HeroBanner from '../components/HeroBanner.vue'
  import ContentColumn from '../components/ContentColumn.vue'

  const essays = [
    { emoji: '🏊🏾‍♂️', name: 'thirty-two', link: '/essays/thirty-two' },
    { emoji: '👓', name: 'learn how to learn', link: '/essays/learn-how-to-learn' },
  ]

  const projects = [
    {
      emoji: '📇',
      name: 'Yolodex [Vue]｜Frontend｜業務管理工具',
      link: '/projects/yolodex',
    },
    {
      emoji: '📖',
      name: 'Sutra Reader [Vue]｜Frontend｜金剛經閱讀器',
      link: '/projects/sutra-reader',
    },
    {
      emoji: '🧳',
      name: 'TapTour [React/Node.js/MySQL]｜旅遊探索評論',
      link: '/projects/taptour',
    },
    {
      emoji: '🐻',
      name: 'Site of Yuan [Vue]｜個人網站',
      link: '/projects/my-site',
    },
    {
      emoji: '📃',
      name: 'AppSheet [CRM Template]｜no-code 模板專案',
      link: '/projects/appsheet-crm',
    },
  ]

  const journeys = [
    {
      emoji: '🇹🇼',
      name: 'Taiwan Re:Love 25',
      link: '/journeys/taiwan-25',
    },
    {
      emoji: '🇦🇹',
      name: 'Austria 24',
      link: '/journeys/austria-24',
    },
    {
      emoji: '🇭🇺',
      name: 'Budapest, Hungary 24',
      link: '/journeys/budapest-24',
    },
    {
      emoji: '🇨🇿',
      name: 'Český Krumlov, Česko 24',
      link: '/journeys/cesky-krumlov-24',
    },
    {
      emoji: '🇹🇭',
      name: 'Bangkok, Thailand 24',
      link: '/journeys/bangkok-24',
    },
    {
      emoji: '🇯🇵',
      name: 'Nagoya, Japan 23',
      link: '/journeys/nagoya-23',
    },
    {
      emoji: '🇸🇬',
      name: 'Singapura 23',
      link: '/journeys/singapura-23',
    },
    {
      emoji: '🇲🇾',
      name: 'Pulau Mabul, Malaysia 22',
      link: '/journeys/pulau-mabul-22',
    },
  ]

  const capturedFlash = [
    { emoji: '☕️', name: 'Random 16', link: '/flashes/random-16' },
    { emoji: '🕰️', name: 'Random 12', link: '/flashes/random-12' },
    { emoji: '🏚️', name: '吳爸爸米克斯庇護所', link: '/flashes/shelter' },
  ]

  const links = [
    {
      emoji: '💻',
      name: 'Coding Notes',
      link: 'coding-notes',
    },
    {
      emoji: '📚',
      name: 'Books',
      link: 'books',
    },
  ]

  const sections = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200',
      articleTitle: 'Essays',
      items: essays,
    },
    {
      imageSrc: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749467606/IMG_6440_d3fg8v.jpg',
      articleTitle: 'Journeys',
      items: journeys,
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1629904888099-00285934292b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      articleTitle: 'Projects',
      items: projects,
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1591745742384-ee81ec590924?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      articleTitle: 'Notes & Reading',
      items: links,
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1511992243105-2992b3fd0410?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
      articleTitle: 'Captured Flash',
      items: capturedFlash,
    },
  ]
</script>

<style scoped lang="scss">
  .content-container {
    column-count: 1;
    column-gap: 1.5rem;
    width: 80%;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 100px;

    // Prevent cards from being split across columns
    > * {
      break-inside: avoid;
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }

    @media (min-width: 1536px) {
      column-count: 2;
    }
  }
</style>
