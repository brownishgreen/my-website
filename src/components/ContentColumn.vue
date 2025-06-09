<template>
  <div class="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
    <!-- 圖片區 -->
    <img :src="imageSrc" alt="section image" class="w-full object-cover mt-3 rounded-t-lg" />

    <!-- 文字內容 -->
    <div class="mt-2 p-4 bg-zinc-100/60">
      <h2 class="text-lg font-semibold mb-3">{{ articleTitle }}</h2>
      <ul class="space-y-1">
        <li v-for="(item, index) in items" :key="index">
          <a :href="item.link" class="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <span class="text-xl">{{ item.emoji }}</span>
            <span class="text-sm">{{ item.name }}</span>
          </a>
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

<style scoped>
</style>
