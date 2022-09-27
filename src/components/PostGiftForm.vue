<template>
  <form @submit.prevent="handleSubmit">
    <div class="form mb-3 px-3">
      <input type="text" name="tag" v-model="editable.tag" class="form-control mt-5" id="floatingInput"
        placeholder="message" />
      <label for="floatingInput" class="text-center">Message</label>
    </div>
    <div class="form px-3">
      <input type="text" name="url" v-model="editable.url" class="form-control" id="url-input" placeholder="url" />
      <label for="floatingPassword" class="text-center">url</label>
    </div>
    <div class="text-end border-bottom border-dark p-3">
      <button class="btn btn-primary" type="submit">submit</button>
    </div>
  </form>
</template>


<script>
import { ref } from 'vue';
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {

  setup() {
    const editable = ref({})
    return {
      editable,
      async handleSubmit() {
        try {
          await giftsService.sendNewGift(editable.value)
        } catch (error) {
          logger.error('[giftSubmit]', error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>