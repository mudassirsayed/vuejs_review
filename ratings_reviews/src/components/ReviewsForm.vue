<template>
  <Card>
    <form @submit.prevent="handleSubmit">
      <h2>How would you rate your service with us?</h2>
      <!-- Rating Component -->
      <rating-select @setRating="setRating" :rating="rating" />
      <div class="input-group">
        <input type="text" placeholder="Write a review" v-model="text" />
        <button type="submit" class="btn btn-primary" :disabled="btnDisabled">Send</button>
      </div>
      <div class="message" v-if="message != ''">The input field is required</div>
    </form>
  </Card>
</template>

<script setup>
import { ref, watch } from 'vue'
import RatingSelect from './RatingSelect.vue'
import Card from './shared/Card.vue'
import { useReviewStore } from '../stores/review'
import { storeToRefs } from 'pinia'

const text = ref('')
const btnDisabled = ref(false)
const message = ref('')
const rating = ref(10)
const store = useReviewStore()
const { editedContent } = storeToRefs(store)

watch(editedContent, (newVal) => {
  if (newVal.editable) {
    text.value = newVal.item.text
    rating.value = newVal.item.rating
  }
})

const handleSubmit = () => {
  const newReview = {
    text: text.value,
    rating: rating.value
  }
  if (!store.editedContent.editable) {
    store.addReview(newReview)
  } else {
    store.updateReview({
      ...newReview,
      id: store.editedContent.item.id
    })
  }
}
const setRating = (val) => {
  rating.value = val
  console.log(val)
}
</script>

<style scoped>
form h2 {
  margin-bottom: 10px;
}
</style>
