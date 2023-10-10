<template>
  <Card>
    <form>
      <h2>How would you rate your service with us?</h2>
      <!-- Rating Component -->
      <rating-select @setRating="setRating" />
      <div class="input-group">
        <input type="text" placeholder="Write a review" v-model="text" />
        <button type="submit" class="btn btn-primary" :disabled="btnDisabled">Send</button>
      </div>
      <div class="message" v-if="message != ''">The input field is required</div>
    </form>
  </Card>
</template>

<script>
import RatingSelect from './RatingSelect.vue'
import Card from './shared/Card.vue'

export default {
  components: { Card, RatingSelect },
  name: 'ReviewsForm',

  data() {
    return {
      text: '',
      btnDisabled: true,
      message: '',
      rating: 10
    }
  },

  methods: {
    setRating(rating) {
      this.rating = rating
    }
  }
}
</script>

<style scoped>
form h2 {
  margin-bottom: 10px;
}
</style>
