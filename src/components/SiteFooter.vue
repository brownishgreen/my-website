<template>
  <footer
    class="border-t border-zinc-100 dark:border-zinc-800 mt-20 pt-3 pb-5 text-sm text-center text-zinc-500 dark:text-zinc-400"
  >
    <div class="max-w-[720px] mx-auto px-4">
      <p class="mb-2">© {{ new Date().getFullYear() }} Yuan WU</p>
      <div class="flex justify-center gap-6 items-center">
        <!-- Back to Top -->
        <button @click="scrollToTop" class="hover:underline transition-all text-sm">Top ↑</button>
      </div>
    </div>
  </footer>
</template>
<script setup>
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>
