<template>
  <section class="hero">
    <div class="hero__background" :style="{ backgroundImage: `url(${bgImage})` }"></div>
  
    <div class="hero__emoji">{{ emoji }}</div>
    <h1 class="hero__title">{{ title }}</h1>
    <p v-if="subtitle" class="hero__subtitle">{{ subtitle }}</p>
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
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;

  &__background {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 0;
    height: 350px;
  }

  &__content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }

  &__emoji {
    position:absolute;
    inset: 0;
    top: 57%;
    left: 25%;
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  &__title {
    position: absolute;
    top: 78%;
    left: 25%;
    font-size: 2rem;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  &__subtitle {
    color: gray;
    position: absolute;
    top: 88%;
    left: 25%;
    margin-top: 0.75rem;
    font-size: 1.125rem;
  }
}
</style>
