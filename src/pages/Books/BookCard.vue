<template>
  <div
    class="rounded-md shadow-xl overflow-hidden bg-stone-100/60 dark:bg-zinc-800 transition-all duration-[1500ms] ease-in-out"
  >
    <!-- Image white background-->
    <div class="relative h-80 bg-white overflow-hidden flex items-center justify-center">
      <img :src="cover" :alt="title" class="max-h-full object-contain z-10" />

      <!-- Overlay: placed above the image, visible only in dark mode. -->
      <div
        class="absolute inset-0 bg-black/30 z-20 dark:block hidden duration-[1500ms] ease-in-out"
      ></div>
    </div>

    <!-- Book Content -->
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-1 text-zinc-800">{{ title }}</h2>
      <p class="text-sm text-zinc-500 mb-2">{{ author }}</p>
      <span
        class="inline-block px-3 py-1 text-xs rounded-full bg-slate-200 text-emerald-800 dark:bg-slate-700 mb-3"
      >
        {{ category }}
      </span>
      <!-- <p class="text-zinc-700 dark:text-zinc-100 text-sm leading-relaxed">
        {{ note }}
      </p> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    title: string
    author: string
    cover: string
    category: string
    note: string
  }>()
</script>
