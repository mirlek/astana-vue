<template>
  <div class="about container">
    <div class="main-banner d-flex align-items-center w-100 border rounded-5">
      <img src="\img\icons\banner_img.jpg" alt="" class="w-100 h-100">
      <div class="d-flex flex-column justify-content-center align-items-center text-align-center jan-text">
        <h1>Жан журегiм, Астана</h1>
        <button class="btn btn-primary">Explore the City</button>
      </div>
    </div>
    <div>
      <my-stories></my-stories>
    </div>
    <div class="info mt-4 p-4 border border-success rounded-5 h5 text-start">
      <div class="h5 text-center"> <b>ABOUT</b></div>

      <div class="d-flex justify-content-center align-items-center mt-4">
        <div class="col info h5 text-start">
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
          </p>
        </div>
        <div class="col">
          <img src="\img\icons\ast_map.png" alt="" class="map-img">
        </div>
      
      <!-- <div class="accordion" id="accordionPanelsStayOpenExample">
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
    </div>
    </div>  
    
    
    
    <div class="animated d-flex flex-wrap align-items-center">
      <div class="col">
        <my-population-pie-chart></my-population-pie-chart>
      </div>
      <div class="col">
        <div class="progress-numbers mt-4">
          <div v-for="(item, index) in items" :key="index" class="mt-4 p-4 mx-auto border border-success rounded-5 h5 text-center align-items-center"
              ref="elements"
              v-show="isVisible[index]">
            <template v-if="item.type === 'animation'">
              <p>{{ item.text }}</p>
              <NumberAnimation
                :ref="`number${index + 1}`"
                :class="`${scaleClasses[index] ? 'scaleBig' : ''}`"
                :format="value => format(value, item.unit)"
                :from="0"
                :to="item.numberTo"
                :duration="item.duration * 5"
                easing="linear"
                @start="started(index)"
                @complete="completed(index)"
              />
            </template>
            <template v-else-if="item.type === 'text'">
              <p>{{ item.text }}</p>
              <p>UTC +5</p>
            </template>
          </div>
        </div>
      </div>
    </div>
    
    <div class="d-flex justify-content-center align-items-center">
      <div class="text-start">
        <div class="h5 text-center mb-4"> <b>RELIGION</b></div>
        <p>
          <b>Islam and Christianity</b> (primarily Russian Orthodoxy, Roman Catholicism, and Protestantism) are the predominant religions of the city. Other religions practiced are Judaism, Lutheranism, and Buddhism.
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
import MySlides from './Slides.vue';
import MyRoundSlider from './PopRoundSlider.vue';
import MyPopulationPieChart from './PopulationPieChart.vue';
import NumberAnimation from "vue-number-animation";
import MyStories from './StoriesPack.vue';


export default {
  name: "HomeView",
  components: { MySlides, MyRoundSlider, MyPopulationPieChart, NumberAnimation, MyStories },
  data() {
    return {
      items: [
        { type: 'animation', numberTo: 1423726, duration: 0.4, text: 'Population' },
        { type: 'animation', numberTo:  810.2, duration: 0.4, text: 'City Proper', unit: ' km²' },
        { type: 'text', text: 'Time Zone' },
      ],
      scaleClasses: [false, false, false],
      isVisible: [false, false, false],
    };
  },
  methods: {
    format(value, unit) {
      if (Number.isInteger(value)) {
        return value.toString() + (unit ? unit : ''); 
      } else {
        return value.toFixed(2) + (unit ? unit : ''); 
      }
    },
    started(index) {
      console.log(`Animation ${index + 1} starts!`);
      this.scaleClasses[index] = false;
    },
    completed(index) {
      console.log(`Animation ${index + 1} ends!`);
      this.scaleClasses[index] = true;
    }
  },
  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          this.isVisible[index] = true;
        }
      });
    }, { threshold: 0.5 });

    const elements = document.querySelectorAll('.about .border');
    elements.forEach((el, index) => {
      observer.observe(el);
      el.dataset.index = index;
    });
  }
};
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
