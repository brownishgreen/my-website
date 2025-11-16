<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    emoji="📚"
    title="Books"
    subtitle="Book I have read"
  />
  <main class="transition-all duration-[1500ms] ease-in-out mb-20">
    <div
      class="transition-all duration-[1500ms] ease-in-out article-container glass-article"
    >
      <br />
      <blockquote
        class="italic text-sm mb-6 border-l-4 pl-4 border-zinc-300 dark:border-zinc-700 dark:text-white"
      >
        “I don't want to read all the books; I just want to read the best 100 over and over again.”
        <span class="block text-xs mt-2 text-zinc-500">—— @illacertus</span>
      </blockquote>
      <div class="max-w-7xl mx-auto px-4 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BookCard v-for="book in books" :key="book.title" v-bind="book" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
  import HeroBanner from '../../components/HeroBanner.vue'
  import BookCard from './BookCard.vue'
  import books from '../../data/books.json'
</script>
<style scoped class="scss">
  .article-container {
    width: 80%;
    max-width: 780px;
    margin: 0 auto;
    padding: 2rem;
    padding-bottom: 100px;
  }
</style>
