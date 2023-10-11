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

<script setup>
import { defineProps } from 'vue'
import { useReviewStore } from '../stores/review'
const store = useReviewStore()
defineProps({
  item: {
    type: Object
  }
})
</script>

<style></style>
