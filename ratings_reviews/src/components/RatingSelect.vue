<template>
  <ul class="rating">
    <li v-for="i in 10" :key="`rating-${i}`">
      <input
        type="radio"
        :id="`num${i}`"
        name="rating"
        :value="i"
        :checked="selected === i"
        v-model="selected"
      />
      <label :for="`num${i}`">
        {{ i }}
      </label>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

interface RatingSelectProps {
  rating: number
}
const props = defineProps<RatingSelectProps>()
const emit = defineEmits(['setRating'])
const selected = ref(props.rating)

watch(selected, (newVal) => {
  emit('setRating', newVal)
})
</script>

<style></style>
