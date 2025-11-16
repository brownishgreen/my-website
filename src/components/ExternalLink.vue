<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    class="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-all transform hover:scale-105 duration-[1500ms] ease-in-out"
  >
    <span class="text-xl">{{ icon }}</span>
    <span class="text-sm ml-2">
      {{ label }}
      <span class="text-xs text-zinc-400 dark:text-zinc-500">↗</span>
    </span>
  </a>
</template>

<script lang="ts" setup>
  defineProps<{
    href: string
    label: string
    icon?: string
  }>()
</script>
