<template>
  <p v-if="!store.reviewContent || store.reviewContent.length === 0">No Reviews Yet</p>
  <div v-else class="reviewList">
    <review-item v-for="(item, i) in store.reviewContent" :key="i" :item="item" />
  </div>
</template>

<script lang="ts" setup>
import ReviewItem from './ReviewItem.vue'
import { useReviewStore } from '../stores/review'

const store = useReviewStore()
</script>

<style></style>
