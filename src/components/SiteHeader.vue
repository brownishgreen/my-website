<template>
  <header
    class="sticky top-0 z-50 w-full bg-white dark:bg-zinc-900 shadow-sm transition-all duration-[1500ms] ease-in-out">
    <div class="flex items-center justify-between px-6 py-4">
      <!-- Site Title -->
      <router-link to="/"
        class="text-zinc-700 dark:text-white hover:text-blue-500 text-xl font-medium hover:scale-105 duration-200 ease-in-out">
        🌜Site of Yuan🌛
      </router-link>

      <!-- Hamburger Icon -->
      <button class="text-2xl block md:hidden text-zinc-700 dark:text-white" @click="isMenuOpen = !isMenuOpen"
        ref="hamburgerRef">
        ☰
      </button>

      <!-- Nav Buttons -->
      <transition name="slide-fade">
        <nav
          class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 absolute md:static top-16 right-6 md:right-0 border md:border-0 border-zinc-300 bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out rounded-lg md:rounded-none p-4 md:p-0 shadow-md md:shadow-none"
          v-show="!isMobile || isMenuOpen" ref="menuRef" @mouseleave="isMobile && (isMenuOpen = false)">
          <router-link to="about"
            class="w-full md:w-auto text-left text-zinc-700 dark:text-zinc-200 hover:text-blue-500 hover:scale-105 duration-200 ease-in-out">About</router-link>
          <router-link to="changlog"
            class="w-full md:w-auto text-left text-zinc-700 dark:text-zinc-200 hover:text-blue-500 hover:scale-105 duration-200 ease-in-out">Changelog</router-link>
          <button @click="toggleTheme"
            class="w-9 h-9 flex items-center justify-center rounded-full w-full md:w-auto text-left text-zinc-700 dark:text-zinc-200 hover:text-blue-500 hover:scale-125 duration-200 ease-in-out"
            title="toggle theme mode">
            <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" fill="currentColor"
              class="w-5 h-5">
              <path
                d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 text-zinc-700 dark:text-white
">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </button>
        </nav>
      </transition>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 狀態
const isMenuOpen = ref(false)
const isMobile = ref(window.innerWidth <= 768)
const isDarkMode = ref(false)

// DOM 元素
const menuRef = ref<HTMLElement | null>(null)
const hamburgerRef = ref<HTMLElement | null>(null)

// 裝置寬度變化時更新狀態
const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

// 點擊外部自動關閉選單
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node
  if (
    menuRef.value &&
    !menuRef.value.contains(target) &&
    hamburgerRef.value &&
    !hamburgerRef.value.contains(target)
  ) {
    isMenuOpen.value = false
  }
}

// 深色模式切換
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

// 生命週期
onMounted(() => {
  window.addEventListener('resize', updateIsMobile)
  document.addEventListener('click', handleClickOutside)
  updateIsMobile()
  // 初始判斷 dark mode 狀態
  isDarkMode.value = document.documentElement.classList.contains('dark')
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', updateIsMobile)
})

// 對父層拋出 navigate 事件
defineEmits(['navigate'])
</script>
<style>
/* Transition for mobile nav slide + fade */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease-in-out;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>