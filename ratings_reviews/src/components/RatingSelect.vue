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

<script>
export default {
  name: 'RatingSelect',
  data() {
    return {
      selected: this.rating
    }
  },
  props: {
    rating: {
      type: Number
    }
  },
  watch: {
    selected(newVal) {
      this.$emit('setRating', newVal)
    },
    rating(newVal) {
      this.selected = newVal
    }
  }
}
</script>

<style></style>
