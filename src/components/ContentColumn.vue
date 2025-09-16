<template>
  <div class="rounded-lg overflow-hidden shadow-lg max-w-[580px] mx-auto">
    <!-- Picture  -->
    <img :src="imageSrc" alt="section image" class="w-full object-cover mt-3 rounded-t-md" />

    <!-- Content -->
    <div class="p-4 bg-stone-100/60 dark:bg-zinc-800/60 transition-all duration-[1500ms]">
      <h2 class="text-lg font-medium mb-3 dark:text-white">{{ articleTitle }}</h2>
      <ul class="space-y-1 dark:text-white">
        <li v-for="(item, index) in items" :key="index">
          <!--External Link <a> -->
          <a
            v-if="isExternal(item.link) || item.external === true"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 hover:text-blue-400 transition-all transform hover:scale-105 duration-200 ease-in-out"
            :aria-label="`${item.name} (opens in new tab)`"
          >
            <span class="text-xl">{{ item.emoji }}</span>
            <span class="text-sm">{{ item.name }}</span>
          </a>
          <!--Router link-->
          <router-link
            v-else
            :to="item.link"
            class="flex items-center gap-2 hover:text-blue-400 transition-all transform hover:scale-105 duration-200 ease-in-out"
          >
            <span class="text-xl">{{ item.emoji }}</span>
            <span class="text-sm">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  type Item = {
    emoji: string
    name: string
    link: string
    external?: boolean // <- 可選，手動強制外部連結
  }

  defineProps<{
    imageSrc: string
    articleTitle: string
    items: Item[]
  }>()

  const isExternal = (url: string) => /^(https?:)?\/\//i.test(url) || /^mailto:|^tel:/i.test(url)
</script>

<style scoped></style>
