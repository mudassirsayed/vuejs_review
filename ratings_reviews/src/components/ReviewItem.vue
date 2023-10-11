<template>
  <div className="card">
    <button class="close">
      <i class="fas fa-times" @click="store.deleteReview(item)"></i>
    </button>
    <button class="edit">
      <i class="fas fa-edit" @click="store.editReview(item)"></i>
    </button>
    <div className="num-display">{{ item.rating }}</div>
    <div className="text-display">{{ item.text }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useReviewStore } from '../stores/review'
import { ReviewItem } from '../types'

const store = useReviewStore()

defineProps<{
  item: ReviewItem
}>()
</script>

<style></style>
