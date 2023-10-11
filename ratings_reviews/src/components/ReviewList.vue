<template>
  <p>No Reviews Yet</p>
  <div class="reviewList">
    <review-item v-for="(item, i) in store.reviewContent" :key="i" :item="item" />
  </div>
</template>

<script setup>
import ReviewItem from './ReviewItem.vue'
import { useReviewStore } from '../stores/review'

const store = useReviewStore()
</script>

<style></style>
