<template>
  <div class="glass-card rounded-2xl overflow-hidden max-w-[580px] mx-auto">
    <!-- Picture  -->
    <img :src="imageSrc" alt="section image" class="w-full object-cover rounded-t-xl" />

      <!-- Content -->
      <div class="p-4 glass-content">
      <h2 class="text-lg font-medium mb-3 dark:text-white">{{ articleTitle }}</h2>
      <ul class="space-y-1 dark:text-white">
        <li v-for="(item, index) in items" :key="index">
          <!--External Link <a> -->
          <a
            v-if="isExternal(item.link) || item.external === true"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 hover:text-blue-400 hover:scale-105"
            :aria-label="`${item.name} (opens in new tab)`"
          >
            <span class="text-xl">{{ item.emoji }}</span>
            <span class="text-sm">{{ item.name }}</span>
          </a>
          <!--Router link-->
          <router-link
            v-else
            :to="item.link"
            class="flex items-center gap-2 hover:text-blue-400 hover:scale-105"
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
    external?: boolean // Optional: manually force external link
  }

  defineProps<{
    imageSrc: string
    articleTitle: string
    items: Item[]
  }>()

  const isExternal = (url: string) => /^(https?:)?\/\//i.test(url) || /^mailto:|^tel:/i.test(url)
</script>

<style scoped>
.glass-content h2,
.glass-content ul,
.glass-content li {
  transition: color 1500ms ease-in-out;
}

/* Anchor tags transition color directly - faster to sync with background */
.glass-content a,
.glass-content router-link {
  transition: color 1450ms ease-out;
}
</style>
