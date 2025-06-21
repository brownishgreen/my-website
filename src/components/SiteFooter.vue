<template>
  <footer
    class="border-t border-zinc-100 dark:border-zinc-800 mt-20 pt-3 pb-5 text-sm text-center text-zinc-500 dark:text-zinc-400"
  >
    <div class="max-w-[720px] mx-auto px-4">
      <p class="mb-2">© {{ new Date().getFullYear() }} Yuan WU</p>
      <div class="flex justify-center gap-6 items-center">
        <!-- Back to Top -->
        <a
          href="#top"
          class="dark:text-white transition-colors w-full text-zinc-700 hover:text-blue-500 hover:scale-105 duration-200 ease-in-out"
        >
          Top ↑
        </a>
      </div>
    </div>
  </footer>
</template>
