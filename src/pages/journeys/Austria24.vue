<template>
  <HeroBanner
    bgImage="https://www.notion.so/images/page-cover/met_winslow_homer_maine_coast.jpg"
    emoji="🇦🇹"
    title="Austria 24"
    subtitle=" "
  />
  <main class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out">
    <div
      class="bg-white dark:bg-zinc-900 transition-all duration-[1500ms] ease-in-out content-container"
    >
      <span><strong>｜</strong>Just a photo dump for now :S too busy to write the full travel
        story.</span
      >
      <br>
      <br>
      <div class="grid gap-6">
  <figure
    v-for="(image, index) in tripImages"
    :key="index"
    class="flex flex-col items-center"
  >
    <img
      :src="image.url"
      :alt="image.alt"
      class="rounded-lg shadow-md object-cover"
    />
    <figcaption
      v-if="image.alt"
      class="text-sm text-zinc-500 dark:text-zinc-40 text-center"
    >
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
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485268/933DDDD0-ECF0-4BA9-9965-584474505B93_1_201_a_qgj1lg.jpg',
    alt: '終於看到妹妹'
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485264/DA7EC7DD-2C47-4474-82C1-42A011F14641_1_201_a_achwk8.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485262/BC4FDBA9-0ED1-43C9-A86A-A056DC4DDCC3_1_105_c_x5hw1k.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485262/307562A6-8C8B-4054-8497-5BD55DF11F59_1_201_a_akqayh.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485259/78BA0782-DC95-447D-B010-B9BD14D70652_1_201_a_drw3u2.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485255/53E5D715-CFAD-477E-9EC3-1868F7646F43_1_105_c_g705wh.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485251/5C23088F-9747-423B-8F00-1C7138304F52_1_105_c_vgtast.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485250/2D77CD8D-4DED-4631-9ECD-D5E94DEF7629_1_201_a_ewoovw.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485247/EED3F330-89AE-4243-8A89-7678BAA0962B_1_201_a_naoysj.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485241/CA575A6E-1691-436A-826F-C9EFEA4FC93B_1_105_c_qhmqfd.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485237/0231AAC0-591E-48F4-90F5-D28481DE54AB_1_105_c_fss9p2.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485240/6227D9FC-E19C-4C36-8D88-3BBE9AF15974_1_201_a_ednojl.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485239/625106A6-C2A4-4E6C-A756-9698A125AAC1_1_201_a_ivsuld.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485234/5C364932-A852-4D0D-BD17-CCCD61C78E3A_1_201_a_qpto0f.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485231/3E230B98-FFD6-4D3A-BB6B-114B828337A4_1_105_c_hy8cap.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485231/CE66A324-4F75-4D89-9942-095F4D841794_1_201_a_rlxx0q.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485230/B2C7B643-C753-4EE1-80A9-85AD0D30C570_1_201_a_x7vkwk.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485222/918D2D3F-0F5F-4CDA-BC4B-97BAA60596BB_1_105_c_oyqznk.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485228/A5EE07CA-5E7A-44AA-A9C0-06DC02D461FC_1_105_c_d9depk.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485220/99D0E383-9D91-475A-A497-43E27D562A28_1_105_c_oawix0.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485221/27F424F0-E164-4A9E-B97B-A81518BB6713_1_201_a_vzrndn.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485219/8BB05286-6C91-4723-A923-E6623EA1858F_1_105_c_p5bfdb.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485215/1D580734-BA6C-43C3-960C-5B3A9618C994_1_105_c_mzdt22.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485214/FCA5AAFC-1DD3-4E12-899B-7D060FAFD870_1_105_c_hcfutb.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485213/55059780-A622-4CD9-829A-F560D20ABFE2_1_201_a_dvjnfj.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485211/1BAE8948-10E1-491F-B590-6F9A36FD64DC_1_201_a_fnudal.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485208/0E85A697-AC49-4EE8-B5EA-140B5881C0B9_1_201_a_gbbw6b.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485205/85F7B611-21AC-4041-B4A1-239C543B6C64_1_201_a_tzf9pc.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485210/32C85FA3-AEDF-4B4E-8DB0-B98068263EA0_1_201_a_xpe2xh.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485203/BB594AC6-F795-4FF6-B036-1A311610545C_1_201_a_zuodqn.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485200/54E51B13-8EFD-4037-9B3D-CE26263EC500_1_201_a_byzjuj.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485200/16223C96-007A-4AF2-B7C5-9241A56CE8FC_1_201_a_t5ex7t.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485199/DC2D0630-B2C1-4CE6-B77D-9CC0985BD80E_1_201_a_psdjtd.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485191/5D9F9DC2-40A3-49EE-B438-514CD731C51B_1_201_a_xz38fn.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749485189/5A7D78F9-0A23-4EA3-BFF3-78DE6636D048_1_201_a_tujwjj.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484981/792AF260-5E59-45D5-ACEF-64637AC89DCE_1_201_a_iybhar.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484979/6D1DB02C-8AC3-493E-865E-630915E4CC57_1_201_a_ajwqzk.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484978/05E6ACEB-E1F5-42EA-B5F2-69324AFEB14A_1_201_a_jupwzh.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484983/FF5301A4-A708-4095-BA33-8599430BA795_1_201_a_hmwb2t.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484982/013507AC-88FA-4D52-A3BC-EB44B8C4770E_1_201_a_p9kh2h.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484975/D454D006-2F9F-4CE5-B1FE-32EA881A7F85_1_201_a_z8ty2u.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484975/B1B07DE4-0E1C-4C58-9D6D-EBCA2EC2C280_1_201_a_quyfof.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484972/A3ECE909-5F01-440A-9D9A-05527B3D3577_1_201_a_cksran.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484969/645C66C6-35A9-4734-8FF0-D4574C2477C8_1_201_a_tbfy1o.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484969/19262D91-00A7-4CFB-A0A1-E61DACB63CFC_1_201_a_dcqhve.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484966/4B7015F8-723E-44BB-A577-A195B2C3CE4E_1_201_a_hvskdj.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484966/33C9481A-2790-4C5E-9E89-E4EDD7A85A88_1_201_a_hf2ehg.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484957/CE5D6F3B-41E2-47B5-A228-A1F2CBC16577_1_105_c_lqtlff.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484952/78F142A8-BAA3-41E1-A550-523C30EDC709_1_201_a_iz5qtu.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484956/A05993DD-F3B4-4DAE-A1DC-FE1124D8BB34_1_201_a_y3ebbu.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484960/DC71C0F4-CA51-4A0C-AEC9-904BF6AE18B4_1_201_a_s2rjsb.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484948/6F171622-E313-47B0-9E45-4D9D5E120D1C_1_201_a_ywnzwl.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484962/E93AA74F-1545-4370-A169-0F96A3BF4D86_1_105_c_e8ydbm.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484953/819F52AA-A906-47DB-AF0A-C0E8EA22A100_1_201_a_hankxf.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484943/A10E28D1-74E2-48E8-99FD-A61DC36934A4_1_201_a_xmhnhd.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484941/8B7FFC51-980B-4B61-A575-4C44DBBDC27E_1_201_a_wutxsw.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484944/EEEDEB61-768E-4B7A-89C1-8F4A003C5EC8_1_201_a_vdnnkv.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484943/88573F77-BC25-499D-BB41-A7D20E56C71C_1_201_a_krparm.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484939/5FE296DF-0CEB-463D-8051-CB9B4A00BA8F_1_201_a_qinuc5.heic',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484936/3A22210A-87AB-4999-8829-A1AE197AB575_1_201_a_bjic4d.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484935/AC425CD2-A120-477A-9EA5-331657F5D9CE_1_201_a_bccktk.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484932/78DCF280-F9EE-463A-B76B-F0A2C298B4B5_1_201_a_jlzc2k.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484932/82D15B88-CA47-4DBB-9A11-D9F5AD5908F4_1_201_a_ba494x.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484927/8F6F5732-4E8F-4D1F-AC46-0331F3C624BD_1_201_a_iotmqp.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484926/47B88766-CD18-42D5-B3D1-2C6AEFCE9126_1_201_a_jnqdt5.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484922/34717AA3-33A0-44C8-B782-A8CB8B158793_1_201_a_cajeo2.heic',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484921/FE571CE1-7CB5-4A6B-A098-34FCC7D3ED8F_1_201_a_rwmblb.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484918/656A0863-2FFC-4924-A785-BC9E9E29FD01_1_201_a_vlfvki.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484916/759BC6F6-AA35-4E36-857F-758253AFBBBB_1_201_a_l7phpn.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484909/EB317964-0618-4A2E-8E0B-8C160C5CE69B_1_201_a_ciu7jd.heic',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484903/BE355397-BBBE-4615-ACFE-2D7DD35EFC87_1_105_c_thus08.jpg',
    alt: ''
  },
  {
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484911/5C2B33D9-CC7C-444E-95B6-767DD0552080_1_201_a_qnut9q.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484901/8A2C48CD-B41B-489F-BAE2-A7BCC21B8F9B_1_201_a_cjizlk.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484902/98C99A3C-58F3-4D7A-B849-D9BEA46CBD19_1_201_a_odfacr.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484897/1DDC5F40-DF70-4317-92D2-CAAC09E82A77_1_201_a_sh5a2b.jpg',
    alt: '耳朵冷到快掉下來'
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484894/DF51C824-5518-43D0-9FE2-B564215AA892_1_201_a_gnpntv.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484895/FCA1B3F8-4D91-4B22-A57F-B71737869FCD_1_201_a_itt48q.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484892/CE56A7C7-EBB2-45F7-968D-9B445A4B55D3_1_201_a_qratza.heic',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484890/CD638B14-FE2F-47B4-8EDD-CBF28344777C_1_201_a_yf7otg.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484888/88293967-602C-46DE-BA0C-72D4CBA8A6B5_1_201_a_mggryj.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484885/11FCD12D-72DC-40D6-AAE4-92C244470AAE_1_201_a_wq87rj.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484883/8E7BC687-0351-4CC8-AD88-B1A79C4CAE3C_1_105_c_dhbbjz.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484881/7EF9C670-560F-4487-8C52-72A5FCC8650B_1_105_c_q9z88v.jpg',
    alt: '我的寶貝'
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484880/02F22ACA-23CA-4BCB-B13A-CBA77587FD57_1_201_a_fafp1g.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484879/F443D311-C681-486A-A215-441974BBEDE2_1_201_a_jclvx2.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484876/0874C087-CE36-4EDE-8C33-1FD23615C650_1_201_a_ezgeqg.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484873/38E56766-8AA6-4784-BCB2-D42889FC37D6_1_201_a_hpwkei.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484869/2E5A56E3-2AE7-4C4B-9079-D1BE49622365_1_201_a_jit4y0.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484868/F4BF4BBD-C9DF-49E3-9A28-57BBF6CDE1A6_1_201_a_qovgfd.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484866/A2CA9D82-E843-4DFB-8764-11E7D59C69C9_1_201_a_angknr.jpg',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484866/4601B12F-D759-421E-A383-E83D0EEC3E25_1_201_a_yutg3j.heic',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484864/28bf0aad-bfd3-49f5-ae2f-84662547a981_intb6f.png',
    alt: ''
  },{
    url: 'https://res.cloudinary.com/dube3xzga/image/upload/v1749484864/4D81FE71-B6B7-4AE0-A98F-FABCB1AE5CD4_1_201_a_ntzfdw.jpg',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
  },{
    url: '',
    alt: ''
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
