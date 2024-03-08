
<template>
  <div v-if="this.slides && this.slides.active" id="carouselIndicators" class="carousel slide container mt-5 p-0" data-ride="carousel">
    <ol class="carousel-indicators">
      <div v-for="(slide, index) in slides.media" :key="index">
        <li data-bs-target="#carouselIndicators" :data-bs-slide-to="index" :class="index === 0 ? 'active' : ''" class="d-block ms-2"></li>
      </div>
    </ol>
    <div class="carousel-inner rounded-2">
      <div v-for="(slide, index) in slides.media"
           :key="index"
           :class="index === 0 ? 'carousel-item active' : 'carousel-item'"
           class="carousel-inner-content">
        <div class="d-flex align-items-center h-100 slide-wrap">
          <img v-if="isMobile()" class="w-100 h-auto slide-img" :src="slide.img_mobile_url" :alt="slide.id" />
          <img v-else class="w-100 h-auto slide-img" :src="slide.img_url" :alt="slide.id" />
        </div>
      </div>
    </div>
    <button class="carousel-control carousel-control-prev ms-5 m-auto" data-bs-target="#carouselIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon w-1 h-1" aria-hidden="true"></span>
    </button>
    <button class="carousel-control carousel-control-next me-5 m-auto" data-bs-target="#carouselIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon w-1 h-1" aria-hidden="true"></span>
    </button>
  </div>
</template>

<script>

export default {  
  name: "my-slides",
  data() {
    return {
      slides: {
        active: true,
        media: [
          {
            id:"slide-1",
            img_mobile_url:"https://all.accor.com/magazine/imagerie/futuristicheskaya-astana-2-6c5e.jpg",
            img_url: "https://cdn-kz.kursiv.media/wp-content/uploads/2023/07/astana-avtor-evgeniy-gorbunov-1024x683.jpg"
          },
          {
            id:"slide-2",
            img_mobile_url:"https://all.accor.com/magazine/imagerie/futuristicheskaya-astana-2-6c5e.jpg",
            img_url: "https://media.cnn.com/api/v1/images/stellar/prod/120709021722-eye-on-kazakhstan-astana.jpg?q=w_2700,h_1776,x_0,y_0,c_fill/h_618"
          },
          {
            id:"slide-3",
            img_mobile_url:"https://www.advantour.com/img/kazakhstan/astana/public-transport-nur-sultan.jpg",
            img_url: "https://www.advantour.com/img/kazakhstan/astana/public-transport-nur-sultan.jpg"
          },
          {
            id:"slide-4",
            img_mobile_url:"https://www.advantour.com/img/kazakhstan/tours/astana-tour/astana-city-tour1.jpg",
            img_url: "https://www.advantour.com/img/kazakhstan/tours/astana-tour/astana-city-tour1.jpg"
          }
        ]
      }
    }
  },
methods: {
  isMobile() {
    return window.innerWidth <= 640 ? true : false
  }
}
};
</script>

<style scoped>
.carousel-inner-content {
height: 300px;
object-fit: cover;
}
.carousel-control {
width: 50px;
height: 50px;
background-color:rgb(128, 128, 128);
border-radius: 100%;
}
.carousel-control:focus {
outline: none;
opacity: 0.5;
}
.carousel-control:hover {
opacity: 0.9;
}
</style>
