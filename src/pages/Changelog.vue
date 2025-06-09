<template>
  <div class="timeline">
    <div class="timeline-item" v-for="event in events" :key="event.date">
      <div class="timeline-date">{{ event.date }}</div>
      <div class="timeline-content">
        <h3>{{ event.title }}</h3>
        <p v-html="event.description"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const events = [
  { date: '2024-11', title: '進入中級泰文 🇹🇭', description: '學泰文一點用都沒有，แต่สบายมาก 😌' },
  { date: '2024-9', title: '學會游泳 🥽', description: '克服32年來懼水的毛病，沒想到最後竟學會三式。' },
  { date: '2024-4', title: '開始自學程式語言 💻', description: '今年開始把自己當作一個無懼的少年學習所有想學的事物。' },
  { date: '2024-3', title: '開始學泰文 🇹🇭', description: '曼谷員工旅遊後深深迷上泰國人的生活哲學 “ใจเย็น เย็น”' },
  { date: '2024-2', title: '東歐之旅 🇦🇹 🇭🇺 🇨🇿', description: '維也納 - 布達佩斯 - 哈修塔特 - 庫倫洛夫<br>Budapest is my favorite city in the world.' },
]
</script>


<style scoped lang="scss">
.timeline {
  position: relative;
  margin: 3rem auto;
  padding-left: 2rem;
  max-width: 680px;

  // 中間直線
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 2.8rem;
    width: 2px;
    height: 100%;
    background-color: #94a3b8;
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;

  // 時間點
  &::before {
    content: "";
    position: absolute;
    top: 0.3rem;
    left: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    background-color: #9dacc4;
    border-radius: 9999px;
    border: 2px solid white;
    box-shadow: 0 0 0 3px #c8d9e4; // 外圈光暈
  }
}

.timeline-date {
  font-size: 0.75rem;
  font-weight: 500;
  color: #7c8189;
  background-color: #e0f2fe;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.timeline-content {
  background-color: #f1f5f9;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

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

// dark mode 適配
:root.dark {
  .timeline::before {
    background-color: #64748b; // zinc-500
  }

  .timeline-date {
    background-color: #1e293b;
    color: #60a5fa;
  }

  .timeline-content {
    background-color: #1f2937;
    color: #e2e8f0;

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

// 小螢幕寬度優化
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
  }
}
</style>
