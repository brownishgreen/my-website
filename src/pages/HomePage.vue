<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1696578719680-de3c7f5be52d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3029"
    emoji="🥨"
    title="Project Yuan"
    subtitle="Where I write and collect moments."
  />
  <main class="min-h-screen">
    <div class="content-container">
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
    { emoji: '🧘🏾', name: '十日內觀回顧', link: '/essays/vipassana' },
    { emoji: '🪔', name: '質變', link: '/essays/change-of-quality' },
    { emoji: '🏊🏾‍♂️', name: '32', link: '/essays/thirty-two' },
    // { emoji: '👓', name: 'learn how to learn', link: '/essays/learn-how-to-learn' },
  ]

  const projects = [
    {
      emoji: '📇',
      name: 'Yolodex 業務管理工具[Vue/TypeScript]',
      link: '/projects/yolodex',
    },
    {
      emoji: '📖',
      name: 'Sutra Reader 金剛經閱讀器[Vue/TypeScript]',
      link: '/projects/sutra-reader',
    },
    {
      emoji: '🧳',
      name: 'TapTour 旅遊探索評論[React/Node.js/MySQL]',
      link: '/projects/taptour',
    },
    // {
    //   emoji: '🐻',
    //   name: 'Site of Yuan [Vue]｜個人網站',
    //   link: '/projects/my-site',
    // },
    {
      emoji: '📃',
      name: 'AppSheet 開發模板[CRM Template]',
      link: '/projects/appsheet-crm',
    },
  ]

  const journeys = [
    {
      emoji: '🏝️',
      name: 'Orchid Island, Taiwan 25',
      link: '/journeys/lanyu-25',
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

  const fragments = [
    { emoji: '☕️', name: 'Random 16', link: '/flashes/random-16' },
    { emoji: '🕰️', name: 'Random 12', link: '/flashes/random-12' },
    { emoji: '🏚️', name: '吳爸爸米克斯庇護所', link: '/flashes/shelter' },
  ]

  // const links = [
  //   {
  //     emoji: '💻',
  //     name: 'DEV notes',
  //     link: 'https://shell-puppy-7d9.notion.site/Notes-17310968adb580b59b54e02f7b19bbdd',
  //   },

    // {
    //   emoji: '📚',
    //   name: 'Books',
    //   link: 'books',
    // },
  // ]

  const sections = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1591745742384-ee81ec590924?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      articleTitle: 'Works',
      items: projects,
    },
    // {
    //   imageSrc: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200',
    //   articleTitle: 'Library',
    //   items: links,
    // },
        {
      imageSrc:
        'https://images.unsplash.com/photo-1673157011514-7840ea0c3804?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      articleTitle: 'Fragments',
      items: fragments,
    },

    
  ]
</script>

<style scoped lang="scss">
  .content-container {
    column-count: 1;
    column-gap: 1.5rem;
    width: 93%;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 100px;

    // Prevent cards from being split across columns
    > * {
      break-inside: avoid;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1rem;
      max-width: 100%;
    }

    @media (min-width: 1024px) {
      column-count: 2;
    }
  }
</style>
