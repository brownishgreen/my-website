<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1703733569670-f36996a8ca1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    emoji="🛖"
    title="吳爸爸米克斯庇護所"
    subtitle="Dogs are magic. Dogs are love."
  />
  <main class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
      <br />
      <br />
      <div class="grid gap-6">
        <figure
          v-for="(image, index) in tripImages"
          :key="index"
          class="flex flex-col items-center"
        >
          <img :src="image.url" :alt="image.alt" class="rounded-lg shadow-md object-cover" />
          <video
            v-if="image.videoURL"
            :src="image.videoURL"
            controls
            class="rounded-lg shadow-md object-cover w-4/5 mt-4"
          ></video>
          <figcaption
            v-if="image.figcaption"
            class="text-sm text-zinc-500 mt-2 dark:text-zinc-40 text-center"
          >
            {{ image.figcaption }}
          </figcaption>
        </figure>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import HeroBanner from '../../components/HeroBanner.vue'

  const tripImages = [
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881712/0D34CB9B-A5F4-4226-89B3-6DA5F881F0DF_1_105_c_aabwkm.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881713/F0711A0D-19C7-4BFF-AEBB-CEDE32370A5F_1_105_c_emwoxp.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881714/A9CEB0DE-1544-4719-BCE3-424F1C276A86_1_201_a_md8tjj.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881713/2ACBF84D-9905-4B69-820D-B859A4738813_1_201_a_yjbzny.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881711/fdf58558-3bfa-4a41-8224-d57165bd8170_ambyf3.png',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881708/65873AD8-5A8A-49F3-A127-9C3E632C6F96_1_105_c_mm9cwk.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881710/D243D3F7-1C94-490C-BFD5-F81E92274270_dq9pvj.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881710/a68fdbfb-5752-438f-b2a3-d5219d2ccfe3_nhv8fi.png',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881708/4026ED8E-551D-40E9-A3C1-8A47D3AEAF66_whmlkb.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881711/F4E17111-AB56-4BFD-A156-CC62BD7F0C2D_zbm6x9.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881709/85124B71-0D26-426B-B486-819BAB2E8044_eefhla.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881706/09E3F089-388B-4784-A02D-867AA64DD12A_bhaqh6.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881708/4060D26D-2576-4554-A4AC-70E16B6BBDC6_xeu6ql.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881710/EE44D15D-A291-4151-AA97-6702263B5EA5_qbxiwn.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881707/92FA271A-8EBF-4F93-A814-C4846F6D5F27_1_105_c_mvedas.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881707/image_szseos.png',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881707/image_1_eweken.png',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881706/BAC1B05B-65BA-4F8A-9FD6-18D86EAF820E_inewri.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881706/D14FA123-BF96-43B9-9531-BB9300130FFB_1_105_c_cizpoa.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881706/D000A0F2-F0E3-4C24-9DEE-0C0EEC2D7EAD_1_105_c_z1vnw0.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881705/B0036FA4-FEF2-46F2-9D66-5719708C8180_durpln.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881705/9E35670B-54EB-4BC7-B2B4-79717B64FE0F_1_105_c_kgoly1.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881705/9F91ED50-5A29-4A21-9300-BCF5561981FE_1_105_c_xmv1nr.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881705/0BE8DE62-0E2D-4308-929B-391680DD6B5B_yojkq0.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749881705/5F877945-66D8-4355-99D1-0B2C679A9639_jbnhwm.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: '',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
  ]
</script>

<style scoped class="scss">
  .content-container {
    width: 80%;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  span {
    @media (max-width: 1536px) {
      font-size: 0.5rem;
    }
  }
</style>
