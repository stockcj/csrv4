import * as contentful from 'contentful'

const client = contentful.createClient({
  space: 'kgtv9xl00xvv',
  accessToken: 'fcd35c914f35cc85c29388c38f4c48593a22da86586fcd1159a8905238da0db3'
})

export const state = () => ({
  sidebar: false,
  houseRooms: []
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  setRooms (state, payload) {
    state.houseRooms = payload
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
              titleImage: 'https:' + room.fields.titleImage.fields.file.url
            })
          }
        })
        commit('setRooms', rooms)
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
  }
}
