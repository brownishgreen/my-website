<template>
  <main class="min-h-screen">
    <HeroBanner
      bgImage="https://images.unsplash.com/photo-1755411391472-0dfd2dea016c?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      emoji="🚩"
      title="Changelog"
      subtitle=""
    />
    <div class="timeline article-container glass-article mb-20">
      <div class="timeline-item" v-for="event in events" :key="event.date">
        <div class="timeline-date">{{ event.date }}</div>
        <div class="timeline-content">
          <h3>{{ event.title }}</h3>
          <p v-html="event.description"></p>
        </div>
      </div>
    </div>
    <div class="timeline-bottom"></div>
  </main>
</template>

<script setup lang="ts">
  import HeroBanner from '../components/HeroBanner.vue'
const events = [
    {
      date: '2025-11',
      title: '轉職為全端軟體工程師 👨🏾‍💻',
      description:
        '重返社會當一隻牛囉 🐄',
    },
    {
      date: '2025-08',
      title: '完成初次的內觀（Vipassana)十日課程 🪔',
      description:
        '在嘉義中心學習這項由佛陀傳承的心靈淨化方法。',
    },
    {
      date: '2025-04',
      title: '離開田中系統｜入坑泰語拼字 😵‍💫',
      description: '再見了我最愛的同事們，我永遠忘不了與你們在一起的快樂時光。',
    },
    {
      date: '2024-09',
      title: '學會游泳 🥽',
      description: '克服了 32 年來的恐懼 🦋',
    },
    {
      date: '2024-03',
      title: '開始學習泰語口說 🇹🇭',
      description: '曼谷員工旅遊後迷上泰國人的生活哲學與文化!',
    },
    {
      date: '2024-01',
      title: '開始自學程式語言 💻',
      description: '今年開始把自己當作一個無懼的少年，學習所有想學的事物。',
    },
  ]
</script>

<style scoped lang="scss">
  .timeline {
    position: relative;
    margin: 3rem auto;
    padding: 2rem;
    padding-left: 2rem;
    max-width: 680px;

    // Center vertical line
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 2.8rem;
      width: 2px;
      bottom: 0;
      background-color: #94a3b8;
    }
  }

  .timeline-item {
    position: relative;
    margin-bottom: 3rem;
    padding-left: 2rem;

    // Timeline point
    &::before {
      content: '';
      position: absolute;
      top: 0.3rem;
      left: 0.5rem;
      width: 0.75rem;
      height: 0.75rem;
      background-color: #9dacc4;
      border-radius: 9999px;
      border: 2px solid white;
      box-shadow: 0 0 0 3px #c8d9e4; // Outer glow
    }
  }

  .timeline-date {
    font-size: 0.75rem;
    font-weight: 500;
    color: #7c8189;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .timeline-content {
    padding: 1rem 1.25rem;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    transition: transform 1500ms ease;

    h3 {
      font-weight: 700;
      margin-bottom: 0.25rem;
      font-size: 1rem;
    }

    p {
      font-size: 0.925rem;
      line-height: 1.5;
      color: #020303;
    }

    &:hover {
      transform: scale(1.02);
    }
  }

  // Dark mode adaptation
  :root.dark {
    .timeline::before {
      background-color: #64748b; // zinc-500
    }

    .timeline-date {
      background-color: #1e293b;
      color: #60a5fa;
    }

    .timeline-content {
      color: #e2e8f0;
      box-shadow: 0 1px 3px rgba(167, 163, 163, 0.25);

      p {
        color: #cbd5e1;
      }
    }

    .timeline-item::before {
      background-color: #60a5fa;
      border-color: #1e293b;
      box-shadow: 0 0 0 3px #0f172a;
    }
  }

  @media screen and (max-width: 640px) {
    .timeline {
      padding-left: 1.25rem;
    }

    .timeline-item {
      padding-left: 1.5rem;
    }

    .timeline-date {
      font-size: 0.7rem;
      padding: 0.15rem 0.5rem;
    }

    .timeline-content {
      font-size: 0.85rem;
      padding: 0.875rem 1rem;
      width: 95%;
    }
  }

  .timeline-bottom {
    width: 100%;
    height: 50px;
  }
</style>
