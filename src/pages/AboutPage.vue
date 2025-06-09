<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=7200"
    emoji="👽" title="About" subtitle="Things about me." />
  <section class="about-container bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div class="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start gap-8">
      <div class="flex-1 space-y-4 dark:text-white ">
        <p>
          Based in Taipei, Taiwan, currently working in a Google reseller as a no-code app developer.
          Focused on learning JavaScript, its ecosystem (Node.js, React, Vue), and database technologies,
          aiming to become a full-stack engineer.
        </p>
        <p>
          A minimalist who loves swimming, animals, and reading.
          Believes that continuous learning is the path to an ideal life.
        </p>
        <a href="https://github.com/brownishgreen" target="_blank"
          class="inline-flex items-center text-sm hover:underline">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2.3c-3.2.7-3.8-1.5-3.8-1.5-.6-1.4-1.4-1.7-1.4-1.7-1.2-.8.1-.8.1-.8 1.3.1 2 .8 2 .8 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.4.1-2.8 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.4.2 2.5.1 2.8.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          GitHub brownishgreen – Overview
        </a>
      </div>

      <div class="flex-shrink-0">
        <img
          src="https://www.yuanologue.com/image/attachment%3A67ba746a-c764-4ba4-8110-cdb57fee7fad%3Aimage.png?table=block&id=1f010968-adb5-8002-9518-f0a2c02a10ba&spaceId=8ceb97d7-3080-4787-8245-b9d460194b8a&width=580&userId=&cache=v2"
          alt="Photo of Yuan" class="w-64 rounded-lg shadow-lg" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import HeroBanner from '../components/HeroBanner.vue'
</script>