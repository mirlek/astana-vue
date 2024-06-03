<template>
  <div v-for="(pop, index) in population" :key="index" class="d-inline-flex m-2">
    <round-slider
      v-model="pop.value"
      :start-angle="pop.startAngle"
      :end-angle="pop.endAngle"
      line-cap="round"
      :radius="pop.radius"
      :editable-tooltip="false"
      :read-only="true"
      :max="pop.max"
      :step="pop.step"
    />
  </div>
</template>

<script>
import { RoundSlider } from 'vue-round-slider'

export default {
  name: 'my-roundslider',
  components: { RoundSlider },
  data() {
    return {
      population: [
        { label: 'kz', value: 79.1, startAngle: 315, endAngle: 315, radius: 80 },
        { label: 'ru', value: 12.85, startAngle: 315, endAngle: 315, radius: 80 },
        { label: 'uk', value: 1.32, startAngle: 315, endAngle: 315, radius: 80, max: 10, step: 0.01 },
        { label: 'ta', value: 1.08, startAngle: 315, endAngle: 315, radius: 80, max: 10, step: 0.01 },
        { label: 'uz', value: 0.96, startAngle: 315, endAngle: 315, radius: 80, max: 10, step: 0.01 },
        { label: 'other', value: 4.65, startAngle: 315, endAngle: 315, radius: 80, max: 10, step: 0.01 }
      ]
    }
  }
}
</script>

<style scoped>
.d-inline-flex {
  display: inline-flex;
}
.m-2 {
  margin: 0.5rem;
}
</style>
<!-- 
<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Population
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>1,423,726</strong>(1 December 2023)
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        City Proper
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>810.2 km2 (312.8 sq mi)</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Time Zone
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>UTC+5 (Kazakhstan Time)</strong> 
    </div>
  </div>
  </div>
</div> -->