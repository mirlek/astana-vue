<template>
      <div v-for="(pop, index) in population" :key="index" class="d-inline-flex m-2">
        <round-slider
          v-model="pop.value"
          :start-angle="pop.startAngle"
          :end-angle="pop.endAngle"
          line-cap="round"
          :radius="pop.radius"
          :editable-tooltip="false"
          read-only
          :max="pop.max"
          :step="pop.step"
        />
      </div> 
</template>

<script>
import '@/assets/style.css'
import RoundSlider from 'vue-round-slider'

export default {
  name: "my-roundslider",
  components: { RoundSlider },
  data() {
    return {
      sliderValue: 60,
      population: [
        { label: 'kz', value: 79.1, startAngle: 315, endAngle: 315, radius: 80 },
        { label: 'ru', value: 12.85, startAngle: 315, endAngle: 315, radius: 80 },
        { label: 'uk', value: 1.32, startAngle: 315, endAngle: 315, radius: 80, max: 10, step: 0.01 },
        { label: 'ta', value: 1.08, startAngle: 315, endAngle: 315, radius: 80, max: 10, step: 0.01 },
        { label: 'uz', value: 0.96, startAngle: 315, endAngle: 315, radius: 80, max: 10, step: 0.01 },
        { label: 'other', value: 4.65, startAngle: 315, endAngle: 315, radius: 80, max: 10, step: 0.01 }
      ]
    }
  },
}
</script>

<style scoped>

</style>
