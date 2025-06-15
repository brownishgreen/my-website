<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1429&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    emoji="🐻"
    title="Site of Yuan | 個人網站 "
    subtitle=""
  />
  <section
    class="about-container bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out"
  >
    <div class="max-w-3xl mx-auto px-6 py-12 items-start gap-8">
      <figure class="w-full md:w-full mt-5">
        <img
          src="https://res.cloudinary.com/dube3xzga/image/upload/v1749984480/image_qssqfv.png"
          alt=""
          class="w-full rounded-md shadow-xl object-cover"
        />
      </figure>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import HeroBanner from '../../components/HeroBanner.vue'
</script>
