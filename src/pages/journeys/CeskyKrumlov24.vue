<template>
  <HeroBanner
    bgImage="https://res.cloudinary.com/dube3xzga/image/upload/v1749547420/3D7EB101-11D9-406E-A6AD-38BFE298AA1E_1_201_a_eqm7qo.jpg"
    emoji="🇨🇿"
    title="Český Krumlov, Česko 24"
    subtitle="photo dump for now :S"
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
          <figcaption v-if="image.alt" class="text-sm text-zinc-500 dark:text-zinc-40 text-center">
            {{ image.alt }}
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
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547661/05DE687B-CC30-4DF1-86FE-EE62AD6B64B2_1_201_a_ie5rua.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547419/2db4dfe4-4990-4118-abb6-b1bd5121b336_ibyxdo.png',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547421/2166B098-4EC4-495F-86E5-9716823F9ED3_1_201_a_ngfyqs.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547422/22AB08DC-A819-40D1-B305-F824733DF1E9_1_201_a_wdkj0g.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547423/D2772AA2-7C40-4D5E-A136-A794480D0F18_1_201_a_dw8pwd.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547434/EED5EB18-835F-4CA1-BD3B-5CC2D54E624C_1_201_a_dg0let.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547424/A9B64FDA-A12B-4F4C-9804-D861F1AF257D_1_201_a_yspjih.jpg',
      alt: 'I love it',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547424/FE582C8F-9CA0-4853-A5F2-E93F0EB1DB96_1_201_a_ouiiqx.jpg',
      alt: '我的手 😂 😂 😂',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547421/79EBA9FD-5BDF-4EF4-9695-BCF61AF20B69_1_201_a_rgax5s.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547414/41E45AEE-2574-4A4B-842C-60A2CAF97FB8_1_201_a_jfdbok.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547413/0B17CC9A-C435-40C7-882D-5763B1A208BB_1_201_a_afvbty.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547418/11B84B73-926A-4D97-AD69-B56540002266_1_201_a_s7i6bg.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547417/CF82C8E1-00E4-42D6-9BD7-1C14B83636CD_1_201_a_fcnemu.jpg',
      alt: '好吃酒好喝好喝真好喝 🍺',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547406/DE9EB2E0-AE09-48CD-9193-16D598FA1573_1_201_a_k96kdw.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547401/BBFDAFE7-75F3-4413-9235-1A81A94D3480_1_105_c_uawr4u.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547409/69260BFD-A612-46FB-A7D3-804AE62FD7B3_1_201_a_pbg3r6.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547405/2BCE6E96-543D-4531-B0C5-8094A5617153_1_201_a_jaooqu.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547412/154485B3-A18C-4EFF-9A66-2C1B9F12D942_1_201_a_akkbni.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547411/3AE0708A-E53C-49B7-AD85-4F4A77AF0117_1_201_a_qtzewq.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749549179/D99C191A-BF45-45F0-9FDB-E57D54C4B118_1_201_a_gffezs.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749549179/3ADDA673-238C-4202-B1CE-8DCED21A8E32_1_201_a_cd0bvw.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547414/EEA42C57-8E5C-46C9-849E-CB11C4F6E4D0_1_201_a_dwobyt.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749549176/CB7F6022-AFCA-44EF-8A22-DCA37770AD80_1_201_a_g40vaq.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749549176/5667B672-09C7-4862-A4FF-E683B8EF08A9_1_201_a_uburfq.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547409/8CF56BF4-20ED-4A60-869C-14227F73FC55_1_201_a_fteaci.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547400/903FD47C-DD26-45E3-A8C1-EF6D4B6E9DC9_1_201_a_p07ef4.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547417/42D3F836-9A78-4071-8494-C6CB3CB7913F_1_201_a_retxaw.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749549382/878C0CD6-EB27-428A-9454-B2659A3B6743_1_201_a_by0pwe.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547397/E7BA273E-06FC-46C4-8DDF-BB8CDEE5A11F_4_5005_c_rezdiw.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547411/700BECC5-4089-4AF8-8B39-E356523515CA_1_201_a_s64wir.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749549539/4462E0EC-0A9F-4EFC-888D-2E6526E4B322_1_201_a_jerz2f.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547405/61194493-D7A3-4809-8FA2-119573F06E4A_1_201_a_pso0i5.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547409/F9FAA810-1B74-4590-AAFF-3338D91F82B8_1_201_a_ohbajg.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547405/674E3115-22D5-43A5-8352-FA30E31558CF_1_201_a_qyjhhc.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547400/5CCD5ED8-10EE-4662-AD17-CAE5B1BBBF22_1_201_a_klvijb.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547402/30D27835-A82C-4E90-8113-E7999D69B959_1_201_a_lcdsip.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547410/5564CBD7-CB8E-455B-9E52-FFB6234FFE98_1_201_a_egdbv8.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547400/A5A91982-4CE6-4CE5-A922-E8768EC84346_1_201_a_nlxt65.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749547400/0A9643AB-5B40-4E42-877D-4F6678D65846_1_201_a_krhwzh.jpg',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
    {
      url: '',
      alt: '',
    },
  ]
</script>

<style scoped class="scss">
  .content-container {
    width: 60%;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 100px;
  }
</style>
