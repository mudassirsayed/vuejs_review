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
    }
  }
})
