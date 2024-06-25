<template>
  <div class="container justify-content-center stories-main">
    <div class="stories">
      <vue-horizontal responsive>
        <button v-for="(value, index) in module.stories" :key="index" type="button" class="btn m-4"
                @click="openStoriesModal(value.story)">
          <img :src="value.thumbnail" class="thumbnail border border-2 rounded-5">
        </button>
      </vue-horizontal>
      <div class="modal fade" id="storiesModal" data-bs-keyboard="true" tabindex="-1" role="dialog" aria-labelledby="storiesModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <!-- <button v-on:click="closeStoriesModal" type="button" data-bs-dismiss="modal" class="btn-close"></button> -->
          <Stories v-if="storiesModal.length !== 0" :stories="storiesModal" class="ig-stories" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Stories } from "vue-insta-stories";
import VueHorizontal from "vue-horizontal";
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');


export default {
  name: "my-stories",
  components: { Stories, VueHorizontal },
  data: () => ({
    storiesModal: [],
    module: {
      stories: [
        {
          story: [
            {
              url: "https://as2.ftcdn.net/v2/jpg/04/19/05/65/1000_F_419056526_SHjq8zHkChwTTewj7gH0AqsRZ267X8Gp.jpg",
              type: "image",
            },
            {
              url: "https://media.istockphoto.com/id/1394778917/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=Irgh8Af3U4tzQNJ8XYfWY9-kCRWn4ibGsIkJiqIfLr8=",
              type: "image",
            },
            {
              url:  "https://foodal.com/wp-content/uploads/2021/01/Nacho-Pizza-Pin.jpg",
              type: "image",
            },
            {
              url: "https://file-examples-com.github.io/5mb.mp4",
              type: "video",
            },
          ],
          thumbnail: "https://img.freepik.com/premium-vector/pizza-pizzeria-italian-vertical-flyer-with-ingredients-text-fast-food-top-view_114352-189.jpg?w=2000",
        },
        {
          story: [
            {
              url: "https://as2.ftcdn.net/v2/jpg/04/19/05/65/1000_F_419056526_SHjq8zHkChwTTewj7gH0AqsRZ267X8Gp.jpg",
              type: "image",
            },
            {
              url: "https://media.istockphoto.com/id/1394778917/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=Irgh8Af3U4tzQNJ8XYfWY9-kCRWn4ibGsIkJiqIfLr8=",
              type: "image",
            },
            {
              url: "https://file-examples-com.github.io/5mb.mp4",
              type: "video",
            },
          ],
          thumbnail: "https://img.freepik.com/premium-vector/pizza-pizzeria-italian-vertical-flyer-with-ingredients-text-fast-food-top-view_114352-189.jpg?w=2000",
        },
        {
          story: [
            {
              url: "https://as2.ftcdn.net/v2/jpg/04/19/05/65/1000_F_419056526_SHjq8zHkChwTTewj7gH0AqsRZ267X8Gp.jpg",
              type: "image",
            },
            {
              url: "https://media.istockphoto.com/id/1394778917/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=Irgh8Af3U4tzQNJ8XYfWY9-kCRWn4ibGsIkJiqIfLr8=",
              type: "image",
            },
            {
              url:  "https://foodal.com/wp-content/uploads/2021/01/Nacho-Pizza-Pin.jpg",
              type: "image",
            },
            {
              url: "https://file-examples-com.github.io/5mb.mp4",
              type: "video",
            },
          ],
          thumbnail: "https://media.istockphoto.com/id/1394778917/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=Irgh8Af3U4tzQNJ8XYfWY9-kCRWn4ibGsIkJiqIfLr8=",
        },
        {
          story: [
            {
              url: "https://foodal.com/wp-content/uploads/2021/01/Nacho-Pizza-Pin.jpg",
              type: "image",
            },
            {
              url: "https://media.istockphoto.com/id/1394778917/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=Irgh8Af3U4tzQNJ8XYfWY9-kCRWn4ibGsIkJiqIfLr8=",
              type: "image",
            },
            {
              url:  "https://foodal.com/wp-content/uploads/2021/01/Nacho-Pizza-Pin.jpg",
              type: "image",
            },
            {
              url: "https://file-examples-com.github.io/5mb.mp4",
              type: "video",
            },
          ],
          thumbnail: "https://foodal.com/wp-content/uploads/2021/01/Nacho-Pizza-Pin.jpg",
        },
        {
          story: [
            {
              url: "https://foodal.com/wp-content/uploads/2021/01/Nacho-Pizza-Pin.jpg",
              type: "image",
            },
            {
              url: "https://media.istockphoto.com/id/1394778917/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=Irgh8Af3U4tzQNJ8XYfWY9-kCRWn4ibGsIkJiqIfLr8=",
              type: "image",
            },
            {
              url:  "https://media.istockphoto.com/id/1358406303/photo/close-up-image-of-sliced-pepperoni-pizza-on-round-wooden-chopping-board-and-margherita-on.jpg?s=612x612&w=0&k=20&c=LFJtB89-oFX2ZqTiHOUBHS9Eoel4SHEKF2YvUaUo67o=",
              type: "image",
            },
            {
              url: "https://file-examples-com.github.io/5mb.mp4",
              type: "video",
            },
          ],
          thumbnail: "https://media.istockphoto.com/id/1358406303/photo/close-up-image-of-sliced-pepperoni-pizza-on-round-wooden-chopping-board-and-margherita-on.jpg?s=612x612&w=0&k=20&c=LFJtB89-oFX2ZqTiHOUBHS9Eoel4SHEKF2YvUaUo67o=",
        },
        {
          story: [
            {
              url: "https://foodal.com/wp-content/uploads/2021/01/Nacho-Pizza-Pin.jpg",
              type: "image",
            },
            {
              url: "https://media.istockphoto.com/id/1394778917/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=Irgh8Af3U4tzQNJ8XYfWY9-kCRWn4ibGsIkJiqIfLr8=",
              type: "image",
            },
            {
              url:  "https://media.istockphoto.com/id/1358406303/photo/close-up-image-of-sliced-pepperoni-pizza-on-round-wooden-chopping-board-and-margherita-on.jpg?s=612x612&w=0&k=20&c=LFJtB89-oFX2ZqTiHOUBHS9Eoel4SHEKF2YvUaUo67o=",
              type: "image",
            },
            {
              url: "https://file-examples-com.github.io/5mb.mp4",
              type: "video",
            },
          ],
          thumbnail: "https://media.istockphoto.com/id/1358406303/photo/close-up-image-of-sliced-pepperoni-pizza-on-round-wooden-chopping-board-and-margherita-on.jpg?s=612x612&w=0&k=20&c=LFJtB89-oFX2ZqTiHOUBHS9Eoel4SHEKF2YvUaUo67o=",
        },
      ]
    },
    count: 1,
  }),
  methods: {
    openStoriesModal(story) {
      this.storiesModal = story
      let bsStoriesModal = new bootstrap.Modal(document.querySelector('#storiesModal'))
      bsStoriesModal.show();
    },
    closeStoriesModal() {
      let storiesModal = document.getElementById('storiesModal');
      let modal = bootstrap.Modal.getOrCreateInstance(storiesModal);
      modal.hide();
      this.count = 1;
    },
  },
  mounted() {
    const modal = document.getElementById('storiesModal')
    modal.addEventListener('hide.bs.modal', () => { 
      this.storiesModal = [] 
    })
  }
};
</script>


<style scoped>
.ig-stories {
  position: absolute;
  height: 100vh;
  height: -webkit-fill-available;
  width: 100vw;
  top: 0;
}


@media (min-width: 768px) {
  .ig-stories {
    position: relative;
    height: 730px;
    width: 420px;
  }
}
.thumbnail{
  height: 300px;
  width: 15em;
  padding: 0.5em;


}
.stories-main{
  white-space: nowrap;
  width: 100%;
  color: white;
}
.btn{
  --bs-btn-color: white;
}
</style>







