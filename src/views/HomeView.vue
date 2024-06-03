<template>
  <div class="about container">
    <div class="main-banner d-flex align-items-center w-100 border rounded-5">
      <img src="\img\icons\banner_img.jpg" alt="" class="w-100 h-100">
      <div class="d-flex flex-column justify-content-center align-items-center text-align-center jan-text">
        <h1>Жан журегiм, Астана</h1>
        <button class="btn btn-primary">Узнать больше</button>
      </div>
    </div>
     <div class="info mt-4 p-4 border border-success rounded-5 h5 text-start">
      <p>
        Astana, the capital of Kazakhstan, is the country's most modern and stylish city, attracting visitors with its unique architectural designs. 
        The city sits on the banks of the Ishim River, which separates it into the right and left banks. 
      </p>
      <p>
        Formerly known as Akmolinsk, then Tselinograd, and later Nur-Sultan, this city has gracefully embraced change while preserving the echoes of its past.
      </p>
      <p>
        Today it symbolizes the vision and aspirations of a nation. Yet, amidst the shifting sands of time, one thing remains constant—the enduring spirit of Astana. 
        No matter the name it carries, the essence of this city remains eternally rooted, a testament to resilience, adaptability, and the unwavering strength that defines Kazakhstan's jewel. 
        In the end, it will forever be Astana, a city that transcends labels and stands proudly as a beacon of history, culture, and progress.
      </p>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-4">
      <img src="\img\icons\ast_map.png" alt="" class="map-img">
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
      </div>
    </div>
    <div>
      <p>Состав населения</p>
      <my-round-slider></my-round-slider>
      <my-population-pie-chart></my-population-pie-chart>
    </div>
    
    <div class="d-flex justify-content-center align-items-center">
      <div class="text-start">
        <p class="h5 text-center"> Religion</p>
      <p>
        <b>Islam and Christianity</b> (primarily Russian Orthodoxy, Roman Catholicism, and Protestantism) are the predominant religions of the city. Other religions practiced are Judaism, Lutheranism, and Buddhism.
      </p>
      <p>
        Our Mother of Perpetual Help Cathedral, Astana
        The Palace of Peace and Reconciliation was specially constructed in 2006 to host the Congress of Leaders of World and Traditional Religions. It contains accommodations for different religions: Judaism, Islam, Christianity, Buddhism, Hinduism, Taoism and other faiths.
      </p>
      <p>
        Central Asia's largest mosque, as well as Central Asia's largest synagogue are found in Astana.
      </p>
    </div>
      <my-slides></my-slides>
    </div>
   
  </div>
</template>

<script>
import MySlides from './Slides.vue'
import '@/assets/style.css'
import MyRoundSlider from './PopRoundSlider.vue'
import MyPopulationPieChart from './PopulationPieChart.vue'

export default {
  name: "HomeView",
  components: { MySlides, MyRoundSlider, MyPopulationPieChart },
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
.jan-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: transparent;
}
</style>
