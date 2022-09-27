<template>
  <div class="col-md-3">
    <div class="gift-card">
      <div class="card" v-if="gift.opened">
        <img :src="gift.url" alt="" class="img-fluid tag">
        <div class="card-body">
          <h3 class="fs-3">{{gift.tag}}</h3>
        </div>
      </div>
      <div class="card " v-else>
        <img src="https://img2.thejournal.ie/inline/2516831/original/?width=375&version=2516831" alt=""
          class="img-fluid tag">
        <div class="card-body">
          <h3 class="fs-3">{{gift.tag}}</h3>
        </div>
        <div class="card-footer">
          <button class="btn btn-secondary" @click="openGift(gift.id)">OPEN!</button>
        </div>
      </div>
    </div>


  </div>
</template>


<script>
import { Gift } from '../models/Gift.js';
import { giftsService } from '../services/GiftsService.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    gift: { type: Gift, required: true }
  },
  setup(props) {
    return {
      async openGift(id) {
        try {
          await giftsService.openGift(id)
        } catch (error) {
          console.error('[openGift]', error);
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.tag {
  height: 40vh;
  width: 30vh;
}
</style>