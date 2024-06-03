<template>
  <div class="about container">
    <div class="main-banner d-flex align-items-center w-100 border rounded-5">
      <img src="\img\icons\banner_img.jpg" alt="" class="w-100 h-100">
      <div id="jan-text" class="d-flex flex-column justify-content-center align-items-center text-align-center">
        <h1>Жан журегiм, Астана</h1>
        <button class="btn btn-primary">Узнать больше</button>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-4">
      <img src="\img\icons\map.png" alt="" class="map-img">
      <div class="info h5 m-4">
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
    <div>
      <p>Состав населения</p>
      <my-roundslider></my-roundslider>
    </div>
    
    <div class="d-flex justify-content-center align-items-center">
      <p class="text-start">
        Islam and Christianity (primarily Russian Orthodoxy, Roman Catholicism, and Protestantism) are the predominant religions of the city. Other religions practiced are Judaism, Lutheranism, and Buddhism.
        <br />
        Our Mother of Perpetual Help Cathedral, Astana
        The Palace of Peace and Reconciliation was specially constructed in 2006 to host the Congress of Leaders of World and Traditional Religions. It contains accommodations for different religions: Judaism, Islam, Christianity, Buddhism, Hinduism, Taoism and other faiths.
        <br />
        Central Asia's largest mosque, as well as Central Asia's largest synagogue are found in Astana.
      </p>
      <my-slides></my-slides>
    </div>
   
  </div>
</template>

<script>
import MySlides from './Slides.vue'
import '@/assets/style.css'
import MyRoundSlider from './RoundSlider'

export default {
  name: "HomeView",
  components: { MySlides, MyRoundSlider },
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.main-banner {
  position: relative;
  height: 700px;
  overflow: hidden;
}
.main-banner img {
  object-fit: cover; 
}
.map-img {
  width: 100%;
  height: 400px;
}
#jan-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: Comfortaa;
}
.info {
  text-align: left;
}
</style>
