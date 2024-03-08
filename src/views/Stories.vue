<!-- <template>
  <div>
    <div v-if="this.STORIES && this.STORIES.active">
      <div class="stories-main container justify-content-center w-100 mt-5">
        <div class="stories row">
          <template>
            <vue-horizontal snap="center" :button-between="false">
              <button v-for="(value, index) in STORIES.media"
                      :key="value.id" type="button"
                      class="btn thumbnail-btn p-2 border border-2 rounded-4"
                      @click="openStoriesModal(value.story)">
                <div class="thumbnail rounded-4">
                  <img :src="value.thumbnail" class="w-100 h-auto">
                </div>
              </button>
            </vue-horizontal>
          </template>
        </div>
      </div>
    </div>
    <div class="modal fade" id="storiesModal" data-bs-keyboard="true" tabindex="-1" role="dialog" aria-labelledby="storiesModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content rounded-0">
          <div class="modal-body p-0 m-0 row story-wrap">
            <template>
              <Stories v-if="storiesModalArray.length !== 0"
                       :stories="storiesModalArray"
                       class="ig-stories px-0"/>
              <div class="position-absolute bottom-0 pb-3 d-flex justify-content-center">
                <button type="button" data-bs-dismiss="modal" class="rounded-5 p-1 btn btn-outline-secondary btn-close-modal">
                  <svg width="2rem" height="2rem" fill="white">
                    <use xlink:href="./static/ico/bootstrap-icons.svg#x-lg"/>
                  </svg>
                </button>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Stories } from "vue-insta-stories";
import VueHorizontal from "vue-horizontal";

export default {
  name: "my-stories",
  components: { Stories, VueHorizontal },
  data() {
    return {
      storiesModalArray: [],
    }
  },
  computed: {
    ...mapGetters([
      'STORIES'
    ]),
  },
  methods: {
    openStoriesModal(story) {
      this.storiesModalArray = story
      let bsStoriesModal = new bootstrap.Modal(document.querySelector('#storiesModal'))
      bsStoriesModal.show();
    },
  },
  mounted() {
    const modal = document.getElementById('storiesModal')
    modal.addEventListener('hide.bs.modal', () => { //вешаем событие на модальное окно
      this.storiesModalArray = []
    })
  }
};
</script>
<style scoped>
#storiesModal {
  border: 0 !important;
  --bs-modal-border-width: 0px
}
#storiesModal .modal-content {
  background: none;
}
.story-wrap {
  position: relative;
  height: 100vh;
}
.btn-close-modal {
  z-index: 100;
}
.ig-stories {
  position: relative;
  height: 100%;
  height: -webkit-fill-available;
  width: auto;
  top: 0;
  overflow: hidden;
  margin: 0 auto;
}
.stories-main{
  white-space: nowrap;
  color: white;
}
.btn{
  --bs-btn-color: white;
}
.thumbnail-btn {
  overflow: hidden;
  margin: 0 .5em;
}
.thumbnail-btn:first-child {
  margin-left: 0em;
}
.thumbnail-btn:last-child {
  margin-right: 0em;
}
.thumbnail{
  height: 300px;
  width: 13em;
  overflow: hidden;
}

</style> -->
