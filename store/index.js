import {createClient} from '~/plugins/contentful.js'
import Vuex from 'vuex'

const client = createClient()

const createStore = () => {
  return new Vuex.Store({
    state: {
      sidebar: false,
      rooms: [],
      reviews: []
    },
    mutations: {
      toggleSidebar (state) {
        state.sidebar = !state.sidebar
      },
      setRooms (state, payload) {
        state.rooms = payload
      },
      setRoom (state, payload) {
        state.room = payload
      },
      setReviews (state, payload) {
        state.reviews = payload
      }
    },
    actions: {
      loadRooms ({commit}) {
        client.getEntries({
          'content_type': 'room',
          'order': 'fields.number'
        })
          .then((data) => {
            const rooms = []
            data.items.forEach((room) => {
              const images = []
              if (room.fields.images) {
                for (const img of room.fields.images) {
                  images.push('http:' + img.fields.file.url)
                }
              }
              rooms.push({
                id: room.fields.id,
                name: room.fields.name,
                features: room.fields.features,
                description: room.fields.description,
                cost: room.fields.cost,
                houseId: room.fields.houseId,
                houseName: room.fields.houseName,
                images: images,
                titleImage: 'https:' + room.fields.titleImage.fields.file.url
              })
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
    },
    getters: {
      getRooms (state) {
        return state.rooms
      },
      getHouseRooms (state, houseId) {
        return (houseId) => {
          return state.rooms.filter((room) => {
            return room.houseId === houseId
          })
        }
      },
      getRoom (state, roomId) {
        return (roomId) => {
          return state.rooms.find((room) => {
            return room.id === roomId
          })
        }
      },
      getReviews (state) {
        return state.reviews
      }
    }
  })
}

export default createStore
