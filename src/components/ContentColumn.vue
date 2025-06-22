<template>
  <div class="rounded-lg overflow-hidden shadow-lg max-w-[580px] mx-auto">
    <!-- 圖片區 -->
    <img :src="imageSrc" alt="section image" class="w-full object-cover mt-3 rounded-t-md" />

    <!-- 文字內容 -->
    <div class="p-4 bg-stone-100/60 dark:bg-zinc-800/60 transition-all duration-[1500ms]">
      <h2 class="text-lg font-semibold mb-3 dark:text-white">{{ articleTitle }}</h2>
      <ul class="space-y-1 dark:text-white">
        <li v-for="(item, index) in items" :key="index">
          <router-link
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
  defineProps<{
    imageSrc: string
    articleTitle: string
    items: {
      emoji: string
      name: string
      link: string
    }[]
  }>()
</script>

<style scoped></style>
