<template>
  <div class="container-fluid d-flex">
    <section class="col-4 bg-danger d-flex justify-content-center">
      <div class="col-12">
        <div class="fs-1 text-center text-light">gifted</div>
        <!-- TODO handle this-->
        <PostGiftForm />
        <!-- <form onsubmit="app.giftsController.sendGift()">
          <div class="form mb-3 px-3">
            <input type="text" name="tag" class="form-control mt-5" id="floatingInput" placeholder="message" />
            <label for="floatingInput" class="text-center">message</label>
          </div>
          <div class="form px-3">
            <input type="text" name="url" class="form-control" id="url-input" placeholder="url" />
            <label for="floatingPassword" class="text-center">url</label>
          </div>
          <div class="text-end border-bottom border-dark p-3">
            <button class="btn btn-primary" type="submit">submit</button>
          </div>
        </form> -->
        <!-- TODO -->
        <!-- <div class="form px-3 mt-5">
          <input type="text" class="form-control" id="giphy-input" placeholder="url"
            onchange="app.giphysController.searchGifs()" />
          <label for="floatingPassword" class="text-center">url</label>
        </div> -->
      </div>
    </section>
    <div class="flex-wrap col-md-8 d-flex">
      <GiftCard v-for="g in gifts" :gift="g" />
    </div>

  </div>

</template>

<script>

import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { giftsService } from '../services/GiftsService.js'
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import GiftCard from '../components/GiftCard.vue';
import PostGiftForm from '../components/PostGiftForm.vue';

export default {
  setup() {
    async function getAllGifts() {
      try {
        await giftsService.getAllGifts();
      }
      catch (error) {
        logger.error("[gettingGifts]", error);
        console.error("[gettingGifts]", error);
        Pop.error(error);
      }
    }
    getAllGifts();
    return {
      gifts: computed(() => AppState.gifts)
    };
  },
  components: { GiftCard, PostGiftForm }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
