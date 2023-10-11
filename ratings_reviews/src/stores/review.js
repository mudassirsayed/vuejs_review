import { defineStore } from 'pinia'

export const useReviewStore = defineStore('review', {
  state: () => ({
    reviews: [],
    editedData: {
      editable: false,
      item: null
    }
  }),
  actions: {
    async addReview(review) {
      const response = await fetch('http://localhost:3000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
      })
      const newReview = await response.json()
      console.log(newReview)
      this.reviews = [newReview, ...this.reviews]
    },
    async fetchReviews() {
      try {
        const response = await fetch('http://localhost:3000/reviews?_sort=id&_order=desc')
        const data = await response.json()
        this.reviews = data
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    averageRating(state) {
      let temp =
        state.reviews.reduce((acc, curr) => {
          return acc + curr.rating
        }, 0) / state.reviews.length

      temp = temp.toFixed(1).replace(/[.,]0$/, '')
      return temp
    },
    totalReview() {
      return this.reviews.length
    },
    reviewContent() {
      return this.reviews
    }
  }
})
