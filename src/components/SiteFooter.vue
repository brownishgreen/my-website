<template>
  <footer
    class="glass-footer w-full pt-2 pb-2 text-sm text-center text-zinc-900 dark:text-zinc-200 transition-all duration-[1500ms] ease-in-out"
  >
    <div class="max-w-[720px] mx-auto">
      <p class="mb-2">© {{ new Date().getFullYear() }} Yuan WU</p>
      <div class="flex justify-center gap-6 items-center">
        <!-- Back to Top -->
        <button @click="scrollToTop" class="hover:transition-all text-sm text-zinc-900 dark:text-zinc-200 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-105 duration-[1500ms] ease-in-out cursor-pointer">back to top ↑</button>
      </div>
    </div>
  </footer>
</template>
<script setup>
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<style scoped>
</style>
