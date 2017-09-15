export const state = () => ({
  sidebar: false,
  rooms: [
    { id: 'barlow', name: 'Barlow', house: 'cs' },
    { id: 'battersby', name: 'Battersby', house: 'cs' },
    { id: 'bishop', name: 'Bishop', house: 'cs' },
    { id: 'duckworth', name: 'Duckworth', house: 'cs' },
    { id: 'tanner', name: 'Tanner', house: 'cs' },
    { id: 'tilsley', name: 'Tilsley', house: 'cs' },
    { id: 'alpha', name: 'Alpha', house: 'fs' },
    { id: 'bravo', name: 'Bravo', house: 'fs' },
    { id: 'charlie', name: 'Charlie', house: 'fs' }
  ],
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
    const rooms = state.rooms
    const pRooms = []
    for (let room of rooms) {
      if (room.house === house) {
        pRooms.push(room)
      }
    }
    commit('setRooms', pRooms)
  }
}

export const getters = {
  getAllRooms (state) {
    return state.rooms
  },
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
