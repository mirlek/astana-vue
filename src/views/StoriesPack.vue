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
              url: require('@/assets/video_view_4.mp4'),
              type: "video",
            },
          ],
          thumbnail: require('@/assets/view_3.jpg'),    
        },
        {
          story: [
            {
              url: require('@/assets/view_9.jpg'),
              type: "image",
            },
            {
              url: require('@/assets/view_8.jpg'),
              type: "image",
            },
            {
              url: require('@/assets/view_3.jpg'),
              type: "image",
            },
            {
              url: require('@/assets/view_4.jpg'),
              type: "image",
            },
            {
              url: require('@/assets/view_5.jpg'),
              type: "image",
            },
          ],
          thumbnail: require('@/assets/view_9.jpg'),
        },
        {
          story: [
            {
              url: require('@/assets/video_dance.mp4'),
              type: "video",
            },
          ],
          thumbnail: require('@/assets/view_13.jpg'),    
        },
        {
          story: [
            {
              url: require('@/assets/img_food_1.jpg'),
              type: "image",
            },
            {
              url: require('@/assets/img_food_2.jpg'),
              type: "image",
            },
          ],
          thumbnail: require('@/assets/img_food_2.jpg'),
        },
        {
          story: [
            {
              url: require('@/assets/view_1.jpg'),
              type: "image",
            },
            {
              url: require('@/assets/view_2.jpg'),
              type: "image",
            },
          ],
          thumbnail: require('@/assets/view_1.jpg'),
        },
        {
          story: [
            {
              url: require('@/assets/video_view_3.mp4'),
              type: "video",
            },
          ],
          thumbnail: require('@/assets/view_6.jpg'),    
        },
        {
          story: [
            {
              url: require('@/assets/video_view_2.mp4'),
              type: "video",
            },
          ],
          thumbnail: require('@/assets/view_12.jpg'),    
        },
        {
          story: [
            {
              url: require('@/assets/video_view_1.mp4'),
              type: "video",
            },
          ],
          thumbnail: require('@/assets/view_11.jpg'),    
        },
        {
          story: [
            {
              url: require('@/assets/video_concert.mp4'),
              type: "video",
            },
            {
              url: require('@/assets/video_scene.mp4'),
              type: "video",
            },
          ],
          thumbnail: require('@/assets/view_14.jpg'),    
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







