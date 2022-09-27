<template>
  <div class="col-md-3">
    <div class="gift-card">
      <div class="card ">
        <img :src="gift.url" alt="" class="img-fluid">
        <div class="card-body">
          <h3 class="fs-3">{{gift.tag}}</h3>
        </div>
        <div class="card-footer">
          <button>OPEN!</button>
        </div>
      </div>
    </div>


  </div>
</template>


<script>
import { Gift } from '../models/Gift.js';

export default {
  props: {
    gift: { type: Gift, required: true }
  },
  setup(props) {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.gifty {
  max-height: 50vh;
}
</style>