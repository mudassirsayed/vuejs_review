<template>
  <div class="home">
    <div class="container">
      <reviews-form />
      <review-stats />
      <review-list />
    </div>
  </div>
</template>

<script>
import ReviewList from '../components/ReviewList.vue'
import ReviewsForm from '../components/ReviewsForm.vue'
import ReviewStats from '../components/ReviewStats.vue'

export default {
  name: 'Home',
  components: { ReviewsForm, ReviewStats, ReviewList }
}
</script>
