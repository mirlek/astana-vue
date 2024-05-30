
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
        <div class="d-flex justify-content-center h-100 slide-wrap">
          <img v-if="isMobile()" class="w-100 h-auto slide-img" :src="slide.img_mobile_url" :alt="slide.id" />
          <img v-else class="h-auto slide-img" :src="slide.img_url" :alt="slide.id" />
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
            img_mobile_url:"https://upload.wikimedia.org/wikipedia/ru/3/31/%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0%2C_%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B5%D1%87%D0%B5%D1%82%D1%8C_%D1%81_%D1%83%D0%B3%D0%BB%D0%B0.jpg",
            img_url: "https://upload.wikimedia.org/wikipedia/ru/3/31/%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0%2C_%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B5%D1%87%D0%B5%D1%82%D1%8C_%D1%81_%D1%83%D0%B3%D0%BB%D0%B0.jpg"
          },
          {
            id:"slide-2",
            img_mobile_url:"https://photos.wikimapia.org/p/00/03/08/00/00_big.jpg",
            img_url: "https://photos.wikimapia.org/p/00/03/08/00/00_big.jpg"
          },
          {
            id:"slide-3",
            img_mobile_url:"https://preview.redd.it/ogmpb8sy45b81.jpg?width=1080&crop=smart&auto=webp&s=a28854a450c393b1ce3aaa7dd11f3e78e14935e5",
            img_url: "https://preview.redd.it/ogmpb8sy45b81.jpg?width=1080&crop=smart&auto=webp&s=a28854a450c393b1ce3aaa7dd11f3e78e14935e5"
          },
          {
            id:"slide-4",
            img_mobile_url:"https://tengrinews.kz/userdata/gallery/2022/gallery_1467/resize/photo_36766.jpeg",
            img_url: "https://tengrinews.kz/userdata/gallery/2022/gallery_1467/resize/photo_36766.jpeg"
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
height: 400px;
width: 800px;
object-fit: cover;
}
.slide-img{
  width: 550px;
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
