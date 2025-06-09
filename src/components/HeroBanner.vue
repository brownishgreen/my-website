<template>
  <section class="hero">
    <div class="hero__background" :style="{ backgroundImage: `url(${bgImage})` }"></div>
    <div class="hero__content">
      <div class="hero__emoji">{{ emoji }}</div>
      <h1 class="hero__title">{{ title }}</h1>
      <p v-if="subtitle" class="hero__subtitle">{{ subtitle }}</p>
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
    margin-top: -4rem;
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
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  &__subtitle {
    color: gray;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
}
</style>
