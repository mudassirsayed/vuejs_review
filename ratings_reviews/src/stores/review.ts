import { defineStore } from 'pinia'
import type { ReviewItem, NewReview } from '../types'

interface EditedItem {
  editable: boolean
  item: null | ReviewItem
}

export const useReviewStore = defineStore('review', {
  state: () => ({
    reviews: [] as ReviewItem[],
    editedData: {
      editable: false,
      item: null
    } as EditedItem
  }),
  actions: {
    async addReview(review: NewReview) {
      const response = await fetch('http://localhost:3000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
      })
      const newReview = await response.json()
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
    },
    editReview(review: ReviewItem) {
      let editedData = {
        editable: true,
        item: review
      }
      this.editedData = editedData
    },
    async updateReview(review: ReviewItem) {
      const response = await fetch(`http://localhost:3000/reviews/${review.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
      })
      const newReview = await response.json()
      let reviews = this.reviews.map((rev: ReviewItem) =>
        rev.id === review.id ? { ...rev, ...newReview } : rev
      )
      this.reviews = reviews
      this.fetchReviews()
      let editedData = {
        editable: false,
        item: null
      }
      this.editedData = editedData
    },
    async deleteReview(review: ReviewItem) {
      await fetch(`http://localhost:3000/reviews/${review.id}`, {
        method: 'DELETE'
      })
      this.reviews = this.reviews.filter((item) => item.id !== review.id)
      this.fetchReviews()
    }
  },
  getters: {
    averageRating(state) {
      let temp =
        state.reviews.reduce((acc, curr) => {
          return acc + curr.rating
        }, 0) / state.reviews.length

      temp = Number(temp.toFixed(1).replace(/[.,]0$/, ''))
      return temp
    },
    totalReview(): number {
      return this.reviews.length
    },
    reviewContent(): any {
      return this.reviews
    },
    editedContent(): any {
      return this.editedData
    }
  }
})
