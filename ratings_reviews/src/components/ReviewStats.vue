<template>
  <div className="feedback-stats">
    <h4>{{ store.totalReview ? store.totalReview : 'No' }} Reviews</h4>
    <h4>Average Rating: {{ isNaN(store.averageRating) ? 0 : store.averageRating }}</h4>
  </div>
</template>

<script lang="ts" setup>
import { useReviewStore } from '../stores/review'

const store = useReviewStore()
</script>

<style></style>
