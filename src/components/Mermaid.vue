<script setup>
  import { onMounted, watch, ref } from 'vue'
  import mermaid from 'mermaid'

  const props = defineProps({
    chart: {
      type: String,
      required: true,
    },
  })

  const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
  const rendered = ref(false)

  onMounted(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'default' })
    renderChart()
  })

  watch(
    () => props.chart,
    () => {
      renderChart()
    }
  )

  function renderChart() {
    mermaid.render(id, props.chart).then(({ svg }) => {
      document.getElementById(id).innerHTML = svg
      rendered.value = true
    })
  }
</script>

<template>
  <div :id="id" class="mermaid" v-if="!rendered">Loading chart...</div>
  <div :id="id" class="mermaid" v-else />
</template>
