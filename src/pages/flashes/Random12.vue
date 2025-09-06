<template>
  <HeroBanner
    bgImage="https://images.unsplash.com/photo-1655832637772-aea7be2eeb66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    emoji="🕰️"
    title="Random 12"
    subtitle=""
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
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879742/B65B8B16-0CA1-42BF-A57D-8C77302B7D68_w9u19f.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879771/1DF9B233-1524-48D1-A6A1-99B4D295FE4D_1_201_a_zurgiv.jpg',
      videoURL: '',
      alt: '',
      figcaption:
        '2024 生日當天台南式早餐。Uber 從高鐵站過去吃完，再搭去奇美博物館，我跟吳奕儒說：為了這餐搭兩趟 Uber？',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879772/739881E1-658C-42CB-84A8-13DD21E122CD_1_201_a_mhi0y9.jpg',
      videoURL: '',
      alt: '',
      figcaption: '袋鼠極有可能是強妮近親，澳洲野犬或許也是 🦘🐕',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879770/21809BA2-25EC-4EAB-B313-27CEF25201CB_1_201_a_xbfary.jpg',
      videoURL: '',
      alt: '',
      figcaption:
        '秘氏老闆掛病號，店貓從窗縫出來，後來到了鄰近的小店享用了日本老闆娘的家庭料理，明太子義大利麵。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879770/%E5%8F%B0%E5%8D%97%E4%BA%94%E6%A2%9D%E6%B8%AF_%E9%83%AD%E6%9F%8F%E5%B7%9D1944_%E7%84%A1%E6%A1%86_sgxonj.jpg',
      videoURL: '',
      alt: '',
      figcaption: '郭柏川的台南五條港。色調內斂、筆觸樸實、溫柔，以及胸口悶悶的想掉眼淚。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879772/A2254E22-404C-48E2-AAB7-46FF88213868_1_201_a_tgvzbr.jpg',
      videoURL: '',
      alt: '',
      figcaption: 'Tina 像我的小妹妹一樣，很愛漂亮、很聰明。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879763/8CF326E0-90F4-416E-99BD-0CF9E038A6DF_1_105_c_kbkmcx.jpg',
      videoURL: '',
      alt: '',
      figcaption:
        '20240724 妹妹回台灣，這麼小的身體扛了四個行李回來，旅程上很幸運的得到人們的幫忙。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879766/1B073C3F-48DB-4580-98DA-CBAA634FC224_1_201_a_wqarcr.jpg',
      videoURL: '',
      alt: '',
      figcaption: '當日是颱風天很多航班都取消了，萬幸！',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879766/AFD82225-49CD-40E3-9BCD-07E649C890F6_1_201_a_jkc3ue.jpg',
      videoURL: '',
      alt: '',
      figcaption: '老伯要哭了',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879772/d317b314-ddde-48a9-b9f8-dc9d83cb206e_qgluji.png',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879768/71c79607-bef3-4f77-8ee0-5aea825c5cb4_vjbl6c.png',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879771/C4835D9C-3CD4-476C-AFEA-670082CD9075_1_201_a_tgqg35.jpg',
      videoURL: '',
      alt: '',
      figcaption: '被貓咪們環繞',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879771/FC83FAB9-53E3-48D0-84AF-6DAE3A81B427_1_201_a_ve1fzr.jpg',
      videoURL: '',
      alt: '',
      figcaption: '我在台中敲開的原礦，謝謝哲均讓我們體驗。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879769/AFEABEB8-51D0-46F1-AFE4-E77B1F29AF3C_1_201_a_p53cac.jpg',
      videoURL: '',
      alt: '',
      figcaption: '一度迷戀仙人掌，現在多分送出去，只留下為數不多的幾盆，全盛時期的光景做個念想 🌵',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879767/213E2904-C750-4960-A5AF-515011C0DF2B_1_201_a_dsd7ek.jpg',
      videoURL: '',
      alt: '',
      figcaption: '某天上泰文課的早餐',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879766/34C1DE7F-4910-40A9-AFA0-DFC385DB7D5E_1_201_a_gekjqj.jpg',
      videoURL: '',
      alt: '',
      figcaption: '20240720 阿蕊第一次摸到我的狗，這時他們已經6歲了',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879761/C8298EA3-27E7-41D0-8A9B-D3EE35F2BD8A_1_105_c_vm9713.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879761/1936EA08-7E69-45EC-B628-772F6BC09B1A_1_201_a_hghwxf.jpg',
      videoURL: '',
      alt: '',
      figcaption: '即將成為保鮮盒大亨的我幫點數們拍一張遺照：D',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879757/58C826B6-AEED-4D03-8271-CF69CA1A31B4_1_201_a_t5ho4f.jpg',
      videoURL: '',
      alt: '',
      figcaption: '拍給梁君璞給她看我有多壯(?)。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879762/C358F135-5297-4CCC-B291-9BC016497B85_1_201_a_lqfg3o.jpg',
      videoURL: '',
      alt: '',
      figcaption: '20240316 很久沒跟梁君璞吃飯，這次之後也很少吃飯。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879762/48919DA6-926C-4891-BB11-CAE776A8345E_1_201_a_npxdsq.jpg',
      videoURL: '',
      alt: '',
      figcaption: '當了上班族之後一直坐著，貼志玲姊姊提醒自己要萌萌站起來。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879760/9FCC5C4F-5B96-4C67-BE17-7BE3693629CE_1_201_a_apagrq.jpg',
      videoURL: '',
      alt: '',
      figcaption: '202403的嘉明的味道',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879764/CA280137-1CCB-4A11-880E-5EDB6CD59C70_1_201_a_tifhkj.jpg',
      videoURL: '',
      alt: '',
      figcaption: '202403的夢幻湖',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879763/4D6548E6-1052-4D3B-B5A0-DF2B278F410C_1_201_a_ks243f.jpg',
      videoURL: '',
      alt: '',
      figcaption: '202403的夢幻湖',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879756/8B157836-C4A3-4F28-B9C8-9ACE9CA6CD1B_1_201_a_edoa0k.jpg',
      videoURL: '',
      alt: '',
      figcaption: '在家裡附近開了一家零浪費商店 ✌️✌️',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879755/a1905ec4-6746-4051-b609-c2f4070a1484_hvesge.png',
      videoURL: '',
      alt: '',
      figcaption: '考證照假日去讀書一起吃漢堡包的時光',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879755/CE499961-133B-4270-9885-D32FB5FE7F37_1_105_c_qd0rpm.jpg',
      videoURL: '',
      alt: '',
      figcaption: '考到了 ✌️',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879753/67B2A7DB-D0C5-47E0-B495-F0F3555C1266_1_105_c_ovyuic.jpg',
      videoURL: '',
      alt: '',
      figcaption: '後來變成我的愛店',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879758/D1AC0B8A-14A3-4B30-BC06-E21AE90B8D44_1_105_c_wwdb0k.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879755/4092F178-7905-4789-B355-137F64F393D1_1_105_c_efba7z.jpg',
      videoURL: '',
      alt: '',
      figcaption: '那天我人在植物園吸收天地靈氣。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879755/564AD4D6-3D20-463D-B50A-6BE1865E7D79_1_201_a_y5yans.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879754/B73E61CA-B812-4DB9-91D7-CBBCF46CA58F_4_5005_c_pfht6o.jpg',
      videoURL: '',
      alt: '',
      figcaption: '被達美樂創辦人快樂地做披薩感動到想去應徵，但家樓下的達美樂熄燈了 🍕',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879752/3F2A57BF-E50C-4280-A20E-28FA76AD546F_1_105_c_b1llyq.jpg',
      videoURL: '',
      alt: '',
      figcaption: '在新加坡買給恩質的史瑞克書包，要不是放不下電腦我真想也來一個。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879753/78F54AEF-E0E5-4DDD-817E-F23A5B3F1D98_1_105_c_tu5srj.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879752/664B728A-9862-4E68-A6F7-E0BF946ED44E_1_105_c_bfoovm.jpg',
      videoURL: '',
      alt: '',
      figcaption: '公司裝潢完換成升降桌。假日把電腦帶過去先佈置好',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879752/B8EECA68-95C7-43DA-8038-B13CF451C403_1_201_a_pis6sm.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879753/D0959FE8-DB96-4BCE-BA54-5EA72C97E17F_1_201_a_mgpskw.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879751/B952D547-DCA2-403D-91C9-D6E6E114F63C_1_105_c_mhd57t.jpg',
      videoURL: '',
      alt: '',
      figcaption: '我的黃金鼠，鼠麻，籠子不關起來也不會跑出來的奇怪倉鼠。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879750/7D8DD5FE-70A1-4F94-9BB1-92AD0B6040BE_1_201_a_lv6g7o.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879748/03F1D65F-E613-4728-ABAF-19B9EFA3FFF1_1_201_a_jtf3lp.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879749/0E34F3B7-6465-4FB0-93B0-6C7AC66EA1A9_1_201_a_fkokjg.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879759/9CC7A823-C9CC-4E11-AD68-2E31E0E36DB8_1_201_a_vfshc3.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879743/497ECD66-D97E-4E18-94AA-D2752F208DB0_1_201_a_ugk2wa.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879751/6AA64AC5-04FB-41D8-AA90-9ADB955A72D5_1_201_a_z9pl2g.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879750/BF23CAE9-B70A-4FCB-B19A-DEB59A26D346_1_201_a_nutjmb.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879743/B8B85D26-5B69-404A-BADB-CC2D6F98F561_1_105_c_hixtt2.jpg',
      videoURL: '',
      alt: '',
      figcaption: '不會游泳所以帶浮潛的面具 🤿',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879743/b83f4a4a-659c-41b0-872a-448ede7db4c0_q2mr4x.png',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879739/281C0581-5167-4893-B9E5-D5D3D4E14E96_1_105_c_ebnq3j.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879739/387E8B17-0788-4FF6-8ACC-D11D9CE96ADB_dcd7bc.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879742/89F307E2-1ADF-4FA1-92BA-2166CDEDB434_jdoeeb.jpg',
      videoURL: '',
      alt: '',
      figcaption: '有一陣子，我們上班中午會去吸貓。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879746/D21787AD-F4FE-40E1-9DE4-F6D890F09329_wskjer.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879741/77324B85-6B81-4335-9D5D-F1EA26347D78_1_105_c_vphxlw.jpg',
      videoURL: '',
      alt: '',
      figcaption:
        'Brucer，梁君璞的狗，有一次他肚子痛沒力氣發狂，我一直揉他的腹部，後來他愛了我一輩子。',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879741/E631CC3C-741B-4A43-A2CF-B515839170BD_1_105_c_p5dj4o.jpg',
      videoURL: '',
      alt: '',
      figcaption: '每每到了這種摩門特我都覺得自己是萬獸之王',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879739/9E46FCB3-9BC5-4182-B692-1D0C8215EB4E_1_105_c_b00pgb.jpg',
      videoURL: '',
      alt: '',
      figcaption: '臣服吧我可愛的子民',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879740/FE297936-6FF6-451B-B535-6FBD2E8ABCBC_1_105_c_wqd6bx.jpg',
      videoURL: '',
      alt: '',
      figcaption: '上班第一天，SLACK 還沒想到適合的頭像 😂',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879739/2D516CEC-107B-4169-BDF6-4E747FB78319_1_105_c_xeof9q.jpg',
      videoURL: '',
      alt: '',
      figcaption: 'Good old days. 這張照片代表著我的2016-2018-2022',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879740/E780B8F5-2DBA-491F-A229-3000D5A32311_1_105_c_enqaly.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879739/98C1ED50-C89B-4251-9B51-B28FCD80E08A_1_105_c_fxhgtx.jpg',
      videoURL: '',
      alt: '',
      figcaption: '',
    },
    {
      url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749879739/D2C40575-7E5D-4D6C-9923-E90958EE3ADB_1_105_c_gxw2n1.jpg',
      videoURL: '',
      alt: '',
      figcaption: '鼠麻 《3',
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
