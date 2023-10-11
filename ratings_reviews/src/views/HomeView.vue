<template>
  <div class="home">
    <div class="container">
      <reviews-form />
      <review-stats />
      <review-list />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ReviewList from '../components/ReviewList.vue'
import ReviewsForm from '../components/ReviewsForm.vue'
import ReviewStats from '../components/ReviewStats.vue'
</script>
