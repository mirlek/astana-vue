<template>
  <div class="about">
    <h1>This is an about page</h1>
    <my-slides></my-slides>
  </div>
</template>

<script>
import MySlides from './Slides.vue'


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