<template>
  <div className="card">
    <button class="close">
      <i class="fas fa-times"></i>
    </button>
    <button class="edit">
      <i class="fas fa-edit"></i>
    </button>
    <div className="num-display">{{ item.rating }}</div>
    <div className="text-display">{{ item.text }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  item: {
    type: Object
  }
})
</script>

<style></style>
