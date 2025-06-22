<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1577366695133-97df9428c17a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    emoji="🇭🇺"
    title="Budapest, Hungary 24"
    subtitle="Budapest is probably my favorite city so far."
  />
  <main class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
      <span
        ><strong>｜</strong>Just a photo dump for now :S too busy to write the full travel
        story.</span
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
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525271/5485480D-E8B0-4BB6-8CE3-A6BBA6ECCCD5_1_201_a_yt1ye3.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525260/4E092404-8722-4739-A4A6-E2F284445139_1_201_a_d2lbiz.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525258/1EE126C6-C518-402F-836D-7C827140215D_1_201_a_pmtjer.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525263/9B249C16-29BF-47B7-85C3-CEE1FC43D51E_1_201_a_kgpazl.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525267/B04A89F6-6E54-461E-A17C-B7930CD92735_1_201_a_aj8i5r.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525268/BB6668CD-4AFC-40E1-B73F-E65AA4787F39_1_201_a_nrxjn3.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525266/859B74EC-5D18-4381-B0F8-D1437C10FD6D_1_201_a_jgzdoy.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525269/CA4B990D-53C4-4E22-BBA8-05A8355C976F_1_201_a_jc93aw.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525270/CDCF4169-ABE7-42DB-8F66-17199C9924F2_1_201_a_bnigye.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525263/9DBBCB2B-8C98-46E0-AC98-74EFFB4EB69E_1_201_a_lunm9b.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525259/04D7C831-90C0-4799-9A1F-AA845292A855_1_201_a_kjc65o.heic',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525258/3A92CAA5-5D9E-4712-93D4-0EC8487B787A_1_105_c_ojofwb.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525265/443A76F0-4F9C-4D7C-84CF-F9AD9F1EFC8A_1_201_a_igctlr.jpg',
      alt: '餐後多瑙河畔散步',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525264/155A6C9A-504D-458B-8321-EAC21979AE5B_1_201_a_ji1dux.jpg',
      alt: '公益書車計畫 / Könyvmentők 是拯救書本的人。路人可免費拿取（或小額捐）放在古董馬車上的棄書。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525261/05D94FB6-4DCB-4C61-91A6-BBC1EF6F770E_1_201_a_vgjsc9.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525252/D47CAE48-A523-4859-A292-410218886EF6_1_201_a_tejc6t.jpg',
      alt: 'mom and sis',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525249/6DEA8D4B-08D1-4651-8535-102F59B3B093_1_201_a_ulf4dn.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525250/61FD82A5-BC2B-47B7-A7E4-C4A46B185376_1_201_a_j8kgm3.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525249/7B4A4A54-09B4-4C85-9F99-B510646226E7_1_201_a_xytuzf.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525258/F8BA806A-D36B-41C6-B6F4-A82569A7022E_1_201_a_y1zytd.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525255/F4B63A8D-4148-4B78-AFF8-C2116E021C78_1_201_a_qav6bd.jpg',
      alt: 'Mom is too short 😂',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525256/F08443B8-EFA2-44DF-833D-22E3B4D762D5_1_105_c_pybtwu.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525245/3F5F96C4-BC36-431D-9B96-F32F19690DC5_1_201_a_s4cmds.jpg',
      alt: '💗',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525254/E8F92933-5EF0-4125-A202-99CBB41B4693_1_201_a_k7hay4.jpg',
      alt: '拍照都會被拍到閉眼睛是我們家的遺傳疾病',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525250/70BDB4B0-8114-4F3B-A937-F7E6242BBC43_1_201_a_hdbtom.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525245/0A38B68D-55D3-4DB1-8AD8-682F355174CF_1_201_a_uiy2zy.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525246/4CAC364A-BAD3-4FF3-B3EC-85D04EA155F7_1_201_a_mvcvnq.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525252/DFD738CA-9D76-4098-A0D0-4CA1DB6868D4_1_105_c_q5on51.jpg',
      alt: '',
    },
    {
      url: '',
      videoURL: 'https://res.cloudinary.com/dube3xzga/video/upload/v1749533342/IMG_5605_ljudfp.mov',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525250/748CD480-7175-4D6D-A9CA-E829140211C0_1_105_c_dvyrej.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525237/3468E684-E4C5-466E-AA28-AACF758F07EE_1_105_c_nzg9pg.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525244/FE828F61-3167-4019-98D1-E63C7E82AA61_1_201_a_g0oxzi.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525237/83AC6E8C-A22A-44B3-8531-2E206C35C40D_1_201_a_ytijf8.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749534060/77F56358-C3FE-457F-8C23-CB629CD08671_1_201_a_e1m0ff.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525243/FA91256E-C033-459E-9B90-F1E302C7EF71_1_201_a_jxu9lt.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525235/16B52406-AD82-4B73-8E2B-8AE4991710DF_1_201_a_zrrj3j.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525242/EFCF84A8-B677-4752-A8C9-FA8244CD68F3_1_201_a_qsrbf7.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525241/D94A5BE2-FBD0-442B-8A4A-6C09263EF911_1_201_a_bnprrk.jpg',
      alt: 'https://www.instagram.com/luibudapest/',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525239/D1FB5102-959A-42BB-96F9-F0AFECED1691_1_201_a_ebqhm5.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525234/62FFCBCF-8948-4690-9EF8-DDD464F11F65_1_201_a_rzfjpq.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749534285/B98A5634-BD6C-4566-AD6E-EE75BA93B864_1_201_a_ntbvuv.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525236/56C93226-9678-417C-A140-9EF5452BF94F_1_201_a_ofygaj.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749534429/696D009B-C080-4CF2-8FC0-7B2C10771FF7_1_201_a_yvff0v.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749534428/0129F3F0-B752-4CCD-AFC5-1BEBA54C12C2_1_201_a_nbuada.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525232/C06761F6-275C-4DBE-8B02-578E542E83BF_1_201_a_x6d5uq.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525223/8AC664BA-FED9-46F5-AB72-A2AC83D979AF_1_105_c_kab2mo.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525225/0DC4BED6-B752-4289-B58B-2CD254C6ED18_1_201_a_knj5uz.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525225/5FB18288-CA87-4CB6-A150-828550870053_1_201_a_qbd0yg.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525227/78D72789-A1E8-4C20-A6A7-6C5FC0F76256_1_201_a_w5ersk.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525234/D40EDDB5-31D0-43FA-BDA4-9AA1AB4D14F6_1_201_a_pi2px0.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525229/771ED52C-8603-4DBF-9E73-0AFC047BA527_1_201_a_v3d9ij.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525231/BA3FBD36-0B27-4A50-8725-2AC2C766B9D2_1_201_a_rqoqei.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525231/3171C0EB-E9C7-486D-BADE-FC75B4E481DD_1_201_a_n205oq.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525220/D380E8CE-55D5-4B0C-96B6-BA750BC3FCE9_1_201_a_gzicqz.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749535860/56EA6808-551C-4B41-BF93-F3E1040BE196_1_201_a_uppcvy.webp',
      alt: '',
    },
    {
      url: '',
      videoURL: 'https://res.cloudinary.com/dube3xzga/video/upload/v1749534911/IMG_5787_pgz6fj.mov',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525212/32A1B828-EFB2-4CDF-BAE6-559C63D823F6_1_201_a_qbu9me.jpg',
      alt: 'https://gelartorosa.com/hu/',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525212/33C1A430-8CC8-4BAF-8EC4-2435ECF4371E_1_201_a_iozlq4.heic',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749536035/33C1A430-8CC8-4BAF-8EC4-2435ECF4371E_1_201_a_foo8sm.webp',
      alt: '',
    },
    {
      url: '',
      videoURL: 'https://res.cloudinary.com/dube3xzga/video/upload/v1749534899/IMG_5816_jp5r9p.mov',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525220/beddcdf7-d6f8-4e6e-ab34-a76921638319_hww8x8.png',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525217/82F66842-881D-4CA1-B2CB-8CC1E98D1C29_1_201_a_hdwew0.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525223/d576b0b1-3929-4150-8cfe-19452bbf06ef_qsmidv.png',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749536536/C4F92DB0-B77E-48B3-9B93-0C8BEB4DA792_1_201_a_bkcaev.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749536492/DAB23E88-0797-4E43-9B61-EC9820F598E6_1_201_a_p9kew4.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749536490/60B56DEF-1BCB-4E99-A187-6CC35268765A_1_201_a_ved8pj.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749536494/B758B128-9C10-4A3F-9676-89B06C1E2888_1_201_a_kknh4i.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525200/2CB27DA8-6454-420A-A6C9-A5E0DFBA019E_1_201_a_bmp2kz.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525207/A36D2B09-A74B-480D-AC1F-9233483ABDF3_1_201_a_tvezhi.heic',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525204/14AA3A6C-95A6-4954-B2DE-A64CAA57AB9A_1_201_a_kfzzd0.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525203/76C9FCB8-0A27-44AF-B412-920D7D887953_1_105_c_anlwiz.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525201/6FBBF936-E55B-4E6E-BB88-7CD5D4234C54_1_201_a_u3dapn.heic',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749536687/6FBBF936-E55B-4E6E-BB88-7CD5D4234C54_1_201_a_kt62mh.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525205/78BB0819-D964-4B80-98FB-BC38172563C7_1_201_a_itvjde.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749536492/5F3C1015-0776-457C-8717-DA282F0D8E3B_1_201_a_ctncka.webp',
      alt: '沒有下雨，只是想展示我整段旅程在一個 20 寸登機箱裡盡可能拼湊出穿衣風格',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525207/7472F11F-14CE-45F9-ABB7-488C75306B3E_1_201_a_p48jic.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525200/2B0546CF-827B-4DAD-8CCF-1E9F7159C977_1_201_a_ob5vm8.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525210/F8DC58B8-D7A6-4CA1-8735-2DCAF38E7E7A_1_201_a_ohksuu.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525209/E895C1BB-0BA2-411F-A131-3C4BF2DF5DDE_1_201_a_ibrs9n.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525193/26444BE9-9A70-4B84-8466-1356CCC6FCE1_1_201_a_w1qv9i.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525193/4511AAF7-B04E-47FE-9764-BF8FA8EBAC5D_1_201_a_nlfeu5.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525197/A6D0264E-449A-4638-99CB-A348BAA3C181_1_201_a_yu5tjd.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525189/3A2023B3-79E2-4113-BB40-8F4CC4961AE6_1_201_a_dpns6g.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525188/0B44E443-2B55-4E18-9D56-9F3B944DFE5C_1_201_a_whgond.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525198/ED6A0703-9BCA-4246-9A02-C4FBB1A71F77_1_201_a_rc7fw5.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525191/1D2D6AE7-038C-4087-A9C8-26BB90313E19_1_201_a_pbyxpm.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525195/4C15C2D7-409E-4DD8-91EA-EA0C5E772931_1_201_a_rr5udv.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525190/3EBA1DC5-18A4-4B8F-900A-385D71CC05AF_1_201_a_bbglkw.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525197/FCECA96C-4B15-4627-B3DF-10BC7CC98E07_1_201_a_qsv58d.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525192/5D6C58BB-1D96-4AAE-B6FE-08B646D0F05F_1_201_a_imhdlb.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525195/E0709D31-3B74-4065-AD98-0A12CB6A1EED_1_201_a_agnqly.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525199/EF82F2C0-1C96-4E2C-8614-D1BB9B88E055_1_201_a_gdugxl.jpg',
      alt: '',
    },

    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525186/CEF8B32D-935C-4509-857D-1FA18A883837_1_201_a_gvqki4.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524438/92190FED-8C76-4A6A-B61A-C38B2040C24E_1_201_a_rk12o4.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524436/3873C67B-6D6F-46F1-97F9-BA5F788C9F57_1_201_a_wqkljh.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525187/D230890E-1F3E-4CA8-8C01-C6A6F680916C_1_201_a_j9dahd.jpg',
      alt: '右邊的女孩提供了世界上最溫馨最歡樂的服務',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525186/B1749A03-33D4-4888-BD7D-16B53A274B19_1_201_a_zqsrmf.jpg',
      alt: 'Here are some food porns',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749525187/F98DFEEA-BB65-45E7-8355-99619194A6FE_1_201_a_ytsd7x.heic',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749537481/689CE7D9-2B85-49DA-8438-7D027C28F02E_1_201_a_mkffvo.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749537482/8538EEC4-3DCB-4818-9069-B6CC011B723A_1_201_a_ltax81.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749537483/F98DFEEA-BB65-45E7-8355-99619194A6FE_1_201_a_sduzta.webp',
      alt: '',
    },
    {
      url: '',
      videoURL: 'https://res.cloudinary.com/dube3xzga/video/upload/v1749534898/IMG_6315_opvqen.mov',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749537594/20951886-6A05-46A7-B255-F5C6C384ED06_1_201_a_g6rqza.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749537594/EFC6D9F6-0DA6-4E18-8E33-D5A36CA24061_1_201_a_fwyk4y.webp',
      alt: '再望回去',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749537712/1690D6DE-FF54-473F-82B3-9C2A2F3557D0_1_201_a_fdvyna.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524434/84EE2013-3755-4850-BB46-20A934BF805B_1_201_a_easidz.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524430/143ED857-C144-43A8-A77F-174C1FE74B63_1_201_a_h8imog.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749537712/2E99B14A-A7EF-4E65-9FBB-DBCF44E221BB_1_201_a_i9lfiw.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524429/06872999-3C86-48E9-9F4B-CBC42867ACA1_1_201_a_qqjmxd.heic',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749537788/06872999-3C86-48E9-9F4B-CBC42867ACA1_1_201_a_v4zed1.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524433/F6BD3CEA-1ED4-4D46-B906-3358160B5529_1_201_a_iseqfm.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524430/098C5020-4AFF-4F2E-8701-E89861DF5CF9_1_201_a_jwmcya.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524429/21F31A08-03F8-4EAD-9C20-957F82505F1F_1_206_a_t7supi.jpg',
      alt: '',
    },
    {
      url: '',
      videoURL: 'https://res.cloudinary.com/dube3xzga/video/upload/v1749534912/IMG_8366_q2k2rd.mov',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524428/0BB82F15-4CC0-48A2-85D1-B012E1E04C0D_1_206_a_r3hqwh.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524434/CF927607-2754-4AC0-9797-CCC7829AF76F_1_201_a_o2cghz.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524431/82310440-2D63-4A6E-8161-F2E9709996FF_1_201_a_b81odo.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749537960/A29B0B04-4CE3-4792-849D-7588E007683E_1_201_a_bndkfz.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749538017/583E6FAE-1AF0-4D2F-B832-F616FD6653D0_1_201_a_qsnw6i.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524418/6B5BDFC1-1936-4695-BDE8-A8947F52B91F_1_206_a_cvbbx1.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524422/303B8BFA-2006-40E5-BFD3-CB52CB1D270F_1_206_a_jiinu2.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749538121/379C2917-DF91-4D3D-A782-A97B22B09FAC_1_201_a_bx6kiq.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524426/59409F32-E02F-4A1C-A92A-FA74FD6B9A1B_1_201_a_grgmfh.heic',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749538162/59409F32-E02F-4A1C-A92A-FA74FD6B9A1B_1_201_a_ewi2wh.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524421/40D1ACF8-4165-467E-BF00-CF5346E05468_1_206_a_h4iqk5.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749538217/2039497C-5906-4111-9910-30C956998DF1_1_201_a_nr8mpw.webp',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524425/B0BE2C6A-6901-4792-8198-C712D32EAC88_1_201_a_xenudu.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524425/91A494A3-8034-4260-8F27-90A6BC9D0441_1_201_a_jnehgn.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524419/6B7C92A2-54B3-4A65-8922-FBADEE445249_1_201_a_dwk7eq.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524420/8F11EA87-0127-4DBC-97C0-F8B68761A81E_1_201_a_rqvevs.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524427/F3F02B54-47A5-4627-A7FB-D081D429C1BC_1_201_a_fs81w5.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524418/6B551051-A51B-45FD-86AC-14A979254D42_1_201_a_te8jbv.jpg',
      alt: '',
    },

    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749524424/B7AA9E0E-AD10-4EEC-BAAF-35C47C06974B_1_201_a_knyjkt.jpg',
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
    width: 80%;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  span {
    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
  }
</style>
