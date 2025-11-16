<template>
  <section class="transition-all duration-[1500ms] ease-in-out hero mt-[40px] mb-10">
    <div class="hero__content glass-hero">
      <!-- <img :src="bgImage" alt="background image" class="hero__background"> -->
      <div class="hero__text">
        <div class="hero__emoji">{{ emoji }}</div>
        <h1 class="dark:text-white hero__title">{{ title }}</h1>
        <p v-if="subtitle" class="leading-relaxed dark:text-white hover:text-blue-500 hero__subtitle">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    subtitle?: string
    emoji?: string
    // bgImage: string
  }>()
</script>

<style scoped lang="scss">
  .hero {
    width: 100%;

    &__background {
      width: 100%;
      height: 215px;
      object-fit: cover;
      display: block;
      border-radius: 1.5rem 1.5rem 0 0;
    }

    &__content {
      width: 93%;
      max-width: 780px;
      margin: 0 auto;
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    &__text {
      padding: 0.5rem 1rem 1.6rem;
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
      color: rgb(166, 164, 164);
      font-size: 1rem;

      @media (max-width: 768px) {
        font-size: 0.6rem;
      }
    }
  }

  .glass-hero {
    overflow: hidden; /* Ensure content respects border-radius */
  }
</style>
