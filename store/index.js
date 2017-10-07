import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export const state = () => ({
  sidebar: false,
  houseRooms: [],
  reviews: []
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  setRooms (state, payload) {
    state.houseRooms = payload
  },
  setReviews (state, payload) {
    state.reviews = payload
  }
}

export const actions = {
  loadRooms ({commit, state}, payload) {
    const house = payload
    client.getEntries({
      'content_type': 'room',
      'order': 'fields.number'
    })
      .then((data) => {
        const rooms = []
        data.items.forEach((room) => {
          if (room.fields.houseId === house) {
            rooms.push({
              id: room.fields.id,
              name: room.fields.name,
              features: room.fields.features,
              titleImage: 'https:' + room.fields.titleImage.fields.file.url
            })
          }
        })
        commit('setRooms', rooms)
      })
  },
  loadReviews ({commit, state}) {
    client.getEntries({
      'content_type': 'review',
      'order': 'fields.id'
    })
      .then((data) => {
        const reviews = []
        data.items.forEach((review) => {
          reviews.push(review.fields)
        })
        commit('setReviews', reviews)
      })
  }
}

export const getters = {
  getRooms (state) {
    return state.houseRooms
  },
  getRoom (state) {
    return (roomId) => {
      return state.houseRooms.find((room) => {
        return room.id === roomId
      })
    }
  },
  getReviews (state) {
    return state.reviews
  }
}
