<template>
  <section class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out hero">
    <div class="hero__background" :style="{ backgroundImage: `url(${bgImage})` }"></div>
    <div class="hero__content">
      <div class="hero__emoji">{{ emoji }}</div>
      <h1 class="dark:text-white hero__title">{{ title }}</h1>
      <p v-if="subtitle" class="leading-relaxed dark:text-white hover:text-blue-500 hero__subtitle">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    subtitle?: string
    emoji?: string
    bgImage: string
  }>()
</script>

<style scoped lang="scss">
  .hero {
    width: 100%;
    overflow: hidden;

    &__background {
      height: 350px;
      width: 100%;
      background-size: cover;
      background-position: center;
    }

    &__content {
      max-width: 780px;
      margin: 0 auto;
      margin-top: -3.5rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      @media (max-width: 1536px) {
        align-items: center;
      }
    }

    &__emoji {
      font-size: 4rem;
    }

    &__title {
      font-size: 2rem;

      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    &__subtitle {
      color: rgb(220, 219, 219);
      font-size: 1rem;

      @media (max-width: 768px) {
        font-size: 0.6rem;
      }
    }
  }
</style>
