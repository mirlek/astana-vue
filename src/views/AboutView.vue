<template>
  <div class="about container">
    <div id="jan-text">
      <h1>Жан журегiм, Астана</h1>
    </div>
    <my-slides></my-slides>
    <div class="info h5 mt-4">
      Astana, the capital of Kazakhstan, is the country's most modern and stylish city, attracting visitors with its unique architectural designs. 
      The city sits on the banks of the Ishim River, which separates it into the right and left banks. 
      <br>
      Formerly known as Akmolinsk, then Tselinograd, and later Nur-Sultan, this city has gracefully embraced change while preserving the echoes of its past.
<br>
Today it symbolizes the vision and aspirations of a nation. Yet, amidst the shifting sands of time, one thing remains constant—the enduring spirit of Astana. 
No matter the name it carries, the essence of this city remains eternally rooted, a testament to resilience, adaptability, and the unwavering strength that defines Kazakhstan's jewel. 
In the end, it will forever be Astana, a city that transcends labels and stands proudly as a beacon of history, culture, and progress.
    </div>
  </div>
</template>

<script>
import MySlides from './Slides.vue'
require('@/assets/style.css')

export default {
  name: "About",
  data() {
    return {
    }
  },
  components: { MySlides },

  methods: {
  }
}
</script>

<style scoped>

#jan-text {
  font-family: Comfortaa;
}
.info{
  text-align: left;
}
</style>